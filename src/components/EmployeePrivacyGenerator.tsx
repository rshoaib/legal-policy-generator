import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const EmployeePrivacyGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Employee Privacy Policy Generator',
    url: 'https://legalpolicygen.com/employee-privacy-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Create an Employee Privacy Policy to comply with CPRA and GDPR workplace data regulations. Protect employee rights and your HR department.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an Employee Privacy Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An Employee Privacy Policy (or Notice at Collection) is an internal HR document that discloses to your workforce exactly what personal data you collect from them, how it is used, and who it is shared with (e.g., payroll providers).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is an Employee Privacy Policy legally required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In the European Union (under GDPR) and in California (under CPRA), employers are legally obligated to provide a specific privacy notice to applicants, employees, and independent contractors regarding their workplace data.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data does this policy cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It covers Social Security numbers, bank details for direct deposit, background check results, biometric data (like fingerprint time clocks), health data for insurance, and digital surveillance (like email monitoring or GPS tracking).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I just use my website\'s standard Privacy Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A standard website Privacy Policy is for external consumers using your app or site. Employee data is handled completely differently (payroll, benefits, performance reviews) and requires a distinct, specialized HR policy.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Employee Privacy Policy Generator', item: 'https://legalpolicygen.com/employee-privacy-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Employee Privacy Policy Generator (CPRA & GDPR) - 2026"
        description="Generate an Employee Privacy Policy for your business. Disclose HR data collection to comply with California CPRA and EU GDPR requirements."
        canonical="/employee-privacy-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          💼 Free Employee Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a legally compliant <strong style={{ color: 'var(--text-primary)' }}>Employee Privacy Notice</strong> to protect your HR department and comply with California CPRA and EU GDPR workplace laws.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=employee-privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your HR Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Business Needs an Employee Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Consumer privacy laws have expanded to cover the workplace. If you employ staff, you collect highly sensitive data: bank accounts, Social Security numbers, health records, and workplace surveillance. You are legally required to disclose how you handle this data.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>California CPRA Expiration:</strong> As of Jan 1, 2023, the California Privacy Rights Act (CPRA) eliminated the B2B and employee exemptions. If you have employees in California, you must provide a CPRA-compliant Notice at Collection.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>EU GDPR Article 13 & 14:</strong> European companies must provide employees with a comprehensive data processing notice before or at the time of collecting their personal data (usually during onboarding).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Workplace Surveillance Disclosure:</strong> If you monitor employee emails, Slack messages, internet usage, or use GPS tracking on company vehicles, failing to disclose this legally can result in massive privacy invasion lawsuits.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Third-Party Payroll:</strong> If you use ADP, Gusto, or Deel, you are sharing employee data with third parties. Your policy must formally disclose these vendors as data processors.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is an Employee Privacy Policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is an internal HR document that discloses to your applicants, employees, and contractors exactly what personal data you collect from them, how it is used, and who it is shared with.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can I just use my website's standard Privacy Policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>No. A standard website Privacy Policy is for external consumers using your app or site. Employee data is handled completely differently (payroll, benefits, performance reviews) and requires a distinct, specialized HR policy.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>When should I give this to employees?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Ideally, it should be provided during the application process as a "Notice at Collection," and subsequently included in the onboarding employee handbook.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=employee-privacy')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Employee Privacy Policy Now →
        </button>
      </section>
    </div>
  );
};
