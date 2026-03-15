/**
 * One-time script to insert the "Do You Need a DPA in 2026?" blog post
 * into the Supabase `blog_posts` table.
 *
 * Usage:
 *   node scripts/seed-dpa-2026-article.cjs
 */
const fs = require('fs');
const path = require('path');

// Parse .env file manually (dotenv is not installed)
const envPath = path.resolve(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const article = {
  slug: 'do-you-need-a-dpa-in-2026',
  title: 'Do You Need a Data Processing Agreement (DPA) in 2026?',
  date: '2026-03-16',
  excerpt: 'Understanding if your business is acting as a Data Controller or a Data Processor, and when a Data Processing Agreement (DPA) is legally required by the GDPR.',
  content: `
      <img src="/images/blog/dpa-2026.png" alt="Data Processing Agreement concept with a handshake and data nodes" style="width:100%; border-radius:12px; margin-bottom:2rem;" />

      <p>As privacy regulations tighten globally, standard documents like Privacy Policies are no longer sufficient on their own for B2B businesses and SaaS companies. If you handle data for clients, you need to understand <strong>Data Processing Agreements (DPAs)</strong>.</p>
      
      <p>Under the EU's General Data Protection Regulation (GDPR) and similar laws like the UK GDPR and CCPA, a DPA is a legally mandated document between two businesses sharing personal data. Operating without one in 2026 can expose your business to severe regulatory fines and cause you to lose enterprise deals.</p>
      
      <p>In this guide, we'll explain the difference between Data Controllers and Data Processors, when a DPA is strictly required, and how to get one set up.</p>

      <h2>The GDPR Framework: Controllers vs. Processors</h2>
      
      <p>To understand if you need a DPA, you first need to understand the roles defined by the GDPR:</p>
      
      <ul>
        <li><strong>Data Controller:</strong> The entity that determines the <em>purpose</em> and <em>means</em> of processing personal data. (e.g., An e-commerce store collecting customer emails for a newsletter).</li>
        <li><strong>Data Processor:</strong> The entity that processes personal data <em>on behalf of</em> the Controller. (e.g., The email marketing software, like Mailchimp, that actually sends the newsletter using the store's email list).</li>
      </ul>

      <p>The core rule is: <strong>Whenever a Controller shares personal data with a Processor, a Data Processing Agreement must be signed.</strong></p>

      <h2>Scenarios: Do You Need a DPA?</h2>
      
      <p>Let's look at a few common business models in 2026 to see if a DPA is required.</p>
      
      <h3>1. You run a B2B SaaS platform (You are a Processor)</h3>
      <p>If you run a CRM, an HR tool, or an analytics dashboard where your clients upload <em>their clients'</em> data, you are a Data Processor. <strong>You definitely need a DPA.</strong> You should have a standard DPA available for your enterprise clients to sign before they use your platform.</p>
      
      <h3>2. You are an agency handling client data (You are a Processor)</h3>
      <p>If your marketing agency manages Facebook Ad campaigns using custom audiences (emails) provided by your client, you are processing their data. <strong>You need a DPA</strong> with your client.</p>
      
      <h3>3. You run a B2C E-commerce site (You are a Controller)</h3>
      <p>You collect data directly from the consumer. You don't need consumers to sign a DPA (that's what your Privacy Policy is for). However, <strong>you need DPAs from the third-party tools you use</strong> (like Stripe, Shopify, or AWS). Fortunately, these major platforms usually have a DPA built directly into their standard Terms of Service.</p>
      
      <h3>4. You are a freelance web developer</h3>
      <p>If you frequently log into client databases containing live user data (like fixing bugs in a production database), you act as a Data Processor. Signing a simple DPA with your client protects both of you.</p>

      <h2>What Must a DPA Include?</h2>
      
      <p>According to GDPR Article 28, a valid DPA must mandate that the Processor:</p>
      
      <ul>
        <li>Only processes data based on documented instructions from the Controller.</li>
        <li>Ensures that people processing the data (employees) are bound by confidentiality.</li>
        <li>Takes all necessary technical and organizational measures to ensure data security (encryption, access controls).</li>
        <li>Notifies the Controller without undue delay if a data breach occurs.</li>
        <li>Assists the Controller in fulfilling Data Subject Requests (like the right to delete data).</li>
        <li>Deletes or returns all personal data at the end of the contract.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Are DPAs only for European companies?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">No. If you process data belonging to EU citizens, the GDPR applies to you, regardless of where your company is headquartered. Additionally, states like California (under CCPA/CPRA) have introduced similar requirements for "Service Provider Agreements".</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Who writes the DPA?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Technically, the Data Controller is legally responsible for ensuring a DPA is in place. However, in practice, B2B SaaS companies (the Processors) usually write the DPA and present it to the Controller as a standard addendum to make the sales process smoother.</p>
          </div>
        </div>
      </div>

      <h2>Generate Your DPA Instantly</h2>
      
      <p>Don't let enterprise deals fall through because you are missing critical compliance documents. Create a GDPR-compliant Data Processing Agreement in minutes using our free generator.</p>
      
      <ul>
        <li>🤝 <a href="/dpa-generator"><strong>Free DPA Generator</strong></a></li>
      </ul>
    `
};

async function main() {
  console.log('Inserting DPA blog post into Supabase...');

  const { data, error } = await supabase
    .from('blog_posts')
    .upsert(article, { onConflict: 'slug' })
    .select();

  if (error) {
    console.error('Error inserting article:', error.message);
    process.exit(1);
  }

  console.log('✅ Article inserted successfully:', data?.[0]?.slug || article.slug);
}

main();
