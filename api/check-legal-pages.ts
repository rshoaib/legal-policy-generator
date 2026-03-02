/**
 * Vercel Edge Function — Website Legal Page Checker
 *
 * Accepts POST { url } and checks whether the target site
 * has essential legal pages by scanning the homepage HTML for
 * legal-related links and HEAD-requesting common legal page paths.
 */

export const config = { runtime: 'edge' };

/* ── Legal page definitions ──────────────────────────────────────────────── */

interface PageDef {
    id: string;
    label: string;
    paths: string[];
    keywords: RegExp;
    generatorPath: string;
}

const LEGAL_PAGES: PageDef[] = [
    {
        id: 'privacy',
        label: 'Privacy Policy',
        paths: ['/privacy', '/privacy-policy', '/privacy.html', '/privacypolicy'],
        keywords: /privacy\s*policy|data\s*protection|datenschutz/i,
        generatorPath: '/',
    },
    {
        id: 'terms',
        label: 'Terms of Service',
        paths: ['/terms', '/tos', '/terms-of-service', '/terms-and-conditions', '/terms-of-use', '/terms.html'],
        keywords: /terms\s*(of\s*service|of\s*use|&\s*conditions|\s*and\s*conditions)/i,
        generatorPath: '/',
    },
    {
        id: 'cookies',
        label: 'Cookie Policy',
        paths: ['/cookie-policy', '/cookies', '/cookie', '/cookies.html'],
        keywords: /cookie\s*policy|cookie\s*notice/i,
        generatorPath: '/',
    },
    {
        id: 'disclaimer',
        label: 'Disclaimer',
        paths: ['/disclaimer', '/legal-disclaimer', '/disclaimer.html'],
        keywords: /\bdisclaimer\b/i,
        generatorPath: '/',
    },
    {
        id: 'refund',
        label: 'Refund / Return Policy',
        paths: ['/refund-policy', '/refund', '/returns', '/return-policy', '/shipping-returns'],
        keywords: /refund\s*policy|return\s*policy|returns?\s*(and|&)\s*refunds?/i,
        generatorPath: '/',
    },
    {
        id: 'dmca',
        label: 'DMCA / Copyright',
        paths: ['/dmca', '/copyright', '/dmca.html', '/dmca-policy'],
        keywords: /dmca|copyright\s*(notice|policy)|intellectual\s*property/i,
        generatorPath: '/',
    },
    {
        id: 'accessibility',
        label: 'Accessibility Statement',
        paths: ['/accessibility', '/accessibility-statement', '/ada-compliance'],
        keywords: /accessibility\s*statement|ada\s*compliance|wcag/i,
        generatorPath: '/',
    },
    {
        id: 'contact',
        label: 'Contact Page',
        paths: ['/contact', '/contact-us', '/contact.html', '/support'],
        keywords: /\bcontact\s*(us)?\b|\bsupport\b|\bget\s*in\s*touch\b/i,
        generatorPath: '/contact',
    },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function normalizeUrl(raw: string): string {
    let url = raw.trim();
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    // strip trailing slash
    return url.replace(/\/+$/, '');
}

async function fetchWithTimeout(url: string, ms = 6000): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    try {
        return await fetch(url, {
            signal: controller.signal,
            headers: { 'User-Agent': 'LegalPolicyGen-Checker/1.0' },
            redirect: 'follow',
        });
    } finally {
        clearTimeout(timer);
    }
}

async function headOk(url: string): Promise<boolean> {
    try {
        const res = await fetchWithTimeout(url, 5000);
        return res.ok; // 2xx
    } catch {
        return false;
    }
}

/* ── Handler ─────────────────────────────────────────────────────────────── */

export default async function handler(req: Request) {
    // CORS headers
    const cors: Record<string, string> = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { ...cors, 'Content-Type': 'application/json' } });

    let url: string;
    try {
        const body = await req.json();
        url = normalizeUrl(body.url || '');
        new URL(url); // validate
    } catch {
        return new Response(JSON.stringify({ error: 'Invalid URL' }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' } });
    }

    try {
        // 1. Fetch homepage HTML
        const homepageRes = await fetchWithTimeout(url, 8000);
        if (!homepageRes.ok) throw new Error(`Site returned ${homepageRes.status}`);
        const html = await homepageRes.text();

        // 2. Check each legal page
        const results = await Promise.all(
            LEGAL_PAGES.map(async (page) => {
                // a) Check if any link in HTML matches keywords
                const foundInHtml = page.keywords.test(html);

                // b) HEAD-request common paths
                let foundPath: string | null = null;
                if (!foundInHtml) {
                    for (const path of page.paths) {
                        const ok = await headOk(url + path);
                        if (ok) { foundPath = path; break; }
                    }
                }

                const found = foundInHtml || !!foundPath;
                return {
                    id: page.id,
                    label: page.label,
                    found,
                    foundVia: foundInHtml ? 'html' : foundPath ? 'path' : null,
                    foundPath: foundPath ?? (foundInHtml ? '(linked in HTML)' : null),
                    generatorPath: page.generatorPath,
                };
            })
        );

        const foundCount = results.filter(r => r.found).length;
        const score = Math.round((foundCount / results.length) * 100);

        return new Response(
            JSON.stringify({ url, score, total: results.length, found: foundCount, pages: results }),
            { status: 200, headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } }
        );
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Failed to reach the website';
        return new Response(
            JSON.stringify({ error: `Could not scan the website: ${message}` }),
            { status: 502, headers: { ...cors, 'Content-Type': 'application/json' } }
        );
    }
}
