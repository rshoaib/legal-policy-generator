import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const DataBreachPolicyGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Data Breach Response Policy Generator',
    url: 'https://legalpolicygen.com/data-breach-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a GDPR and CCPA compliant Data Breach Response Policy. Establish internal protocols for managing, containing, and reporting cyber attacks.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Data Breach Response Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is an internal corporate document that outlines the exact step-by-step procedures an organization must follow when a cyber attack, ransomware event, or accidental data exposure occurs. It defines who is on the Incident Response Team and reporting timelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a Data Breach Policy legally required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The GDPR (Article 33) and the CCPA require businesses to have established security protocols. Furthermore, if you handle healthcare data (HIPAA) or credit cards (PCI-DSS), an Incident Response Plan is a strict regulatory requirement.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly must I report a data breach under GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under the European GDPR, you are legally required to notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible. Your policy must reflect this strict timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if we hide a data breach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Covering up a data breach usually results in the maximum possible regulatory fines (e.g., up to 4% of global turnover under GDPR), massive class-action lawsuits, and often criminal charges against executives (as seen in the Uber 2016 breach cover-up).',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Data Breach Policy Generator', item: 'https://legalpolicygen.com/data-breach-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Data Breach Response Policy Generator (Incident Plan)"
        description="Create an Incident Response and Data Breach Policy for your business. Comply with GDPR 72-hour reporting laws. Free tool."
        canonical="/data-breach-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🚨 Free Data Breach Response Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create an internal <strong style={{ color: 'var(--text-primary)' }}>Incident Response Plan</strong>. Establish clear protocols for containing cyber attacks, mitigating damage, and legally reporting data leaks under GDPR.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=data-breach')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Breach Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Company Needs an Incident Response Plan</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            It is no longer a question of *if* your company will experience a data breach or ransomware attack, but *when*. During the chaos of an active cyber attack, having a predefined Data Breach Policy is the difference between an orderly recovery and a company-ending disaster.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR 72-Hour Rule:</strong> If EU citizen data is leaked, you have exactly 72 hours to report it to the authorities. Your policy outlines the template and assigns the specific employee responsible for sending this notification.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Stop the Bleeding:</strong> An effective policy immediately authorizes the IT team to sever network connections, shut down API endpoints, and pull servers offline without waiting for CEO approval, containing the breach instantly.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Legal Defense:</strong> When regulators audit you post-breach, showing them a documented Incident Response plan proves that you took data security seriously, drastically reducing corporate negligence fines.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>B2B Vendor Requirements:</strong> If you sell B2B SaaS, your clients' procurement teams will demand a copy of your internal Data Breach Policy before signing a contract to ensure their data is safe in your hands.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is a Data Breach?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is any security incident that results in the unauthorized access, destruction, use, modification, or disclosure of personal data or corporate intellectual property.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Who should be on our Incident Response Team?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Typically, it consists of a Lead Incident Commander (CTO/CISO), Lead Legal Counsel, PR/Communications Director, and the Lead Systems Engineer.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>When must we notify customers?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Most state and international laws mandate that users must be notified "without unreasonable delay" if the stolen data (like passwords, SSNs, or credit cards) poses a high risk to their rights and freedoms.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=data-breach')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Data Breach Policy Now →
        </button>
      </section>
    </div>
  );
};
