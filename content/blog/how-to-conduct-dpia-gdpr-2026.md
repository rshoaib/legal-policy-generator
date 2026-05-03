---
slug: 'how-to-conduct-dpia-gdpr-2026'
title: 'How to Conduct a DPIA in 2026 (GDPR Article 35 Guide)'
date: '2026-04-22'
excerpt: 'Learn when a DPIA is required under GDPR Article 35, the 7 steps to conduct one, and what to include in your 2026 template — with a free checklist.'
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" role="img" aria-label="Data Protection Impact Assessment banner" style="width:100%;height:auto;border-radius:12px;margin-bottom:24px;display:block;"><defs><linearGradient id="bg-dpia-791c" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#eef2ff"/><stop offset="100%" stop-color="#818cf8"/></linearGradient><linearGradient id="doc-dpia-791c" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f8fafc"/></linearGradient></defs><rect width="1200" height="360" fill="url(#bg-dpia-791c)"/><g opacity="0.12" fill="#1e3a8a"><circle cx="160" cy="80" r="56"/><circle cx="1060" cy="300" r="72"/><circle cx="1010" cy="70" r="30"/><circle cx="210" cy="305" r="22"/></g><g transform="translate(470,80)"><rect x="0" y="0" width="260" height="210" rx="10" fill="url(#doc-dpia-791c)" stroke="#1e3a8a" stroke-width="3"/><rect x="20" y="28" width="160" height="10" rx="4" fill="#1e3a8a"/><rect x="20" y="52" width="200" height="6" rx="3" fill="#c7d2fe"/><rect x="20" y="70" width="180" height="6" rx="3" fill="#c7d2fe"/><g stroke="#1e3a8a" stroke-width="3" fill="none"><rect x="20" y="98" width="14" height="14" rx="3"/><rect x="20" y="122" width="14" height="14" rx="3"/><rect x="20" y="146" width="14" height="14" rx="3"/><rect x="20" y="170" width="14" height="14" rx="3"/></g><g fill="#1e3a8a"><path d="M23 105 l4 4 l7 -8" stroke="#1e3a8a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 129 l4 4 l7 -8" stroke="#1e3a8a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 153 l4 4 l7 -8" stroke="#1e3a8a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="44" y="102" width="170" height="6" rx="3" fill="#64748b"/><rect x="44" y="126" width="150" height="6" rx="3" fill="#64748b"/><rect x="44" y="150" width="160" height="6" rx="3" fill="#64748b"/><rect x="44" y="174" width="130" height="6" rx="3" fill="#cbd5e1"/></g><g transform="translate(700,130)"><path d="M60 0 L120 22 L120 80 Q120 130 60 160 Q0 130 0 80 L0 22 Z" fill="#1e3a8a" stroke="#ffffff" stroke-width="4"/><path d="M38 82 l16 16 l30 -36" stroke="#ffffff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
<p>If your SaaS, mobile app, or marketing tool processes sensitive data, tracks users at scale, or uses AI to make decisions about people, there is a strong chance regulators expect you to complete a Data Protection Impact Assessment before you ship. Many founders hear the term, assume it is a corporate formality, and skip it — and then scramble when a customer, partner, or supervisory authority asks to see one. This 2026 guide walks through when a DPIA is required, the seven concrete steps to complete one, what a good template looks like, and the mistakes that get DPIAs rejected in enforcement reviews.</p>

<h2>What Is a Data Protection Impact Assessment?</h2>
<p>A Data Protection Impact Assessment (DPIA) is a structured risk assessment that documents how a planned data-processing activity might affect the rights and freedoms of individuals, and what you are doing to reduce that risk. It is codified in Article 35 of the EU General Data Protection Regulation and its UK equivalent, and analogous requirements appear in several US state privacy laws under names such as "data protection assessment" or "privacy impact assessment."</p>
<p>The goal is not paperwork. A proper DPIA forces your team to describe the processing in plain language, identify the people who could be harmed, evaluate whether the personal data you want to collect is actually necessary for the stated purpose, and decide which technical and organizational controls will bring the residual risk down to an acceptable level. When done early, it frequently changes the product — less data, shorter retention, tighter access, or a different vendor — before code is shipped.</p>
<p>A DPIA is a living document. You start it at the design phase, update it when the processing meaningfully changes, and keep it on hand so you can produce it on request from a regulator, an enterprise customer, or your own <a href="/blog/what-is-data-processing-agreement-dpa-guide">data processing agreement</a> partner.</p>

<h2>When Is a DPIA Legally Required in 2026?</h2>
<p>A DPIA is not required for every activity — only where the processing is "likely to result in a high risk to the rights and freedoms of natural persons." The EU GDPR, the UK GDPR, and a growing list of US state privacy laws each define their own triggers, but the overlap is significant.</p>

<h3>GDPR Article 35 Mandatory Triggers</h3>
<p>Article 35(3) of the GDPR lists three situations where a DPIA is always required:</p>
<ul>
<li>Systematic and extensive evaluation of personal aspects based on automated processing, including profiling, on which decisions are based that produce legal or similarly significant effects.</li>
<li>Processing on a large scale of special-category data (health, biometrics, race, religion, political opinions, sex life) or data relating to criminal offences.</li>
<li>Systematic monitoring of a publicly accessible area on a large scale, such as CCTV in a shopping district or Wi-Fi tracking in a venue.</li>
</ul>
<p>Beyond those three, supervisory authorities publish their own blacklists of activities that always trigger a DPIA. The European Data Protection Board also endorsed nine criteria in its <a href="https://ec.europa.eu/newsroom/article29/items/611236" target="_blank" rel="noopener noreferrer">WP248 Guidelines on DPIAs</a>; as a practical rule, meeting two or more of those criteria is a strong signal that you need one.</p>

<h3>UK ICO Screening Criteria</h3>
<p>The UK Information Commissioner's Office publishes a plain-English <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/" target="_blank" rel="noopener noreferrer">DPIA screening checklist</a> that covers the GDPR triggers plus UK-specific additions such as processing of children's data for online services, invisible processing, and the use of innovative technology. If any item in the ICO list applies, a DPIA is expected — and the ICO has been explicit that skipping a required DPIA is itself a breach of the accountability principle, not just a paperwork issue.</p>

<h3>US State Law "Data Protection Assessments"</h3>
<p>Several US state laws now require a similar assessment when processing presents a heightened risk of harm — including targeted advertising, the sale of personal data, profiling with legal effects, and processing of sensitive data. California, Colorado, Connecticut, Virginia, Texas, and Oregon have each codified a version of this requirement. The scope and documentation expectations vary, but drafting one DPIA that satisfies the most demanding regime (typically the EU GDPR) will usually cover your US-state obligations as well, with a short appendix for state-specific elements such as sale/share opt-outs under the CCPA.</p>

<h2>Who Should Be Involved</h2>
<p>A DPIA is a team sport. The person who owns the outcome is usually the controller — in a startup, that is typically the founder, product lead, or engineering lead proposing the processing. They are the ones ultimately accountable for the decision to proceed.</p>
<p>Other required or recommended participants include the Data Protection Officer (DPO) if you have appointed one, because Article 35(2) specifically requires that you seek the DPO's advice and record it. Product and engineering leads describe the data flow. Security provides the threat model. Legal or privacy counsel flags regulatory edges. Where the risk is significant or the processing touches vulnerable groups, Article 35(9) requires you to "seek the views of data subjects or their representatives" — in practice that often means a user research session, a customer advisory board, or a short survey.</p>
<p>For most SaaS or app teams running a DPIA for the first time, a single two-hour working session with product, engineering, and a privacy-literate lawyer produces 80% of the answers. The rest is written up and circulated for comment.</p>

<h2>How to Conduct a DPIA: A Seven-Step Process</h2>
<p>The EDPB's guidelines describe the DPIA as an iterative cycle rather than a one-off form. The seven steps below follow that cycle and mirror the structure of the CNIL's open-source <a href="https://www.cnil.fr/en/privacy-impact-assessment-pia" target="_blank" rel="noopener noreferrer">PIA software</a>, which is a useful free tool if you want something more rigorous than a spreadsheet.</p>
<ol>
<li><strong>Describe the processing.</strong> Write a clear, one-page summary: what data, from whom, for what purpose, by what means, stored where, for how long, shared with whom, and under which lawful basis. If you cannot write this in plain language, you are not ready to assess it.</li>
<li><strong>Assess necessity and proportionality.</strong> For each data element, ask whether the purpose could be achieved with less data, with pseudonymous data, with a shorter retention period, or with aggregated rather than individual-level data. Record the answers — this is the single section regulators most often read.</li>
<li><strong>Identify risks to individuals.</strong> Think about specific harms: identity theft from a breach, discrimination from a biased model, chilling effects from monitoring, loss of control over one's data, physical safety risk for sensitive groups. Rate each by likelihood and severity.</li>
<li><strong>Identify existing and planned safeguards.</strong> Walk through technical controls (encryption at rest and in transit, access controls, logging, pseudonymization, minimization), organizational controls (training, policies, vendor due diligence, breach response), and contractual controls (data processing agreements, onward-transfer clauses).</li>
<li><strong>Evaluate residual risk.</strong> After safeguards, is the risk low, medium, or high? If residual risk is still high and you cannot reduce it further, Article 36 requires prior consultation with your supervisory authority before you begin processing.</li>
<li><strong>Consult stakeholders.</strong> Get written input from the DPO, seek the views of affected individuals where required, and — depending on your governance — obtain sign-off from legal, security, and the business owner.</li>
<li><strong>Monitor and review.</strong> Set a calendar review (annual is typical, but sooner if the processing changes). Update the DPIA whenever you add a new data source, change a vendor, repurpose the data, or deploy new automated decision-making.</li>
</ol>
<p>Plan for the end-to-end effort to take one to three weeks of calendar time for a focused SaaS feature, longer for anything involving health data, children, biometrics, or automated decisions with legal effects.</p>

<h2>What to Include in Your DPIA Template</h2>
<p>Regulators and enterprise procurement teams expect specific sections. A useable DPIA template has the following blocks:</p>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
<thead><tr style="background:#eef2ff;"><th style="text-align:left;padding:8px;border:1px solid #cbd5e1;">Section</th><th style="text-align:left;padding:8px;border:1px solid #cbd5e1;">What goes here</th></tr></thead>
<tbody>
<tr><td style="padding:8px;border:1px solid #cbd5e1;">Owner &amp; date</td><td style="padding:8px;border:1px solid #cbd5e1;">Named controller, DPO, reviewers, version, last-updated date.</td></tr>
<tr><td style="padding:8px;border:1px solid #cbd5e1;">Description of processing</td><td style="padding:8px;border:1px solid #cbd5e1;">Nature, scope, context, purposes, lawful basis, data categories, data subjects, retention, recipients, transfers.</td></tr>
<tr><td style="padding:8px;border:1px solid #cbd5e1;">Necessity &amp; proportionality</td><td style="padding:8px;border:1px solid #cbd5e1;">Justification that each data element and each purpose is necessary and proportionate; alternatives considered.</td></tr>
<tr><td style="padding:8px;border:1px solid #cbd5e1;">Risk assessment</td><td style="padding:8px;border:1px solid #cbd5e1;">Identified risks, likelihood, severity, inherent risk score.</td></tr>
<tr><td style="padding:8px;border:1px solid #cbd5e1;">Mitigations</td><td style="padding:8px;border:1px solid #cbd5e1;">Technical, organizational, and contractual measures. Link to <a href="/blog/what-is-data-processing-agreement-dpa-guide">DPA</a> where relevant.</td></tr>
<tr><td style="padding:8px;border:1px solid #cbd5e1;">Residual risk &amp; sign-off</td><td style="padding:8px;border:1px solid #cbd5e1;">Final risk rating, approvers, consultation outcome, next review date.</td></tr>
</tbody>
</table>
<p>Keep it under fifteen pages if you can. A forty-page DPIA that nobody reads is worse than a six-page one that captures the real decisions. Regulators who have reviewed thousands of assessments value clarity over length.</p>

<h2>Common Mistakes That Invalidate a DPIA</h2>
<p>Most DPIAs that get criticized in audits share the same flaws, and they are avoidable once you know to look for them.</p>
<ul>
<li><strong>Running the DPIA after go-live.</strong> Article 35(1) requires the assessment "prior to the processing." If the product is already live and you are writing the DPIA to backfill compliance, say so openly, document the compensating controls, and treat it as the baseline for a proper review — but do not pretend it happened first.</li>
<li><strong>Treating it as a privacy-policy exercise.</strong> A DPIA is internal risk documentation, not user-facing notice. It should describe the things you <em>chose not to do</em>, the alternatives you weighed, and the residual risks you accepted. A polished <a href="/privacy-policy-generator">privacy policy</a> alone does not substitute for a DPIA.</li>
<li><strong>Vague risk descriptions.</strong> "Potential for data breach" is not a risk statement. Name the threat actor, the data element, the likely harm, and the affected population: "Credential stuffing attack exposes health-condition flags on approximately 40,000 US residents, leading to insurance discrimination."</li>
<li><strong>No plan for residual-high risk.</strong> If you conclude that the residual risk is still high and you proceed anyway without consulting the supervisory authority under Article 36, the DPIA actually increases your exposure — you have documented that you knew.</li>
<li><strong>Never updated.</strong> A DPIA dated three years ago for a feature that now uses a new AI vendor and a new data lake is stale evidence. Calendar a review.</li>
<li><strong>Missing DPO consultation.</strong> Article 35(2) requires that you "seek the advice of the data protection officer, where designated, when carrying out a data protection impact assessment." Write down the DPO's input and your response to it.</li>
</ul>

<h2>When (and How) to Consult a Supervisory Authority</h2>
<p>Under Article 36, if a DPIA concludes that the processing would still result in a high risk in the absence of measures taken by the controller to mitigate the risk, you must consult your supervisory authority before you start. The authority has up to eight weeks (extendable by six) to provide written advice. This is not common — most DPIAs conclude with acceptable residual risk — but it matters when you hit it, because proceeding without the consultation is one of the cleaner routes to a <a href="https://gdpr-info.eu/issues/fines-penalties/" target="_blank" rel="noopener noreferrer">GDPR Article 83(4) fine</a> of up to €10 million or 2% of worldwide annual turnover, whichever is higher.</p>
<p>If you think consultation may be required, do not guess — call it early with your DPO, and budget the consultation timeline into your launch plan.</p>

<h2>DPIA and Cross-Border Data Transfers</h2>
<p>If your processing involves transfers of personal data outside the EEA or the UK, your DPIA should reference the transfer mechanism you rely on — Standard Contractual Clauses, the EU-US Data Privacy Framework, binding corporate rules, or an Article 49 derogation — and the outcome of the corresponding Transfer Impact Assessment. The two assessments are related but distinct: the DPIA covers the overall processing, the TIA covers the specific transfer risk. Most teams keep them as two linked documents so they can be updated independently.</p>
<p>For US-focused teams, similar diligence applies to vendors that subprocess outside your home jurisdiction. Pair the DPIA with a properly signed <a href="/blog/do-you-need-a-dpa-in-2026">data processing agreement</a> for every processor handling personal data on your behalf.</p>

<h2>How Often Should You Review a DPIA?</h2>
<p>There is no fixed regulatory cadence, but the EDPB and most national authorities recommend review at least annually, and immediately when any of the following happens: a new data source is added, a new vendor joins the chain, the retention period changes, a new automated decision is deployed, the user population expands to a new jurisdiction, or a security incident reveals a flaw in the assumed controls. Treat the review as a short exercise — confirm the description still matches reality, re-score the risks, update mitigations, and re-sign. A 30-minute review on the calendar is worth far more than a six-month rewrite every three years.</p>
<p>For broader privacy hygiene, pair your DPIA program with clear processes for <a href="/blog/how-to-respond-to-dsar-gdpr-ccpa-2026">responding to data subject access requests</a> and maintaining a published policy with your <a href="/privacy-policy-generator">privacy policy generator</a>.</p>

<h2>Frequently Asked Questions</h2>

<h3>Is a DPIA required for every product that processes personal data?</h3>
<p>No. A DPIA is only required where the processing is "likely to result in a high risk to the rights and freedoms of natural persons." Simple activities — a contact form, a newsletter signup, or basic analytics — generally do not require one. Use a short screening questionnaire to decide, and document the decision either way.</p>

<h3>Can a DPIA be combined with other assessments?</h3>
<p>Yes. A single assessment can combine the DPIA, a Legitimate Interest Assessment where you rely on Article 6(1)(f), and a Transfer Impact Assessment for cross-border transfers, as long as each element is clearly identifiable. Many privacy teams maintain one working document per processing activity.</p>

<h3>Does a small business need a DPIA?</h3>
<p>Company size is not the test — risk is. A two-person startup building a health-tracking app for children needs a DPIA; a fifty-person company running a basic payroll system usually does not. The GDPR does provide some easing for small organizations elsewhere, but Article 35 applies to any controller carrying out high-risk processing.</p>

<h3>What happens if we do not complete a required DPIA?</h3>
<p>Failure to carry out a required DPIA is an infringement of Article 35 and is subject to the lower tier of administrative fines under Article 83(4) — up to €10 million or 2% of worldwide annual turnover, whichever is higher. In practice, regulators typically use it as part of a broader accountability failure rather than as a standalone fine, but it is well within their powers.</p>

<h3>Can we reuse a DPIA across similar products?</h3>
<p>Yes, if the processing is genuinely similar. Article 35(1) allows a single DPIA to address "a set of similar processing operations that present similar high risks." In practice, a template with product-specific appendices works well for companies shipping multiple apps on the same data infrastructure.</p>

<h3>Does the ICO or another authority have to approve our DPIA?</h3>
<p>No approval is required for a standard DPIA. You only need to consult the supervisory authority under Article 36 when residual risk remains high after mitigations. For everyday DPIAs, you document the decision internally and keep it on file.</p>

<h3>How does a DPIA relate to a privacy policy?</h3>
<p>They serve different audiences. A DPIA is internal, written for regulators and accountable stakeholders, and documents the decisions you made. A <a href="/blog/privacy-policy-vs-terms-of-service-whats-the-difference">privacy policy</a> is external, written for users, and communicates how their data is handled. Doing the DPIA well often improves the privacy policy because you understand the processing more precisely.</p>

<p><em>This article is for informational purposes only and is not legal advice. Consult a qualified attorney for your specific situation.</em></p>
