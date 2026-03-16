'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const NdaGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free NDA Generator',
    url: 'https://legalpolicygen.com/nda-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free Non-Disclosure Agreement (NDA) to protect your business secrets. No signup required.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Non-Disclosure Agreement (NDA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An NDA is a legally binding contract that establishes a confidential relationship. The party or parties signing the agreement agree that sensitive information they may obtain will not be made available to any others.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I use an NDA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You should use an NDA whenever you need to share proprietary information, trade secrets, business plans, or client lists with a third party, such as a potential investor, employee, contractor, or business partner.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'NDA Generator', item: 'https://legalpolicygen.com/nda-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free NDA Generator — Non-Disclosure Agreement (2026)"
        description="Create a customized Non-Disclosure Agreement (NDA) to protect your confidential information and trade secrets."
        canonical="/nda-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🤫 Free NDA Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Non-Disclosure Agreement</strong> in minutes. Protect your confidential business information and trade secrets.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your NDA — Free →
        </button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Types of NDAs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            There are generally two types of NDAs:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Unilateral NDA:</strong> One-way agreement. Best used when only one party is disclosing confidential information (e.g., a company hiring a freelancer).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Mutual NDA:</strong> Two-way agreement. Best used when both parties are sharing confidential information with each other (e.g., two companies exploring a joint venture).</li>
          </ul>
        </div>
      </section>

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free NDA Now →
        </button>
      </section>
    </div>
  );
};
