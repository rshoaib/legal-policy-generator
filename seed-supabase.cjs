// Seed blog posts into Supabase using the REST API
// Run with: node seed-supabase.cjs

const https = require('https');
const fs = require('fs');

const SUPABASE_URL = 'https://gkywwttudvlccmepjsld.supabase.co';
// Using service_role key to bypass RLS for seeding (never expose this in frontend code)
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdreXd3dHR1ZHZsY2NtZXBqc2xkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDk4MjE3MCwiZXhwIjoyMDg2NTU4MTcwfQ.6DXMNeYcHLdt3BO1jYfFPDOz3DQqtsJN0552MR8ik0Y';

// Read and parse the blogData.ts to get posts
const content = fs.readFileSync('src/lib/blogData.ts', 'utf8');
const postRegex = /\{\s*slug:\s*'((?:[^'\\]|\\.)*)'\s*,\s*title:\s*'((?:[^'\\]|\\.)*)'\s*,\s*date:\s*'((?:[^'\\]|\\.)*)'\s*,\s*excerpt:\s*'((?:[^'\\]|\\.)*)'\s*,\s*content:\s*`([\s\S]*?)`\s*\}/g;

const posts = [];
let match;
while ((match = postRegex.exec(content)) !== null) {
  posts.push({
    slug: match[1].replace(/\\'/g, "'"),
    title: match[2].replace(/\\'/g, "'"),
    date: match[3],
    excerpt: match[4].replace(/\\'/g, "'"),
    content: match[5].trim()
  });
}

console.log(`Found ${posts.length} blog posts to seed`);

function makeRequest(post) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(post);
    const url = new URL(`${SUPABASE_URL}/rest/v1/blog_posts?on_conflict=slug`);
    
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'resolution=merge-duplicates',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ status: res.statusCode, slug: post.slug });
        } else {
          reject(new Error(`Failed for "${post.slug}": ${res.statusCode} ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function seed() {
  let success = 0;
  let failed = 0;
  
  for (const post of posts) {
    try {
      await makeRequest(post);
      success++;
      console.log(`  ✓ ${post.slug}`);
    } catch (err) {
      failed++;
      console.error(`  ✗ ${err.message}`);
    }
  }
  
  console.log(`\nDone! ${success} inserted, ${failed} failed.`);
}

seed();
