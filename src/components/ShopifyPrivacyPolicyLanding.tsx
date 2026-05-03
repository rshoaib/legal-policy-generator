'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ToolFAQ, type FAQItem } from './ToolFAQ'

const SHOPIFY_FAQS: FAQItem[] = [
  {
    question: 'Is a privacy policy legally required for a Shopify store?',
    answer:
      'Yes. Every Shopify store collects personal data (name, email, shipping address, payment details) which legally requires a privacy policy under GDPR (EU/UK customers), CCPA (California), and most US state privacy laws. Shopify itself requires you to publish one in your store settings before processing live orders.',
  },
  {
    question: "Doesn't Shopify provide a privacy policy template already?",
    answer:
      "Shopify provides a basic template you can paste into Settings → Policies, but it covers Shopify's own data practices generically and does not disclose any third-party apps you have installed (Klaviyo, Privy, Yotpo, Hotjar, etc.). Each app that processes customer data must be disclosed individually under GDPR Article 13 and CCPA, which the Shopify template does not do.",
  },
  {
    question: 'Where do I add the privacy policy in Shopify?',
    answer:
      'In your Shopify admin, go to <strong>Settings → Policies → Privacy policy</strong>. Paste the generated HTML into the editor and click <strong>Save</strong>. Shopify automatically links the policy at checkout and in the storefront footer if your theme supports it.',
  },
  {
    question: 'Do I need to disclose every Shopify app I use?',
    answer:
      'Yes. Any app that processes personal data on your behalf (email marketing, reviews, abandoned cart recovery, analytics, popups, chat) is a <strong>data processor</strong> under GDPR and must be named in your privacy policy along with the categories of data it processes and the legal basis for sharing.',
  },
  {
    question: 'Does my Shopify store need a Data Processing Agreement (DPA) too?',
    answer:
      'If you process personal data of EU residents, GDPR Article 28 requires a DPA between you (controller) and any third-party app (processor). Shopify provides a DPA you can accept in your account; most major apps do too. For B2B Shopify stores, you may also need to provide a DPA to your own customers.',
  },
  {
    question: 'What about cookies and tracking on Shopify?',
    answer:
      'Shopify Analytics and most apps drop cookies. If you sell to EU/UK customers, you need a cookie consent banner that lets users reject non-essential cookies before they are set, plus a Cookie Policy that itemizes each tracking technology.',
  },
]

export const ShopifyPrivacyPolicyLanding: React.FC = () => {
  const router = useRouter()

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🛍️ Free Shopify Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2rem' }}>
          Generate a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant privacy policy</strong> tailored to Shopify stores in under 5 minutes. Covers Shopify Pay, Analytics, your installed apps, and customer rights — paste straight into Settings → Policies. No signup, no email gate.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate My Shopify Privacy Policy — Free →
        </button>
      </section>

      {/* Why Shopify Stores Specifically Need This */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Shopify Stores Need a Tailored Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            The default Shopify privacy policy template is a generic starting point — it covers Shopify's own data handling but not the dozens of integrations a real store actually runs. Under GDPR Article 13 and CCPA, every third-party processor that touches customer data must be named in your policy. Stores running just Shopify out-of-the-box typically still need to disclose at least four distinct data flows:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Shopify Pay & Shop Pay:</strong> Payment data is processed by Shopify Payments (or Stripe / PayPal if you use them). Your policy must name the processor and the legal basis for the transfer.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Shopify Analytics:</strong> Tracks visitor behavior, customer journey, and conversion events. Sets cookies. Must be disclosed alongside cookie consent disclosures for EU/UK visitors.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Order fulfillment & shipping:</strong> Customer addresses are shared with shipping providers (USPS, DHL, ShipStation, etc.) — each one is a data processor that needs disclosure.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Marketing & remarketing pixels:</strong> If you run Meta, Google, or TikTok ads, the corresponding pixels collect visitor IDs and event data. Each one needs to be named.</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Then there are the apps. The average Shopify store runs 6+ apps, and almost all of them process some category of personal data.
          </p>
        </div>
      </section>

      {/* Common Shopify Apps That Need Disclosure */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Common Shopify Apps That Need Privacy Policy Disclosure</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you have any of these installed, your policy must name them, describe what data they receive, and link to their own privacy policy:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Klaviyo, Mailchimp, Omnisend</strong> — email marketing, captures emails + behavior</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Privy, Justuno, OptiMonk</strong> — popups + email capture</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Yotpo, Loox, Judge.me</strong> — review platforms, capture customer reviews + emails</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Recart, Klaviyo SMS, Postscript</strong> — SMS marketing, requires phone number consent</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Hotjar, FullStory, Microsoft Clarity</strong> — session recording, captures full visitor sessions (heavy GDPR implications)</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Tidio, Gorgias, Re:amaze</strong> — chat / helpdesk, captures chat transcripts</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Loyalty / referral apps (Smile.io, ReferralCandy)</strong> — capture purchase history + social IDs</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Our generator includes a checklist of common apps so you don't miss anything when filling in your data practices.
          </p>
        </div>
      </section>

      {/* How to Add to Shopify */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How to Add Your Privacy Policy to Shopify (3 Steps)</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Generate your policy</strong> using the form below. Fill in your store name, contact email, the apps you use, and the regulations you need to cover (GDPR, CCPA, both).
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Copy the generated HTML</strong> from the output panel.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              In your Shopify admin, navigate to <strong>Settings → Policies → Privacy policy</strong>. Paste the HTML into the editor, click <strong>Save</strong>. Shopify automatically links the policy at checkout and in the storefront footer (depending on your theme).
            </li>
          </ol>
          <p style={{ marginBottom: 0 }}>
            For full coverage, also paste the matching Refund Policy, Terms of Service, and Shipping Policy into the same Policies section. We have free generators for each — see the links below.
          </p>
        </div>
      </section>

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Other Policies Your Shopify Store Likely Needs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/refund-policy-generator" style={{ color: 'var(--accent-primary)' }}>Refund Policy Generator</Link> — required by Shopify for live stores</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/terms-of-service-generator" style={{ color: 'var(--accent-primary)' }}>Terms of Service Generator</Link> — defines the buyer-seller relationship</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/shipping-policy-generator" style={{ color: 'var(--accent-primary)' }}>Shipping Policy Generator</Link> — sets buyer expectations on delivery</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-banner-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Banner Generator</Link> — needed for EU / UK visitors</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-policy-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Policy Generator</Link> — itemizes every tracking technology</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/dpa-generator" style={{ color: 'var(--accent-primary)' }}>DPA Generator</Link> — for B2B Shopify stores serving EU customers</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/bundle" style={{ color: 'var(--accent-primary)' }}>Starter Kit</Link> — generate all of the above at once</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={SHOPIFY_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create My Shopify Privacy Policy Now →
        </button>
      </section>
    </div>
  )
}
