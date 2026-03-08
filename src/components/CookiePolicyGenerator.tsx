import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const CookiePolicyGenerator: React.FC = () => {
  const navigate = useNavigate();

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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this cookie policy generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free. Generate unlimited cookie policies without creating an account, providing payment information, or dealing with paywalled features. Your data never leaves your browser.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my website need a cookie policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your website uses any cookies — including Google Analytics, advertising pixels, session cookies, or social media widgets — you likely need a cookie policy. Under GDPR (EU), UK PECR, and ePrivacy Directive, websites must disclose what cookies they use and obtain consent before placing non-essential cookies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a cookie policy and a privacy policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A privacy policy covers all personal data processing (collection, storage, sharing, user rights). A cookie policy specifically addresses cookies and tracking technologies used on your website — what cookies you set, their purpose, and how users can manage them. Many websites need both.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I also need a cookie consent banner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if your website serves users in the EU or UK and uses non-essential cookies. Under GDPR, you must display a consent banner before loading analytics or marketing cookies. The banner must offer equal "Accept" and "Reject" options. We also offer a free Cookie Consent Banner Generator.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should a cookie policy include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A compliant cookie policy should include: a definition of cookies, the types of cookies your site uses (essential, analytics, marketing), a list of specific cookies with their names and purposes, third-party cookies, how users can manage cookies in their browsers, your consent mechanism, and contact information.',
        },
      },
    ],
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
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
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
          onClick={() => navigate('/')}
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
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.95rem' }}>🔒 Privacy Policy Generator</Link>
          <Link to="/blog/do-you-need-cookie-policy-what-law-says-2026" style={{ color: 'var(--accent-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Read: Do You Need a Cookie Policy? →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is this cookie policy generator really free?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes, 100% free. Generate unlimited cookie policies without creating an account, providing payment information, or dealing with paywalled features. Your data never leaves your browser — everything is processed client-side.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Does my website need a cookie policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>If your website uses any cookies — including Google Analytics, advertising pixels, session cookies, or social media widgets — you likely need a cookie policy. Under GDPR, UK PECR, and the ePrivacy Directive, websites must obtain consent before placing non-essential cookies.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What's the difference between a cookie policy and a privacy policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>A privacy policy covers all personal data processing. A cookie policy specifically addresses cookies and tracking technologies — what cookies you set, their purpose, and how users can manage them. Many websites need both.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do I also need a cookie consent banner?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>If your website serves users in the EU or UK and uses non-essential cookies, yes. The banner must appear before any non-essential cookies are loaded and offer equal "Accept" and "Reject" options. We also offer a <Link to="/" style={{ color: 'var(--accent-secondary)' }}>free Cookie Consent Banner Generator</Link>.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What should a cookie policy include?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>A compliant cookie policy should include: a definition of cookies, the types of cookies your site uses (essential, analytics, marketing), a list of specific cookies with their names and purposes, third-party cookies, how users can manage cookies in their browsers, your consent mechanism, and contact information.</p>
          </div>
        </div>
      </section>

      {/* Related Generators */}
      <section className="glass-panel" style={{ padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--accent-tertiary)', marginBottom: '1rem', fontSize: '1.25rem' }}>Related Free Generators</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem' }}>🔒 Privacy Policy</Link>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem', filter: 'hue-rotate(45deg)' }}>📋 Terms of Service</Link>
          <Link to="/" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem', filter: 'hue-rotate(90deg)' }}>🛡️ Disclaimer</Link>
          <Link to="/blog" className="btn-primary" style={{ textDecoration: 'none', fontSize: '0.9rem', filter: 'hue-rotate(180deg)' }}>📚 Legal Guides</Link>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/')}
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
