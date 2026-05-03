---
slug: 'washington-my-health-my-data-act-compliance-2026'
title: 'Washington My Health My Data Act: 2026 Compliance Guide'
date: '2026-04-28'
excerpt: 'Washington''s My Health My Data Act covers far more than HIPAA. Learn who it applies to, what counts as consumer health data, and how to comply in 2026.'
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" width="100%" style="max-width:100%;height:auto;display:block;border-radius:12px;margin-bottom:24px;" role="img" aria-label="Washington My Health My Data Act decorative banner">
  <defs>
    <linearGradient id="mhmdaBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f3a5f"/>
      <stop offset="55%" stop-color="#1f6f8b"/>
      <stop offset="100%" stop-color="#2aa39a"/>
    </linearGradient>
    <linearGradient id="mhmdaShield" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.55"/>
    </linearGradient>
    <radialGradient id="mhmdaGlow" cx="0.85" cy="0.15" r="0.7">
      <stop offset="0%" stop-color="#9ee9d6" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#9ee9d6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="360" fill="url(#mhmdaBg)"/>
  <rect width="1200" height="360" fill="url(#mhmdaGlow)"/>
  <g opacity="0.18" stroke="#ffffff" stroke-width="1.5" fill="none">
    <path d="M0,260 C200,210 320,300 520,250 C720,200 880,290 1200,230"/>
    <path d="M0,300 C220,250 360,330 560,280 C760,230 900,310 1200,270"/>
    <circle cx="980" cy="90" r="44"/>
    <circle cx="1060" cy="160" r="22"/>
    <circle cx="930" cy="180" r="14"/>
  </g>
  <g transform="translate(80,90)">
    <path d="M0,30 L60,0 L120,30 L120,90 C120,140 90,170 60,180 C30,170 0,140 0,90 Z" fill="url(#mhmdaShield)" stroke="#ffffff" stroke-width="2"/>
    <path d="M40,95 L55,110 L85,75" fill="none" stroke="#0f3a5f" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60,40 L60,60 M50,50 L70,50" stroke="#0f3a5f" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g transform="translate(240,110)" fill="#ffffff" font-family="-apple-system,Segoe UI,Roboto,sans-serif">
    <text x="0" y="0" font-size="20" font-weight="500" letter-spacing="3" opacity="0.8">WASHINGTON STATE</text>
    <text x="0" y="60" font-size="54" font-weight="800">My Health My Data Act</text>
    <text x="0" y="110" font-size="22" font-weight="400" opacity="0.9">Consumer health data compliance beyond HIPAA</text>
    <g transform="translate(0,140)" font-size="14" font-weight="600" letter-spacing="2">
      <rect x="0" y="0" width="120" height="28" rx="14" fill="#ffffff" fill-opacity="0.18" stroke="#ffffff" stroke-opacity="0.4"/>
      <text x="60" y="19" text-anchor="middle">2026 GUIDE</text>
      <rect x="132" y="0" width="170" height="28" rx="14" fill="#ffffff" fill-opacity="0.18" stroke="#ffffff" stroke-opacity="0.4"/>
      <text x="217" y="19" text-anchor="middle">PRIVATE RIGHT OF ACTION</text>
    </g>
  </g>
</svg>

<p>If your app collects anything that hints at a person's physical or mental health — a fitness tracker reading, a symptom search, a meditation session, a fertility log — Washington State has a privacy law that almost certainly applies to you, even if you've never heard of it and your nearest server is a thousand miles from Seattle. The <strong>Washington My Health My Data Act (MHMDA)</strong> went into force in March 2024, and it does something almost no other US privacy law does: it lets ordinary consumers sue you directly when you get it wrong.</p>

<p>This guide is for SaaS founders, indie developers, marketers, and product managers who suspect their app might handle "consumer health data" and want to know what compliance actually looks like in 2026. We'll cover who the law applies to, the surprisingly broad definition of consumer health data, the consent and authorization rules, the geofencing ban, and a practical compliance checklist you can work through this week.</p>

