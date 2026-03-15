import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const AccessibilityStatementGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Accessibility Statement Generator',
    url: 'https://legalpolicygen.com/accessibility-statement-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate an ADA and WCAG compliant accessibility statement for your website. Show your commitment to inclusive design.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a website accessibility statement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An accessibility statement is a public document where an organization outlines its commitment to accessibility, the specific standards it aims to meet (like WCAG 2.1 AA), any known limitations on the site, and contact information for users who experience barriers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does an accessibility statement protect me from ADA lawsuits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While a statement alone does not make your website accessible or grant absolute immunity, it serves as crucial legal evidence of your "good faith effort" to comply with ADA laws and gives specialized law firms a reason to look elsewhere.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does WCAG stand for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WCAG stands for Web Content Accessibility Guidelines. It is the international standard for web accessibility published by the W3C. Most modern laws require compliance with WCAG 2.1 Level AA.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Accessibility Statement Generator', item: 'https://legalpolicygen.com/accessibility-statement-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Accessibility Statement Generator (ADA & WCAG Compliant)"
        description="Create an ADA and WCAG 2.1 compliant accessibility statement for your website. Free generator to protect against lawsuits and show commitment to inclusion."
        canonical="/accessibility-statement-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ♿ Free Accessibility Statement Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create an <strong style={{ color: 'var(--text-primary)' }}>ADA and WCAG compliant</strong> accessibility statement for your website in minutes. Show your commitment to digital inclusion.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=accessibility')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Statement — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs an Accessibility Statement</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            In 2026, web accessibility is not just the right thing to do; it is increasingly a strict legal requirement. If your website is considered a "public accommodation," you are required by law to make it accessible to people with disabilities.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Avoid ADA Lawsuits:</strong> ADA-related website lawsuits have surged past 5,000 cases annually. Publishing a clear accessibility statement reduces your risk of being targeted by "surf-by" plaintiffs.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Demonstrate Compliance:</strong> An official statement proves that you are actively working towards WCAG (Web Content Accessibility Guidelines) Level AA compliance, showing a "good faith" legal effort.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Help Disabled Users:</strong> Providing a dedicated contact email or phone number in your statement ensures users who encounter a barrier have a way to securely access your services offline.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>European Accessibility Act (EAA):</strong> Essential for EU businesses, as the EAA strictly scopes accessibility for digital products and online commerce.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is a website accessibility statement?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is a dedicated public page where you define your commitment to accessibility, list the standards you aim to meet (like WCAG 2.1), and provide contact info for users encountering issues.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Will this statement make my site ADA compliant?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>No. A statement is a legal disclaimer and commitment document. You must still actively fix the HTML, color contrast, and keyboard navigation issues on your website to be fully compliant.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What does WCAG stand for?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>WCAG stands for Web Content Accessibility Guidelines. It sets the international, measurable baseline for rendering web applications usable for disabled users.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=accessibility')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Accessibility Statement Now →
        </button>
      </section>
    </div>
  );
};
