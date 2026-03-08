/**
 * One-time script to insert the "GDPR for Small Business" blog post
 * into the Supabase `blog_posts` table.
 *
 * Usage:
 *   node scripts/seed-gdpr-small-business-article.cjs
 *
 * Requires VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY in .env
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
  slug: 'gdpr-for-small-business-plain-english-guide-2026',
  title: 'GDPR for Small Business: A Plain-English Guide (2026)',
  date: '2026-03-09',
  excerpt: 'Think GDPR only affects big corporations? It applies to any business that collects data from EU residents — including yours. Here is a no-jargon, 10-step checklist to get compliant without a lawyer.',
  content: `
      <img src="/images/blog/gdpr-small-business-guide.png" alt="GDPR compliance guide for small businesses — shield icon with padlock, checklist, and EU stars" style="width:100%; border-radius:12px; margin-bottom:2rem;" />

      <p>If you run a small business, freelance practice, or side project that <strong>collects any data from people in the EU</strong> — even just an email address through a contact form — the <strong>General Data Protection Regulation (GDPR)</strong> applies to you. It doesn't matter if you're based in the US, India, or Brazil. If EU residents use your service, GDPR is your responsibility.</p>
      <p>The good news? <strong>Compliance doesn't require a legal team or a five-figure budget.</strong> This guide breaks GDPR down into plain English and gives you a practical 10-step checklist to get compliant — with free tools to do most of the work.</p>

      <h2>Does GDPR Apply to My Small Business?</h2>
      <p>GDPR applies if you do <strong>any</strong> of the following:</p>
      <ul>
        <li>Collect email addresses (newsletter signups, contact forms)</li>
        <li>Use Google Analytics, Facebook Pixel, or any cookies</li>
        <li>Sell products or services to EU customers</li>
        <li>Have employees or contractors located in the EU</li>
        <li>Use cloud services (AWS, Google Cloud) that store EU user data</li>
      </ul>
      <p><strong>Common myth:</strong> "I'm too small." There is <strong>no revenue or employee threshold</strong> that exempts you from GDPR. A one-person blog with a contact form is covered if it reaches EU visitors.</p>

      <h2>GDPR in 2026: What's New</h2>
      <p>GDPR hasn't stood still since 2018. Here are the key 2026 updates that affect small businesses:</p>
      <ul>
        <li><strong>EU AI Act (August 2026):</strong> If you use AI tools (chatbots, recommendation engines, automated decision-making), you now have additional transparency and documentation obligations under the EU AI Act, which layers on top of GDPR.</li>
        <li><strong>ROPA exemption expansion:</strong> The EU Commission proposed raising the Records of Processing Activities (ROPA) exemption from businesses under 250 employees to those under 750 — reducing paperwork for mid-size companies.</li>
        <li><strong>UK complaints process (June 2026):</strong> Under the Data (Use and Access) Act, all UK organizations must have a formal complaints-handling process for data protection issues starting June 19, 2026.</li>
        <li><strong>Stricter cookie enforcement:</strong> EU data protection authorities have issued over €2.5 billion in GDPR fines to date. Cookie consent violations are now a top enforcement priority.</li>
      </ul>

      <h2>The 10-Step GDPR Checklist for Small Businesses</h2>
      <p>Follow these steps in order. Each one builds on the previous.</p>

      <h3>Step 1: Know What Data You Collect</h3>
      <p>Make a simple list of every piece of personal data your business touches. <strong>"Personal data"</strong> under GDPR means anything that can identify a person — even indirectly:</p>
      <ul>
        <li>Names, email addresses, phone numbers</li>
        <li>IP addresses, browser cookies</li>
        <li>Payment and billing information</li>
        <li>Employee records (if you have EU staff)</li>
        <li>Location data, device identifiers</li>
      </ul>
      <p><strong>Action:</strong> Create a simple spreadsheet listing what data you collect, where it's stored, who has access, and why you collect it.</p>

      <h3>Step 2: Identify Your Lawful Basis</h3>
      <p>GDPR requires a <strong>legal reason</strong> for every piece of data you process. The most common bases for small businesses:</p>
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:#1a1a2e; color:#e0e0e0;">
            <th style="padding:10px; border:1px solid #333; text-align:left;">Lawful Basis</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">When to Use</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Consent</strong></td>
            <td style="padding:10px; border:1px solid #333;">User explicitly agrees</td>
            <td style="padding:10px; border:1px solid #333;">Newsletter signup with opt-in checkbox</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Contract</strong></td>
            <td style="padding:10px; border:1px solid #333;">Data needed to fulfill an agreement</td>
            <td style="padding:10px; border:1px solid #333;">Shipping address for an order</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Legitimate Interest</strong></td>
            <td style="padding:10px; border:1px solid #333;">Reasonable business need, low risk to user</td>
            <td style="padding:10px; border:1px solid #333;">Fraud prevention, website security logs</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Legal Obligation</strong></td>
            <td style="padding:10px; border:1px solid #333;">Required by law</td>
            <td style="padding:10px; border:1px solid #333;">Tax records, employee payroll data</td>
          </tr>
        </tbody>
      </table>

      <h3>Step 3: Create a Privacy Policy</h3>
      <p>This is the single most important GDPR document. Your <a href="/privacy-policy"><strong>Privacy Policy</strong></a> must clearly explain:</p>
      <ul>
        <li>What data you collect and why</li>
        <li>Your lawful basis for each type of processing</li>
        <li>Who you share data with (analytics, ads, cloud providers)</li>
        <li>How long you keep data</li>
        <li>User rights (access, deletion, correction, portability)</li>
        <li>Your contact information for privacy inquiries</li>
      </ul>
      <p>Don't copy someone else's policy — it won't match your actual practices. Use our <a href="/"><strong>free Privacy Policy Generator</strong></a> to create one customized to your business in under 5 minutes.</p>

      <h3>Step 4: Set Up Cookie Consent</h3>
      <p>If your website uses <strong>any non-essential cookies</strong> (Google Analytics, Facebook Pixel, ad networks), you must get consent <strong>before</strong> they load. Modern GDPR cookie consent requires:</p>
      <ul>
        <li>An <strong>"Accept All"</strong> and equally prominent <strong>"Reject All"</strong> button</li>
        <li>Granular control (users should choose which cookie categories to allow)</li>
        <li>No pre-checked boxes</li>
        <li>No "by continuing to browse you agree" — this is not valid consent</li>
      </ul>
      <p>Need a Cookie Policy too? Our <a href="/cookie-policy"><strong>free Cookie Policy Generator</strong></a> covers all the technical details regulators expect.</p>

      <h3>Step 5: Handle Data Subject Requests</h3>
      <p>Any EU resident can ask you to:</p>
      <ul>
        <li><strong>Access:</strong> "Show me all the data you have on me."</li>
        <li><strong>Delete:</strong> "Erase all my personal data."</li>
        <li><strong>Correct:</strong> "My email address is wrong — update it."</li>
        <li><strong>Port:</strong> "Give me my data in a downloadable format."</li>
        <li><strong>Object:</strong> "Stop processing my data for marketing."</li>
      </ul>
      <p>You have <strong>one calendar month</strong> to respond. Set up a simple process — even a dedicated email address like <code>privacy@yourdomain.com</code> — and know where all your user data lives so you can fulfill requests quickly.</p>

      <h3>Step 6: Secure Your Data</h3>
      <p>GDPR requires "appropriate technical and organizational measures." For small businesses, this means:</p>
      <ul>
        <li>Use <strong>SSL/HTTPS</strong> on your website (most hosts offer this free)</li>
        <li>Enable <strong>two-factor authentication (2FA)</strong> on all admin accounts</li>
        <li>Use <strong>strong, unique passwords</strong> (a password manager helps)</li>
        <li>Keep software and plugins <strong>updated</strong></li>
        <li>Limit data access to <strong>only people who need it</strong></li>
        <li>Back up data regularly</li>
      </ul>

      <h3>Step 7: Review Third-Party Tools</h3>
      <p>Every SaaS tool that processes your users' data is a "data processor" under GDPR. You need a <a href="/dpa"><strong>Data Processing Agreement (DPA)</strong></a> with each one. Most major services (Google, Stripe, Mailchimp) offer DPAs — you usually just need to accept them in your account settings.</p>
      <p><strong>Check:</strong> Google Analytics, email marketing tools, payment processors, cloud storage, CRM systems, customer support platforms.</p>

      <h3>Step 8: Plan for Data Breaches</h3>
      <p>If personal data is compromised, GDPR requires you to:</p>
      <ul>
        <li>Notify your supervisory authority <strong>within 72 hours</strong></li>
        <li>Notify affected individuals <strong>without undue delay</strong> if there's high risk</li>
        <li>Document the breach, its effects, and remedial actions taken</li>
      </ul>
      <p>Create a simple one-page breach response plan <strong>now</strong>, before you need it. Know who to contact, what to document, and which supervisory authority covers your jurisdiction.</p>

      <h3>Step 9: Add Terms of Service</h3>
      <p>While not strictly a GDPR requirement, a <a href="/terms-of-service"><strong>Terms of Service</strong></a> complements your Privacy Policy by establishing the rules for using your platform. It limits your liability, protects your intellectual property, and sets expectations for user conduct. If you sell products, add a <a href="/return-policy"><strong>Return Policy</strong></a> as well.</p>

      <h3>Step 10: Review and Update Regularly</h3>
      <p>GDPR compliance is not a one-time task. Review your practices whenever you:</p>
      <ul>
        <li>Add a new third-party tool or integration</li>
        <li>Start collecting a new type of data</li>
        <li>Expand into new markets or jurisdictions</li>
        <li>Hire employees (especially in the EU)</li>
        <li>Launch a new product or feature</li>
      </ul>
      <p>Set a calendar reminder to audit your privacy practices at least <strong>every 6 months</strong>.</p>

      <h2>Do I Need a Data Protection Officer (DPO)?</h2>
      <p>Most small businesses do <strong>not</strong> need a DPO. You only need one if your core activities involve:</p>
      <ul>
        <li>Large-scale, systematic monitoring of individuals (e.g., behavioral tracking at scale)</li>
        <li>Large-scale processing of sensitive data (health records, biometric data)</li>
      </ul>
      <p>That said, <strong>designating someone</strong> to oversee privacy compliance — even yourself — is a smart move.</p>

      <h2>What Are the Penalties for Non-Compliance?</h2>
      <p>GDPR fines are structured in two tiers:</p>
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:#1a1a2e; color:#e0e0e0;">
            <th style="padding:10px; border:1px solid #333; text-align:left;">Tier</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">Maximum Fine</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Lower tier</strong></td>
            <td style="padding:10px; border:1px solid #333;">€10M or 2% global revenue</td>
            <td style="padding:10px; border:1px solid #333;">Failure to maintain records, inadequate security</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Upper tier</strong></td>
            <td style="padding:10px; border:1px solid #333;">€20M or 4% global revenue</td>
            <td style="padding:10px; border:1px solid #333;">Processing without consent, ignoring data subject rights</td>
          </tr>
        </tbody>
      </table>
      <p>In practice, enforcement has historically focused on large companies. But in 2026, <strong>regulators are increasingly targeting SMEs</strong> — especially on cookie consent violations and missing privacy policies. Non-compliance also risks losing access to platforms like Google AdSense, which require a privacy policy as a condition of service.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>Does GDPR apply if my business is outside the EU?</h3>
      <p>Yes. GDPR applies to any organization that offers goods or services to EU residents, or monitors their behavior (e.g., through web analytics). Your physical location is irrelevant — what matters is whether you process data of people in the EU.</p>

      <h3>What counts as "personal data" under GDPR?</h3>
      <p>Any information that can directly or indirectly identify a natural person. This includes obvious data like names and emails, but also IP addresses, cookie identifiers, device fingerprints, location data, and even pseudonymized data if it can be re-identified.</p>

      <h3>Is Google Analytics GDPR compliant?</h3>
      <p>Google Analytics 4 (GA4) can be used in a GDPR-compliant way, but it requires configuration: disable IP collection, disable Google Signals if you don't need it, set data retention periods, and — critically — get consent via a cookie banner before GA4 loads. Simply installing GA4 without consent is a violation.</p>

      <h3>What's the easiest way to get GDPR compliant?</h3>
      <p>Start with the three documents regulators check first: a <a href="/"><strong>Privacy Policy</strong></a>, a <a href="/cookie-policy"><strong>Cookie Policy</strong></a>, and proper cookie consent. You can generate all three for free on our site in under 10 minutes. Then work through the 10-step checklist above at your own pace.</p>

      <h3>Can I just copy a Privacy Policy from another website?</h3>
      <p>No. A copied policy is likely inaccurate for your specific data practices, third-party tools, and jurisdictions — making it legally useless. Worse, it might expose you to liability. Always create a policy that reflects your actual data processing activities. Our <a href="/"><strong>free generator</strong></a> makes this easy.</p>

      <h2>Get Compliant Today — For Free</h2>
      <p>You don't need a lawyer or an expensive compliance platform to meet your GDPR obligations. Start with the essentials:</p>
      <ul>
        <li>🔒 <a href="/"><strong>Free Privacy Policy Generator</strong></a> — GDPR, CCPA, and LGPD compliant</li>
        <li>🍪 <a href="/cookie-policy"><strong>Free Cookie Policy Generator</strong></a> — disclose all tracking technologies</li>
        <li>📋 <a href="/terms-of-service"><strong>Free Terms of Service Generator</strong></a> — protect your business</li>
        <li>📄 <a href="/dpa"><strong>Free DPA Generator</strong></a> — for third-party data processing agreements</li>
        <li>✅ <a href="/compliance-checker"><strong>Free Compliance Checker</strong></a> — audit your website's legal pages</li>
      </ul>
      <p><em>Disclaimer: This article is for informational purposes only and does not constitute legal advice. For business-specific guidance, consult a qualified data protection professional.</em></p>
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
