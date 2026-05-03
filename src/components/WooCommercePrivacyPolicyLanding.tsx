'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ToolFAQ, type FAQItem } from './ToolFAQ'

const WOO_FAQS: FAQItem[] = [
  {
    question: 'Is a privacy policy legally required for a WooCommerce store?',
    answer:
      'Yes. WooCommerce stores collect personal data through orders, accounts, comments, and any installed extensions, which legally requires a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. WordPress itself flags missing privacy policies in the admin dashboard for this reason.',
  },
  {
    question: 'WordPress already generates a privacy policy under Settings → Privacy. Why use this instead?',
    answer:
      "WordPress's built-in generator produces a long, generic boilerplate that covers WordPress core but does not enumerate WooCommerce extensions, payment processors, marketing plugins, or analytics services that you actually have installed. Each one of those is a separate data processor that must be named under <strong>GDPR Article 13</strong> and CCPA. Our generator lets you list them explicitly.",
  },
  {
    question: 'Where do I add the privacy policy in WooCommerce?',
    answer:
      "Two-step setup. First, paste the generated HTML into a WordPress page (<strong>Pages → Add New</strong>, title it 'Privacy Policy'). Then in WordPress admin go to <strong>Settings → Privacy</strong> and select that page as your privacy policy page. WooCommerce reads from this setting and automatically links the policy at checkout, on the My Account page, and in registration forms.",
  },
  {
    question: 'Do I need to disclose every WooCommerce extension and WordPress plugin?',
    answer:
      'Any extension or plugin that processes personal data on your behalf (payment gateways, email marketing, abandoned cart, reviews, popups, analytics, A/B testing, security scanners) is a <strong>data processor</strong> under GDPR and must be named in your privacy policy along with what data it receives and the legal basis for sharing.',
  },
  {
    question: 'Does the policy need to mention WordPress comments and Gravatar?',
    answer:
      'Yes. WordPress core sends commenter email addresses to Gravatar by default to show profile images. This is a third-party data transfer that must be disclosed under GDPR. You can disable Gravatar in <strong>Settings → Discussion</strong> if you prefer not to disclose it.',
  },
  {
    question: 'What about cookies on a WooCommerce store?',
    answer:
      'WooCommerce sets several cookies (cart, session, recently viewed). Combined with whatever your theme and plugins set, most Woo stores drop 10+ cookies. EU/UK customers must be able to <strong>reject non-essential cookies before they are set</strong>, which means a real consent banner — not just a passive notice.',
  },
]

