// Generate sitemap.xml for LegalPolicyGen
const fs = require('fs');
const path = require('path');

const TODAY = new Date().toISOString().slice(0, 10);

const policies = [
  { label: 'Privacy Policy' },
  { label: 'Terms of Service' },
  { label: 'EULA' },
  { label: 'Refund Policy' },
  { label: 'Cookie Policy' },
  { label: 'DMCA Policy' },
];

const industries = [
  'ecommerce', 'saas', 'mobile-app', 'blog', 'healthcare',
  'restaurant', 'freelancer', 'agency', 'nonprofit', 'education',
];

const existingPages = [
  '/', '/privacy', '/terms', '/about', '/contact',
  '/blog', '/compliance-checker', '/legal-page-checker', '/history', '/bundle', '/policy-guide',
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

policies.forEach(pol => {
  industries.forEach(ind => {
    const slug = pol.label.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-for-' + ind;
    lines.push(`  <url>
    <loc>https://legalpolicygen.com/${slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });
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
const total = existingPages.length + policies.length * industries.length + blogSlugs.length;
console.log(`Sitemap created: ${total} URLs (${existingPages.length} pages + ${policies.length * industries.length} industry + ${blogSlugs.length} blog posts)`);
