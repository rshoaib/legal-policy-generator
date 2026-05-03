# SEO Audit — Keywords, Content Gaps & Competitor Benchmark

**Date:** 2026-05-03
**Site:** https://legalpolicygen.com
**Companion to:** `seo-audit-2026-05-01.md` (technical/on-page audit, 2 days prior)

This audit is **deliberately scoped** to keyword opportunities, content gaps, and competitor benchmarking — the three areas the 2026-05-01 audit didn't cover. For technical and on-page issues (duplicate `<title>` tags, missing canonicals, hreflang, etc.) refer to that prior report; the P0-P3 action plan there still stands.

---

## Executive summary

LegalPolicyGen has built strong site foundations (~141 indexable pages, 56 blog posts, 23 generators, 60 industry pages, solid framework choices) but is competing in a category dominated by paid players with deep pockets — Termly (2M+ businesses, ~$14-20/mo), Iubenda (international focus, ~$29/yr), and TermsFeed (one-time fee, clause-level). The biggest strategic opportunity isn't to out-rank them on head terms like "privacy policy generator" — that's a years-long, link-budget-heavy play. It's to **own the "free + 2026 + niche" intersection**: platform-specific generators, freshly-regulated topics (CCPA ADMT, EU AI Act, US state privacy laws), and direct comparison content the paid players can't credibly write.

**Top 3 priorities:**
1. **Add 2026-fresh regulatory content** — ADMT, CCPA cybersecurity audits, EU AI Act for SaaS, and the new state laws (TDPSA, etc.) are already in the blog but underexposed; build a 2026 hub page that links to them and rank for the regulatory shift.
2. **Build platform-specific landing pages** — "Privacy policy for Shopify / WooCommerce / Wix / Webflow / Squarespace" — each one a generator landing page targeting platform + policy intent. Termly and Enzuzo already rank for these; the free angle is wide open.
3. **Publish "Termly alternative" / "free vs paid" comparison content** — paid competitors structurally cannot do this credibly; you can. High commercial intent, low competition for the free positioning.

**Overall assessment:** Strong foundation, real growth opportunity. The technical fixes from 2026-05-01 are still the unblocker — without canonical tags and clean meta on the generator pages, ranking improvements from new content won't compound.

---

## Keyword opportunity table

20 opportunities across primary, mid-tail, long-tail, and question intents. Difficulty and opportunity scores are estimates based on SERP composition, competitor presence, and the free/no-signup wedge LegalPolicyGen owns. For precise volume + difficulty data, connect Ahrefs or Semrush via MCP.

| # | Keyword | Est. difficulty | Opportunity | Current ranking* | Intent | Recommended content type |
|---|---------|-----------------|-------------|------------------|--------|--------------------------|
| 1 | privacy policy generator | Hard | Medium | Likely outside top 50 | Commercial | Existing landing — improve, don't create new |
| 2 | free privacy policy generator | Hard | High | Unknown | Commercial | Existing — emphasize "free, no signup" angle in title/H1 |
| 3 | terms of service generator | Hard | Medium | Unknown | Commercial | Existing landing |
| 4 | privacy policy for shopify | Moderate | High | Unknown | Commercial | New dedicated landing page |
| 5 | privacy policy for woocommerce | Moderate | High | Unknown | Commercial | New dedicated landing page |
| 6 | privacy policy for wix | Moderate | High | Unknown | Commercial | New dedicated landing page |
| 7 | privacy policy for squarespace | Moderate | High | Unknown | Commercial | New dedicated landing page |
| 8 | privacy policy for webflow | Easy | High | Unknown | Commercial | New dedicated landing page |
| 9 | gdpr compliance checklist 2026 | Moderate | High | Likely ranking (you have it) | Informational | Existing — refresh with 2026 enforcement updates |
| 10 | ccpa cybersecurity audit requirements | Easy | High | Probably zero | Informational | New blog post — fresh 2026 topic |
| 11 | california admt regulations 2026 | Easy | High | Probably zero | Informational | New blog post — brand-new regulation |
| 12 | eu ai act compliance saas 2026 | Easy | High | You have one (`eu-ai-act-compliance-saas-august-2026`) | Informational | Promote existing; build hub page |
| 13 | termly alternative free | Easy | High | Probably zero | Commercial | New comparison page — paid competitors can't write this credibly |
| 14 | iubenda alternative free | Easy | High | Probably zero | Commercial | New comparison page |
| 15 | termsfeed alternative | Easy | Medium | Probably zero | Commercial | New comparison page |
| 16 | privacy policy generator vs lawyer | Easy | Medium | Probably zero | Informational | New blog post — addresses buyer's biggest objection |
| 17 | how to write a privacy policy without a lawyer | Moderate | High | Unknown | Informational | Long-form guide — you may already have similar content |
| 18 | do i need a cookie banner for my website 2026 | Moderate | High | Unknown | Informational | Question-based blog post |
| 19 | what is automated decision-making technology gdpr | Easy | Medium | Probably zero | Informational | Blog post — feeds into AI/EU AI Act cluster |
| 20 | free legal documents for small business | Moderate | High | Unknown | Commercial | Hub/landing page — bundle existing 23 generators |