<h2>What Is the Washington My Health My Data Act?</h2>

<p>The Washington My Health My Data Act, codified at <a href="https://app.leg.wa.gov/RCW/default.aspx?cite=19.373&amp;full=true" target="_blank" rel="noopener noreferrer">RCW 19.373</a>, is a state privacy law focused entirely on health-related personal information. It was passed in 2023 in response to a specific concern: most general privacy laws (and HIPAA itself) leave huge gaps when it comes to consumer health data collected by apps, websites, and connected devices. A period tracker, a sleep app, an online pharmacy, and a search engine indexing health queries are all generally <em>outside</em> HIPAA's scope, yet they handle some of the most sensitive information a person ever shares.</p>

<p>The MHMDA closes that gap. It imposes consent, transparency, sale-authorization, geofencing, and security requirements on a broad class of "regulated entities" that handle Washington consumers' health data. Compliance for most regulated entities began on <strong>March 31, 2024</strong>, with small businesses given an additional three months until <strong>June 30, 2024</strong>. The geofencing ban took effect even earlier, on July 23, 2023.</p>

<h2>Who Does the MHMDA Apply To?</h2>

<p>The law uses two terms — "regulated entity" and "small business" — but both must satisfy the same threshold test, and both must comply with the same substantive obligations. There is no revenue or user-count threshold below which the law simply does not apply.</p>

<p>A regulated entity is any legal entity that (a) conducts business in Washington or produces or provides products or services targeted to consumers in Washington, and (b) alone or jointly with others, determines the purpose and means of collecting, processing, sharing, or selling consumer health data. Government agencies and contracted service providers acting on a regulated entity's behalf are excluded.</p>

<h3>The "Doing Business in Washington" Test</h3>

<p>The threshold is intentionally broad. If your SaaS has Washington-based users — or even targets them through marketing, app store listings, or geo-relevant content — you likely fall within scope. There is no minimum number of Washington consumers required, and a single covered interaction can be enough to trigger obligations.</p>

<h3>Small Business Carve-Out</h3>

<p>The MHMDA defines a "small business" as one that satisfies <em>both</em> of the following:</p>

<ul>
  <li>Collects, processes, sells, or shares the consumer health data of fewer than 100,000 consumers in a calendar year, <strong>and</strong></li>
  <li>Either derives less than 50% of gross revenue from collection, processing, selling, or sharing of consumer health data, <strong>or</strong> processes data of fewer than 25,000 consumers.</li>
</ul>

<p>Small businesses got a three-month extension on the original effective date, but they are otherwise subject to every requirement in the Act. There is no permanent exemption — only a head-start grace period that has long since expired.</p>

<h2>What Counts as "Consumer Health Data"?</h2>

<p>This is the part most teams underestimate. The Act defines consumer health data as personal information that is linked or reasonably linkable to a consumer and that identifies the consumer's past, present, or future <strong>physical or mental health status</strong>. The phrase "health status" is then explicitly broadened to include, among other things:</p>

<ul>
  <li>Individual health conditions, treatments, diseases, or diagnoses</li>
  <li>Social, psychological, behavioral, and medical interventions</li>
  <li>Health-related surgeries or procedures</li>
  <li>Use or purchase of prescribed medications</li>
  <li>Bodily functions, vital signs, symptoms, or measurements</li>
  <li>Diagnoses or diagnostic testing, treatment, or medication</li>
  <li>Gender-affirming care information</li>
  <li>Reproductive or sexual health information</li>
  <li>Biometric data linked to health</li>
  <li>Genetic data</li>
  <li>Precise location information that could reasonably indicate a consumer's attempt to acquire or receive health services or supplies</li>
  <li>Data that identifies a consumer seeking health care services</li>
  <li>Any information derived or extrapolated from non-health information that is used by a regulated entity to associate or identify a consumer with the data above</li>
