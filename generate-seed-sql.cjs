// Run with: node generate-seed-sql.cjs
// Generates a SQL file to seed blog_posts table in Supabase

const fs = require('fs');

const content = fs.readFileSync('src/lib/blogData.ts', 'utf8');

// Extract each blog post object using regex
const postRegex = /\{\s*slug:\s*'((?:[^'\\]|\\.)*)'\s*,\s*title:\s*'((?:[^'\\]|\\.)*)'\s*,\s*date:\s*'((?:[^'\\]|\\.)*)'\s*,\s*excerpt:\s*'((?:[^'\\]|\\.)*)'\s*,\s*content:\s*`([\s\S]*?)`\s*\}/g;

let sql = `-- Blog Posts Seed Data
-- Run this in your Supabase SQL Editor to populate the blog_posts table.
-- Make sure the blog_posts table has been created first.

`;

let match;
let count = 0;

while ((match = postRegex.exec(content)) !== null) {
  const slug = match[1].replace(/\\'/g, "'");
  const title = match[2].replace(/\\'/g, "'");
  const date = match[3];
  const excerpt = match[4].replace(/\\'/g, "'");
  const contentHtml = match[5].trim();

  // Escape single quotes for SQL
  const esc = (s) => s.replace(/'/g, "''");

  sql += `INSERT INTO blog_posts (slug, title, excerpt, date, content) VALUES (
  '${esc(slug)}',
  '${esc(title)}',
  '${esc(excerpt)}',
  '${date}',
  '${esc(contentHtml)}'
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  date = EXCLUDED.date,
  content = EXCLUDED.content,
  updated_at = NOW();\n\n`;
  count++;
}

console.log(`Found ${count} blog posts`);

fs.writeFileSync('seed-blog-posts.sql', sql, 'utf8');
console.log('Wrote seed-blog-posts.sql');
