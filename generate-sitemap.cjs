// Generate sitemap.xml for LegalPolicyGen
const fs = require('fs');
const path = require('path');

const TODAY = new Date().toISOString().slice(0, 10);

// NOTE: Niche tool pages (privacy-policy-for-ecommerce, eula-for-blog, etc.) are intentionally
// excluded from the sitemap. They remain as live routes for users but are not submitted to Google
// to avoid "Discovered – currently not indexed" bloat and preserve crawl budget.
// This was decided in the March 2026 GSC audit after 86 pages were stuck in that state.

const existingPages = [
  '/', '/privacy', '/terms', '/about', '/contact',
  '/blog', '/compliance-checker', '/history', '/bundle', '/policy-guide',
  '/cookie-policy-generator',
];

// --- Extract blog post slugs from blogData.ts ---
function getBlogSlugs() {
  const blogDataPath = path.join(__dirname, 'src', 'lib', 'blogData.ts');
  const content = fs.readFileSync(blogDataPath, 'utf-8');
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

const blogSlugs = getBlogSlugs();

const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

existingPages.forEach(p => {
  lines.push(`  <url>
    <loc>https://legalpolicygen.com${p}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`);
});

// Blog post URLs
blogSlugs.forEach(slug => {
  lines.push(`  <url>
    <loc>https://legalpolicygen.com/blog/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
});

lines.push('</urlset>');
fs.writeFileSync('public/sitemap.xml', lines.join('\n') + '\n');
const total = existingPages.length + blogSlugs.length;
console.log(`Sitemap created: ${total} URLs (${existingPages.length} core pages + ${blogSlugs.length} blog posts)`);

