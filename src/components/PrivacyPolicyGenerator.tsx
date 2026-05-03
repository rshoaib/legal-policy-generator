'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const PRIVACY_FAQS: FAQItem[] = [
  {
    question: 'Is a privacy policy legally required for my website?',
    answer: 'Yes. If you collect <strong>any</strong> personal information — including names, emails, IP addresses, or cookies via Google Analytics — you are legally required to have a privacy policy under laws like <strong>GDPR</strong> (EU), <strong>CCPA/CPRA</strong> (California), <strong>LGPD</strong> (Brazil), and <strong>PIPEDA</strong> (Canada). Third-party platforms like Google AdSense, the Apple App Store, and Stripe also require a published privacy policy.',
  },
  {
    question: 'Is this privacy policy generator really free?',
    answer: 'Yes, 100% free — no hidden charges, no signup, no paywall. Generate unlimited privacy policies without creating an account. Your data never leaves your browser; everything is processed entirely client-side.',
  },
  {
    question: 'Are generated privacy policies legally binding?',
    answer: 'Our templates are built on real legal frameworks including GDPR, CCPA, CalOPPA, and LGPD. They cover the vast majority of use cases for small businesses, bloggers, SaaS apps, and e-commerce stores. However, we always recommend having an attorney review your final document if you handle highly sensitive data (health, financial, children\'s data).',
  },
  {
    question: 'Does a small blog or personal website need a privacy policy?',
    answer: 'Yes. Even a simple blog that uses Google Analytics, collects email subscribers, or displays ads collects personal data (IP addresses, cookies). Under GDPR, <strong>any</strong> processing of personal data from EU visitors requires a privacy policy — regardless of your website\'s size or traffic volume.',
  },
  {
    question: 'What makes a privacy policy GDPR compliant?',
    answer: 'To satisfy GDPR Articles 13 and 14, your privacy policy must clearly disclose: <strong>who</strong> collects the data (your identity), <strong>what</strong> data is collected, <strong>why</strong> it is collected (legal basis), <strong>who</strong> it is shared with, <strong>how long</strong> it is retained, and a full list of <strong>data subject rights</strong> (access, deletion, portability, objection). Our generator covers all of these automatically.',
  },
  {
    question: 'What is the difference between GDPR and CCPA?',
    answer: 'The <strong>GDPR</strong> (EU) requires opt-in consent before most data processing and applies to any site with EU visitors. The <strong>CCPA/CPRA</strong> (California) gives consumers the right to know what data is collected and to opt-out of the sale of their data. CCPA applies to for-profit businesses that meet certain revenue or data volume thresholds. Our generator creates policies that cover <strong>both</strong> regulations.',
  },
  {
    question: 'Can I just copy another website\'s privacy policy?',
    answer: 'No. Copying is <strong>copyright infringement</strong>, and more importantly, another site\'s policy was written for their specific data practices, third-party tools, and jurisdiction. Using it for your business provides no legal protection. Use a generator that customizes the document to your actual data collection practices.',
  },
  {
    question: 'How often should I update my privacy policy?',
    answer: 'Review your privacy policy at least <strong>once a year</strong> and update it whenever you: change data collection practices, add new third-party tools or analytics, expand to new geographic markets, or when major regulations change. Always display a visible "last updated" date.',
  },
  {
    question: 'Do I need a separate privacy policy for my mobile app?',
    answer: 'While one privacy policy can cover both your website and app, it must address <strong>all</strong> data practices for both platforms — including mobile-specific data like location services, device identifiers, push notifications, and camera/microphone access. Both the Apple App Store and Google Play Store require a published privacy policy link.',
  },
  {
    question: 'Does Google require a privacy policy?',
    answer: 'Yes. <strong>Google Analytics</strong>, <strong>Google AdSense</strong>, <strong>Google Ads</strong>, and the <strong>Google Play Store</strong> all explicitly require websites and apps to have a published, accessible privacy policy. Failure to comply can result in account suspension or ad serving being disabled.',
  },
];

export const PrivacyPolicyGenerator: React.FC = () => {
  const router = useRouter();
 return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🔒 Free Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a <strong style={{ color: 'var(--text-primary)' }}>GDPR & CCPA-compliant</strong> privacy policy for your website or app in minutes. No signup. No cost.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Privacy Policy — Free →
        </button>
      </section>

      {/* Why You Need a Privacy Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            It is a legal requirement in almost every major jurisdiction to have a privacy policy if you collect personal data. "Personal data" includes names, emails, billing details, IP addresses, and even device identifiers collected by analytics tools.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR (Europe):</strong> Requires detailed disclosures of data processing and clear statements of user rights.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>CCPA & CPRA (California):</strong> Demands transparency regarding data collection, selling, and sharing practices.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>CalOPPA (California):</strong> Requires any website compiling PII from California residents to prominently post a privacy policy.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Third-Party Requirements:</strong> Google Analytics, AdSense, Facebook Pixel, and all major App Stores require you to have a valid privacy policy to use their services.</li>
          </ul>
        </div>
      </section>

      {/* FAQ — Accordion */}
      <ToolFAQ faqs={PRIVACY_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Privacy Policy Now →
        </button>
      </section>
    </div>
  );
};
