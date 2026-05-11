# legalpolicygen.com — Site Context

> **URL**: https://legalpolicygen.com
> **Stack**: Vite + React + Markdown content
> **Niche**: Free legal-document generators + plain-English guides
> **Audience**: SaaS founders, indie devs, small business owners, e-commerce sellers

## 🎤 Brand Voice

- **Tone**: Practical, plain-English, demystifying. Like a lawyer-friend who answers in 2 paragraphs instead of 20 pages.
- **Style**: Lead with the practical question. Bullets for requirement checklists. Avoid Latin or legalese.
- **Address**: Second person ("you"). Audience is business owners, not lawyers.
- **Hard rule**: **Never offer personalized legal advice.** Every post must include the disclaimer block.
- **Citations**: Government sources (FTC, GDPR official text, state AG pages, EU Commission). Case law from court records, not legal-marketing blogs.

## 🔗 Internal Link Map (28 generators as of 2026-05)

- `/privacy-policy-generator`, `/tos-generator`, `/terms-of-service-generator`
- `/cookie-policy-generator`, `/cookie-banner-generator`
- `/dmca-generator`, `/eula-generator`, `/nda-generator`, `/sla-generator`, `/dpa-generator`, `/aup-generator`
- `/disclaimer-generator`, `/affiliate-disclaimer-generator`
- `/refund-policy-generator`, `/shipping-policy-generator`
- `/hipaa-policy-generator`, `/data-breach-policy-generator`, `/employee-privacy-policy-generator`
- `/ai-ethics-policy-generator`, `/newsletter-policy-generator`, `/social-media-policy-generator`
- `/accessibility-statement-generator`
- Platform-specific: `/shopify-privacy-policy-generator`, `/squarespace-privacy-policy-generator`, `/wix-privacy-policy-generator`, `/webflow-privacy-policy-generator`, `/woocommerce-privacy-policy-generator`
- `/robots-txt-generator`
- Tools: `/compliance-checker`, `/bundle`

## 🎯 Content Pillars

| Pillar | Topics |
|---|---|
| Privacy Compliance | GDPR, CCPA, state privacy laws, cookie consent |
| E-commerce Legal | Refund/return, shipping, terms, platform-specific |
| Workplace/HR | NDA, employee privacy, social media policy |
| AI Compliance | EU AI Act, AI ethics, data training |
| Health | HIPAA |
| Copyright/IP | DMCA |

## 📝 Frontmatter Convention

```yaml
---
slug: 'kebab-case'
title: 'Title with primary keyword'
date: 'YYYY-MM-DD'
excerpt: 'one-line summary 140-160 chars'
---
```

Body is HTML with an inline SVG hero banner at the top.

## ⚠️ Required Disclaimer Block

```html
<p><em>This article is for general informational purposes only and is not legal advice. Laws and regulations change frequently. Consult a qualified attorney for advice specific to your situation.</em></p>
```
