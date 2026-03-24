const fs = require('fs');
const path = require('path');

// Parse .env file manually
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
  slug: 'ccpa-vs-gdpr-differences-explained',
  title: 'CCPA vs GDPR Differences Explained (2026 Guide)',
  excerpt: 'Are you confused about global privacy laws? Learn the exact differences between the California Consumer Privacy Act and the European General Data Protection Regulation in plain English.',
  date: '2026-03-25',
  content: `
<img src="/images/blog/ccpa-vs-gdpr-hero.png" alt="CCPA vs GDPR differences — USA and Europe maps with privacy shields" style="width:100%; border-radius:12px; margin-bottom:2rem;" />

<p><em>Disclaimer: This is not legal advice. Consult a lawyer for specific cases regarding your business liability.</em></p>

<p>If you operate a website or mobile app today, you've likely heard the alphabet soup of privacy laws: GDPR, CCPA, CPRA, LGPD. The two heavyweights that affect almost every online business are Europe's <strong>GDPR</strong> and California's <strong>CCPA</strong>.</p>

<p>If you're looking for the fastest way to comply with both, you can generate your Privacy Policy in 60 seconds — free, no signup, GDPR & CCPA compliant using our <a href="/privacy-policy">free privacy policy generator</a>. But if you want to understand the core <strong>CCPA vs GDPR differences explained</strong> in plain English, keep reading.</p>

<h2>1. What Are the GDPR and CCPA?</h2>

<p>The <strong>General Data Protection Regulation (GDPR)</strong> is a comprehensive privacy law enacted by the European Union (EU) that took effect in 2018. It protects the personal data of individuals located within the EU.</p>

<p>The <strong>California Consumer Privacy Act (CCPA)</strong> is a state-level privacy law that went into effect in 2020 (and was expanded by the CPRA in 2023). It gives California residents specific rights regarding their personal information.</p>

<p>Both laws exist to give consumers control over their data, but they take fundamentally different approaches to how that data is collected and managed.</p>

<h2>2. Opt-In vs. Opt-Out: The Core Difference</h2>

<p>If you only remember one difference between these two laws, remember this:</p>

<p><strong>GDPR is "Opt-In" (Privacy by Default).</strong><br/>
Before a business can collect your data or place non-essential tracking cookies on your device in Europe, they must ask for your explicit consent. You have to actively check a box or click "Accept" (Opt-In) before data collection begins. This is why our <a href="/cookie-policy">cookie policy generator</a> is crucial for EU traffic.</p>

<p><strong>CCPA is "Opt-Out" (Collection by Default).</strong><br/>
In California, a business can collect your data by default without asking permission beforehand. However, they must clearly disclose what they are collecting and provide an easy, obvious way for you to say "Do Not Sell or Share My Personal Information" (Opt-Out).</p>

<h2>3. Who Do These Laws Apply To?</h2>

<p>Do these laws apply to your small blog or SaaS startup? The thresholds are very different.</p>

<h3>GDPR Applicability</h3>
<p>The GDPR applies to <strong>anyone</strong> who collects data from individuals located in the EU, regardless of the business's location or size. Even a free hobby blog based in Texas must comply with GDPR if it tracks analytics on French visitors.</p>

<h3>CCPA Applicability</h3>
<p>The CCPA is more forgiving for small businesses. It only applies to "for-profit" businesses doing business in California that meet <strong>at least one</strong> of the following:</p>
<ul>
  <li>Have an annual gross revenue over <strong>$25 million</strong>.</li>
  <li>Buy, sell, or share the personal information of <strong>100,000 or more</strong> California residents or households.</li>
  <li>Derive <strong>50% or more</strong> of annual revenue from selling/sharing consumer personal data.</li>
</ul>

<h2>4. The Definition of "Personal Data"</h2>

<p>While both laws protect personal information, they phrase it differently.</p>

<p><strong>GDPR:</strong> Protects <em>Personal Data</em>. This includes any information relating to an identified or identifiable natural person (names, emails, IP addresses, location data, religious beliefs). It only applies to individuals.</p>

<p><strong>CCPA:</strong> Protects <em>Personal Information</em>. This is defined as information that identifies, relates to, or could reasonably be linked to a particular consumer <strong>or household</strong>. This means if you collect data tied to a specific smart TV or family IP address, the CCPA protects it.</p>

<h2>5. Fines and Penalties (The Scary Part)</h2>

<p>Non-compliance is incredibly expensive under both frameworks.</p>

<p><strong>GDPR:</strong> Regulators can fine companies up to <strong>€20 million or 4% of their global annual revenue</strong> (whichever is higher).</p>

<p><strong>CCPA:</strong> The California Attorney General can enforce fines of <strong>$2,500 per unintentional violation</strong> and <strong>$7,500 per intentional violation</strong>. Importantly, the CCPA also grants a "Private Right of Action," meaning consumers can directly sue a company if their data is leaked in a breach ($100 to $750 per consumer per incident).</p>

<h2>Step-by-Step Guide: How to Comply with Both in 2026</h2>

<p>You don't need a lawyer to get basic compliance for your website. Follow these steps:</p>

<p><strong>Step 1:</strong> Disclose what you collect. Use a transparent, accessible Privacy Policy page linked in your footer.<br/>
<strong>Step 2:</strong> Add a Cookie Consent Banner. For EU users, don't load analytics scripts until they click "Accept".<br/>
<strong>Step 3:</strong> Provide a "Do Not Sell My Info" link. For California users, place this link in your footer.<br/>
<strong>Step 4:</strong> Establish a Data Subject Access Request (DSAR) process so users can easily email you to request data deletion.</p>

<h2>Generate Your Combined Policy Instantly</h2>

<p>Why write this from scratch? LegalPolicyGen combines the strict requirements of the GDPR with the specific disclosure requirements of the CCPA into a single, cohesive document.</p>

<p>We automatically inject the necessary "Do Not Sell My Personal Information" clauses for your US visitors while retaining the strict data-processing legal basis required by the EU.</p>

<p><strong><a href="/privacy-policy">Start Generating Your Free Privacy Policy →</a></strong></p>
`
};

async function main() {
  console.log('Inserting blog post into Supabase...');

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
