'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ToolFAQ, type FAQItem } from './ToolFAQ'

const WIX_FAQS: FAQItem[] = [
  {
    question: 'Is a privacy policy legally required for a Wix site?',
    answer:
      'Yes. Any Wix site that collects personal data — through forms, bookings, orders, member accounts, or even basic analytics — legally requires a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. Wix itself prompts you to add one when you publish a site.',
  },
  {
    question: "Doesn't Wix have a built-in privacy policy generator?",
    answer:
      'Wix offers a basic generator inside the editor, but it produces a generic boilerplate that does not enumerate any third-party Wix Apps you have installed (Wix Forms, Wix Bookings, Wix Stores, payment processors, marketing apps). Each one is a separate data processor that must be named under <strong>GDPR Article 13</strong> and CCPA. Our generator lets you list them explicitly.',
  },
  {
    question: 'Where do I add the privacy policy on a Wix site?',
    answer:
      "Two paths. Easiest: in the Wix editor, add a new page (<strong>Pages → Add Page → Blank</strong>), title it 'Privacy Policy', set it as 'Hidden from menu' if you only want it linked from the footer, and paste the generated HTML using the <strong>HTML embed</strong> element. Then add a footer link pointing to that page. Wix Stores and Wix Bookings can be configured to link your privacy policy at checkout under their respective settings.",
  },
  {
    question: 'Do I need to disclose Wix Apps individually?',
    answer:
      'Yes. Wix Forms, Wix Bookings, Wix Stores, Wix Chat, Ascend marketing tools, and any third-party app you installed from the <strong>Wix App Market</strong> are data processors under GDPR. Each one must be named in your privacy policy along with the categories of data it collects and the purpose of processing.',
  },
  {
    question: 'What about cookies on Wix?',
    answer:
      "Wix sets several cookies by default for analytics and site functionality. Wix has a built-in cookie banner under <strong>Settings → Cookies & Privacy</strong>, but configure it carefully — the default options often don't meet GDPR's strict opt-in requirements. Pair this site's free Cookie Banner Generator with Wix's settings if you sell to EU/UK customers.",
  },
]

export const WixPrivacyPolicyLanding: React.FC = () => {
  const router = useRouter()

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🎨 Free Wix Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2rem' }}>
          Generate a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant privacy policy</strong> for your Wix site in under 5 minutes. Covers Wix Stores, Wix Bookings, Wix Forms, your installed Wix Apps, and customer rights — paste straight into a hidden Wix page. No signup, no email gate.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate My Wix Privacy Policy — Free →
        </button>
      </section>

      {/* Why Wix Specifically */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Wix's Built-in Privacy Policy Isn't Enough</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Wix offers a built-in privacy policy generator in its editor — useful as a starting point, but it stops at Wix's own data handling. The moment you add a Wix App or third-party integration, your policy needs to disclose them by name. Under GDPR Article 13 and CCPA, every processor that touches visitor data must be listed in the privacy policy along with the categories of data it processes.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Stores:</strong> Order data, customer addresses, payment processor (Wix Payments / Stripe / PayPal).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Bookings:</strong> Captures attendee names, contact details, and booking history.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Forms:</strong> Every contact form submission is collected personal data — what you do with it must be disclosed.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Chat:</strong> Captures chat transcripts and visitor identifiers.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Ascend marketing tools:</strong> Email marketing, automations, and CRM features all process customer behavior.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Analytics + third-party pixels:</strong> Each one needs to be named alongside cookie disclosures.</li>
          </ul>
        </div>
      </section>

      {/* Common Wix Apps */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Common Wix App Market Apps That Need Privacy Policy Disclosure</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you have any of these installed, your policy must name them, describe what data they receive, and link to their own privacy policy:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Stores, Wix Bookings, Wix Restaurants</strong> — capture orders, attendees, dining details</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wix Members Area</strong> — captures account profiles + activity</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Visitor Analytics, Hotjar (via embed), Crazy Egg</strong> — session and heatmap recording</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Mailchimp, Klaviyo, ActiveCampaign (via Wix integration)</strong> — email marketing</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>POWR Form Builder, 123FormBuilder, Jotform embed</strong> — third-party form data</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Tidio, LiveChat, HelpCrunch</strong> — chat platforms</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Smile.io, Loyverse, ReferralCandy</strong> — loyalty / referral programs</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Our generator includes a checklist so you don't accidentally omit one — the most common cause of post-audit GDPR fines for small sites.
          </p>
        </div>
      </section>

      {/* How to Add to Wix */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How to Add Your Privacy Policy to a Wix Site (4 Steps)</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Generate your policy</strong> using the form below. Fill in your site name, contact email, the Wix Apps you have installed, and the regulations to cover.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>In the Wix editor</strong>, go to <strong>Pages → Add Page → Blank</strong> and title it "Privacy Policy". Optionally mark it Hidden from menu if you only want the footer link.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Add an HTML embed element</strong> to the page (Add Elements → Embed → HTML iframe / Embed HTML), paste the generated HTML, and publish the page.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Link the policy</strong> from your site footer. If you use Wix Stores or Wix Bookings, configure the privacy policy URL in their settings so it appears at checkout / booking confirmation.
            </li>
          </ol>
        </div>
      </section>

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Other Policies Your Wix Site Likely Needs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/terms-of-service-generator" style={{ color: 'var(--accent-primary)' }}>Terms of Service Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/refund-policy-generator" style={{ color: 'var(--accent-primary)' }}>Refund Policy Generator</Link> — required for Wix Stores</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-banner-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Banner Generator</Link> — needed for EU / UK visitors</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-policy-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Policy Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/disclaimer-generator" style={{ color: 'var(--accent-primary)' }}>Disclaimer Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/bundle" style={{ color: 'var(--accent-primary)' }}>Starter Kit</Link> — generate all of the above at once</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={WIX_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create My Wix Privacy Policy Now →
        </button>
      </section>
    </div>
  )
}