</ul>

<p>That last bullet is the sleeper. Inferred or derived health data — for example, a wellness score generated from step counts, or an ad audience segment built from purchase history that suggests a chronic condition — is in scope even when none of the underlying inputs were obviously "health" data. If you run analytics or personalization, you should assume some derived signals will trip this definition.</p>

<h2>Core Compliance Requirements</h2>

<p>The MHMDA is organized around a familiar privacy structure — notice, consent, rights, security — but several rules are stricter than what consumer privacy laws like the CCPA or VCDPA require. The major obligations are summarized below.</p>

<table>
  <thead>
    <tr><th>Requirement</th><th>What It Means in Practice</th></tr>
  </thead>
  <tbody>
    <tr><td>Stand-alone Consumer Health Data Privacy Policy</td><td>You must publish a separate privacy notice (linked from your homepage) listing the categories of consumer health data collected, sources, purposes, third parties, and consumer rights. It cannot be buried inside your general privacy policy.</td></tr>
    <tr><td>Affirmative consent before collection or sharing</td><td>Opt-in consent is required for any collection or sharing that is not strictly necessary to provide the consumer-requested product or service.</td></tr>
    <tr><td>Separate, written authorization to sell</td><td>Sales of consumer health data require a separate signed authorization, valid for one year, listing specific data, purchaser, and purpose.</td></tr>
    <tr><td>Consumer rights</td><td>Right to confirm, access, withdraw consent, and request deletion — with downstream propagation to processors, contractors, and affiliates.</td></tr>
    <tr><td>Data minimization &amp; security</td><td>Only collect what you need, restrict internal access, and apply reasonable administrative, technical, and physical safeguards.</td></tr>
    <tr><td>Processor contracts</td><td>Vendors handling consumer health data on your behalf must be bound by contracts that limit their use of the data.</td></tr>
    <tr><td>Geofencing prohibition</td><td>No geofences within 2,000 feet of any in-person health care provider for tracking, data collection, or targeted messaging.</td></tr>
  </tbody>
</table>

<h3>Consent vs. Authorization</h3>

<p>The MHMDA carefully distinguishes between <strong>consent</strong> (used for collection and sharing beyond what is necessary) and <strong>authorization</strong> (used specifically for sales). The two are not interchangeable. Authorization must be a stand-alone, plain-language, signed document that names the specific data, the purchasing party, and the purpose, and that is revocable by the consumer at any time. Bundling authorization into a long terms-of-service is not compliant. If you currently rely on a single click-through consent flow for everything, that is a structure you need to redesign.</p>

<h2>The Geofencing Ban Around Health Facilities</h2>

<p>One of the MHMDA's most distinctive provisions is an outright ban on geofencing around in-person health care facilities. The Act defines a geofence as technology that uses GPS, cell-tower, Wi-Fi, or other location data to create a virtual boundary up to 2,000 feet from the perimeter of a physical location, or to locate a consumer within such a boundary.</p>

<p>It is unlawful for any person to implement such a geofence around an entity that provides in-person health care services where the geofence is used to (1) identify or track consumers seeking health care, (2) collect consumer health data, or (3) send notifications, messages, or advertisements related to the consumer's health data or health care. This applies even if you are not a "regulated entity" under the rest of the Act — the geofencing prohibition is broad.</p>

<p>If your platform offers location-based ad targeting or push notifications, your ad ops and SDK partners need to confirm that no targeting layer is using clinic, hospital, pharmacy, or specialist proximity as a signal.</p>

<h2>Consumer Rights Under the MHMDA</h2>

<p>Consumers in Washington have four core rights with respect to their consumer health data:</p>

<ol>
  <li><strong>Right to confirm</strong> whether a regulated entity is collecting, sharing, or selling their consumer health data.</li>
  <li><strong>Right to access</strong> a list of all third parties and affiliates with whom the regulated entity has shared or sold the data, with active contact information for each.</li>
  <li><strong>Right to withdraw consent</strong> from collection and sharing.</li>
  <li><strong>Right to delete</strong> their consumer health data, with the obligation flowing through to processors, contractors, affiliates, and any third parties who received the data.</li>
