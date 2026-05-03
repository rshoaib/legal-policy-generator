---
slug: 'tdpsa-texas-data-privacy-compliance-guide-2026'
title: 'Texas Data Privacy Act (TDPSA) Compliance Guide for 2026'
date: '2026-04-19'
excerpt: 'TDPSA compliance guide for 2026: who must comply, consumer rights, $7,500 penalties, and the steps Texas businesses need to take now to stay compliant.'
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" role="img" aria-label="Texas Data Privacy Act compliance banner" style="width:100%;height:auto;border-radius:12px;margin-bottom:24px;display:block;">
  <defs>
    <linearGradient id="bg-tdpsa" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="shield-tdpsa" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0c4a6e"/>
      <stop offset="100%" stop-color="#082f49"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="360" fill="url(#bg-tdpsa)"/>
  <g opacity="0.18" fill="#0c4a6e">
    <circle cx="160" cy="80" r="48"/>
    <circle cx="1040" cy="60" r="36"/>
    <circle cx="1100" cy="290" r="60"/>
    <circle cx="90" cy="300" r="42"/>
    <circle cx="280" cy="320" r="22"/>
  </g>
  <g transform="translate(597 180) rotate(-6)">
    <path d="M -110 -120 L 110 -120 L 110 30 Q 110 110 0 160 Q -110 110 -110 30 Z" fill="url(#shield-tdpsa)" stroke="#082f49" stroke-width="3"/>
    <polygon points="0,-78 19,-22 78,-22 30,12 49,68 0,34 -49,68 -30,12 -78,-22 -19,-22" fill="#fef3c7" stroke="#0c4a6e" stroke-width="2"/>
    <text x="0" y="125" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#fef3c7" letter-spacing="6">TDPSA</text>
  </g>
  <g stroke="#0c4a6e" stroke-width="2" stroke-linecap="round" opacity="0.55">
    <line x1="380" y1="180" x2="450" y2="180"/>
    <line x1="380" y1="200" x2="430" y2="200"/>
    <line x1="750" y1="180" x2="820" y2="180"/>
    <line x1="770" y1="200" x2="820" y2="200"/>
  </g>
</svg>

<p>If your business touches Texas residents — even casually through a website signup form or a Shopify checkout — you are now squarely inside one of the most aggressive consumer privacy regimes in the United States. The Texas Data Privacy and Security Act (TDPSA) took effect on July 1, 2024, and as of 2026 the state's Attorney General has made it clear that enforcement is no longer theoretical. Penalties of up to $7,500 per violation, narrow exemptions, and a tight 30-day cure window mean you cannot afford to treat the TDPSA as a "California problem in a different state." It is its own beast, with its own thresholds, its own definitions, and its own quirks.</p>

<p>This guide walks through who must comply with the TDPSA in 2026, what consumer rights it guarantees, what your privacy policy must say to satisfy the statute, and how to operationalize compliance without hiring a five-person privacy team. It is written for SaaS founders, e-commerce operators, indie developers, and marketing leaders who need a practical roadmap rather than a 60-page legal memo.</p>

<h2>What the TDPSA Is and Why 2026 Matters</h2>

<p>The TDPSA is Texas's comprehensive consumer privacy statute, modeled loosely on the Virginia Consumer Data Protection Act but with several Texas-specific twists. It governs how businesses collect, use, share, and sell the personal data of Texas residents. Unlike sectoral laws such as HIPAA or COPPA, the TDPSA cuts across industries — any company that processes the personal data of Texans falls within its scope unless a specific exemption applies.</p>

<p>The Texas Legislature meets only every two years, which means the next regular session is in 2027. Through 2026, the rulebook stays largely fixed, but enforcement is accelerating. The Texas Attorney General's office publicly filed its first TDPSA enforcement action in early 2025 and has signaled that data brokers, ad-tech firms, and consumer apps that handle sensitive categories of data are priority targets.</p>

<h3>Why Out-of-State Businesses Should Pay Attention</h3>

<p>The TDPSA explicitly applies to entities that conduct business in Texas <em>or</em> produce products or services consumed by Texas residents. There is no requirement that you have a Texas office, employees, or even a physical presence in the state. If a Texas resident can buy your software, sign up for your newsletter, or browse your storefront, you are likely inside the statute's reach.</p>

<h2>Who Has to Comply: The Small Business Exception in Plain English</h2>

<p>Unlike California's CCPA or Virginia's VCDPA, the TDPSA does not condition coverage on revenue or data-volume thresholds. Instead, it offers a single, narrow off-ramp: the small business exception. If your company qualifies as a "small business" under the definition published by the U.S. Small Business Administration (SBA), most of the TDPSA does not apply to you.</p>

