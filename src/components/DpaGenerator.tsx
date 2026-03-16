'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const DpaGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free DPA Generator (Data Processing Agreement)',
    url: 'https://legalpolicygen.com/dpa-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Create a free, GDPR-compliant Data Processing Agreement (DPA). Protect your B2B SaaS or agency when handling client data.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Data Processing Agreement (DPA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A DPA is a legally binding contract between a Data Controller (your client) and a Data Processor (your business). It dictates exactly how you are allowed to collect, store, and protect their end-users\' personal data under laws like the GDPR.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who needs a DPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any B2B business that processes personal data on behalf of another company. This includes SaaS platforms, marketing agencies, cloud hosting providers, and freelance web developers handling customer databases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a DPA legally required under GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Article 28 of the GDPR explicitly states that Data Controllers must only use Processors that provide sufficient guarantees to implement appropriate technical and organizational measures, governed by a binding written contract (the DPA).',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'DPA Generator', item: 'https://legalpolicygen.com/dpa-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free DPA Generator — Data Processing Agreement (GDPR Compliant)"
        description="Generate a Data Processing Agreement (DPA) to legally handle client data. Protect your B2B SaaS or agency and guarantee GDPR & CCPA compliance."
        canonical="/dpa-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🤝 Free Data Processing Agreement (DPA) Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Data Processing Agreement</strong>. Secure your B2B SaaS, agency, or consultancy under strict global data privacy standards.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=dpa')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your DPA — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your B2B Business Needs a DPA</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you operate a B2B Software Service, an email marketing agency, or cloud infrastructure, your clients are legally classified as "Data Controllers." You are the "Data Processor." A DPA is the explicit legal bridge between the two of you ensuring compliance.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR Article 28 Mandatory Compliance:</strong> The European GDPR outright forbids Data Controllers from sharing data with your business unless a formal DPA is signed and executed. Fines for failing to have a DPA are severe.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Liability Protection:</strong> A well-written DPA caps your liability if your servers are breached, isolating your business risk from the wider legal fallout directed at your clients.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Defining the Sub-Processors:</strong> SaaS companies rely on AWS, Stripe, and Sendgrid. Your DPA legally lists these out as "Authorized Sub-Processors," granting you permission to route data through them on your client's behalf.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Standard Contractual Clauses (SCC):</strong> If you are based in the US processing EU data, your DPA ensures the necessary European Commission SCCs are integrated to make transatlantic data transfers legal.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Who needs a DPA?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Any B2B business that processes personal data on behalf of a client. Examples include SaaS CRM tools, payroll providers, marketing analytics agencies, or freelance database administrators.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is a DPA legally required under GDPR?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. Article 28 of the GDPR explicitly dictates that both parties must sign a written contract outlining technical data security measures and auditing rights before any data can be transferred or processed.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is the difference between an NDA and a DPA?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>An NDA protects your strategic business trade secrets and software code from being leaked to competitors. A DPA strictly protects end-user/consumer personal privacy data from unauthorized processing.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=dpa')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Data Processing Agreement Now →
        </button>
      </section>
    </div>
  );
};