export const WooCommercePrivacyPolicyLanding: React.FC = () => {
  const router = useRouter()

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🛒 Free WooCommerce Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 2rem' }}>
          Generate a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant privacy policy</strong> for your WooCommerce store in under 5 minutes. Covers WordPress core, WooCommerce orders, your payment gateway, your installed extensions, and customer rights — paste straight into a WordPress page. No signup, no email gate.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate My WooCommerce Privacy Policy — Free →
        </button>
      </section>

      {/* Why WooCommerce Specifically */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why WooCommerce Stores Need More Than the WordPress Default</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            WordPress ships with a built-in privacy policy generator under <strong>Settings → Privacy → Generate Privacy Policy</strong>. It produces a multi-thousand-word boilerplate that covers WordPress core (comments, media library, embedded content). The problem: it stops there. WooCommerce extensions, payment gateways, and the marketing plugins that actually run your store are not in the template — and under GDPR Article 13 and CCPA, every third-party processor that touches customer data must be named explicitly.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            On a typical WooCommerce store, that means you also need to disclose:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Payment processor:</strong> Stripe, PayPal, Square, or whatever gateway you use receives customer name + payment data.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Order fulfillment:</strong> Shipping plugins (ShipStation, EasyPost, USPS plugins) receive customer addresses.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Marketing &amp; abandoned cart:</strong> MailChimp for WooCommerce, Klaviyo, Omnisend — each captures emails + behavior.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Reviews &amp; UGC:</strong> Yotpo, Loox, Judge.me — capture customer reviews and emails.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Analytics &amp; pixels:</strong> Google Analytics, Meta Pixel, TikTok Pixel — each one needs to be named.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Gravatar:</strong> WordPress core sends commenter email hashes to Gravatar by default — a third-party transfer most stores forget to disclose.</li>
          </ul>
        </div>
      </section>

      {/* Common WooCommerce Extensions to Disclose */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Common WooCommerce Extensions That Need Privacy Policy Disclosure</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you have any of these installed, your policy must name them, describe what data they receive, and link to their own privacy policy:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>WooCommerce Stripe / WooCommerce PayPal Payments</strong> — payment data</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>MailChimp for WooCommerce, Klaviyo, Omnisend</strong> — email marketing + customer behavior</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>AutomateWoo, Klaviyo Flows, Recart</strong> — abandoned cart + lifecycle email</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Yotpo, Loox, Judge.me</strong> — review platforms</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>WPForms, Contact Form 7, Gravity Forms</strong> — every form submission is collected data</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>MonsterInsights, GA4 plugins, Microsoft Clarity</strong> — analytics + session recording</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>OptinMonster, Sumo, Convert Pro</strong> — popups + email capture</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>WooCommerce Subscriptions, Memberships</strong> — recurring billing relationships</li>
            <li style={{ marginBottom: '0.4rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Wordfence, Sucuri, iThemes Security</strong> — capture IPs and login data</li>
          </ul>
          <p style={{ marginBottom: 0 }}>
            Our generator includes a checklist of common extensions so you don't accidentally omit one — a common cause of post-audit GDPR fines.
          </p>
        </div>
      </section>

      {/* How to Add to WooCommerce */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>How to Add Your Privacy Policy to WooCommerce (4 Steps)</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Generate your policy</strong> using the form below. Fill in your store name, contact email, the extensions you use, and the regulations to cover (GDPR, CCPA, both).
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Create a new WordPress page</strong> at <strong>Pages → Add New</strong>. Title it "Privacy Policy" and switch to the HTML / Code editor view.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Paste the generated HTML</strong> into the editor and publish the page.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong style={{ color: 'var(--accent-primary)' }}>Tell WordPress to use it.</strong> Go to <strong>Settings → Privacy → Privacy Policy Page</strong> and select the page you just created. WooCommerce will automatically link this page at checkout, on the My Account page, in the registration form, and in the footer (depending on your theme).
            </li>
          </ol>
          <p style={{ marginBottom: 0 }}>
            After this, also paste matching Refund, Terms of Service, and Shipping policies into separate pages. WooCommerce → Settings → Advanced → Page setup lets you map each policy to a Woo-specific endpoint.
          </p>
        </div>
      </section>

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Other Policies Your WooCommerce Store Likely Needs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/refund-policy-generator" style={{ color: 'var(--accent-primary)' }}>Refund Policy Generator</Link> — required for live e-commerce</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/terms-of-service-generator" style={{ color: 'var(--accent-primary)' }}>Terms of Service Generator</Link> — defines the buyer-seller relationship</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/shipping-policy-generator" style={{ color: 'var(--accent-primary)' }}>Shipping Policy Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-banner-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Banner Generator</Link> — needed for EU / UK visitors</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/cookie-policy-generator" style={{ color: 'var(--accent-primary)' }}>Cookie Policy Generator</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/dpa-generator" style={{ color: 'var(--accent-primary)' }}>DPA Generator</Link> — for B2B Woo stores serving EU customers</li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/blog/wordpress-privacy-policy-legal-compliance-guide" style={{ color: 'var(--accent-primary)' }}>WordPress Privacy & Legal Compliance Guide</Link></li>
            <li style={{ marginBottom: '0.4rem' }}><Link href="/bundle" style={{ color: 'var(--accent-primary)' }}>Starter Kit</Link> — generate all of the above at once</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={WOO_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create My WooCommerce Privacy Policy Now →
        </button>
      </section>
    </div>
  )
}
