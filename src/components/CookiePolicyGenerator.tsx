'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const COOKIE_FAQS: FAQItem[] = [
  {
    question: 'Do I need a cookie policy if I use Google Analytics?',
    answer: 'Yes. Google Analytics places cookies on visitors\' browsers to track sessions, page views, and user behavior. Under <strong>GDPR</strong>, <strong>UK PECR</strong>, and the <strong>ePrivacy Directive</strong>, you must disclose this to users and obtain consent before loading analytics cookies. Google\'s own terms of service also require a published cookie/privacy policy.',
  },
  {
    question: 'Is this cookie policy generator really free?',
    answer: 'Yes, 100% free — no signup, no paywall, no hidden charges. Generate unlimited cookie policies without creating an account. Your data never leaves your browser; everything is processed entirely client-side.',
  },
  {
    question: 'What is the difference between a cookie policy and a privacy policy?',
    answer: 'A <strong>privacy policy</strong> covers all personal data processing — collection, storage, sharing, and user rights. A <strong>cookie policy</strong> specifically addresses the cookies and tracking technologies your website uses — what cookies you set, their purpose, duration, and how users can manage them. Most websites need <strong>both</strong>. Generate your privacy policy with our <a href="/privacy-policy-generator">free Privacy Policy Generator</a>.',
  },
  {
    question: 'Do I also need a cookie consent banner?',
    answer: 'Yes, if your website serves users in the EU or UK and uses <strong>non-essential cookies</strong> (analytics, marketing, social media). Under GDPR, you must display a consent banner <strong>before</strong> loading these cookies. The banner must offer equal "Accept" and "Reject" options — pre-checked consent boxes are not valid. We offer a <a href="/cookie-banner-generator">free Cookie Consent Banner Generator</a> as well.',
  },
  {
    question: 'What should a cookie policy include?',
    answer: 'A compliant cookie policy should include: a <strong>definition of cookies</strong>, the <strong>types of cookies</strong> your site uses (essential, functional, analytics, marketing), a <strong>table listing specific cookies</strong> with their names, purposes, and durations, <strong>third-party cookies</strong> (Google, Facebook, etc.), <strong>how users can manage or delete cookies</strong> in their browser, your <strong>consent mechanism</strong>, and <strong>contact information</strong>.',
  },
  {
    question: 'Which countries require cookie consent?',
    answer: 'Cookie consent is required across the <strong>entire EU/EEA</strong> (27+ countries), the <strong>UK</strong>, <strong>Brazil</strong> (LGPD), and regions covered by the <strong>CCPA/CPRA</strong> (California). In practice, if your website is accessible globally, implementing cookie consent is the safest approach since most major jurisdictions now regulate tracking technologies.',
  },
  {
    question: 'What types of cookies require user consent?',
    answer: '<strong>Essential cookies</strong> (login sessions, shopping cart, security) do <strong>not</strong> require consent because the site cannot function without them. However, <strong>analytics cookies</strong> (Google Analytics, Hotjar), <strong>marketing cookies</strong> (Facebook Pixel, Google Ads), and <strong>social media cookies</strong> (embedded YouTube, Twitter widgets) all require explicit opt-in consent under GDPR.',
  },
  {
    question: 'Can I load cookies before the user consents?',
    answer: 'No, not under GDPR. You must <strong>block all non-essential cookies</strong> until the user has given explicit consent via your cookie banner. Loading cookies before consent is a common violation that regulators (especially the French CNIL and German DPAs) actively audit and fine for.',
  },
];