</ol>

<p>The deletion right is notable for its downstream reach. Unlike a simple "delete my account" button, the MHMDA expects you to notify and obtain deletion confirmation from third parties to whom you transmitted the data. Build a vendor inventory before you receive your first request — you cannot improvise this in the 30-day response window.</p>

<h2>Why MHMDA Has Teeth: The Private Right of Action</h2>

<p>Most US state privacy laws are enforced only by attorneys general. The MHMDA is different. A violation of the Act is a per se violation of the Washington Consumer Protection Act, which means consumers can sue directly without having to prove a separate unfair or deceptive practice. The Washington Attorney General can also bring enforcement actions. Civil suits can include actual damages, injunctive relief, and attorneys' fees, and Washington courts are authorized to award treble damages up to $25,000 in CPA cases.</p>

<p>Per-consumer damages add up quickly when a privacy issue affects thousands or millions of users. Class-action plaintiffs' firms have historically been the primary driver of biometric privacy litigation under Illinois's BIPA — and the same playbook is widely expected to be applied to MHMDA. For more on how private rights of action shape compliance budgets, see our companion guide on <a href="/blog/bipa-compliance-illinois-biometric-privacy-saas-2026">BIPA compliance for SaaS</a>.</p>

<h2>How MHMDA Differs From HIPAA</h2>

<p>A common misconception is that any health-related data law overlaps neatly with HIPAA. It does not. HIPAA only covers Protected Health Information (PHI) handled by covered entities (most providers, plans, and clearinghouses) and their business associates. Most consumer apps are not covered entities. The MHMDA fills the gap by regulating the same kinds of information when handled by the consumer-facing companies HIPAA does not reach. If you are a HIPAA business associate, your existing HIPAA-compliant practices will satisfy many MHMDA requirements — but not all of them, particularly around the stand-alone privacy policy and the sale authorization. Our <a href="/blog/hipaa-compliance-checklist-small-business">HIPAA compliance checklist</a> is a useful sister read for teams figuring out which framework applies where.</p>

<h2>Building an MHMDA-Compliant Privacy Policy</h2>

<p>The Act requires a separate Consumer Health Data Privacy Policy, distinct from your main privacy policy and prominently linked from your homepage. It must include, at minimum, the categories of consumer health data collected, the categories of sources, the purposes of collection, the categories of third parties and affiliates with whom data is shared, the categories of consumer health data sold, and a clear explanation of how to exercise rights. Plain language is a statutory requirement — vague or generic statements will not survive enforcement.</p>

<p>If you currently use a generator to draft your main privacy policy, you can use the same approach for this stand-alone notice. Our <a href="/privacy-policy-generator">privacy policy generator</a> produces a baseline you can extend with the MHMDA-specific disclosures. Pair it with the mobile and platform-specific guidance in our <a href="/blog/privacy-policy-mobile-apps-ios-android">mobile app privacy policy guide</a> if your product ships through the app stores.</p>

<h2>MHMDA Compliance Checklist</h2>

<p>Use this checklist to scope a first compliance pass. Most teams can complete the policy work in a focused two-week sprint; vendor and product changes typically take longer.</p>

