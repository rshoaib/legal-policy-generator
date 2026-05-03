---
slug: 'coppa-compliance-checklist-websites-apps'
title: 'COPPA Compliance Checklist for Websites and Apps (2026 Guide)'
date: '2026-04-10'
excerpt: 'COPPA applies to any website or app that collects data from children under 13. With sweeping 2025 rule amendments and an April 2026 compliance deadline, here is the complete COPPA compliance checklist for website owners and app developers.'
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" role="img" aria-label="COPPA compliance banner" style="width:100%;height:auto;border-radius:12px;margin-bottom:24px;display:block;"><defs><linearGradient id="g_o_437f" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fcd34d"/></linearGradient></defs><rect width="1200" height="360" fill="url(#g_o_437f)"/><circle cx="23" cy="162" r="6" fill="#1e3a8a" fill-opacity="0.23"/><circle cx="299" cy="230" r="6" fill="#1e3a8a" fill-opacity="0.29"/><circle cx="383" cy="162" r="5" fill="#1e3a8a" fill-opacity="0.29"/><circle cx="979" cy="318" r="3" fill="#1e3a8a" fill-opacity="0.17"/><circle cx="23" cy="66" r="5" fill="#1e3a8a" fill-opacity="0.31"/><circle cx="555" cy="78" r="3" fill="#1e3a8a" fill-opacity="0.39"/><circle cx="1071" cy="74" r="5" fill="#1e3a8a" fill-opacity="0.29"/><circle cx="3" cy="46" r="6" fill="#1e3a8a" fill-opacity="0.33"/><circle cx="23" cy="322" r="7" fill="#1e3a8a" fill-opacity="0.27"/><circle cx="843" cy="54" r="6" fill="#1e3a8a" fill-opacity="0.31"/><circle cx="367" cy="242" r="7" fill="#1e3a8a" fill-opacity="0.21"/><circle cx="211" cy="190" r="4" fill="#1e3a8a" fill-opacity="0.27"/><circle cx="631" cy="282" r="4" fill="#1e3a8a" fill-opacity="0.41"/><circle cx="667" cy="22" r="5" fill="#1e3a8a" fill-opacity="0.31"/><circle cx="1023" cy="242" r="5" fill="#1e3a8a" fill-opacity="0.25"/><circle cx="979" cy="182" r="6" fill="#1e3a8a" fill-opacity="0.41"/><circle cx="311" cy="338" r="7" fill="#1e3a8a" fill-opacity="0.41"/><circle cx="859" cy="102" r="6" fill="#1e3a8a" fill-opacity="0.39"/><g transform="translate(538,187)" stroke="#1e3a8a" stroke-width="5" fill="#ffffff" fill-opacity="0.55" stroke-linejoin="round"><path d="M0 -115 L100 -85 V30 Q100 115 0 115 Q-100 115 -100 30 V-85 Z"/><path d="M-50.0 10 L-10.0 50.0 L60.0 -40.0" fill="none" stroke-width="8" stroke-linecap="round"/></g><g transform="translate(864,174) rotate(-30)" stroke="#1e3a8a" stroke-width="5" fill="#ffffff" fill-opacity="0.55" stroke-linejoin="round"><rect x="-65.0" y="-9.1" width="117.0" height="18.2" rx="4"/><path d="M52.0 -9.1 L84.5 0 L52.0 9.1 Z" fill="#1e3a8a"/><line x1="-65.0" y1="-9.1" x2="-65.0" y2="9.1" stroke-width="10"/></g></svg>

Each of these four areas maps directly to a COPPA requirement. If you operate a child-directed service, each should be specifically addressed in your compliance review.

## COPPA for Mobile Apps: Additional Requirements

If you operate a mobile app that is directed to children, or where children are among the users, COPPA applies with equal force. App-specific considerations:

**App store categorization:** Apple and Google require apps in their kids' categories to comply with COPPA. Listing your app in a kids' section while collecting data without parental consent is high-visibility non-compliance.

**Third-party SDKs:** This is the leading source of COPPA violations in apps. Many analytics and advertising SDKs collect persistent identifiers (advertising IDs, device fingerprints) automatically. You are responsible for what these SDKs do inside your app, even if you did not build the data collection yourself.

Pixalate's Q2 2024 research found child-directed apps are **50% more likely** to transmit both GPS and IP address data in the open programmatic ad bid stream compared to non-child-directed apps. ([Pixalate, 2024](https://www.pixalate.com/blog/q2-2024-google-vs-apple-coppa-risk-scorecard-report)). That transmission, without parental consent, is a COPPA violation.

**App-specific checklist additions:**