export const CookiePolicyGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Cookie Policy Generator',
    url: 'https://legalpolicygen.com/cookie-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free, GDPR and CCPA-compliant cookie policy for your website in minutes. No signup required.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Cookie Policy Generator', item: 'https://legalpolicygen.com/cookie-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Cookie Policy Generator — GDPR & CCPA Compliant (2026)"
        description="Create a free cookie policy for your website in minutes. Covers GDPR, CCPA, ePrivacy Directive, and UK PECR. No signup, no cost — 100% client-side."
        canonical="/cookie-policy-generator"
        jsonLd={[pageJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🍪 Free Cookie Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a <strong style={{ color: 'var(--text-primary)' }}>GDPR, CCPA, and ePrivacy-compliant</strong> cookie policy for your website in under 5 minutes. No signup. No cost. Your data never leaves your browser.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Cookie Policy — Free →
        </button>
      </section>

      {/* Why You Need a Cookie Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a Cookie Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If your website uses <strong style={{ color: 'var(--text-primary)' }}>any cookies</strong> — including Google Analytics, advertising pixels, session cookies, or embedded content like YouTube videos — you are legally required to disclose this to your visitors under multiple regulations:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR (EU/EEA):</strong> Requires explicit consent before placing non-essential cookies. Fines up to €20 million.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>ePrivacy Directive:</strong> The EU "Cookie Law" — mandates informed consent and clear disclosure of all cookies.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>UK PECR:</strong> Mirrors EU requirements. The ICO actively enforces cookie consent rules.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>CCPA/CPRA (California):</strong> Requires disclosure of tracking technologies and opt-out for data sales.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>LGPD (Brazil):</strong> Requires a valid legal basis for processing data via cookies.</li>
          </ul>
          <p>
            A missing or non-compliant cookie policy can result in <strong style={{ color: 'var(--text-primary)' }}>hefty fines, ad account suspensions, and lost user trust</strong>. Google AdSense and Google Analytics both require websites to have a cookie policy that discloses the use of tracking cookies.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>What Our Cookie Policy Covers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '📋', title: 'Cookie Categories', desc: 'Essential, functional, analytics, and marketing cookies — clearly categorized and explained.' },
            { icon: '🔍', title: 'Third-Party Cookies', desc: 'Disclose cookies set by Google Analytics, Facebook Pixel, ad networks, and embedded content.' },
            { icon: '⚙️', title: 'User Controls', desc: 'Instructions for managing and deleting cookies in Chrome, Firefox, Safari, and Edge.' },
            { icon: '✅', title: 'Consent Mechanism', desc: 'Explains how users can accept, reject, or customize their cookie preferences on your site.' },
            { icon: '🌍', title: 'Multi-Jurisdiction', desc: 'Covers GDPR, CCPA, UK PECR, ePrivacy Directive, LGPD, and PIPEDA requirements.' },
            { icon: '📅', title: 'Cookie Lifespans', desc: 'Documents cookie durations and expiration — required by EU regulators.' },
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cookie Policy vs Privacy Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Cookie Policy vs. Privacy Policy — Do You Need Both?</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            A <strong style={{ color: 'var(--text-primary)' }}>Privacy Policy</strong> covers <em>all</em> personal data processing — collection, storage, sharing, and user rights. A <strong style={{ color: 'var(--text-primary)' }}>Cookie Policy</strong> specifically addresses the tracking technologies and cookies your website uses.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            While some websites include cookie information within their Privacy Policy, <strong style={{ color: 'var(--text-primary)' }}>having a separate, dedicated Cookie Policy is recommended</strong> because:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>It's clearer and easier for users to find specific cookie information</li>
            <li style={{ marginBottom: '0.5rem' }}>EU regulators (CNIL, ICO) expect detailed, standalone cookie disclosures</li>
            <li style={{ marginBottom: '0.5rem' }}>Your cookie consent banner can link directly to the Cookie Policy</li>
            <li style={{ marginBottom: '0.5rem' }}>It's easier to maintain independently as your tracking setup changes</li>
          </ul>
        </div>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.95rem' }}>🔒 Privacy Policy Generator</Link>
          <Link href="/blog/do-you-need-cookie-policy-what-law-says-2026" style={{ color: 'var(--accent-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Read: Do You Need a Cookie Policy? →
          </Link>
        </div>
      </section>

      {/* FAQ — Accordion */}
      <ToolFAQ faqs={COOKIE_FAQS} />

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--accent-tertiary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Related Free Generators</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/privacy-policy-generator" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>🔒 Privacy Policy</Link>
          <Link href="/tos-generator" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>📋 Terms of Service</Link>
          <Link href="/disclaimer-generator" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>🛡️ Disclaimer</Link>
          <Link href="/blog" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>📚 Legal Guides</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Cookie Policy Now →
        </button>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem' }}>
          No signup • No cost • 100% client-side • GDPR & CCPA compliant
        </p>
      </section>
    </div>
  );
};
