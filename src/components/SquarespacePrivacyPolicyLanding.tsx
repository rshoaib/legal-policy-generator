'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ToolFAQ, type FAQItem } from './ToolFAQ'

const SQSP_FAQS: FAQItem[] = [
  {
    question: 'Is a privacy policy legally required for a Squarespace site?',
    answer:
      'Yes. Squarespace sites collect personal data through forms, commerce orders, scheduling, member accounts, email signups, and analytics — all of which legally require a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. Squarespace itself prompts you to add one when you enable Commerce or Member Areas.',
  },
  {
    question: 'Where do I add the privacy policy on Squarespace?',
    answer:
      'In Squarespace, go to <strong>Pages → Not Linked → + → Page (Blank)</strong>, title it "Privacy Policy", and paste the generated HTML into a <strong>Code block</strong> (or use a Markdown block for plain content). Then add a footer link to /privacy-policy. For Commerce stores, also configure the privacy policy URL under <strong>Commerce → Customer Notifications → Footer</strong>.',
  },
  {
    question: 'What Squarespace features need to be disclosed in the privacy policy?',
    answer:
      '<strong>Squarespace Commerce</strong> (Stripe / PayPal / Square payments), <strong>Acuity Scheduling</strong> (now integrated into Squarespace, captures appointment data), <strong>Email Campaigns</strong> (captures email subscribers + behavior), <strong>Member Areas</strong> (captures account profiles), <strong>Squarespace Forms</strong> (every submission), and <strong>Squarespace Analytics</strong> (visitor behavior). Plus any third-party integrations like Google Analytics, Meta Pixel, or Mailchimp.',
  },
  {
    question: 'Does Squarespace handle cookie consent for me?',
    answer:
      "Squarespace has a built-in cookie banner under <strong>Settings → Cookies & Visitor Data → Cookie Banner</strong>. Enable it for EU/UK compliance, but configure carefully — the default settings often allow non-essential cookies before consent, which fails GDPR strict opt-in. Pair with an itemized Cookie Policy that lists every tracking technology you use.",
  },
  {
    question: 'My Squarespace site uses Acuity Scheduling — what do I disclose?',
    answer:
      'Acuity Scheduling (now part of Squarespace) captures attendee names, emails, appointment details, and any custom intake form data. This is sensitive personal data — your privacy policy must name Acuity, describe what data it captures, the purpose of processing, and the legal basis (typically consent or contract).',
  },
]

export const SquarespacePrivacyPolicyLanding: React.FC = () => {
  const router = useRouter()

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ⬛ Free Squarespace Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2rem' }}>
          Generate a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant privacy policy</strong> for your Squarespace site in under 5 minutes. Covers Squarespace Commerce, Acuity Scheduling, Email Campaigns, Member Areas, your installed integrations, and visitor rights — paste straight into a Squarespace Code block. No signup, no email gate.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate My Squarespace Privacy Policy — Free →
        </button>
      </section>

      {/* Why Squarespace Specifically */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Squarespace Sites Need a Tailored Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Squarespace bundles a lot of data-collecting tools out of the box: Commerce, Acuity Scheduling, Email Campaigns, Member Areas, Forms, Analytics. Each one is a separate data flow that must be disclosed under GDPR Article 13 and CCPA. Squarespace's own knowledge base recommends adding a privacy policy, but doesn't generate one for you — and a generic boilerplate from elsewhere won't list these specific tools.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Squarespace Commerce:</strong> Order data, customer addresses, and payment data flowing to Stripe / PayPal / Square.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Acuity Scheduling:</strong> Captures attendee names, emails, appointment details, and custom intake form data — often sensitive (health, coaching, etc.).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Email Campaigns:</strong> Captures email subscribers, opens, clicks, and unsubscribes.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Member Areas:</strong> Captures account profiles, login activity, and (if behind a paywall) subscription data.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Squarespace Forms + Form Block:</strong> Every form submission is collected personal data.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Squarespace Analytics + custom integrations:</strong> Each tracking technology must be named alongside cookie disclosures.</li>
          </ul>
        </div>
      </section>

      {/* Common Integrations */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Common Squarespace Integrations That Need Privacy Policy Disclosure</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If your Squarespace site uses any of these, your policy must name them:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Squarespace Commerce, Acuity, Email Campaigns, Member Areas</strong></li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Stripe, PayPal, Square, Apple Pay</strong> — payment processors</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Mailchimp, ConvertKit, Klaviyo (via Zapier)</strong> — email marketing</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Zapier, Make, n8n</strong> — workflow automation</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Google Analytics, GA4, Meta Pixel, TikTok Pixel, Pinterest Tag</strong> — analytics + ad pixels</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Hotjar, Microsoft Clarity</strong> — session recording (heavy GDPR implications)</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Tidio, Crisp, Drift, Intercom</strong> — chat / helpdesk</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>YouTube embeds, Vimeo, SoundCloud</strong> — third-party media that may set cookies</li>
          </ul>
        </div>
      </section>

      {/* How to Add to Squarespace */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How to Add Your Privacy Policy to Squarespace (4 Steps)</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Generate your policy</strong> using the form below. Fill in your business name, contact email, the Squarespace features and integrations you use, and the regulations to cover.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>In Squarespace</strong>, go to <strong>Pages → Not Linked → + → Page (Blank)</strong> and title it "Privacy Policy" with URL slug <code>/privacy-policy</code>.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Add a Code block</strong> to the page (or a Markdown block for plain content), paste the generated HTML, and save.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Link the policy</strong> from your site footer. For Commerce stores, also configure the policy URL under <strong>Commerce → Customer Notifications → Footer</strong> so it appears on every order email.
            </li>
          </ol>
        </div>
      </section>

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Other Policies Your Squarespace Site Likely Needs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/terms-of-service-generator" style={{ color: 'var(--accent-primary)' }}>Terms of Service Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/refund-policy-generator" style={{ color: 'var(--accent-primary)' }}>Refund Policy Generator</Link> — required for Squarespace Commerce</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-banner-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Banner Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-policy-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Policy Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/disclaimer-generator" style={{ color: 'var(--accent-primary)' }}>Disclaimer Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/bundle" style={{ color: 'var(--accent-primary)' }}>Starter Kit</Link> — generate all of the above at once</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={SQSP_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create My Squarespace Privacy Policy Now →
        </button>
      </section>
    </div>
  )
}
