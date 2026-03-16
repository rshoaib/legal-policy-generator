/**
 * Post-build script: generates per-route HTML files with unique
 * <title>, <meta description>, <link rel="canonical">, OG/Twitter tags,
 * and static <h1>/<h2> fallback text so Googlebot sees unique content
 * on every URL without requiring client-side JS.
 *
 * Run after `vite build`:  node scripts/prerender-meta.cjs
 */

const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'dist');
const SITE_URL = 'https://legalpolicygen.com';
const SITE_NAME = 'Legal Policy Generator';

// ── Route metadata ──────────────────────────────────────────────────────────

const corePages = [
  {
    route: 'about',
    title: 'About Us',
    description:
      'Learn about Legal Policy Generator — our mission to make legal compliance accessible and free for everyone, from solo developers to small businesses.',
    h1: 'About Us',
    h2: 'Our mission is to make essential legal compliance accessible to everyone.',
  },
  {
    route: 'contact',
    title: 'Contact Us',
    description:
      'Have questions or suggestions about Legal Policy Generator? Get in touch with us via email. We typically respond within 24-48 hours.',
    h1: 'Contact Us',
    h2: 'Have questions, suggestions, or need support? We\'d love to hear from you.',
  },
  {
    route: 'blog',
    title: 'Blog — Helpful Guides & Resources',
    description:
      'Expert guides on privacy policies, terms & conditions, cookie policies, GDPR, CCPA compliance, and more. Free legal resources for website owners.',
    h1: 'Helpful Guides & Resources',
    h2: 'Expert guides on privacy law, GDPR, CCPA compliance, and more.',
  },
  {
    route: 'compliance-checker',
    title: 'Free Policy Compliance Checker — GDPR & CCPA Analysis',
    description:
      'Paste your privacy policy and get an instant compliance analysis. Check for GDPR, CCPA, and general best-practice gaps with actionable suggestions.',
    h1: 'Policy Compliance Checker',
    h2: 'Paste your privacy policy below and get an instant GDPR, CCPA, and best-practice analysis.',
  },
  {
    route: 'bundle',
    title: 'Website Legal Starter Kit — Generate All Policies at Once',
    description:
      'Generate all essential legal policies for your website in one click. Privacy Policy, Terms & Conditions, Cookie Policy, Disclaimer, and more.',
    h1: 'Website Legal Starter Kit',
    h2: 'Generate all essential legal policies for your website in one click.',
  },
  {
    route: 'policy-guide',
    title: 'Policy Guide — Which Legal Policies Does Your Website Need?',
    description:
      'Interactive guide showing which legal documents your business needs. Compare requirements for e-commerce, SaaS, blogs, mobile apps, agencies, and non-profits.',
    h1: 'Which Legal Policies Does Your Website Need?',
    h2: 'Interactive guide — compare requirements by business type.',
  },
  {
    route: 'privacy',
    title: 'Privacy Policy',
    description:
      'Read the privacy policy for Legal Policy Generator. Learn how we handle your data, your rights under GDPR and CCPA, and our data protection practices.',
    h1: 'Privacy Policy',
    h2: 'How we collect, use, and protect your information.',
  },
  {
    route: 'terms',
    title: 'Terms of Service',
    description:
      'Terms of Service for Legal Policy Generator. Understand the rules and guidelines for using our free legal document generation tools.',
    h1: 'Terms of Service',
    h2: 'Rules and guidelines for using Legal Policy Generator.',
  },
  {
    route: 'history',
    title: 'Your Generated Policies',
    description: 'View and manage the legal policies you have generated with Legal Policy Generator.',
    h1: 'Your Generated Policies',
    h2: 'Access your previously generated privacy policies, terms, and more.',
  },
  {
    route: 'cookie-policy-generator',
    title: 'Free Cookie Policy Generator (2026 GDPR Compliant)',
    description: 'Create a customized, GDPR & ePrivacy compliant Cookie Policy for your website in minutes. Free, no signup required.',
    h1: 'Free Cookie Policy Generator',
    h2: 'Generate a customized Cookie Policy for your website or app.',
  },
];

// ── Programmatic SEO pages (same logic as src/data/seoPages.ts) ─────────────

const policies = [
  { type: 'privacy', label: 'Privacy Policy', verb: 'collect, store, and protect user data' },
  { type: 'tos', label: 'Terms of Service', verb: 'define user rights, obligations, and acceptable use' },
  { type: 'eula', label: 'EULA', verb: 'license your software and protect your intellectual property' },
  { type: 'refund', label: 'Refund Policy', verb: 'set clear expectations for returns and refunds' },
  { type: 'cookie', label: 'Cookie Policy', verb: 'disclose cookie usage and comply with ePrivacy/GDPR' },
  { type: 'dmca', label: 'DMCA Policy', verb: 'protect your content and handle copyright takedown requests' },
];

