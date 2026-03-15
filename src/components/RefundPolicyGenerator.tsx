import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const RefundPolicyGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Refund Policy Generator',
    url: 'https://legalpolicygen.com/refund-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free, professional return and refund policy for your e-commerce store in minutes. Protect your business from chargebacks.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is it legally required to have a refund policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While not federally mandated in the US, many states require retailers to conspicuously post their refund policy. In the EU, the Consumer Rights Directive requires online businesses to offer a 14-day return window and clearly state their refund terms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes a good refund policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good refund policy should clearly state the return window (e.g., 30 days), condition requirements (e.g., unworn with tags), the refund method (store credit vs original payment), and who pays for return shipping.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do digital products need a refund policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Digital products often have strict "no-refund" policies because they cannot be "returned." It is critical to state this clearly before purchase to prevent chargebacks and subscriber disputes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this refund policy generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, completely free. You can generate a comprehensive return and refund policy tailored to your e-commerce store or digital business without signing up.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Refund Policy Generator', item: 'https://legalpolicygen.com/refund-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Refund Policy Generator — Protect Your Store (2026)"
        description="Create a clear return and refund policy for your e-commerce store or SaaS. Reduce chargebacks and build trust. Free, no signup required."
        canonical="/refund-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          💸 Free Refund Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear, professional <strong style={{ color: 'var(--text-primary)' }}>Return & Refund Policy</strong> for your business. Prevent disputes, reduce chargebacks, and build customer trust in minutes.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=refund')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Refund Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Store Needs a Clear Refund Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            A refund policy is more than just good customer service—it is a critical legal baseline for your e-commerce store, SaaS app, or agency. Without one, you leave yourself exposed to costly disputes, angry customers, and payment processor suspensions.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent Chargebacks:</strong> Payment gateways like Stripe and PayPal will almost always side with the consumer if you do not have a clearly visible, legally sound refund policy.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Build Customer Trust:</strong> 68% of consumers check the return policy before making a purchase. A clear policy increases conversion rates and consumer confidence.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>State and Consumer Laws:</strong> Laws in California, Florida, and New York require retailers to post a conspicuous return policy; otherwise, the law dictates you must accept returns. The EU requires a 14-day cooling-off period.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Clarify Digital Goods:</strong> If you sell software, courses, or digital downloads, an explicit "No Refunds on Digital Goods" policy helps stop friendly fraud.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is it legally required to have a refund policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>While not federally mandated in the US, many states require it. In the EU, the Consumer Rights Directive legally mandates that you disclose your minimum 14-day return window.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What should I include in my policy?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>You must explicitly state your return timeframe (e.g., 30 Days), condition requirements (e.g., unworn with tags), return shipping cost responsibility, and timeline for processing the refund.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Why are digital products handled differently?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Since digital files (PDFs, eBooks, Software) cannot be physically "returned," businesses usually establish a strict "All Sales Final" policy. This must be clearly stated at checkout to hold up against credit card companies.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=refund')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Refund Policy Now →
        </button>
      </section>
    </div>
  );
};