<p>The SBA's small business size standards vary by industry and are based on either annual revenue or employee headcount. A software publisher might qualify with fewer employees than a manufacturer would, and the dollar thresholds change periodically. You should look up your specific NAICS code on the <a href="https://www.sba.gov/document/support-table-size-standards" target="_blank" rel="noopener noreferrer">SBA Size Standards table</a> rather than guessing.</p>

<p>There is one critical catch. Even if you qualify as a small business, the TDPSA still requires you to obtain a consumer's consent before selling their sensitive personal data. Many founders read "we are exempt" and stop there — which is a mistake if your business model touches biometric identifiers, precise geolocation, health information, or data about children.</p>

<h3>Categories That Trigger Coverage Regardless of Size</h3>

<ul>
<li>Selling sensitive personal data of any kind</li>
<li>Processing data about a known child (which also triggers COPPA)</li>
<li>Acting as a controller or processor for entities that themselves are not exempt</li>
</ul>

<h2>Sensitive Data Under the TDPSA</h2>

<p>The TDPSA's definition of sensitive data is broader than most people expect. Marketers who think of "sensitive" as "credit card numbers and health records" routinely miss two categories that are common in modern stacks: precise geolocation and biometric identifiers used in customer authentication.</p>

<p>The statute defines sensitive data to include personal data revealing racial or ethnic origin, religious beliefs, mental or physical health diagnosis, sexuality, or citizenship or immigration status; the processing of genetic or biometric data for the purpose of uniquely identifying an individual; the personal data collected from a known child; and precise geolocation data, which the statute defines as information identifying a location within a radius of 1,750 feet.</p>

<p>If your product uses fingerprint or face-based login, collects GPS coordinates beyond city-level precision, or asks users for any of the demographic categories above, you are processing sensitive data and you need consent before doing so. This is a higher standard than the "opt-out" model that governs ordinary personal data under the TDPSA.</p>

<h2>Consumer Rights You Must Honor</h2>

<p>Texas consumers have six core rights under the TDPSA. Your privacy policy must describe each one clearly, and your operations must include a workable mechanism for receiving and responding to each request.</p>

<table style="width:100%; border-collapse:collapse; margin: 16px 0;">
<thead>
<tr style="background:#eef2ff;"><th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">Right</th><th style="border:1px solid #cbd5e1; padding:8px; text-align:left;">What It Means in Practice</th></tr>
</thead>
<tbody>
<tr><td style="border:1px solid #cbd5e1; padding:8px;">Confirm and access</td><td style="border:1px solid #cbd5e1; padding:8px;">Tell consumers whether you process their data and give them a copy.</td></tr>
<tr><td style="border:1px solid #cbd5e1; padding:8px;">Correct</td><td style="border:1px solid #cbd5e1; padding:8px;">Fix inaccuracies in personal data the consumer has provided.</td></tr>
<tr><td style="border:1px solid #cbd5e1; padding:8px;">Delete</td><td style="border:1px solid #cbd5e1; padding:8px;">Erase personal data on request, subject to limited exceptions.</td></tr>
<tr><td style="border:1px solid #cbd5e1; padding:8px;">Portability</td><td style="border:1px solid #cbd5e1; padding:8px;">Provide data in a portable, readily usable format where feasible.</td></tr>
<tr><td style="border:1px solid #cbd5e1; padding:8px;">Opt out of sale</td><td style="border:1px solid #cbd5e1; padding:8px;">Stop selling personal data, including many ad-tech transfers.</td></tr>
<tr><td style="border:1px solid #cbd5e1; padding:8px;">Opt out of profiling and targeted advertising</td><td style="border:1px solid #cbd5e1; padding:8px;">Suppress automated decisions and behavioral ad targeting.</td></tr>
</tbody>
</table>

<p>You have 45 days to respond to a verifiable consumer request, with a one-time 45-day extension if reasonably necessary. You must also offer an internal appeal process for any request you deny. If you have already built a workflow for <a href="/blog/how-to-respond-to-dsar-gdpr-ccpa-2026">DSARs under GDPR and CCPA</a>, the TDPSA workflow is similar but not identical — the timelines and verification standards differ slightly, so do not assume one process covers all three.</p>

<h2>What Your Privacy Policy Must Say</h2>

<p>The TDPSA imposes specific transparency requirements that go beyond a generic "we collect data" statement. Your privacy policy must describe the categories of personal data you process, the purposes of processing, the categories you share with third parties, and the categories of those third parties. It must also explain consumer rights and how to exercise them, and disclose whether you sell personal data or use it for targeted advertising.</p>

