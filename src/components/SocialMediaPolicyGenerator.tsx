'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const SocialMediaPolicyGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Corporate Social Media Policy Generator',
    url: 'https://legalpolicygen.com/social-media-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a corporate Social Media Policy for your employees. Protect your brand reputation, prevent PR disasters, and define acceptable online behavior.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a corporate Social Media Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A corporate social media policy is a set of guidelines explaining how employees should conduct themselves online when representing your company or discussing their employment. It outlines what they can—and cannot—post regarding company business.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do companies need a Social Media Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It protects your brand reputation from PR disasters caused by employee posts, prevents the leaking of confidential trade secrets, outlines consequences for harassment or hate speech online, and ensures FTC compliance when employees endorse your products.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I fire an employee for a social media post?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, yes (in "at-will" states), provided the post violates a clearly established, legally sound Social Media Policy (such as sharing confidential data or engaging in severe harassment). However, the NLRB protects employees\' rights to discuss working conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this policy cover personal accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A comprehensive policy governs how employees reference the company on their personal Twitter, LinkedIn, or TikTok accounts, usually requiring a disclaimer stating that "opinions are my own."',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Social Media Policy Generator', item: 'https://legalpolicygen.com/social-media-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Corporate Social Media Policy Generator for Employees"
        description="Create a clear Social Media Policy to protect your company's brand reputation from PR disasters. Define rules for employee online conduct."
        canonical="/social-media-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📱 Corporate Social Media Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear <strong style={{ color: 'var(--text-primary)' }}>Social Media Policy</strong> for your workforce. Protect your brand reputation, secure trade secrets, and define acceptable online behavior.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=social-media')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Company Needs a Social Media Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            In the era of viral TikToks and corporate Twitter accounts, a single rogue tweet or unauthorized behind-the-scenes video from an employee can trigger a massive PR crisis or leak confidential financial data. A formal policy establishes strict boundaries.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Protect Confidentiality:</strong> Explicitly ban employees from posting photos of internal documents, proprietary software code, unreleased products, or discussing internal financial metrics online.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent PR Nightmares:</strong> Establish rules stating that employees must not engage in hate speech, harassment, or controversial political discourse while wearing company branded clothing or visibly identifying their employer.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>FTC Endorsement Compliance:</strong> Your policy ensures that if employees promote your products on their personal accounts, they use explicit hashtags like `#employee` to comply with Federal Trade Commission disclosure laws.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Clear Disciplinary Action:</strong> Without a written policy distributed during onboarding, firing an employee for a severe social media misstep can lead to wrongful termination lawsuits.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Does this policy cover personal accounts?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. While you cannot dictate an employee's entirely private life, a comprehensive policy governs how they act when identifying themselves as your employee or discussing your industry.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is the "Opinions are my own" disclaimer?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is a common requirement in social media policies where employees must state that their views do not represent the company, legally distancing your brand from their personal statements.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Are there limits to what a policy can restrict?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. The National Labor Relations Board (NLRB) protects employees' rights to engage in "concerted activity," meaning you usually cannot ban them from discussing working conditions or pay online.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=social-media')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Social Media Policy Now →
        </button>
      </section>
    </div>
  );
};
