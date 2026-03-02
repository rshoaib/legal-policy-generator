/**
 * Legal Page Checker — client-side utility
 *
 * Calls the /api/check-legal-pages Edge function and returns typed results.
 */

export interface PageResult {
    id: string;
    label: string;
    found: boolean;
    foundVia: 'html' | 'path' | null;
    foundPath: string | null;
    generatorPath: string;
}

export interface ScanResult {
    url: string;
    score: number;
    total: number;
    found: number;
    pages: PageResult[];
}

export async function checkLegalPages(url: string): Promise<ScanResult> {
    const res = await fetch('/api/check-legal-pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Scan failed');
    return data as ScanResult;
}
