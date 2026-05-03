---
slug: 'bipa-compliance-illinois-biometric-privacy-saas-2026'
title: 'BIPA Compliance: Illinois Biometric Privacy Law for SaaS (2026)'
date: '2026-04-25'
excerpt: 'BIPA compliance for SaaS in 2026: who Illinois biometric privacy law covers, what consent and retention require, and how the 2024 amendments cut damages.'
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" role="img" aria-label="BIPA Illinois biometric privacy banner" style="width:100%;height:auto;border-radius:12px;margin-bottom:24px;display:block;">
  <defs>
    <linearGradient id="bipa-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef2ff"/>
      <stop offset="100%" stop-color="#c7d2fe"/>
    </linearGradient>
    <radialGradient id="bipa-glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="360" fill="url(#bipa-bg)"/>
  <rect width="1200" height="360" fill="url(#bipa-glow)"/>
  <g transform="translate(600 180)" fill="none" stroke="#7c3aed" stroke-linecap="round" stroke-width="6" opacity="0.85">
    <path d="M -120 60 C -120 -50, -60 -110, 0 -110 C 60 -110, 120 -50, 120 60"/>
    <path d="M -90 70 C -90 -30, -45 -85, 0 -85 C 45 -85, 90 -30, 90 70" opacity="0.85"/>
    <path d="M -60 80 C -60 0, -30 -55, 0 -55 C 30 -55, 60 0, 60 80" opacity="0.75"/>
    <path d="M -30 90 C -30 30, -15 -25, 0 -25 C 15 -25, 30 30, 30 90" opacity="0.65"/>
    <path d="M 0 100 L 0 0" opacity="0.55"/>
  </g>
  <g stroke="#4338ca" stroke-width="3" fill="none" opacity="0.55">
    <circle cx="180" cy="90" r="22"/>
    <circle cx="180" cy="90" r="10"/>
    <circle cx="1020" cy="270" r="22"/>
    <circle cx="1020" cy="270" r="10"/>
  </g>
  <g fill="#3730a3" opacity="0.35">
    <rect x="120" y="280" width="60" height="6" rx="3"/>
    <rect x="120" y="296" width="40" height="6" rx="3"/>
    <rect x="1020" y="60" width="60" height="6" rx="3"/>
    <rect x="1040" y="76" width="40" height="6" rx="3"/>
  </g>
</svg>

<p>If your SaaS app touches a face scan, a fingerprint, a voiceprint, or even a hashed mathematical model derived from any of those, an Illinois law from 2008 may quietly be the most expensive statute in your compliance stack. The Biometric Information Privacy Act — almost universally called BIPA — has driven nine-figure settlements against tech giants and bankrupted smaller vendors who never set foot in Illinois. With statutory damages baked into the law and a private right of action that lets ordinary residents sue, BIPA is the only US biometric privacy regime where one missing checkbox can end a company.</p>

<p>This guide explains exactly what BIPA requires in 2026, what changed after the 2024 amendments, who falls inside its scope, and the practical steps a SaaS team should take this quarter. It is written for founders, product managers, and engineers who need a working understanding without a law-firm retainer.</p>

<h2>What BIPA Actually Regulates</h2>

<p>BIPA, enacted in 2008, is the oldest and strictest biometric privacy statute in the United States. It governs how private entities collect, store, use, share, and destroy two categories of data:</p>

<ul>
  <li><strong>Biometric identifiers</strong> — retina or iris scans, fingerprints, voiceprints, and scans of hand or face geometry.</li>
  <li><strong>Biometric information</strong> — any information, regardless of how it is captured, converted, stored, or shared, based on an individual's biometric identifier used to identify a specific person.</li>
</ul>

<p>The second bucket is where many SaaS teams get caught off guard. A face-recognition vendor that only stores a numerical embedding (an array of floats) rather than the source image is still inside BIPA's scope, because the embedding is information based on a biometric identifier used to identify a specific person. The same logic captures voice embeddings used for speaker verification.</p>

<h3>What BIPA Does Not Cover</h3>

<p>BIPA explicitly excludes a handful of categories. Photographs by themselves are not biometric identifiers under the statute, nor is information derived from photographs unless a face geometry scan is performed. Demographic data, physical descriptions, and writing samples are also outside scope. Health information already protected by HIPAA, when collected by a covered entity, is excluded as well. None of these carve-outs help a SaaS app that runs face geometry models on user uploads.</p>

<h2>The Five Operational Duties Under BIPA</h2>

<p>BIPA imposes five concrete obligations on private entities. A defensible compliance program addresses every one of them in writing, in product, and in vendor contracts.</p>

<ol>
  <li><strong>Written, informed consent before collection.</strong> Before capturing or receiving biometric data, you must inform the individual in writing of the specific purpose and length of term, and obtain a written release. After the 2024 amendments, electronic signatures explicitly count as written consent.</li>
  <li><strong>A publicly available retention and destruction policy.</strong> You must publish a written schedule and guidelines specifying when biometric data will be destroyed — at the latest, when the initial purpose is satisfied or three years after the individual's last interaction, whichever comes first.</li>
  <li><strong>No selling or profiting from biometric data.</strong> The statute flatly prohibits selling, leasing, trading, or otherwise profiting from a person's biometric identifier or biometric information.</li>
  <li><strong>Tightly limited disclosure.</strong> You may only disclose biometric data with explicit consent, to complete a financial transaction the subject authorized, when required by law, or pursuant to a valid warrant or subpoena.</li>
  <li><strong>Reasonable storage and protection standards.</strong> Biometric data must be stored, transmitted, and protected using the reasonable standard of care within your industry, and at least as protectively as how you store other confidential and sensitive information.</li>
</ol>

<p>Notice that BIPA does not regulate <em>whether</em> you collect biometrics — it regulates <em>how</em>. A clean opt-in flow, a published retention schedule, and a vendor agreement that mirrors these duties take you most of the way there.</p>

<h2>Why BIPA Is Different From Every Other US Privacy Law</h2>

<p>BIPA's bite comes from one feature: the private right of action. Unlike CCPA (which limits private suits to data breaches) or every other state comprehensive privacy law, BIPA lets any aggrieved Illinois resident sue directly for any violation. Combined with statutory damages, that turns small process failures into class actions.</p>

<table>
  <thead>
    <tr><th>Violation type</th><th>Statutory damages</th><th>Other remedies</th></tr>
  </thead>
  <tbody>
    <tr><td>Negligent</td><td>$1,000 per person</td><td>Actual damages if higher; attorneys' fees and costs; injunctive relief</td></tr>
    <tr><td>Intentional or reckless</td><td>$5,000 per person</td><td>Actual damages if higher; attorneys' fees and costs; injunctive relief</td></tr>
  </tbody>
</table>

<p>Earlier interpretations of BIPA treated each individual scan or transmission as a separate violation, producing potentially astronomical exposure for systems that scan employees in and out of work many times a day. That theory was endorsed by the Illinois Supreme Court in early 2023, which is what triggered the legislative response described below.</p>

<h2>What Changed in 2024: SB 2979 and Its Ripple Effect</h2>

<p>On August 2, 2024, Illinois Governor J.B. Pritzker signed SB 2979 into law, amending BIPA in two important ways that materially reduce — but do not eliminate — exposure for ongoing operations.</p>

<h3>One Recovery Per Person</h3>

<p>Multiple collections or disclosures of the same person's biometric data, in the same manner, now count as a single violation. A timekeeping system that scans an employee's fingerprint twice a day for three years is one $1,000 (or $5,000) exposure per employee, not roughly 1,500 of them. The U.S. Court of Appeals for the Seventh Circuit subsequently held that this amendment applies retroactively to pending cases, which dramatically reshaped the settlement landscape.</p>

<h3>Electronic Signatures Count</h3>

<p>The amendment also clarified that an electronic signature satisfies BIPA's written-consent requirement, removing any lingering ambiguity for app onboarding flows. A standard click-through consent — clearly worded, with a checkbox tied to a timestamped record — now plainly works.</p>

<p>Critically, SB 2979 did not change the substantive duties of the statute. You still need consent, a retention schedule, and reasonable safeguards. The amendment narrows the damages multiplier; it does not move the goalposts on what compliance looks like.</p>

<h2>Who Is Actually In Scope?</h2>

<p>BIPA applies to any private entity that collects, captures, purchases, receives, or otherwise obtains a person's biometric data, where that person is an Illinois resident at the time. There is no revenue threshold and no employee minimum. A two-person startup is treated the same as a Fortune 500 company.</p>

<p>The harder question is geographic: does BIPA reach an out-of-state SaaS vendor? Courts have generally held that BIPA can apply when the relevant collection or processing occurs in Illinois — for example, when an Illinois employee uses your authentication SDK on a device located in Chicago. If your product is sold to companies with Illinois employees or end users, assume you are in scope and design accordingly.</p>

<p>Common SaaS scenarios that pull a vendor into BIPA include face-recognition login, voice-based call analytics, fingerprint-based time clocks resold to employers, video-interview platforms that score facial movement, and any AI feature that builds an embedding from a face or voice for identification purposes.</p>

<h2>A Practical BIPA Compliance Checklist for SaaS Teams</h2>

<p>If you are starting from zero, here is the order most SaaS teams should run through. Each item is a pass/fail; together they form a defensible record.</p>

<ul>
  <li><strong>Map your biometric flows.</strong> Document every place biometric identifiers or embeddings are captured, transmitted, stored, or shared — including third-party SDKs and ML model providers.</li>
  <li><strong>Write a public retention and destruction schedule.</strong> Publish it on your site (your privacy policy or a dedicated biometrics policy is the usual home). Specify the trigger for destruction and the maximum window.</li>
  <li><strong>Build an explicit consent surface.</strong> Before the first scan, present a clear notice that names the data, the specific purpose, and the retention term, with a separately-affirmed checkbox or signature. Capture the timestamp, IP, and exact text shown.</li>
  <li><strong>Update vendor and customer DPAs.</strong> If you are a processor, your <a href="/blog/what-is-data-processing-agreement-dpa-guide">data processing agreement</a> should commit your customer (the controller) to obtaining BIPA-compliant consent and should mirror your retention obligations downstream.</li>
  <li><strong>Lock down storage.</strong> Encrypt biometric records at rest, restrict access to a named role, and log every read. If you would not store production passwords this way, you should not be storing biometrics this way.</li>
  <li><strong>Do not monetize, period.</strong> No selling, no leasing, no trading. Audit any data-sharing pipeline (analytics, ad tech, model-training) for accidental biometric exfiltration.</li>
  <li><strong>Train the humans.</strong> Engineering, product, support, and sales all need to know what biometric data is and how to escalate any new use case for review.</li>
  <li><strong>Refresh your privacy policy.</strong> Add a dedicated section on biometric data, mirroring your retention schedule. A <a href="/privacy-policy-generator">privacy policy generator</a> can produce the surrounding scaffolding, but the biometric-specific clauses need careful review.</li>
</ul>

<h2>How BIPA Interacts With Other Privacy Laws</h2>

<p>Illinois is no longer the only state in this lane. Texas and Washington have biometric privacy statutes (without private rights of action), and most modern comprehensive privacy laws — including <a href="/blog/tdpsa-texas-data-privacy-compliance-guide-2026">Texas's TDPSA</a>, Colorado's CPA, and Connecticut's CTDPA — treat biometric data as a sensitive category requiring opt-in consent. The <a href="/blog/ccpa-vs-gdpr-differences-explained">GDPR also treats biometric data</a> used for unique identification as a special category requiring an explicit Article 9 lawful basis.</p>

<p>The practical upshot: if your BIPA program is solid, you will likely satisfy the biometric-specific provisions of every other US state law and a meaningful portion of GDPR Article 9. Build for Illinois first; the rest of the country comes along.</p>

<h2>Common SaaS Mistakes That Drive BIPA Litigation</h2>

<p>Plaintiffs' firms have spent fifteen years finding the soft spots. The same handful of failures show up in case after case.</p>

<ul>
  <li><strong>Treating embeddings as not biometric.</strong> Hashed face vectors and voice embeddings are biometric information when used for identification. The fact that the original image is discarded does not save you.</li>
  <li><strong>Implicit consent through a buried policy.</strong> A privacy policy link in the footer is not a written release. BIPA requires a specific, affirmative act tied to specific notice.</li>
  <li><strong>Indefinite retention by default.</strong> "We keep it as long as the account is active" is not a destruction schedule. The statute requires a defined endpoint.</li>
  <li><strong>Subcontractor surprises.</strong> A vendor that processes biometrics on your behalf is collecting under BIPA. Your DPA must obligate them to mirror BIPA's duties — and you should confirm they actually do.</li>
  <li><strong>Marketing copy that contradicts the policy.</strong> "We never store your face" on the homepage, while the SDK silently caches embeddings, is a gift to the plaintiffs' bar.</li>
</ul>

<h2>What to Do If You Just Realized You Are Out of Compliance</h2>

<p>The right move is not to panic-delete data — that may itself create discovery and statutory issues. Instead, in this order: stop new collection that lacks proper consent, document what you discovered and when, draft a remediation plan with owners and dates, get qualified Illinois counsel involved before sending any external communication, and only then begin the technical clean-up. Voluntary, documented remediation has historically helped, even though it is not a defense in itself. A clean <a href="/blog/data-breach-notification-laws-us-guide">incident-style intake</a> mindset — discover, contain, document, remediate — works well here.</p>

<h2>Frequently Asked Questions</h2>

<h3>Does BIPA apply to my SaaS company if we are based outside Illinois?</h3>
<p>Probably yes, if any of your end users or your customers' employees are in Illinois. Courts look at where the collection or processing actually happens, not where the company is incorporated.</p>

<h3>Are face embeddings and voice embeddings really covered, even though we never store the raw image or audio?</h3>
<p>Yes, when those embeddings are used to identify a specific person. BIPA covers "biometric information" derived from a biometric identifier, not just the raw scan itself.</p>

<h3>Do I need a separate biometric consent, or is my existing privacy policy enough?</h3>
<p>You need a separate, affirmative consent that names the data, the purpose, and the retention period before collection. A privacy policy disclosure alone is not sufficient under BIPA.</p>

<h3>How long can I retain biometric data?</h3>
<p>Until the initial purpose is satisfied or three years after the individual's last interaction with you, whichever comes first. The statute requires you to publish your schedule.</p>

<h3>Did the 2024 amendment make BIPA less risky?</h3>
<p>It reduced the damages multiplier by clarifying that repeated scans of the same person count as one violation, but the substantive duties — consent, retention, no sales, reasonable safeguards — are unchanged.</p>

<h3>Can a clickthrough checkbox count as a written release?</h3>
<p>Yes. The 2024 amendment makes clear that an electronic signature qualifies, provided the consent text is specific and the user takes an affirmative action.</p>

<h3>What are the actual penalties if we get sued?</h3>
<p>Statutory damages are $1,000 per affected person for negligent violations and $5,000 per person for intentional or reckless ones, plus attorneys' fees, costs, and injunctive relief. Class actions are common, so the per-person figure is multiplied by the size of the class.</p>

<p><em>This article is for informational purposes only and is not legal advice. BIPA litigation moves quickly, and the right answer for your product depends on facts a generator cannot see. Consult a qualified Illinois attorney before relying on anything you read here.</em></p>

<p>Want a starting scaffold for the surrounding documents? Our <a href="/privacy-policy-generator">privacy policy generator</a> and <a href="/terms-of-service-generator">terms of service generator</a> produce a baseline you can layer biometric-specific clauses onto. The biometric provisions still need careful, jurisdiction-aware review — but the rest does not have to start from a blank page.</p>

<p><strong>Further reading from authoritative sources:</strong> the <a href="https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004&amp;ChapterID=57" target="_blank" rel="noopener noreferrer">Illinois General Assembly's official text of BIPA</a>, the <a href="https://www.ftc.gov/business-guidance/blog/2023/05/ftc-warns-about-misuses-biometric-information-harm-consumers" target="_blank" rel="noopener noreferrer">FTC's policy statement on biometric information</a>, and the <a href="https://www.nist.gov/programs-projects/face-recognition-vendor-test-frvt" target="_blank" rel="noopener noreferrer">NIST Face Recognition Vendor Test program</a> for objective accuracy benchmarking of any biometric system you deploy.</p>
