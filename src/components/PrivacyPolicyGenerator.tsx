import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const PrivacyPolicyGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Privacy Policy Generator',
    url: 'https://legalpolicygen.com/privacy-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free, GDPR and CCPA-compliant privacy policy for your website or app in minutes. No signup required.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this privacy policy generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free. Generate unlimited privacy policies without creating an account or providing payment information. Your data never leaves your browser.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these generated policies legally binding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our templates are based on real legal frameworks and compliance standards including GDPR, CCPA, CalOPPA, and more. While they cover the majority of use cases, we recommend having an attorney review your final document for your specific jurisdiction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a privacy policy for my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If you collect any personal information (even just an email address for a newsletter, or through Google Analytics), you are legally required to have a privacy policy by global privacy laws like the GDPR and the CCPA.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes a privacy policy GDPR compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To be GDPR compliant, a privacy policy must be transparent, clearly stating what data is collected, why it is collected, how long it is retained, who it is shared with, and detailing users\' rights regarding their data (such as the right to deletion).',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy Generator', item: 'https://legalpolicygen.com/privacy-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Privacy Policy Generator — GDPR & CCPA Compliant (2026)"
        description="Create a free privacy policy for your website or app. Covers GDPR, CCPA, and CalOPPA. No signup, no cost — 100% client-side generation."
        canonical="/privacy-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🔒 Free Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant</strong> privacy policy for your website or app in minutes. No signup. No cost.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Privacy Policy — Free →
        </button>
      </section>

      {/* Why You Need a Privacy Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            It is a legal requirement in almost every major jurisdiction to have a privacy policy if you collect personal data. "Personal data" includes names, emails, billing details, IP addresses, and even device identifiers collected by analytics tools.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR (Europe):</strong> Requires detailed disclosures of data processing and clear statements of user rights.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>CCPA & CPRA (California):</strong> Demands transparency regarding data collection, selling, and sharing practices.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>CalOPPA (California):</strong> Requires any website compiling PII from California residents to prominently post a privacy policy.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Third-Party Requirements:</strong> Google Analytics, AdSense, Facebook Pixel, and all major App Stores require you to have a valid privacy policy to use their services.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is this privacy policy generator really free?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes, 100% free with no hidden charges. Generate unlimited legal documents without creating an account or providing payment information.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Are these generated policies legally binding?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Our templates are based on real legal frameworks. However, we recommend having an attorney review your final document for your specific jurisdiction.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do I need a privacy policy for my website?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. If you collect any personal information (e.g. through contact forms, newsletters, or Google Analytics), you are legally required to have a privacy policy.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Privacy Policy Now →
        </button>
      </section>
    </div>
  );
};