<ul>
  <li>Inventory every place the product collects, derives, or shares anything that could touch on physical or mental health, fitness, reproductive activity, location near medical facilities, or biometrics.</li>
  <li>Determine whether your business meets the MHMDA threshold (almost every consumer-facing US company does).</li>
  <li>Re-architect your consent flows so collection and sharing beyond strict necessity are gated by affirmative opt-in.</li>
  <li>Stop relying on bundled consent for sales — design a separate, signed authorization flow if you sell consumer health data.</li>
  <li>Audit ad targeting and SDK partners for any geofencing within 2,000 feet of medical facilities; remove such targeting entirely.</li>
  <li>Publish a stand-alone Consumer Health Data Privacy Policy linked from the homepage.</li>
  <li>Build a 45-day rights response workflow (the Act allows a 45-day initial response, with one 45-day extension where reasonably necessary).</li>
  <li>Review every vendor contract that touches health data and add MHMDA-aligned restrictions on use, retention, sub-processing, and deletion.</li>
  <li>Document retention schedules — collect what you need, keep it only as long as you need it.</li>
  <li>Train customer support and engineering on how to spot, route, and fulfill rights requests.</li>
</ul>

<p>If your product also handles non-health personal data covered by other US state privacy laws, integrate this work with your broader <a href="/blog/data-breach-notification-laws-us-guide">data breach notification</a> and consumer-rights program rather than running parallel processes.</p>

<h2>Beyond Washington: Other States Are Watching</h2>

<p>Nevada and Connecticut have already passed their own consumer health data laws modeled in large part on MHMDA, with Connecticut's amendments to the Connecticut Data Privacy Act in particular adopting similar definitions. Maryland's Online Data Privacy Act, effective in 2025, also includes heightened protections for consumer health data. Designing your stack around the strictest of these — currently MHMDA — means you will likely be well-positioned for the broader patchwork without per-state retrofits. The <a href="https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy" target="_blank" rel="noopener noreferrer">Washington Attorney General's MHMDA guidance</a> remains the best plain-language summary for non-lawyers, and the <a href="https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule" target="_blank" rel="noopener noreferrer">FTC's Health Breach Notification Rule</a> is a useful reference for adjacent obligations on health apps that experience security incidents.</p>

<h2>Frequently Asked Questions</h2>

<h3>Does MHMDA apply if my company is based outside Washington?</h3>
<p>Yes. The Act applies to any entity that conducts business in Washington or that provides products or services targeted at Washington consumers. There is no minimum number of Washington consumers required and no in-state physical presence test, so most consumer-facing US apps fall within scope.</p>

<h3>Is fitness tracker data really "consumer health data"?</h3>
<p>Almost certainly. The statutory definition explicitly includes bodily functions, vital signs, symptoms, and measurements, as well as data extrapolated to identify health status. Step counts, heart rate, sleep stages, and weight readings will be in scope, and inferred wellness scores will be too.</p>

<h3>Does the small business carve-out exempt me from compliance?</h3>
<p>No. The carve-out only delayed the original effective date by three months — it did not create an ongoing exemption. Small businesses must comply with every substantive requirement in the Act.</p>

<h3>Can I bury the consumer health data privacy policy inside my main privacy policy?</h3>
<p>No. The MHMDA explicitly requires a stand-alone Consumer Health Data Privacy Policy, linked separately and prominently from the homepage. A merged document is not compliant.</p>

<h3>Are there fines for MHMDA violations?</h3>
<p>The MHMDA is enforced through the Washington Consumer Protection Act, which authorizes injunctive relief, actual damages, attorneys' fees, and treble damages of up to $25,000 per violation in qualifying CPA cases. Consumers can also bring suit directly, which is the most significant enforcement risk for most companies.</p>

<h3>Does HIPAA compliance automatically mean MHMDA compliance?</h3>
<p>No. HIPAA-covered PHI is exempt from the MHMDA, but most consumer apps are not HIPAA-covered. Even if you are a HIPAA business associate, the MHMDA imposes additional requirements — particularly the stand-alone privacy policy and the sale authorization — that HIPAA does not.</p>

<h3>What about consumer health data we collected before March 2024?</h3>
<p>The Act's transparency, rights, and deletion obligations apply to consumer health data already in your possession, not only data collected after the effective date. Build your access and deletion workflows to cover historical records, including backups within reason.</p>

<p><em>This article is for informational purposes only and is not legal advice. Consult a qualified attorney for your specific situation.</em></p>
