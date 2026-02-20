// Generate sitemap.xml for LegalPolicyGen
const fs = require('fs');

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
  '/blog', '/compliance-checker', '/history', '/bundle', '/policy-guide',
];

const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

existingPages.forEach(p => {
  lines.push(`  <url>
    <loc>https://legalpolicygen.com${p}</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`);
});

policies.forEach(pol => {
  industries.forEach(ind => {
    const slug = pol.label.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-for-' + ind;
    lines.push(`  <url>
    <loc>https://legalpolicygen.com/${slug}</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });
});

lines.push('</urlset>');
fs.writeFileSync('public/sitemap.xml', lines.join('\n') + '\n');
console.log(`Sitemap created: ${existingPages.length + policies.length * industries.length} URLs`);
