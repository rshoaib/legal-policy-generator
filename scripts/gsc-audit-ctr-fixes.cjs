const SupabaseREST = require('./supabase_rest.cjs');

async function main() {
  const supabase = new SupabaseREST();
  const table = 'blog_posts';

  const updates = [
    {
      slug: 'new-us-state-privacy-laws-2026',
      title: 'New US State & Federal Privacy Laws 2026: All 20+ States, Deadlines & What You Must Do',
      excerpt: 'No federal privacy law yet — but 20+ states now have their own. 8 new laws took effect in 2026 (Kentucky, Indiana, Rhode Island & more). See every deadline, who must comply, and update your policy free.'
    },
    {
      slug: 'wordpress-privacy-policy-legal-compliance-guide',
      title: 'WordPress Privacy Policy Guide (2026): GDPR, CCPA & 5 Hidden Data Traps',
      excerpt: 'Running a WordPress site? Plugins, contact forms, and analytics collect data constantly. Learn the exact 5 clauses you must include in your WP Privacy Policy to avoid GDPR fines.'
    },
    {
      slug: 'ai-privacy-policy-2026-chatgpt-eu-ai-act-compliance',
      title: 'AI Privacy Policy & ChatGPT Rules for 2026 (EU AI Act Compliance)',
      excerpt: 'Using ChatGPT or AI chatbots? You must update your privacy policy. Learn how the new EU AI Act impacts your business and the 3 AI disclosure clauses you need today.'
    },
    {
      slug: 'acceptable-use-policy-guide',
      title: 'Acceptable Use Policy (AUP) Guide: What Is It + Free 2026 Template',
      excerpt: 'What is an Acceptable Use Policy? Discover the 5 essential clauses your AUP needs to stop shadow AI, remote work security threats, and data leaks. Plus, download our free 2026 template.'
    }
  ];

  console.log('Starting GSC Audit CTR Fixes...');

  for (const update of updates) {
    console.log(`Updating ${update.slug}...`);
    try {
      await supabase.update(table, 'slug', update.slug, {
        title: update.title,
        excerpt: update.excerpt,
        updated_at: new Date().toISOString()
      });
    } catch (e) {
      console.error(`Failed to update ${update.slug}:`, e.message);
    }
  }

  console.log('Finished updating Supabase. Run `npm run build` to prerender these changes.');
}

main().catch(console.error);
