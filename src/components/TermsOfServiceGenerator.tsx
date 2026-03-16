'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const TermsOfServiceGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Terms of Service Generator',
    url: 'https://legalpolicygen.com/terms-of-service-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free Terms of Service (ToS) agreement for your website or app. Protect your business from liability. No signup required.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this Terms of Service generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our generator is 100% free to use. There are no hidden costs, limits, or signup requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need a Terms of Service agreement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Terms of Service (ToS) agreement is the legal contract between you and your users. It protects your business by limiting your liability, establishing rules of conduct, and protecting your intellectual property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it Terms of Service, Terms of Use, or Terms and Conditions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These terms are largely interchangeable. "Terms of Service" is commonly used for SaaS and digital services, "Terms of Use" for informational websites, and "Terms and Conditions" for e-commerce. You can use this generator for all three.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service Generator', item: 'https://legalpolicygen.com/terms-of-service-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Terms of Service Generator — Protect Your Business (2026)"
        description="Create a customized Terms of Service (ToS) / Terms and Conditions agreement for your website or app. Completely free with no signup."
        canonical="/terms-of-service-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📝 Free Terms of Service Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Terms of Service (ToS)</strong> agreement to protect your business, limit liability, and establish rules for your users.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Terms of Service — Free →
        </button>
      </section>

      {/* Why You Need It */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Business Needs a Terms of Service</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Unlike a Privacy Policy, a Terms of Service agreement is generally not required by law, but it is <strong>highly recommended</strong> for any digital business. It acts as a legally binding contract between you and your users.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent Abuse:</strong> Set clear rules of conduct and reserve the right to ban abusive users from your platform.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Limit Liability:</strong> Protect yourself from lawsuits and damages that may arise from errors in your content or service outages.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Protect IP:</strong> Warn users that your website's content, logo, and design are your intellectual property.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is this Terms of Service generator free?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes! Our generator is 100% free to use. There are no hidden costs, limits, or signup requirements.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Why do I need a Terms of Service agreement?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>A Terms of Service (ToS) agreement is the legal contract between you and your users. It protects your business by limiting your liability, establishing rules of conduct, and protecting your intellectual property.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Terms of Service Now →
        </button>
      </section>
    </div>
  );
};
