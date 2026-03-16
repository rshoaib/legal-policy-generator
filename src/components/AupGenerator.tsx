'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const AupGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Acceptable Use Policy Generator (AUP)',
    url: 'https://legalpolicygen.com/aup-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a professional Acceptable Use Policy (AUP) for your SaaS, forum, or network. Protect your platform from abuse, spam, and illegal activity.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an Acceptable Use Policy (AUP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An Acceptable Use Policy (AUP) is a set of rules applied by the owner of a network, website, or service that restricts the ways in which the network or site may be used. It explicitly defines what behavior is forbidden, such as spamming, hacking, or posting illegal content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need an AUP if I already have a Terms of Service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While a Terms of Service (ToS) covers the broad legal relationship (payment terms, liability limits), an AUP specifically isolates and details prohibited user behavior. Having a standalone AUP makes it much easier to enforce rules and ban abusive users without navigating complex ToS clauses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can an AUP help me ban users?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. An AUP serves as your legal justification for terminating an account immediately. If a user violates an explicitly forbidden action listed in your AUP, you have the contractual right to revoke their access without notice or refund.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who typically needs an Acceptable Use Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SaaS platforms (especially those sending emails or hosting data), web hosting companies, internet service providers (ISPs), online communities, and corporate internal networks all require strict AUPs.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'AUP Generator', item: 'https://legalpolicygen.com/aup-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Acceptable Use Policy Generator (AUP) — Protect Your App"
        description="Create a clear Acceptable Use Policy for your SaaS, community, or app. Ban destructive users and outline prohibited behavior easily. Free tool."
        canonical="/aup-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🛑 Free Acceptable Use Policy (AUP) Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a comprehensive <strong style={{ color: 'var(--text-primary)' }}>Acceptable Use Policy</strong> to protect your app, network, or community from abuse, spam, and destructive users.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=aup')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your AUP — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Platform Needs an AUP</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            When you open your software or platform to the public, you invite both good users and bad actors. Without a formalized Acceptable Use Policy, you lack the clear legal criteria required to evict malicious users who damage your brand or infrastructure.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Legal Enforcement of Bans:</strong> If you ban a paying user without a referenced AUP violation, they can file a chargeback or lawsuit. An AUP gives you an airtight reason to terminate an account.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Protect Infrastructure from Abuse:</strong> Stop users from mining cryptocurrency on your servers, DDoS-ing targets using your IP addresses, or sending massive volumes of spam emails.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Maintain Brand Safety:</strong> For online communities, an AUP forbids hate speech, harassment, doxxing, and illegal content, ensuring your platform remains safe for advertisers and the majority of users.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>B2B Tier Protections:</strong> If you are a B2B service (like an email API), major providers (like AWS or Stripe) demand that *you* have an AUP in place to pass their compliance audits.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is an Acceptable Use Policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is a specific framework of rules dictating what a user is expressly forbidden from doing while using your service, network, or application.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do I need an AUP if I have a Terms of Service?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. While a ToS covers global payment and legal agreements, an AUP isolates behavioral boundaries. This makes it easier for moderators to reference and enforce without navigating a massive legal document.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What happens if a user breaks an AUP rule?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Your AUP explicitly grants you the right to suspend or terminate their account indefinitely, immediately, and usually without offering a refund for prepaid services.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=aup')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Acceptable Use Policy Now →
        </button>
      </section>
    </div>
  );
};