*Current rankings marked "Unknown" require a GSC export to confirm. The 2026-04-27 GSC fixes report notes the GSC integration is currently broken from the scheduled-task environment — see "What's blocking better data" section below.

---

## Content gap recommendations

Each gap below is a topic competitors rank for that you don't (or that the 2026 regulatory shift just opened up). Effort is from Quick win (1-2 hrs) → Substantial (multi-day).

### 1. Platform-specific generator landing pages — High priority

**Why it matters:** Termly, Enzuzo, GetTerms, and Shopify itself all rank for "[platform] privacy policy". You have 23 generators but zero are positioned by deployment platform. This is the single biggest commercial-intent gap.

**Recommended format:** New dedicated landing pages: `/shopify-privacy-policy-generator`, `/woocommerce-privacy-policy-generator`, `/wix-privacy-policy-generator`, `/webflow-privacy-policy-generator`, `/squarespace-privacy-policy-generator`. Each reuses your existing privacy policy generator engine but with platform-specific fields (Shopify Plan, WooCommerce extensions installed, etc.) and platform-specific schema markup.

**Effort:** Substantial — but high payoff. Each page should rank within 2-3 months because you'd be the only free option in many of these SERPs.

### 2. 2026 regulatory hub page — High priority

**Why it matters:** You have great fresh blog content — `bipa-compliance-illinois-biometric-privacy-saas-2026`, `eu-ai-act-compliance-saas-august-2026`, `tdpsa-texas-data-privacy-compliance-guide-2026`, `gdpr-article-30-ropa-guide-2026`, `how-to-conduct-dpia-gdpr-2026`, `chrome-extension-privacy-policy-guide-2026`, `app-store-privacy-labels-ios-google-play-2026`, `email-marketing-compliance-gdpr-can-spam-casl-2026`, `how-to-respond-to-dsar-gdpr-ccpa-2026`, `how-to-write-data-retention-policy-2026` — but no pillar page ties them together. A "/2026-privacy-compliance-guide" hub linking to all of these would build topic authority and rank for the head term.

**Recommended format:** Long-form pillar page (4000+ words) with table of contents linking to each child article.

**Effort:** Moderate — you have all the content; you're just stitching it together with a navigational frame.

### 3. Comparison content the paid players can't write — High priority

**Why it matters:** Termly cannot publish "Best free Termly alternative" without conflict of interest. You can. These are easy to rank for, high commercial intent, and they bring users at the bottom of the funnel who've already decided they don't want to pay.

**Recommended format:** Three comparison pages: `/termly-alternative`, `/iubenda-alternative`, `/termsfeed-alternative`. Each: honest feature comparison table, pricing comparison (their paid tier vs your free), and a "where they're better" section (builds trust).

**Effort:** Moderate — one solid afternoon each.

### 4. Cannibalization fixes — Quick win

**Why it matters:** The 2026-04-27 GSC fixes report flagged 3 cannibalization risks already; left unfixed they split ranking signals between near-duplicate URLs:

- `gdpr-vs-ccpa-key-differences` vs `ccpa-vs-gdpr-differences-explained`
- `how-to-write-refund-policy-ecommerce` vs `how-to-write-refund-policy`
- `what-is-an-acceptable-use-policy` vs `acceptable-use-policy-guide`

Plus the prior audit's flagged duplicate: `/tos-generator` vs `/terms-of-service-generator`.

**Recommended format:** Pick the better-performing URL of each pair (use GSC if available, else use word count + freshness as a proxy), 301 the loser to the winner.

**Effort:** Quick win — 30 min for the redirects, plus testing.

### 5. Industry pages: depth pass on the top 5 — Moderate priority

**Why it matters:** You have 60 industry/niche pages — that's a lot. Without GSC data we can't say which 5 are pulling the most traffic, but the Termly playbook (which you can see in their site structure) is to take their top-traffic industry pages and 5x the content depth: add industry-specific case studies, regulatory citations, FAQ schema, sample policy snippets. Most of yours are likely thin (under 1000 words) given the volume.