<p>Two specific Texas-only disclosures trip up out-of-state businesses. First, if you sell sensitive personal data, your privacy policy must contain the conspicuous statement: "NOTICE: We may sell your sensitive personal data." Second, if you sell biometric or genetic data, the analogous notice for that category must also appear. The statute requires this language verbatim.</p>

<p>If your existing privacy notice was drafted around CCPA, it will not satisfy these Texas-specific requirements out of the box. You can use a <a href="/privacy-policy-generator">privacy policy generator</a> that flags TDPSA disclosures explicitly, then layer in the conspicuous notices manually if your business model triggers them.</p>

<h3>Universal Opt-Out Mechanisms</h3>

<p>Beginning January 1, 2025, the TDPSA requires controllers that engage in the sale of personal data or targeted advertising to recognize universal opt-out mechanisms such as the Global Privacy Control browser signal. If your site uses behavioral ad pixels, your <a href="/cookie-banner-generator">cookie consent banner</a> and tag manager need to honor GPC at the network and analytics level, not just at the cookie level.</p>

<h2>Data Processing Agreements with Vendors</h2>

<p>The TDPSA, like its sister state laws, requires controllers and processors to enter into a written contract before sharing personal data. The contract must specify the processing instructions, the nature and purpose of processing, the type of data, the duration, and the rights and obligations of both parties. It must also require the processor to implement appropriate security, assist with consumer rights requests, and delete or return data at the end of the engagement.</p>

<p>If you already have <a href="/blog/what-is-data-processing-agreement-dpa-guide">DPAs from your GDPR program</a>, those generally cover the TDPSA's contractual requirements with minor amendments. You can generate a Texas-compatible DPA quickly with the <a href="/dpa-generator">DPA generator</a> and have your processors sign it through your standard procurement workflow.</p>

<h2>Penalties, the Cure Period, and the AG's Enforcement Approach</h2>

<p>The Texas Attorney General has exclusive authority to enforce the TDPSA. There is no private right of action, which means consumers cannot sue you directly for a TDPSA violation. That sounds like good news until you read the penalty schedule: each violation can carry a civil penalty of up to $7,500, and the AG can also obtain injunctive relief, attorney's fees, and investigative costs.</p>

<p>Before filing an enforcement action, the AG must give you written notice and a 30-day cure period. If you cure the violation and provide a written statement to that effect, no enforcement action follows. If the AG concludes you have not cured, or that you breached the written statement, the cure-period grace evaporates and you are exposed to the full penalty schedule. Treat any cure-period notice with the urgency you would give a regulator subpoena.</p>

<h3>Enforcement Trends Through 2026</h3>

<p>Public reporting on the AG's privacy enforcement docket suggests three areas of focus through 2026: companies that collect biometric or location data without clear consent, data brokers and ad-tech firms that fail to honor opt-outs, and businesses that target children or other vulnerable populations without appropriate safeguards. If your stack touches any of these categories, your TDPSA compliance work should be prioritized accordingly.</p>

<h2>How the TDPSA Compares to Other State Privacy Laws</h2>

<p>By the start of 2026, roughly twenty U.S. states had enacted comprehensive consumer privacy laws. Most share a core framework: notice, consumer rights, opt-outs, and vendor contracting. But the TDPSA differs from its peers in ways that matter for day-to-day operations.</p>

<p>First, the small business exception is unusual. California's CCPA applies only to businesses above defined revenue or data-volume thresholds, while the TDPSA applies to anyone processing Texas residents' data but carves out SBA-defined small businesses. This inversion catches many founders by surprise — especially those who assumed their sub-$25M revenue put them below the radar.</p>

<p>Second, the Texas conspicuous-notice requirement for the sale of sensitive data uses statutorily required language. Other states typically require disclosure in the privacy policy but do not mandate the exact words. Copying a Virginia or Colorado privacy notice into a Texas context without adding the verbatim TDPSA notice is a common failure mode.</p>

<p>Third, Texas was among the early adopters of a universal opt-out mechanism mandate. If your cookie stack still relies on banner clicks alone and ignores browser-level signals like Global Privacy Control, you are likely noncompliant, regardless of how tidy your banner looks.</p>

<h2>Common TDPSA Mistakes Founders Make</h2>

<p>From reviewing privacy incidents across small and mid-sized technology companies, a handful of mistakes come up repeatedly. Knowing them in advance is cheaper than learning them through a cure-period letter.</p>

