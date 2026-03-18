'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const REFUND_FAQS: FAQItem[] = [
  {
    question: 'Is a return policy legally required for e-commerce?',
    answer: 'While not federally mandated in the US, many states (California, Florida, New York) require retailers to <strong>conspicuously post</strong> their refund policy. In the <strong>EU</strong>, the Consumer Rights Directive legally mandates a minimum <strong>14-day cooling-off period</strong> for online purchases. If you don\'t post a policy, some states assume you must accept returns.',
  },
  {
    question: 'Can an online store have a "no refund" policy?',
    answer: 'In the US, yes — provided it is <strong>clearly and conspicuously stated</strong> before the customer completes their purchase. However, in the <strong>EU, UK, and Australia</strong>, consumers have legal rights to refunds for faulty, damaged, or misrepresented products regardless of your posted policy. Digital goods can have stricter no-refund terms.',
  },
  {
    question: 'What should a refund policy include?',
    answer: 'A comprehensive refund policy must include: <strong>return window</strong> (e.g., 30 days), <strong>condition requirements</strong> (unworn, original packaging), <strong>refund method</strong> (original payment vs. store credit), <strong>return shipping costs</strong> (who pays), <strong>exclusions</strong> (sale items, personalized products), <strong>processing timeline</strong> (7–14 business days), and <strong>how to initiate a return</strong>.',
  },
  {
    question: 'How long should a return window be?',
    answer: 'The standard is <strong>30 days</strong>, which aligns with consumer expectations and payment processor guidelines. The EU mandates a minimum of <strong>14 days</strong>. Some retailers extend to <strong>60 or 90 days</strong> during holiday seasons. Longer windows actually <strong>reduce</strong> return rates due to the "endowment effect" — customers grow attached to products over time.',
  },
  {
    question: 'Who pays for return shipping — the customer or seller?',
    answer: 'This is entirely your choice, but it must be <strong>clearly stated</strong> in your policy. Most businesses require customers to pay for return shipping unless the item was defective or incorrect. In the EU, if a customer exercises their 14-day right of withdrawal, the seller must refund the original shipping cost but the customer typically pays the return.',
  },
  {
    question: 'Do digital products need a refund policy?',
    answer: 'Yes. Since digital files (PDFs, eBooks, software licenses, online courses) <strong>cannot be physically returned</strong>, businesses typically implement "all sales final" policies. This must be clearly stated <strong>before purchase</strong> to hold up against credit card chargebacks. In the EU, consumers can waive their 14-day withdrawal right for digital content if they explicitly consent.',
  },
  {
    question: 'How long does it take to process a refund?',
    answer: 'Most businesses process refunds within <strong>7–14 business days</strong> after receiving the returned item. Credit card refunds typically take an additional <strong>5–10 business days</strong> to appear on the customer\'s statement. State this clearly in your policy to manage customer expectations and reduce support tickets.',
  },
];

export const RefundPolicyGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Refund Policy Generator',
    url: 'https://legalpolicygen.com/refund-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate a free, professional return and refund policy for your e-commerce store in minutes. Protect your business from chargebacks.',
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
        jsonLd={[pageJsonLd, breadcrumbJsonLd]}
      />

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>💸 Free Refund Policy Generator</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear, professional <strong style={{ color: 'var(--text-primary)' }}>Return & Refund Policy</strong> for your business. Prevent disputes, reduce chargebacks, and build customer trust in minutes.
        </p>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=refund')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Generate Your Refund Policy — Free →</button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Store Needs a Clear Refund Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>A refund policy is more than just good customer service — it is a critical legal baseline for your e-commerce store, SaaS app, or agency.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent Chargebacks:</strong> Payment gateways like Stripe and PayPal will almost always side with the consumer if you do not have a clearly visible refund policy.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Build Customer Trust:</strong> 68% of consumers check the return policy before making a purchase. A clear policy increases conversion rates.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>State and Consumer Laws:</strong> Laws in California, Florida, and New York require retailers to post a return policy. The EU requires a 14-day cooling-off period.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Clarify Digital Goods:</strong> An explicit "No Refunds on Digital Goods" policy helps stop friendly fraud.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={REFUND_FAQS} />

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=refund')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Create Your Free Refund Policy Now →</button>
      </section>
    </div>
  );
};