**Recommended format:** Identify top-5 industry pages by traffic (need GSC), expand to 1500-2500 words each with FAQ schema, related case studies, industry-specific regulatory references.

**Effort:** Moderate — 2-3 hours per page.

### 6. Funnel gap: comparison/decision content — Medium priority

**Why it matters:** Your blog is heavy on awareness ("What is GDPR") and consideration ("How to write X"), light on decision-stage content. Buyers researching whether to use a generator vs hire a lawyer vs DIY don't have your perspective in their results.

**Recommended format:**
- "Privacy policy generator vs lawyer: when do you need each?" (decision-stage)
- "Are free privacy policy generators legally compliant?" (overcomes the biggest objection to your free model)
- "Generator vs template vs writing it yourself" (three-way comparison)

**Effort:** Quick win each — 1-2 hours per article.

---

## Competitor SEO comparison

Three competitors picked because they're the dominant ranking players in your category and represent three distinct positioning angles (premium-paid, international-paid, one-time-fee). I'd add freeprivacypolicy.com as a fourth — they're the closest direct competitor on the "free" wedge — but the skill calls for 2-3, so it's noted in the notes column.

| Dimension | LegalPolicyGen (you) | Termly | Iubenda | TermsFeed | Winner |
|-----------|----------------------|--------|---------|-----------|--------|
| Generator count | 23 | ~10 | ~12 | ~15 | **You** |
| Free tier | Fully free, no signup | Limited free, signup required | Severely limited free | Free generator, paid clauses | **You** |
| Privacy laws covered | GDPR, CCPA (per default desc) | 30 laws | Major frameworks | GDPR, CCPA, COPPA, etc. | Termly |
| Blog post count (visible) | 56 | Hundreds | Hundreds | Hundreds | Competitors |
| Content depth (avg) | Mixed — some thin | Long-form, well-structured | Long-form, multilingual | Long-form, clause-heavy | Competitors |
| Brand authority | Solo project | 2M+ businesses | International leader | Established player | Competitors |
| Domain age | Newer | Established | Established | Established | Competitors |
| Schema markup | WebSite, Org, FAQPage (industry pages), Article (blog) | Likely full schema suite | Likely full schema suite | Likely full schema suite | Competitors |
| Multilingual content | Client-side i18n, single URL — not crawlable as separate languages | Multiple language versions | Strong multilingual (their wedge) | Multiple language versions | Iubenda |
| SERP feature presence | Unknown | Featured snippets, PAA | Featured snippets | Featured snippets | Competitors |
| Platform-specific landing pages | Zero | Yes (Shopify, WP, Wix, etc.) | Yes | Yes | Competitors |
| "Free + no signup" positioning | Strongest in category | Cannot claim (signup required) | Cannot claim | Cannot fully claim | **You** |

**Where you have the wedge:**
- More generators than any major competitor
- Truly free — no signup, no email gate, no upsell at the end
- Unconstrained ability to write comparison content about competitors
- Faster shipping cycle (solo dev, weekly content pipeline already in place)

