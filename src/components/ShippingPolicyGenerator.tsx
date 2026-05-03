'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const SHIPPING_FAQS: FAQItem[] = [
  {
    question: 'Do I need a shipping policy for my online store?',
    answer: 'While not strictly mandated by law, it is <strong>functionally required</strong>. Payment processors like Stripe, PayPal, and Square require you to display shipping policies to help resolve <strong>"Item Not Received"</strong> chargeback disputes. Without a shipping policy, you will lose almost every dispute. Major marketplaces like Shopify, Amazon, and Etsy also require one.',
  },
  {
    question: 'What should a shipping policy include?',
    answer: 'A comprehensive shipping policy should detail: <strong>processing/handling time</strong> (time to pack the order), <strong>shipping methods and costs</strong> (standard, express, overnight), <strong>estimated delivery times</strong> per region, <strong>international shipping zones</strong> and customs/duties info, <strong>order tracking</strong> details, <strong>restrictions</strong> (P.O. boxes, APO addresses), and your <strong>lost/damaged package procedure</strong>.',
  },
  {
    question: 'How do I handle international shipping and customs duties?',
    answer: 'Unless you use <strong>DDP (Delivered Duty Paid)</strong> shipping, the customer is legally responsible for all import duties, customs fees, and local taxes. You <strong>must</strong> state this clearly in your policy — otherwise customers may refuse packages at customs and demand a full refund. List the countries you ship to and any region-specific restrictions.',
  },
  {
    question: 'What is the difference between handling time and shipping time?',
    answer: '<strong>Handling time</strong> is the time it takes your warehouse or team to pack and hand the order to the carrier (e.g., 1–3 business days). <strong>Shipping time</strong> is the time the carrier (USPS, FedEx, UPS) takes to deliver it. Separating these in your policy prevents customer complaints like "I ordered yesterday, where is my package?"',
  },
  {
    question: 'What happens if a package is lost in transit?',
    answer: 'Your policy should clearly define the <strong>point of liability transfer</strong>. Typically, once a package is scanned by the carrier with a tracking number, the carrier is responsible for loss or damage. Your policy should guide customers to file a claim with the carrier and provide your support contact for assistance.',
  },
  {
    question: 'Should I offer free shipping?',
    answer: 'Free shipping is the <strong>#1 conversion driver</strong> in e-commerce. Consider offering it above a minimum order value (e.g., "Free shipping on orders over $50"). If you can\'t afford free shipping on all orders, clearly state your shipping rates by region and order weight. Transparent pricing reduces cart abandonment.',
  },
  {
    question: 'What are common shipping policy mistakes?',
    answer: 'The most common mistakes are: <strong>not separating handling from shipping time</strong> (causing premature complaints), <strong>not disclosing customs/duties responsibility</strong> (causing international refund disputes), <strong>not updating the policy for holiday delays</strong>, and <strong>not linking the policy from the checkout page</strong> (Stripe and PayPal require visibility before purchase).',
  },
];

export const ShippingPolicyGenerator: React.FC = () => {
  const router = useRouter();
 return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>📦 Free Shipping Policy Generator</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear <strong style={{ color: 'var(--text-primary)' }}>Shipping Policy</strong> for your online store. Prevent customer chargebacks regarding delayed deliveries or international customs fees.
        </p>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=shipping')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Generate Your Shipping Policy — Free →</button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Store Needs a Clear Shipping Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>A comprehensive Shipping Policy is your first line of defense against angry customers and devastating payment processor chargebacks.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Win Chargeback Disputes:</strong> A clearly displayed processing time (e.g., "Allow 7-10 days") helps you win "Item Not Received" disputes.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>International Customs Liability:</strong> Eliminate refund risk by explicitly stating that all import taxes are the buyer's sole responsibility.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Reduce Support Tickets:</strong> The #1 question e-commerce stores receive is "Where is my order?" A policy answers FAQs instantly.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Handling vs Shipping Times:</strong> Differentiate between warehouse packing time and carrier transit time to set accurate expectations.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={SHIPPING_FAQS} />

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=shipping')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Create Your E-Commerce Shipping Policy Now →</button>
      </section>
    </div>
  );
};
