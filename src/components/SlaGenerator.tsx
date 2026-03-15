import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const SlaGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Service Level Agreement (SLA) Generator',
    url: 'https://legalpolicygen.com/sla-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a Service Level Agreement (SLA) for your B2B SaaS or IT agency. Define uptime guarantees, support response times, and service credits.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Service Level Agreement (SLA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An SLA is a contract between a service provider and a client that defines the expected level of service. It typically covers uptime guarantees (e.g., 99.9% uptime), support response times, and the penalties (service credits) if those levels are not met.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my SaaS startup need an SLA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For B2C (consumer) software, no. However, if you sell to B2B enterprise clients, an SLA is almost always required during the procurement process. Enterprise clients need a financial guarantee that your software won\'t crash during critical business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are "Service Credits"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Service credits are the financial remedy if you fail to meet your SLA. Instead of the client suing you for lost revenue due to an outage, your SLA dictates they receive a percentage of their subscription fee back (e.g., a 10% discount next month).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you calculate 99.9% uptime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '99.9% uptime allows for approximately 43.8 minutes of downtime per month. If your servers are down for longer than 44 minutes in a 30-day period, you have breached a 99.9% SLA.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'SLA Generator', item: 'https://legalpolicygen.com/sla-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free SLA Generator — Service Level Agreement for SaaS"
        description="Create an SLA for your IT agency or B2B SaaS. Define 99.9% uptime guarantees, support response times, and service credit penalties."
        canonical="/sla-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🤝 Free Service Level Agreement (SLA) Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Service Level Agreement</strong>. Define uptime guarantees and support response times to close enterprise SaaS deals.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=sla')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your SLA — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your B2B Company Needs an SLA</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you provide critical infrastructure—like a CRM, web hosting, or IT managed services—your clients rely on your system to run their business. An SLA defines the financial boundaries of that reliance.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Close Enterprise Deals:</strong> Procurement departments at large corporations will usually block the purchase of any B2B SaaS tool that does not offer a standard SLA defining uptime and disaster recovery.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Limit Output Liability (Service Credits):</strong> If your server crashes and a client loses $100,000 in sales, an SLA protects you. It limits their compensation exclusively to "Service Credits" (e.g., a free month of software), preventing catastrophic lawsuits for lost revenue.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Set Support Boundaries:</strong> An SLA clearly defines that "Severity 1" (System Down) tickets get a 1-hour response time, while "Severity 3" (Bug/Feature) tickets get a 24-hour response time, preventing client abuse of your support staff.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Define Exclusions:</strong> A well-written SLA explicitly states that planned maintenance windows and "Act of God" force majeure events do not count against your 99.9% uptime guarantee.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What does 99.9% uptime actually mean?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Referred to as "three nines," it allows for 43 minutes and 49 seconds of downtime per month. "Four nines" (99.99%) allows for just 4.38 minutes per month.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is a "Service Credit"?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Rather than reimbursing a client for their total lost business during an outage, an SLA dictates they receive a percentage of their monthly subscription fee back as a credit toward their next invoice.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Should startups offer an SLA?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Only if you are targeting B2B enterprise customers. For B2C or early-stage SMB software, offering a harsh SLA can financially cripple you if AWS goes down.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=sla')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Service Level Agreement Now →
        </button>
      </section>
    </div>
  );
};
