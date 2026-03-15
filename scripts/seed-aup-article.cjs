/**
 * One-time script to insert the "Acceptable Use Policy" blog post
 * into the Supabase `blog_posts` table.
 *
 * Usage:
 *   node scripts/seed-aup-article.cjs
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
  slug: 'what-is-an-acceptable-use-policy',
  title: 'What is an Acceptable Use Policy (AUP)? (Free Template for 2026)',
  date: '2026-03-15',
  excerpt: 'What is an Acceptable Use Policy? Learn why your business needs an AUP in 2026 to govern AI, remote work, and cybersecurity, plus get a free template.',
  content: `
      <img src="/images/blog/aup-policy-hero.png" alt="A clean, modern illustration for a blog article about Acceptable Use Policies (AUP) and cybersecurity. Shield and lock icons for privacy." style="width:100%; border-radius:12px; margin-bottom:2rem;" />

      <p>By 2026, the digital landscape has transformed. Remote work is the norm, artificial intelligence is integrated into daily workflows, and cyber threats are more sophisticated than ever. In this environment, an <strong>Acceptable Use Policy (AUP)</strong> is not just recommended—it is a critical line of defense for any business.</p>
      
      <p>Whether you manage employees using corporate laptops, run a public Wi-Fi network, or operate a SaaS platform, you need clear rules. An AUP sets the boundaries of what users can and cannot do on your network or platform.</p>
      
      <p>In this guide, we will explain exactly what an Acceptable Use Policy is, the critical clauses you must include for 2026, and how to create one quickly using our free template generator.</p>

      <h2>What is an Acceptable Use Policy (AUP)?</h2>
      
      <p>An Acceptable Use Policy is a formal document that outlines the rules, guidelines, and restrictions for using an organization's digital assets. These assets include computers, corporate networks, software, internet access, and company data.</p>
      
      <p>By signing or agreeing to an AUP, users legally acknowledge that they understand the rules. If a user violates these rules—by downloading malware, harassing a coworker online, or feeding proprietary data into a public AI tool—the AUP gives the organization grounds for disciplinary action or termination.</p>

      <h2>Why Your Business Needs an AUP in 2026</h2>
      
      <p>A few years ago, an AUP was mostly about preventing employees from surfing the web during work hours. Today, it serves a much more vital purpose:</p>
      
      <ul>
        <li><strong>Cybersecurity Protection:</strong> AUPs establish strict rules for password management and downloading external software, dramatically reducing the risk of ransomware and phishing attacks.</li>
        <li><strong>AI Governance:</strong> With the explosion of AI tools, AUPs now dictate whether and how employees can use generative AI, preventing the accidental leakage of trade secrets.</li>
        <li><strong>Remote Work Enforcement:</strong> For remote teams, an AUP clarifies the secure usage of Bring Your Own Device (BYOD) hardware and VPN connections.</li>
        <li><strong>Legal Compliance:</strong> Having an AUP demonstrates to auditors that your company takes data protection seriously, a requirement under laws like GDPR and CCPA.</li>
      </ul>

      <h2>AUP vs. Terms of Service vs. Privacy Policy</h2>
      
      <p>It is easy to confuse legal documents. Here is a simple comparison of how an AUP fits into your legal framework alongside a <a href="/terms-of-service">Terms of Service</a> and a <a href="/privacy-policy">Privacy Policy</a>:</p>
      
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:#1a1a2e; color:#e0e0e0;">
            <th style="padding:10px; border:1px solid #333; text-align:left;">Document</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">Primary Audience</th>
            <th style="padding:10px; border:1px solid #333; text-align:left;">Core Function</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong>Acceptable Use Policy</strong></td>
            <td style="padding:10px; border:1px solid #333;">Employees, network users, community members</td>
            <td style="padding:10px; border:1px solid #333;">Dictates behavior on networks and devices to prevent abuse.</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong><a href="/terms-of-service">Terms of Service</a></strong></td>
            <td style="padding:10px; border:1px solid #333;">App or software customers</td>
            <td style="padding:10px; border:1px solid #333;">Establishes the contract for using a commercial service.</td>
          </tr>
          <tr>
            <td style="padding:10px; border:1px solid #333;"><strong><a href="/privacy-policy">Privacy Policy</a></strong></td>
            <td style="padding:10px; border:1px solid #333;">All website visitors</td>
            <td style="padding:10px; border:1px solid #333;">Explains how personal data is collected and protected.</td>
          </tr>
        </tbody>
      </table>
      
      <p>For a deeper dive into external-facing policies, read our guide on <a href="/blog/terms-vs-privacy-policy">Terms of Service vs Privacy Policy</a>.</p>

      <h2>Essential Clauses for a Modern AUP (2026 Checklist)</h2>
      
      <p>If your current policy is from 2020, it is outdated. Here is what an ironclad Acceptable Use Policy must include today:</p>
      
      <h3>1. Acceptable and Unacceptable Uses</h3>
      <p>Clearly state what constitutes normal business use and explicitly ban illegal activities, hate speech, viewing illicit content, and unauthorized cryptocurrency mining on company hardware.</p>
      
      <h3>2. Artificial Intelligence (AI) Guidelines</h3>
      <p>Specify which AI tools are approved ("Shadow AI" is a massive risk in 2026). Prohibit users from submitting confidential company data, client information, or source code into public LLMs.</p>
      
      <h3>3. Remote Work and BYOD Protocols</h3>
      <p>Mandate the use of corporate VPNs when connecting to public Wi-Fi. Outline the security requirements (like screen locks and full-disk encryption) for personal devices used for work purposes.</p>
      
      <h3>4. Software Installation and Shadow IT</h3>
      <p>Ban the downloading of unvetted third-party software or browser extensions, which are common vectors for malware. Require IT approval for all new applications.</p>
      
      <h3>5. Enforcement and Consequences</h3>
      <p>An AUP is useless if it lacks teeth. State clearly that violations will result in suspended access, formal warnings, or termination of employment/service.</p>

      <h2>Common Mistakes to Avoid</h2>
      
      <p>Drafting an AUP requires care. Avoid these frequent pitfalls:</p>
      
      <ul>
        <li><strong>Using thick legalese:</strong> If your employees cannot understand the document, they cannot follow it. Keep the language direct and clear.</li>
        <li><strong>Not updating for new tech:</strong> Failing to address AI, quantum-resistant encryption protocols, or remote collaboration tools leaves gaps in your policy.</li>
        <li><strong>Failing to track signatures:</strong> Make sure you have a verifiable record that every user read and agreed to the AUP before granting them access.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Who is responsible for writing the Acceptable Use Policy?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">An AUP is typically written collaboratively by the IT department (for technical security rules), Human Resources (for behavioral rules), and legal counsel to ensure enforceability.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">Does a SaaS platform need an AUP?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Yes. While internal AUPs govern employees, public-facing AUPs outline what customers can and cannot do on a platform (e.g., forbidding spam, scraping, or harassing other users). This is often linked within the Terms of Service.</p>
          </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">How often should an AUP be reviewed?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Given the rapid pace of technological change, you should review and update your Acceptable Use Policy at least once a year, or whenever adopting major new technologies like generative AI.</p>
          </div>
        </div>
      </div>

      <h2>Generate Your Acceptable Use Policy Instantly</h2>
      
      <p>Protect your network, devices, and proprietary data without paying expensive legal fees. Our free generator creates a comprehensive, modern AUP tailored to your organization's specific needs.</p>
      
      <p>Get started now and secure your digital environment in minutes:</p>
      
      <ul>
        <li>📋 <a href="/acceptable-use-policy"><strong>Free Acceptable Use Policy (AUP) Generator</strong></a> — Protect your business networks and devices.</li>
        <li>📝 <a href="/terms-of-service"><strong>Free Terms of Service Generator</strong></a> — Safeguard your commercial platform from abuse.</li>
      </ul>
    `
};

async function main() {
  console.log('Inserting AUP blog post into Supabase...');

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
