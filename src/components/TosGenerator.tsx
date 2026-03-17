'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const TOS_FAQS: FAQItem[] = [
  {
    question: 'Are Terms of Service legally binding?',
    answer: 'Yes, when properly implemented. A <strong>"clickwrap"</strong> agreement — where users must actively check a box or click "I Agree" before accessing the service — is highly enforceable in court, even if the user admits they didn\'t read the document. <strong>"Browsewrap"</strong> agreements (simply posting a link in the footer) are harder to enforce.',
  },
  {
    question: 'Are Terms of Service and Terms and Conditions the same thing?',
    answer: 'Yes. "Terms of Service" (ToS), "Terms and Conditions" (T&C), and "Terms of Use" (ToU) all refer to the same type of legal contract between a service provider and its users. SaaS companies tend to use "Terms of Service," while e-commerce stores often say "Terms and Conditions." The legal effect is identical.',
  },
  {
    question: 'Is a Terms of Service legally required for my website?',
    answer: 'Unlike a Privacy Policy (which is mandated by GDPR/CCPA), a ToS is generally <strong>not required by law</strong> for most informational websites. However, if you sell products, offer subscriptions, accept user-generated content, or operate a SaaS platform, a ToS is <strong>essential</strong> to limit your liability, protect intellectual property, and establish governing law.',
  },
  {
    question: 'What should a Terms of Service include?',
    answer: 'A comprehensive Terms of Service should include: <strong>acceptable use rules</strong>, <strong>intellectual property notices</strong>, <strong>limitation of liability</strong>, <strong>disclaimer of warranties</strong>, <strong>account termination rights</strong>, <strong>payment and refund terms</strong> (if applicable), <strong>dispute resolution and governing law</strong>, and a <strong>clause reserving the right to modify the terms</strong>. Our generator covers all of these.',
  },
  {
    question: 'Can I copy another website\'s Terms of Service?',
    answer: 'No. Copying is <strong>copyright infringement</strong>, and the copied ToS was drafted for a different business model, jurisdiction, and risk profile. It provides no legal protection for your specific situation. Use a generator that customizes the document based on your actual business practices.',
  },
  {
    question: 'What is a limitation of liability clause?',
    answer: 'A limitation of liability clause caps the maximum amount of damages a user can claim against you. For example, it might state that your total liability will not exceed the amount the user paid in the last 12 months. Without this clause, a single lawsuit could bankrupt a small business.',
  },
  {
    question: 'How do I make users agree to my Terms of Service?',
    answer: 'The most legally enforceable method is a <strong>clickwrap agreement</strong>: require users to actively check a checkbox (e.g., "I have read and agree to the Terms of Service") before they can register, purchase, or use your service. Display the full ToS or a clear link next to the checkbox.',
  },
  {
    question: 'What is the difference between Terms of Service and a Privacy Policy?',
    answer: 'A <strong>Terms of Service</strong> governs the relationship between you and your users — setting rules for using your platform, limiting your liability, and protecting your IP. A <strong>Privacy Policy</strong> specifically addresses how you collect, use, store, and protect personal data. Most websites need <strong>both</strong> documents. Generate yours with our <a href="/privacy-policy-generator">free Privacy Policy Generator</a>.',
  },
  {
    question: 'How often should Terms of Service be updated?',
    answer: 'Update your ToS whenever you: change your business model, add new features (especially AI-powered ones), modify pricing or refund policies, expand to new jurisdictions, or when new regulations take effect. At minimum, review annually. Always notify existing users of material changes.',
  },
  {
    question: 'Do I need Terms of Service for a free website or app?',
    answer: 'Yes, even for free services. A ToS protects you from <strong>liability claims</strong> (e.g., if a user relies on your free tool and suffers a loss), gives you the right to <strong>terminate abusive accounts</strong>, and establishes <strong>intellectual property ownership</strong>. Free doesn\'t mean risk-free.',
  },
];

export const TosGenerator: React.FC = () => {
  const router = useRouter();

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
        jsonLd={[pageJsonLd, breadcrumbJsonLd]}
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
          onClick={() => router.push('/?step=form&type=tos')}
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

      {/* FAQ — Accordion */}
      <ToolFAQ faqs={TOS_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=tos')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Terms of Service Now →
        </button>
      </section>
    </div>
  );
};
