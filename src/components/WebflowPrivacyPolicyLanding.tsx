'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ToolFAQ, type FAQItem } from './ToolFAQ'

const WEBFLOW_FAQS: FAQItem[] = [
  {
    question: 'Is a privacy policy legally required for a Webflow site?',
    answer:
      'Yes. Even a simple Webflow marketing site collects personal data through forms, analytics, and integrations, which legally requires a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. If you also run Webflow Ecommerce or Memberships, the obligation is even more explicit.',
  },
  {
    question: 'Where do I add the privacy policy on Webflow?',
    answer:
      'In the Webflow Designer, go to <strong>Pages → New Page → Static</strong>, title it "Privacy Policy", and paste the generated HTML into a <strong>Rich Text</strong> element or a custom <strong>Embed</strong> component. Then add a footer link pointing to /privacy-policy. For Webflow Ecommerce, link the policy from the cart and checkout pages.',
  },
  {
    question: 'What Webflow integrations need to be disclosed?',
    answer:
      'Any service that processes visitor data on your behalf must be named in the privacy policy. Common Webflow integrations: <strong>Webflow Forms</strong> (data sent to your email or Zapier), <strong>Webflow Ecommerce</strong> (Stripe, PayPal), <strong>Memberstack</strong> or <strong>Outseta</strong> for memberships, <strong>Mailchimp</strong> for email capture, <strong>Hotjar / Microsoft Clarity</strong> for session recording, <strong>Google Analytics</strong> or GA4, and <strong>Meta Pixel</strong>.',
  },
  {
    question: 'Does Webflow set cookies by default?',
    answer:
      'Webflow itself sets minimal cookies, but most Webflow sites add cookies via Google Analytics, Hotjar, Meta Pixel, or other custom code embeds. If your site serves EU/UK visitors, you need a cookie consent banner that lets users <strong>reject non-essential cookies before they are set</strong>.',
  },
  {
    question: 'My Webflow site uses Memberstack / Outseta — what do I disclose?',
    answer:
      "Both Memberstack and Outseta act as third-party data processors handling member accounts, authentication, and (in Outseta's case) billing. Each must be named in your privacy policy along with the categories of data they receive (name, email, payment info, account activity) and a link to their own privacy policy.",
  },
]

export const WebflowPrivacyPolicyLanding: React.FC = () => {
  const router = useRouter()

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🌊 Free Webflow Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2rem' }}>
          Generate a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant privacy policy</strong> for your Webflow site in under 5 minutes. Covers Webflow Forms, Webflow Ecommerce, Memberstack/Outseta, your installed integrations, and visitor rights — paste straight into a Webflow Rich Text element. No signup, no email gate.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate My Webflow Privacy Policy — Free →
        </button>
      </section>

      {/* Why Webflow Specifically */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Webflow Sites Need a Generator That Knows Your Stack</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Webflow itself doesn't collect much visitor data — but Webflow sites are usually a stack: Webflow plus Memberstack or Outseta for auth, plus Stripe via Webflow Ecommerce, plus Mailchimp for email, plus a session recorder, plus Google Analytics. Each one is a separate data processor. Under GDPR Article 13 and CCPA, every processor that touches visitor data must be named in your privacy policy along with the categories of data it processes.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Webflow Forms:</strong> Data is sent to your inbox, your CMS, or piped into Zapier — every destination is a separate disclosure.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Webflow Ecommerce:</strong> Stripe and PayPal handle payment data. Customer addresses and order history live in Webflow.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Memberstack / Outseta / Memberspace:</strong> Member accounts, authentication, and (often) billing.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Custom code embeds:</strong> Most Webflow sites paste in Google Analytics, Meta Pixel, Hotjar, Intercom, or other third-party scripts via the Custom Code panel — each needs disclosure.</li>
          </ul>
        </div>
      </section>

      {/* Common Integrations */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Common Webflow Integrations That Need Privacy Policy Disclosure</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If your Webflow site uses any of these, your policy must name them:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Webflow Forms, Webflow Ecommerce, Webflow Memberships</strong></li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Memberstack, Outseta, Memberspace</strong> — auth + member accounts</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Stripe, PayPal, Foxy.io, Snipcart</strong> — payments</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Mailchimp, ConvertKit, Klaviyo (via Zapier)</strong> — email marketing</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Zapier, Make (Integromat), n8n</strong> — workflow automation that routes form data</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Hotjar, Microsoft Clarity, FullStory</strong> — session recording (heavy GDPR implications)</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Intercom, Crisp, Tidio, Drift</strong> — chat / helpdesk</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Google Analytics, GA4, Meta Pixel, TikTok Pixel, LinkedIn Insight</strong> — analytics + ad pixels</li>
          </ul>
        </div>
      </section>

      {/* How to Add to Webflow */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How to Add Your Privacy Policy to Webflow (4 Steps)</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Generate your policy</strong> using the form below. Fill in your business name, contact email, the integrations you use, and the regulations to cover.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>In Webflow Designer</strong>, go to <strong>Pages → New Page → Static</strong> and title it "Privacy Policy" with slug <code>/privacy-policy</code>.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Drop a Rich Text element</strong> on the page (or use an <strong>Embed</strong> for raw HTML). Paste the generated HTML, then publish to your subdomain or custom domain.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Link the policy</strong> from your global footer symbol so it appears site-wide. If you use Webflow Ecommerce, also link the policy from cart and checkout pages.
            </li>
          </ol>
        </div>
      </section>

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Other Policies Your Webflow Site Likely Needs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/terms-of-service-generator" style={{ color: 'var(--accent-primary)' }}>Terms of Service Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-banner-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Banner Generator</Link> — needed for EU / UK visitors</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-policy-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Policy Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/refund-policy-generator" style={{ color: 'var(--accent-primary)' }}>Refund Policy Generator</Link> — required for Webflow Ecommerce</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/dpa-generator" style={{ color: 'var(--accent-primary)' }}>DPA Generator</Link> — for B2B / SaaS use cases</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/bundle" style={{ color: 'var(--accent-primary)' }}>Starter Kit</Link> — generate all of the above at once</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={WEBFLOW_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create My Webflow Privacy Policy Now →
        </button>
      </section>
    </div>
  )
}