- ☐ Review each third-party SDK for data collection behavior — advertising IDs, GPS, device fingerprinting
- ☐ Use child-safe versions of analytics SDKs where available (for example, Firebase Analytics with the COPPA flag enabled)
- ☐ Disable advertising ID collection for users in kids' apps
- ☐ Ensure your [privacy policy](/privacy-policy) specifically covers in-app data collection, not just your website

## Safe Harbor Programs: Reducing Enforcement Exposure

COPPA includes a safe harbor provision: operators participating in FTC-approved self-regulatory programs receive a presumption of compliance and reduced enforcement risk. The three main programs are:

| Program | Best for | Key requirement |
|---------|----------|-----------------|
| **CARU** (Children's Advertising Review Unit) | Consumer products, entertainment apps, general websites | Annual review, fee-based |
| **ESRB Privacy Certified** | Video games, gaming platforms | Annual audit, fee-based |
| **TrustArc** | Enterprise SaaS, B2B, general digital services | Annual audit, fee-based |

Under the 2025 rule amendments, safe harbor programs must now publish annual transparency reports of their compliance reviews — making the protection they offer more credible and meaningful.

For child-directed services or high-traffic platforms with child users, a safe harbor program is worth serious consideration. It demonstrates good-faith compliance and provides a defined process that regulators view favorably.

## Related Legal Documents

COPPA compliance intersects with several other legal documents your site should have in place:

- [Privacy Policy](/privacy-policy) — required by COPPA and must include child-directed disclosures
- [Terms of Service](/terms-of-service) — should include age restrictions and parental consent language
- [Cookie Policy](/cookie-policy) — cookies can be persistent identifiers under COPPA; your cookie practices must align
- [GDPR for Small Businesses Guide](/blog/gdpr-for-small-business-plain-english-guide-2026) — GDPR and COPPA requirements overlap significantly for sites with EU visitors
- [CCPA vs GDPR Explained](/blog/ccpa-vs-gdpr-differences-explained) — state laws, including CCPA's under-16 provisions, layer on top of COPPA
- [Privacy Policy for Mobile Apps](/blog/privacy-policy-mobile-apps-ios-android) — app-specific privacy policy requirements beyond COPPA
- [AI Privacy Policy Guide](/blog/ai-privacy-policy-what-your-app-needs) — if your service uses AI and may be used by children, you face compounding compliance obligations

## FAQ

**Q: Does COPPA apply to my site if I have an age gate blocking users under 13?**

A: An age gate reduces your exposure but does not automatically satisfy COPPA. The FTC applies a totality-of-the-circumstances test to determine if a site is "directed to children." If the content, design, or subject matter would appeal to children, an age gate alone is not a complete defense. That said, a well-implemented age gate paired with data deletion for users under 13 is strong evidence of good-faith compliance.

**Q: What counts as "actual knowledge" that a user is under 13?**

A: The FTC has found actual knowledge in several ways: a user self-reporting a birth date under 13 during registration; a parent contacting the operator to report their child has an account; or internal analytics showing a significant portion of users are under 13. The 2024 TikTok lawsuit alleged actual knowledge based on internal data showing millions of users were under 13 despite the platform's stated age restriction.

**Q: I operate a B2B SaaS company — does COPPA apply to me?**

A: Generally no, if your service is sold to and used solely by businesses. But if any business customer uses your service to collect or process data from children under 13 — for example, a school using your learning management system, or a children's brand using your CRM — COPPA can apply to that use case. The 2025 rule amendments clarify that schools can authorize COPPA compliance on behalf of parents for educational purposes only, not commercial use.

**Q: What should I do if I receive an FTC civil investigative demand?**

A: A civil investigative demand (CID) is a pre-lawsuit investigation tool. You are required to preserve all documents specified, respond within the stated deadline, and not destroy potentially relevant records. Engage a privacy attorney immediately. Do not respond to a CID without legal counsel. Document preservation obligations are not negotiable.

**Q: What is the April 22, 2026 compliance deadline, and what happens if I miss it?**

A: April 22, 2026 is the deadline for implementing the 2025 COPPA rule amendments — specifically the ban on monetizing children's data without active parental opt-in, expanded personal information definitions, and mandatory data retention limits. Missing the deadline creates regulatory exposure. The FTC generally pursues enforcement based on patterns of violations and harm to children rather than purely technical deadline misses. The correct response is to remediate as quickly as possible and document your compliance efforts.

## Generate Your COPPA-Ready Privacy Policy

A COPPA-compliant [privacy policy](/privacy-policy) must include specific disclosures about children's data collection, parental rights, and parent contact methods — disclosures that a standard privacy policy template will not include.

Our free Privacy Policy Generator creates a policy covering COPPA, GDPR, CCPA, and more in under two minutes. No signup required.

**[Generate your COPPA-ready privacy policy →](/)**

---

*Disclaimer: This article is for informational purposes only and does not constitute legal advice. Consult a qualified attorney for advice specific to your jurisdiction and circumstances.*
