/**
 * One-time script to insert the "How to Write a Privacy Policy" blog post
 * into the Supabase `blog_posts` table.
 *
 * Usage:
 *   node scripts/seed-privacy-policy-article.cjs
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
  slug: 'how-to-write-privacy-policy-gdpr-ccpa-2026',
  title: 'How to Write a Privacy Policy (GDPR + CCPA Compliant 2026)',
  date: '2026-03-05',
  excerpt: 'A step-by-step guide to writing a privacy policy that complies with GDPR, CCPA/CPRA, and the latest 2026 regulations — including new rules on neural data, AI, and automated decision-making.',
  content: `
      <p>Every website that collects any form of user data — even just an IP address through analytics — needs a privacy policy. It's not optional. Laws like the <strong>General Data Protection Regulation (GDPR)</strong> in Europe and the <strong>California Consumer Privacy Act (CCPA/CPRA)</strong> in the US mandate it, and the penalties for non-compliance can be devastating: up to <strong>€20 million</strong> or <strong>4% of global revenue</strong> under GDPR, and <strong>$7,500 per intentional violation</strong> under CCPA.</p>

      <p>But writing a privacy policy doesn't require a law degree or an expensive attorney. This guide walks you through exactly what to include, how to structure it, and what's changed in 2026 — so you can create a compliant policy in minutes using our <a href="/privacy-policy">free Privacy Policy Generator</a>.</p>

      <h3>What Is a Privacy Policy?</h3>
      <p>A privacy policy is a legal document that explains how your website or app collects, uses, stores, and protects personal data from visitors and users. It's required by virtually every major data privacy regulation worldwide, and it's also a prerequisite for services like <strong>Google AdSense</strong>, <strong>Google Analytics</strong>, <strong>Facebook Ads</strong>, and every major app store.</p>

      <h3>Who Needs a Privacy Policy?</h3>
      <p>If your website does <em>any</em> of the following, you need a privacy policy:</p>
      <ul>
        <li>Uses <strong>analytics tools</strong> (Google Analytics, Plausible, etc.)</li>
        <li>Has a <strong>contact form</strong> that collects names or email addresses</li>
        <li>Uses <strong>cookies</strong> — even for basic functionality</li>
        <li>Runs <strong>ads</strong> (AdSense, ad networks)</li>
        <li>Has a <strong>newsletter signup</strong></li>
        <li>Processes <strong>payments</strong></li>
        <li>Allows <strong>user accounts</strong> or logins</li>
      </ul>
      <p>In short: if you have a website, you almost certainly need one.</p>

      <h3>Step-by-Step: What Your Privacy Policy Must Include</h3>

      <h3>1. Your Identity and Contact Information</h3>
      <p>Start with the basics: your business name (or your name if you're a sole proprietor), your website URL, and a way for users to contact you about privacy matters. Under GDPR, if you've appointed a <strong>Data Protection Officer (DPO)</strong>, list their contact details here as well.</p>

      <h3>2. What Data You Collect</h3>
      <p>List every category of personal data you collect. Be specific — vague language weakens your policy. Common categories include:</p>
      <ul>
        <li><strong>Identifiers:</strong> Name, email address, phone number</li>
        <li><strong>Technical data:</strong> IP address, browser type, device information</li>
        <li><strong>Usage data:</strong> Pages visited, time on site, referral source</li>
        <li><strong>Financial data:</strong> Payment card details, billing address</li>
        <li><strong>Cookies and tracking data:</strong> Session cookies, analytics cookies, advertising pixels</li>
      </ul>
      <p>If you collect <strong>sensitive personal information</strong> — such as health data, biometric data, racial/ethnic origin, or <strong>neural data</strong> (new in CCPA 2026) — you must disclose this separately and provide an opt-out mechanism.</p>

      <h3>3. How and Why You Collect Data</h3>
      <p>Explain your methods of collection (forms, cookies, third-party integrations) and the purpose for each type of data. Under GDPR, you must also state your <strong>legal basis</strong> for processing:</p>
      <ul>
        <li><strong>Consent:</strong> The user has given explicit permission</li>
        <li><strong>Contractual necessity:</strong> You need the data to deliver a service</li>
        <li><strong>Legal obligation:</strong> You're required by law (e.g., tax records)</li>
        <li><strong>Legitimate interest:</strong> You have a justifiable business reason</li>
      </ul>

      <h3>4. Who You Share Data With</h3>
      <p>Disclose every category of third party that receives user data: analytics providers, ad networks, payment processors, email marketing tools, cloud hosting, and customer support platforms. Under CCPA, you must specifically state whether you <strong>sell or share</strong> personal information — and if you do, provide a <strong>"Do Not Sell or Share My Personal Information"</strong> link.</p>

      <h3>5. User Rights</h3>
      <p>Both GDPR and CCPA grant specific rights to users. Your privacy policy must explain these rights and how to exercise them:</p>

      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:#1a1a2e; color:#e0e0e0;">
            <th style="padding:10px; border:1px solid #333; text-align:left;">Right</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">GDPR</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">CCPA/CPRA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to know / access</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to delete / erasure</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to correct / rectify</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to data portability</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
            <td style="padding:10px; border:1px solid #333;">✅ (2026: portable format required)</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to opt out of sale/sharing</td>
            <td style="padding:10px; border:1px solid #333;">N/A (consent model)</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to limit sensitive data use</td>
            <td style="padding:10px; border:1px solid #333;">Via consent</td>
            <td style="padding:10px; border:1px solid #333;">✅</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to non-discrimination</td>
            <td style="padding:10px; border:1px solid #333;">Implied</td>
            <td style="padding:10px; border:1px solid #333;">✅ (explicit)</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;">Right to opt out of AI/ADMT</td>
            <td style="padding:10px; border:1px solid #333;">✅ (Article 22)</td>
            <td style="padding:10px; border:1px solid #333;">✅ (new in 2026)</td>
          </tr>
        </tbody>
      </table>

      <h3>6. Cookies and Tracking Technologies</h3>
      <p>Describe the types of cookies your site uses (essential, analytics, marketing), their purpose, and their lifespan. Under the EU's <strong>ePrivacy Directive</strong>, you must obtain <strong>explicit consent</strong> before placing non-essential cookies. Consider linking to a dedicated <a href="/cookie-policy">Cookie Policy</a> for more detail.</p>

      <h3>7. Data Security and Retention</h3>
      <p>Explain the technical and organizational measures you use to protect data — such as encryption, access controls, and secure hosting. Also state how long you retain personal data and what happens when the retention period expires.</p>
      <p><strong>2026 update:</strong> Under CCPA amendments effective January 1, 2026, if you retain data longer than 12 months, consumers can request access to historical data going back to January 1, 2022.</p>

      <h3>8. International Data Transfers</h3>
      <p>If you transfer personal data outside the EU/EEA (for example, using US-based cloud hosting), explain the safeguards in place: <strong>Standard Contractual Clauses (SCCs)</strong>, adequacy decisions, or the <strong>EU-US Data Privacy Framework</strong>.</p>

      <h3>What's New in 2026?</h3>
      <p>Several important changes took effect on <strong>January 1, 2026</strong> under the CCPA/CPRA amendments:</p>
      <ul>
        <li><strong>Neural data</strong> is now classified as sensitive personal information — if you collect brain-wave or neural interface data, it gets the highest level of protection.</li>
        <li><strong>Global Privacy Control (GPC)</strong> signals must be honored as valid opt-out requests, and businesses must provide <strong>visible confirmation</strong> that opt-out requests have been processed.</li>
        <li><strong>Automated Decision-Making Technology (ADMT):</strong> If you use AI or algorithms for significant decisions (hiring, credit, insurance, ads), you must disclose this, explain the logic, and allow consumers to opt out.</li>
        <li><strong>Under-16 data</strong> is now classified as sensitive personal information, requiring explicit disclosure and opt-out mechanisms.</li>
        <li><strong>Dark patterns</strong> — interface designs that manipulate users into consenting — face stricter enforcement and clearer definitions.</li>
      </ul>
      <p>On the EU side, the <strong>AI Act</strong> compliance deadline (August 2, 2026) creates additional obligations for high-risk AI systems, and GDPR enforcement around AI processing and consent manipulation is intensifying.</p>

      <h3>Where to Display Your Privacy Policy</h3>
      <p>Your privacy policy must be <strong>easily accessible</strong> from every page of your website. Best practices include:</p>
      <ul>
        <li><strong>Website footer:</strong> A permanent link visible on every page (this is the standard).</li>
        <li><strong>Signup and checkout forms:</strong> Before users submit personal data.</li>
        <li><strong>Cookie consent banner:</strong> Link to your privacy policy alongside your cookie notice.</li>
        <li><strong>App stores:</strong> Apple and Google require a privacy policy URL in your app listing.</li>
      </ul>

      <h3>Frequently Asked Questions</h3>

      <h3>Do I need a privacy policy for a simple blog?</h3>
      <p>Yes. If your blog uses analytics (like Google Analytics), has a comment section, or uses cookies of any kind, you're collecting personal data and need a privacy policy.</p>

      <h3>What's the difference between a privacy policy and a cookie policy?</h3>
      <p>A privacy policy covers <em>all</em> personal data processing — collection, use, storage, sharing. A <a href="/cookie-policy">cookie policy</a> specifically addresses the cookies and tracking technologies used on your site. Many sites have both.</p>

      <h3>How often should I update my privacy policy?</h3>
      <p>Review it at least <strong>once per year</strong>, and update it whenever you change data collection practices, add new third-party tools, or when regulations change (e.g., the 2026 CCPA amendments).</p>

      <h3>Can I write my own privacy policy without a lawyer?</h3>
      <p>Yes. While consulting a lawyer is recommended for complex businesses, most websites can create a compliant privacy policy using a generator. Our <a href="/privacy-policy">free Privacy Policy Generator</a> covers GDPR, CCPA, and other major regulations.</p>

      <h3>Does a US-based website need to comply with GDPR?</h3>
      <p>If your website is accessible to EU residents and you collect their data, yes. GDPR applies based on <em>where your users are</em>, not where your business is located.</p>

      <h3>Create Your Privacy Policy Now</h3>
      <p>Don't risk fines, account suspensions, or lost user trust. Use our <a href="/privacy-policy">free Privacy Policy Generator</a> to create a professional, GDPR and CCPA-compliant privacy policy in minutes — no signup, no cost, no lawyer needed.</p>
      <p>Need other legal pages too? Check out our <a href="/terms-of-service">Terms of Service Generator</a> and <a href="/cookie-policy">Cookie Policy Generator</a> to get fully compliant.</p>
      <p><em>Disclaimer: This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for your specific situation.</em></p>
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
