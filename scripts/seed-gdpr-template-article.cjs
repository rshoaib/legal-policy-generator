/**
 * One-time script to insert the "GDPR Privacy Policy Template" blog post
 * into the Supabase `blog_posts` table.
 *
 * Usage:
 *   node scripts/seed-gdpr-template-article.cjs
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
  slug: 'gdpr-privacy-policy-template-free-2026',
  title: 'Free GDPR Privacy Policy Template (Copy, Customize & Comply in 2026)',
  date: '2026-03-18',
  excerpt: 'Download or generate a free GDPR-compliant privacy policy template for your website or app. Covers all Article 13/14 requirements, data subject rights, and 2026 enforcement updates.',
  content: `
      <img src="/images/blog/gdpr-privacy-policy-template-hero.png" alt="GDPR privacy policy template illustration with EU shield and document checklist" style="width:100%; border-radius:12px; margin-bottom:2rem;" />

      <p>The General Data Protection Regulation is the world's strictest privacy law — and enforcement is accelerating in 2026. If your website collects <strong>any personal data</strong> from EU or EEA residents (including IP addresses, emails, or cookies), you are legally required to publish a GDPR-compliant privacy policy. Failing to do so can result in fines of up to <strong>€20 million or 4% of your annual global revenue</strong>, whichever is higher.</p>

      <p>Below you'll find everything you need: a clear breakdown of what the GDPR requires, a ready-to-use template structure you can customize, and — if you prefer the fastest route — a link to our <a href="/privacy-policy"><strong>free Privacy Policy Generator</strong></a> that builds a fully compliant document in under five minutes.</p>

      <h2>What the GDPR Requires in a Privacy Policy</h2>

      <p>Articles 13 and 14 of the GDPR list the specific information you must disclose to data subjects. A compliant privacy policy is not optional legal fluff — it is a <strong>transparency obligation</strong>. Here is what you must include:</p>

      <h3>1. Identity and Contact Details of the Data Controller</h3>
      <p>State your company name, registered address, and a direct email address for privacy inquiries. If you have appointed a <strong>Data Protection Officer (DPO)</strong>, include their contact details as well.</p>

      <h3>2. Types of Personal Data Collected</h3>
      <p>Be specific. List every category of data you process: names, email addresses, phone numbers, IP addresses, device identifiers, payment details, location data, and any other information you gather through forms, cookies, or third-party integrations.</p>

      <h3>3. Purpose and Legal Basis for Processing</h3>
      <p>For each type of data, state <strong>why</strong> you collect it and under which <a href="/blog/gdpr-for-small-business-plain-english-guide-2026">GDPR legal basis</a> you rely: consent, contractual necessity, legitimate interest, legal obligation, vital interests, or public task. Most websites rely on consent (for marketing cookies) and legitimate interest (for analytics).</p>

      <h3>4. Data Recipients and Third-Party Sharing</h3>
      <p>Disclose every third party that receives user data. This includes cloud hosting providers, analytics tools (Google Analytics), advertising networks, payment processors (Stripe, PayPal), and email marketing platforms. Name the categories of recipients and, where practical, the specific companies.</p>

      <h3>5. International Data Transfers</h3>
      <p>If personal data leaves the EEA (for example, to servers in the United States), you must explain the <strong>transfer mechanism</strong> you use to ensure adequate protection. Common mechanisms include Standard Contractual Clauses (SCCs), the EU–US Data Privacy Framework, or Binding Corporate Rules. For a deeper dive, read our guide on <a href="/blog/international-data-transfer-gdpr-guide">international data transfers under GDPR</a>.</p>

      <h3>6. Data Retention Periods</h3>
      <p>State how long you keep each category of personal data. If you cannot give a precise period, explain the criteria you use to determine it (for example, "for as long as the account is active, plus 30 days").</p>

      <h3>7. Data Subject Rights</h3>
      <p>The GDPR grants individuals the following rights, and your policy must mention every one of them:</p>
      <ul>
        <li><strong>Right of access</strong> — request a copy of their data</li>
        <li><strong>Right to rectification</strong> — correct inaccurate data</li>
        <li><strong>Right to erasure ("right to be forgotten")</strong> — delete their data</li>
        <li><strong>Right to restrict processing</strong> — limit how data is used</li>
        <li><strong>Right to data portability</strong> — receive data in a machine-readable format</li>
        <li><strong>Right to object</strong> — opt out of processing based on legitimate interest</li>
        <li><strong>Right not to be subject to automated decision-making</strong> — including profiling</li>
      </ul>
      <p>Include clear instructions on how users can exercise these rights — typically by emailing your privacy contact.</p>

      <h3>8. Cookie and Tracking Technology Disclosure</h3>
      <p>If your site uses cookies (and almost every site does), you must explain which cookies you set, their purpose, and how users can manage them. Many businesses maintain a separate <a href="/cookie-policy">Cookie Policy</a> and link to it from the privacy policy. Read our guide: <a href="/blog/why-you-need-cookie-policy">Why You Need a Cookie Policy</a>.</p>

      <h3>9. Right to Lodge a Complaint</h3>
      <p>Inform users of their right to file a complaint with their local <strong>supervisory authority</strong> (for example, the ICO in the UK, the CNIL in France, or the DPA in Ireland).</p>

      <h2>GDPR Privacy Policy Template Checklist</h2>

      <p>Use this checklist when reviewing your privacy policy to ensure every required element is present:</p>

      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:var(--bg-secondary, #1a1a2e); color:var(--text-primary, #e0e0e0);">
            <th style="padding:10px; border:1px solid var(--border-color, #333); text-align:left;">Requirement</th>
            <th style="padding:10px; border:1px solid var(--border-color, #333); text-align:left;">GDPR Article</th>
            <th style="padding:10px; border:1px solid var(--border-color, #333); text-align:left;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Data controller identity & contact</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(1)(a)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">DPO contact details (if applicable)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(1)(b)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Purposes of processing</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(1)(c)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Legal basis for each purpose</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(1)(c)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Data recipients / third parties</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(1)(e)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">International transfer safeguards</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(1)(f)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Data retention periods</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(2)(a)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">All data subject rights listed</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(2)(b–f)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Right to withdraw consent</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(2)(c)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Right to complain to supervisory authority</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Art. 13(2)(d)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Cookie/tracking disclosure</td><td style="padding:10px; border:1px solid var(--border-color, #333);">ePrivacy + Art. 13</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Last updated date</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Best practice</td><td style="padding:10px; border:1px solid var(--border-color, #333);">☐</td></tr>
        </tbody>
      </table>

      <h2>What's New in 2026 GDPR Enforcement?</h2>

      <p>Regulators across Europe are cracking down harder than ever. Here are the key developments website owners must be aware of:</p>

      <ul>
        <li><strong>Record fines in 2025–2026:</strong> The Irish DPC, French CNIL, and Italian Garante have collectively issued over €3 billion in fines since 2018, with the pace accelerating sharply.</li>
        <li><strong>AI and automated profiling:</strong> The EU AI Act (effective August 2026 for high-risk systems) intersects with GDPR. If your site uses AI-powered personalization, recommendation engines, or chatbots that process personal data, your privacy policy must now disclose this.</li>
        <li><strong>Cookie enforcement wave:</strong> National regulators, particularly in France, Germany, and Spain, are actively auditing cookie consent banners and issuing fines for non-compliant implementations.</li>
        <li><strong>Children's data:</strong> Heightened scrutiny on websites and apps that may collect data from minors. If your audience includes children, review our <a href="/blog/coppa-childrens-privacy-compliance">COPPA and children's privacy guide</a>.</li>
      </ul>

      <h2>Free Generators vs. Paid Templates: Which Should You Use?</h2>

      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:var(--bg-secondary, #1a1a2e); color:var(--text-primary, #e0e0e0);">
            <th style="padding:10px; border:1px solid var(--border-color, #333); text-align:left;">Feature</th>
            <th style="padding:10px; border:1px solid var(--border-color, #333); text-align:left;">LegalPolicyGen (Free)</th>
            <th style="padding:10px; border:1px solid var(--border-color, #333); text-align:left;">Paid Services ($50–$300/yr)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Price</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Free forever</td><td style="padding:10px; border:1px solid var(--border-color, #333);">$50 – $300 per year</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">GDPR Article 13/14 coverage</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ Full</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ Full</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Customizable fields</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ Yes</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ Yes</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Download as HTML / PDF / Word</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ All three</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Varies (some lock PDF behind paywall)</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">No account / signup required</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ No signup</td><td style="padding:10px; border:1px solid var(--border-color, #333);">❌ Account required</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Multi-language support</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ 6 languages</td><td style="padding:10px; border:1px solid var(--border-color, #333);">Varies</td></tr>
          <tr><td style="padding:10px; border:1px solid var(--border-color, #333);">Additional policies (ToS, Cookie, DMCA…)</td><td style="padding:10px; border:1px solid var(--border-color, #333);">✅ 22+ generators</td><td style="padding:10px; border:1px solid var(--border-color, #333);">1–5 documents</td></tr>
        </tbody>
      </table>

      <p>For most small businesses, startups, bloggers, and app developers, a free generator like ours covers every GDPR requirement without the recurring cost. If you handle highly sensitive data (health, children, financial), we recommend supplementing the generated policy with a quick review by a qualified lawyer.</p>

      <h2>Frequently Asked Questions</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Does the GDPR apply to websites outside the EU?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Yes. The GDPR applies to any organization — regardless of location — that offers goods or services to, or monitors the behavior of, individuals in the EU or EEA. If your website has EU visitors (and virtually every public website does), you need a GDPR-compliant privacy policy.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">How often should I update my GDPR privacy policy?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Review your privacy policy at least once a year and update it whenever you change data collection practices, add new third-party tools, expand to new markets, or when new regulations take effect. Always display a "last updated" date prominently.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Can I just copy someone else's privacy policy?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">No. Every business collects different data, uses different third-party tools, and operates under different legal bases. A copied privacy policy is almost certainly inaccurate for your situation and provides no legal protection. Use a generator that customizes the document to your actual practices.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">What happens if I don't have a GDPR privacy policy?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">You risk fines of up to €20 million or 4% of global annual revenue from EU data protection authorities. Beyond fines, platforms like Google AdSense, Apple App Store, and Stripe require a published privacy policy — operating without one can get your accounts suspended.</p>
          </div>
        </div>
      </div>

      <h2>Generate Your GDPR Privacy Policy for Free</h2>

      <p>Skip the templates and lawyers — our generator builds a fully customized, GDPR-compliant privacy policy in under five minutes. Just answer a few simple questions about your business, and download the result in HTML, PDF, or Word format. No signup required.</p>

      <ul>
        <li>🔒 <a href="/privacy-policy"><strong>Free GDPR Privacy Policy Generator</strong></a> — Create yours in minutes</li>
        <li>🍪 <a href="/cookie-policy"><strong>Free Cookie Policy Generator</strong></a> — Required alongside your privacy policy</li>
        <li>📋 <a href="/terms-of-service"><strong>Free Terms of Service Generator</strong></a> — Protect your business</li>
        <li>🔍 <a href="/legal-page-checker"><strong>Legal Page Checker</strong></a> — Scan your site for missing policies</li>
      </ul>

      <p><em>Disclaimer: This article is for informational purposes only and does not constitute legal advice. For specific legal questions regarding GDPR compliance, consult a qualified data protection lawyer.</em></p>
    `
};

async function main() {
  console.log('Inserting GDPR Privacy Policy Template article into Supabase...');

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