const industries = [
  { id: 'ecommerce', name: 'E-commerce', context: 'online stores and Shopify shops' },
  { id: 'saas', name: 'SaaS', context: 'software-as-a-service platforms and web applications' },
  { id: 'mobile-app', name: 'Mobile App', context: 'iOS and Android applications' },
  { id: 'blog', name: 'Blog & Content Site', context: 'blogs, news sites, and content publishers' },
  { id: 'healthcare', name: 'Healthcare & Telehealth', context: 'medical practices, telehealth platforms, and health apps' },
  { id: 'restaurant', name: 'Restaurant & Food Delivery', context: 'restaurants, cafés, and food delivery services' },
  { id: 'freelancer', name: 'Freelancer & Consultant', context: 'independent professionals and consulting businesses' },
  { id: 'agency', name: 'Agency & Marketing', context: 'digital agencies, marketing firms, and creative studios' },
  { id: 'nonprofit', name: 'Nonprofit & Charity', context: 'nonprofit organizations, NGOs, and charitable foundations' },
  { id: 'education', name: 'Education & Online Courses', context: 'schools, e-learning platforms, and course creators' },
];

const seoPages = [];
for (const policy of policies) {
  for (const ind of industries) {
    const slug = policy.label.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-for-' + ind.id;
    seoPages.push({
      route: slug,
      title: `Free ${policy.label} Generator for ${ind.name} (2026)`,
      description: `Generate a professional ${policy.label} tailored for ${ind.context}. GDPR & CCPA compliant — no signup required.`,
      h1: `Free ${policy.label} Generator for ${ind.name}`,
      h2: `Every ${ind.name.toLowerCase()} business needs a ${policy.label.toLowerCase()} to ${policy.verb}. Generate one in under 3 minutes.`,
    });
  }
}

// ── Blog pages ──────────────────────────────────────────────────────────────

let blogPages = [];
try {
  const fs = require('fs');
  const path = require('path');
  const blogDataPath = path.join(__dirname, '..', 'src', 'lib', 'blogData.ts');
  const content = fs.readFileSync(blogDataPath, 'utf-8');
  
  const parts = content.split('slug:').slice(1);
  for (const part of parts) {
    const slugMatch = /^\s*(['"])([\s\S]*?)(?<!\\)\1/.exec(part);
    const titleMatch = /title:\s*(['"])([\s\S]*?)(?<!\\)\1/.exec(part);
    const excerptMatch = /excerpt:\s*(['"])([\s\S]*?)(?<!\\)\1/.exec(part);
    const dateMatch = /date:\s*(['"])([\s\S]*?)(?<!\\)\1/.exec(part);
    
    if (slugMatch && titleMatch && excerptMatch && dateMatch) {
      // Unescape quotes if any
      const unescape = str => str.replace(/\\(['"])/g, '$1');
      blogPages.push({
        route: `blog/${unescape(slugMatch[2])}`,
        title: unescape(titleMatch[2]),
        description: unescape(excerptMatch[2]),
        h1: unescape(titleMatch[2]),
        h2: `Published on ${unescape(dateMatch[2])}`,
      });
    }
  }
  console.log(`Loaded ${blogPages.length} blog posts for prerendering.`);
} catch (e) {
  console.warn('⚠️ Could not load src/lib/blogData.ts for blog prerendering.');
  console.error(e);
}

// ── Combine all routes ──────────────────────────────────────────────────────

const allRoutes = [...corePages, ...seoPages, ...blogPages];

// ── HTML transformation ─────────────────────────────────────────────────────

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function transformHtml(template, page) {
  let html = template;
  const fullTitle = `${page.title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}/${page.route}`;

  // Replace <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(fullTitle)}</title>`);

  // Replace <meta name="description">
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(page.description)}" />`
  );

  // Replace <link rel="canonical">
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`
  );

  // Replace static fallback content inside <div id="root">
  // We replace everything between <div id="root"> and </div>\n    <script
  const fallbackRegex = /(<div id="root">)[\s\S]*?(<\/div>\s*<script type="module")/;
  const newFallback = `$1
      <h1>${escapeHtml(page.h1)}</h1>
      <h2>${escapeHtml(page.h2)}</h2>
      <p>${escapeHtml(page.description)}</p>
      <p><a href="/">← Back to Legal Policy Generator</a></p>
    $2`;
  html = html.replace(fallbackRegex, newFallback);

  return html;
}

// ── Main ────────────────────────────────────────────────────────────────────

function main() {
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(indexPath, 'utf-8');
  let created = 0;

  for (const page of allRoutes) {
    const dir = path.join(DIST, page.route);
    fs.mkdirSync(dir, { recursive: true });

    const html = transformHtml(template, page);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    created++;
  }

  // Generate dynamic sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  // Add root URL explicitly
  sitemapXml += `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  for (const page of allRoutes) {
    // Determine priority based on route type
    let priority = '0.8';
    let changefreq = 'weekly';
    if (page.route.startsWith('blog/')) {
      priority = '0.6';
      changefreq = 'monthly';
    } else if (page.route.includes('-for-')) {
      priority = '0.7';
      changefreq = 'monthly'; // Programmatic pages
    }

    sitemapXml += `  <url>\n    <loc>${SITE_URL}/${page.route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  }
  
  sitemapXml += `</urlset>`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemapXml, 'utf-8');

  console.log(`✅ Prerender-meta: created ${created} route HTML files and dynamic sitemap.xml in dist/`);
}

main();
