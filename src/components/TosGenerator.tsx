import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const TosGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Terms of Service (ToS) Generator',
    url: 'https://legalpolicygen.com/tos-generator',
    applicationCategory: 'LegalApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a professional Terms of Service (ToS) agreement for your website or app. Define user rules, limit liability, and protect your intellectual property.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are Terms of Service and Terms and Conditions the same thing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Terms of Service, Terms and Conditions, and Terms of Use essentially refer to the identical legal concept: a contract established between a service provider and the user establishing rules and liabilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a Terms of Service legally required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike a Privacy Policy, a ToS is generally not legally mandated by the government for most informational websites. However, if you sell products, offer subscriptions, or accept user-generated content, having one is absolutely critical to protect yourself from civil liability and chargebacks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I enforce a Terms of Service if users don\'t read it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usually, yes. "Clickwrap" agreements (where a user must check a box saying "I agree to the ToS" before registering) are highly enforceable in court, even if they admit to not reading the document.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I copy another website\'s Terms of Service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Copying another company\'s legal documents is copyright infringement. Furthermore, their ToS was drafted for their specific business model, jurisdiction, and risk profile, rendering it legally ineffective for your unique business.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service Generator', item: 'https://legalpolicygen.com/tos-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Terms of Service (ToS) Generator — Protect Your App (2026)"
        description="Create a custom Terms of Service agreement in minutes. Establish user rules, protect intellectual property, and limit business liability. Free tool."
        canonical="/tos-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📜 Free Terms of Service (ToS) Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create an ironclad <strong style={{ color: 'var(--text-primary)' }}>Terms of Service</strong> agreement for your SaaS, e-commerce store, or app. Limit your liability and define user rules.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=tos')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your ToS — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Business Needs a Terms of Service</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            A Terms of Service (ToS) is the binding legal contract between you and your users. Without one, you effectively operate in a state of legal anarchy where you have no formal right to ban abusive users, protect your intellectual property, or limit crippling financial liability.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Absolute Liability Limitation:</strong> In the event your software has a bug that costs a client money, or an e-commerce shipment is delayed, your ToS establishes a "Warranty Disclaimer" limiting your financial payout liability to a nominal amount.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>The Right to Terminate Accounts:</strong> Your ToS legally reserves your exclusive right to immediately ban users, delete accounts, and cancel subscriptions for any reason, protecting your platform from toxic users and hackers.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Intellectual Property Protection:</strong> Establish formally that your code, logos, written content, and design remain your exclusive property and may not be scraped, copied, or re-sold.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Establish Governing Law:</strong> If someone sues you, your ToS ensures the lawsuit must take place in your home state or country, preventing you from having to fly across the world to fight a legal battle.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Are Terms of Service and Terms and Conditions the same?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. While "Terms of Service" is often used by SaaS apps and "Terms & Conditions" by e-commerce stores, both phrases describe the exact same underlying legal contract.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is a Terms of Service legally mandated by the government?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Unlike a Privacy Policy (which is strictly mandated by laws like GDPR and CCPA), a ToS is generally optional. However, it is the only way to establish formal business liability limitations in court.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can I copy another website's Terms of Service?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>No. Beyond being copyright infringement, borrowing another company's ToS is extremely dangerous since their document was drafted for completely different business risks, server locations, and state jurisdictions.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=tos')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Terms of Service Now →
        </button>
      </section>
    </div>
  );
};