<ul>
<li><strong>Confusing the SBA employee threshold with the revenue threshold.</strong> The SBA publishes size standards by NAICS code, and the employee and revenue tests are industry-specific, not universal. Use the correct NAICS code for your primary line of business.</li>
<li><strong>Treating a CCPA-compliant privacy notice as "good enough for Texas."</strong> The core structure may be similar, but the specific Texas disclosures and the conspicuous-notice requirements for sensitive and biometric data sales are distinct.</li>
<li><strong>Forgetting processors in the chain.</strong> If your analytics vendor, email platform, or customer support tool receives Texas residents' data, they are processors under the TDPSA and require a written contract that meets the statutory elements.</li>
<li><strong>Ignoring the Global Privacy Control signal.</strong> Respecting only your own in-product opt-out is not sufficient if your site sells data or runs targeted advertising.</li>
<li><strong>Assuming B2B data is exempt.</strong> The TDPSA, like most state laws, excludes data processed in a purely employment or business-to-business context — but the moment that data is used for marketing outreach or profiling, the exemption can fall away.</li>
</ul>

<h2>A Practical 2026 TDPSA Compliance Checklist</h2>

<ol>
<li>Determine whether your business qualifies for the SBA small business exemption, and document the analysis.</li>
<li>Map every category of personal data you collect, including any sensitive categories.</li>
<li>Identify which third parties receive personal data and verify each one has a signed DPA.</li>
<li>Update your privacy policy to include TDPSA-specific disclosures and any required conspicuous notices.</li>
<li>Build a verifiable consumer request intake form covering all six rights, with internal SLAs aligned to the 45-day response window.</li>
<li>Configure your tag manager and consent platform to honor the Global Privacy Control signal.</li>
<li>Implement data minimization and security measures appropriate to the sensitivity of the data you process.</li>
<li>Train customer support and engineering staff on how to recognize and route a TDPSA cure-period notice.</li>
<li>Keep a written record of consumer requests, responses, and any denials with the basis for denial.</li>
<li>Re-audit at least annually, or whenever you launch a new product line that changes your data flows.</li>
</ol>

<p>If you are also subject to <a href="/blog/ccpa-vs-gdpr-differences-explained">CCPA or GDPR</a>, you can run a single unified privacy operations program with state-specific carve-outs rather than three separate workstreams. The TDPSA borrows enough conceptual machinery from those frameworks that compliance overlap is high — but the specific disclosures, timelines, and definitions diverge, so your unified program needs to track them precisely.</p>

<h2>Frequently Asked Questions</h2>

<h3>Does the TDPSA apply to my business if I am based outside Texas?</h3>
<p>Yes, if you process personal data of Texas residents through products or services they consume. There is no requirement to have a Texas office or employees.</p>

<h3>What is the maximum TDPSA penalty per violation?</h3>
<p>Civil penalties of up to $7,500 per violation may be imposed by the Texas Attorney General after the 30-day cure period expires, on top of injunctive relief, attorney's fees, and investigative costs.</p>

<h3>Is there a private right of action under the TDPSA?</h3>
<p>No. Only the Texas Attorney General can enforce the statute. Consumers can file complaints with the AG's office but cannot sue businesses directly for TDPSA violations.</p>

<h3>How does the TDPSA define a small business?</h3>
<p>The TDPSA defers to the U.S. Small Business Administration's size standards, which vary by industry and are based on revenue or employee count. Even small businesses must obtain consent before selling sensitive personal data.</p>

<h3>Do I need a separate Texas privacy policy or can I update my existing one?</h3>
<p>Most businesses update a single global privacy policy with state-specific sections rather than maintaining a separate Texas notice. The key is to include the TDPSA-mandated disclosures and any required conspicuous notices.</p>

<h3>What counts as "sensitive data" under the TDPSA?</h3>
<p>Categories include health diagnoses, racial or ethnic origin, religious beliefs, sexuality, citizenship status, biometric identifiers used for identification, genetic data, data from a known child, and precise geolocation within 1,750 feet.</p>

<h3>How long do I have to respond to a TDPSA consumer rights request?</h3>
<p>Forty-five days from receipt of a verifiable request, with a one-time 45-day extension if reasonably necessary. You must also offer an internal appeal mechanism for denied requests.</p>

<p><em>This article is for informational purposes only and is not legal advice. Consult a qualified attorney for your specific situation.</em></p>

<p>For deeper background, see the official text and guidance from the <a href="https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act" target="_blank" rel="noopener noreferrer">Texas Office of the Attorney General</a> and the <a href="https://www.sba.gov/document/support-table-size-standards" target="_blank" rel="noopener noreferrer">U.S. Small Business Administration size standards table</a>.</p>
