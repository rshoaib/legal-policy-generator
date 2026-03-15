import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const NewsletterPolicyGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Newsletter Privacy Policy Generator',
    url: 'https://legalpolicygen.com/newsletter-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a GDPR and CAN-SPAM compliant Newsletter Privacy Policy. Ensure your marketing emails are legal and transparent.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a separate policy just for my newsletter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your main website is very simple but your email marketing is aggressive (using pixel tracking, cross-selling data, or third-party sponsors), a dedicated Newsletter Policy clearly outlines these specific data practices without cluttering your main site Privacy Policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the CAN-SPAM Act?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The CAN-SPAM Act is a U.S. law that sets the rules for commercial email. It requires you to accurately identify yourself, not use deceptive subject lines, include a valid physical postal address, and provide a clear, working opt-out (unsubscribe) mechanism.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are single opt-ins legal under GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under GDPR, consent must be freely given, specific, and unambiguous. While single opt-in is not strictly illegal, double opt-in (where the user confirms their email click) is highly recommended as definitive proof of consent under European law.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I sell my email subscriber list?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under CCPA and GDPR, you cannot legally sell an email list unless you explicitly disclosed this intention at the exact point of data collection and the user actively opted into that specific sale of their data.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Newsletter Policy Generator', item: 'https://legalpolicygen.com/newsletter-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Newsletter Privacy Policy (CAN-SPAM & GDPR Compliant)"
        description="Create a clear, compliant Newsletter Privacy Policy for your email marketing list. Adhere to CAN-SPAM, CASL, and GDPR data collection laws."
        canonical="/newsletter-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📧 Free Newsletter Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a legally compliant <strong style={{ color: 'var(--text-primary)' }}>Newsletter Policy</strong>. Build your subscriber list while satisfying strict <strong style={{ color: 'var(--accent-primary)' }}>CAN-SPAM</strong> and GDPR anti-spam regulations.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=newsletter')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Email List Needs a Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Collecting an email address seems simple, but email marketing is arguably the most heavily regulated form of digital communication globally. Before a user clicks "Subscribe," they must legally be informed exactly how that email address will be used.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Anti-Spam Law Compliance:</strong> A policy helps you prove compliance with the US CAN-SPAM Act, Canada's CASL, and the EU's GDPR, all of which impose massive fines per unsolicited email sent.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Disclose Pixel Tracking:</strong> Standard email platforms (Mailchimp, ConvertKit, Beehiiv) use invisible tracking pixels to log when an email is opened and which links are clicked. This is a form of data collection that must be explicitly disclosed.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Sponsorships & Monetization:</strong> If you plan to sell sponsored slots in your newsletter, your policy must clarify that subscriber data (like email addresses) is not being handed over directly to the sponsors.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>The Right to be Forgotten:</strong> A compliant policy clearly provides instructions on how users can immediately unsubscribe and request their data be entirely scrubbed from your CRM.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is the CAN-SPAM Act?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It's a US law that regulates commercial email. It requires you to clearly identify yourself, never use deceptive subject lines, include a physical postal address in the footer, and offer a quick opt-out mechanism.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can I add existing customers to my newsletter list?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Under US law, an existing business relationship often permits this (soft opt-in). Under EU GDPR, however, you cannot add a customer to a marketing list without explicit, unambiguous consent specifically for marketing emails.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can I sell my email subscriber list?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Under modern privacy laws like CCPA and GDPR, you cannot legally sell an email list unless you explicitly disclosed this intention at the exact point of data collection and the user opted in to that sale.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=newsletter')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Newsletter Policy Now →
        </button>
      </section>
    </div>
  );
};
