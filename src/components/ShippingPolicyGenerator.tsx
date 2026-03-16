'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const ShippingPolicyGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Shipping Policy Generator',
    url: 'https://legalpolicygen.com/shipping-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a professional Shipping Policy for your e-commerce store. Clarify shipping times, international customs duties, and lost package protocols.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an E-commerce Shipping Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Shipping Policy is a dedicated page on an e-commerce website that outlines all vital shipping details: processing times, shipping costs, international delivery zones, customs/duties responsibilities, and protocols for lost or damaged packages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a Shipping Policy legally required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While not explicitly mandated by the government like a Privacy Policy, it is required by payment processors (like Stripe and PayPal) to help resolve customer chargeback disputes related to "Item Not Received" claims.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who pays for international customs and duties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unless you use DDP (Delivered Duty Paid) shipping, the customer is legally responsible for all import duties and local taxes. However, you must explicitly state this in your Shipping Policy, otherwise the customer may refuse the package and demand a refund.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if a package is lost in transit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your policy should define the point of liability transfer. Usually, once the package is handed to the carrier (e.g., USPS, FedEx), the carrier is responsible. The policy guides the customer on how to file a claim with the carrier instead of immediately requesting a refund from you.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Shipping Policy Generator', item: 'https://legalpolicygen.com/shipping-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free E-Commerce Shipping Policy Generator (Shopify/WooCommerce)"
        description="Create a custom Shipping Policy for your online store. Clearly define shipping costs, handling times, and international customs responsibilities."
        canonical="/shipping-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📦 Free Shipping Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear <strong style={{ color: 'var(--text-primary)' }}>Shipping Policy</strong> for your online store. Prevent customer chargebacks regarding delayed deliveries or international customs fees.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=shipping')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Shipping Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Store Needs a Clear Shipping Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            A comprehensive Shipping Policy is your first line of defense against angry customers and devastating payment processor chargebacks. By openly detailing your fulfillment process, you set accurate customer expectations before they reach checkout.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Win Chargeback Disputes:</strong> If a customer files a PayPal dispute claiming "Item Not Received" after 5 days, a clearly displayed processing time (e.g., "Allow 7-10 days for fulfillment") helps you win the dispute.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>International Customs Liability:</strong> Eliminate the risk of European or Australian customers refusing expensive international packages at customs by explicitly stating that *all import taxes are the buyer's sole responsibility*.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Reduce Customer Support Tickets:</strong> The #1 question e-commerce stores receive is "Where is my order?" A dedicated policy answers FAQs regarding tracking links, P.O. boxes, and carrier delays instantly.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Handling Times vs Shipping Times:</strong> A professional policy differentiates between the time it takes your warehouse to pack the box (handling) and the time the carrier takes to move it (shipping).</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is a Shipping Policy legally required?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>While not federally regulated like a Privacy Policy, it is functionally required. Major payment gateways like Stripe demand you display shipping and return policies to minimize fraud and friendly chargebacks.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Who pays for international customs and duties?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Unless you specifically offer DDP (Delivered Duty Paid) shipping, the customer pays. Your policy must state this clearly to prevent the customer from refusing the package.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What if a package is lost in transit?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>The policy should define when liability transfers to your carrier (USPS, FedEx). It guides customers to file a claim with the carrier rather than demanding an instant refund from your store.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=shipping')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your E-Commerce Shipping Policy Now →
        </button>
      </section>
    </div>
  );
};