**Where competitors structurally beat you (and you shouldn't try to match):**
- Brand authority and backlinks — years of investment, not catchable in months
- Sales-team content (white papers, webinars) — wrong audience for your free model anyway

---

## Technical SEO checklist (delta only)

Most technical items are covered in the 2026-05-01 audit. Verifying current state on the homepage today, two of those P0 items appear to have made progress:

| Check | Status (2026-05-01) | Status (2026-05-03 — today) | Notes |
|-------|---------------------|------------------------------|-------|
| Duplicate `<title>` tags on homepage | FAIL | PASS (single `<title>` in head) | Looks fixed for homepage; haven't verified generator pages |
| Homepage canonical tag | FAIL | FAIL — still missing | No `<link rel="canonical">` in homepage HTML |
| hreflang server-rendered | FAIL | FAIL — still client-only | The `<SEO>` component is still `'use client'` |
| `BAILOUT_TO_CLIENT_SIDE_RENDERING` on homepage | WARNING | WARNING — still present | Visible in rendered HTML; risks crawler seeing empty content |
| Sitemap | PASS | PASS | 141 URLs |
| robots.txt | PASS (minimal) | PASS (minimal) | Still doesn't block `/history`, `/profile` |
| `og:site_name` | One tag | TWO TAGS now — `<meta name="og:site_name">` AND `<meta property="og:site_name">` | Minor — duplicate but not harmful |
| `<meta name="keywords">` | Present | Present (21 keywords) | Google ignores this since 2009; harmless but reads as amateur SEO |

**Action:** Don't re-do this section — the 2026-05-01 audit's P0/P1 list is still authoritative. Confirm whether the homepage duplicate-title fix is intentional and applies to generator pages too; if so, mark P0#1 from the prior audit as partially resolved.

---

## Prioritized action plan

### Quick wins (do this week)

| Action | Impact | Effort | Notes |
|--------|--------|--------|-------|
| 301 the 4 cannibalizing URL pairs to canonical winners | High | 30 min | `/tos-generator` → `/terms-of-service-generator`; pick winners for the 3 blog dupes via word count + freshness |
| Write `/termly-alternative` comparison page | High | 2 hrs | Honest comparison table, pricing comparison, "where they're better" section |
| Write `/iubenda-alternative` comparison page | High | 2 hrs | Same template |
| Build `/2026-privacy-compliance-guide` pillar page | High | 3 hrs | Stitch existing 2026 blog posts into a hub; no new writing needed |
| Add `noindex` to `/history` and `/profile` | Low | 5 min | Carryover from 2026-05-01 P1 list |
| Block `/history` and `/profile` in robots.txt | Low | 5 min | Carryover from 2026-05-01 P2 list |
| Remove the duplicate `<meta name="og:site_name">` (regression since prior audit) | Low | 5 min | Picked up on today's homepage fetch |

### Strategic investments (plan for this quarter)

| Action | Impact | Effort | Dependencies |
|--------|--------|--------|--------------|
| Build 5 platform-specific generator landing pages (Shopify, WooCommerce, Wix, Webflow, Squarespace) | Very high | Multi-day per page | Need P0 fixes from 2026-05-01 to land first, otherwise new pages inherit the same canonical/meta issues |
| Expand top-5 industry pages to 1500-2500 words each with FAQ schema | High | 2-3 hrs/page | Need GSC data to identify which 5 |
| Get GSC data flowing into the scheduled audit task | High | 2-4 hrs | Either run the CLI on Windows + drop reports into uploads, or provision GCP service-account credentials into the sandbox env (per 2026-04-27 GSC fixes report) |
| Migrate `<SEO>` client component to server-side `metadata` exports across all pages | Critical | 1-2 days | Carryover from 2026-05-01 P0; without this, all new content inherits the same on-page issues |
| Build out the 5 funnel-gap decision-stage articles (lawyer vs generator, free vs paid, etc.) | High | 1-2 hrs each | None |
| Add SoftwareApplication schema to all 23 generator pages | Medium | 4 hrs | Carryover from 2026-05-01 P3 |

---

## What's blocking better data

You can't make targeted SEO decisions without GSC numbers. The 2026-04-27 GSC-fixes report documents exactly why the scheduled GSC audit task currently produces zero-fix reports: the CLI lives at a Windows path the Linux sandbox can't see, and no service-account credentials are provisioned in the sandbox env.

**Two unblock paths:**
1. Run the GSC CLI manually on the Windows dev machine after each weekly run, and drop the report into the cowork uploads folder before the scheduled task fires.
2. Provision a GCP service-account JSON for the GSC API into the sandbox environment, then update the SEO scheduled task to read it and bypass the CLI.

Option 2 is the durable fix. Until either happens, every weekly fix run will continue to produce zero changes, and keyword/content priorities in *this* audit will remain estimates rather than data-backed claims.

---

## Sources

- [Best privacy policy generators in 2026 compared — Iubenda](https://www.iubenda.com/en/blog/best-privacy-policy-generators/)
- [Termly vs iubenda 2026 — Cybernews](https://cybernews.com/privacy-compliance-tools/termly-vs-iubenda/)
- [Termly vs TermsFeed 2026 — Cybernews](https://cybernews.com/privacy-compliance-tools/termly-vs-termsfeed/)
- [Best Termly Alternatives 2026 — Cybernews](https://cybernews.com/privacy-compliance-tools/top-termly-alternatives/)
- [Best Privacy Policy Generators for Websites 2026 — WPLegalPages](https://wplegalpages.com/blog/privacy-policy-generators/)
- [2026 Privacy Compliance Roadmap — Secure Privacy](https://secureprivacy.ai/blog/privacy-compliance-checklist-2026)
- [CCPA 2026 Website Compliance — Nixon Digital](https://www.nixondigital.io/blog/ccpa-compliance-in-2026/)
- [2026 Data Security and Privacy Compliance Checklist — O'Melveny](https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/)
- [Free Privacy Policy Generator — Termly](https://termly.io/products/privacy-policy-generator/)
- [Free Privacy Policy Template Generator — Free Privacy Policy](https://www.freeprivacypolicy.com/)
- Companion technical audit: `seo-reports/seo-audit-2026-05-01.md`
- GSC data blocker context: `reports/gsc-fixes-2026-04-27.md`
