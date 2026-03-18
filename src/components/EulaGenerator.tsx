'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const EULA_FAQS: FAQItem[] = [
  {
    question: 'What is a EULA (End-User License Agreement)?',
    answer: 'A EULA is a legal contract between a software developer or vendor and the end user. Unlike a Terms of Service (which governs using a <em>service</em>), a EULA grants a <strong>license to use software</strong> — meaning the user doesn\'t own the software, they\'re borrowing it under specific conditions. This is critical for protecting your intellectual property.',
  },
  {
    question: 'Do I need a EULA for my app or software?',
    answer: 'If you distribute software, a mobile app, a desktop application, or a browser extension, a EULA is <strong>essential</strong>. Without one, users may claim they "own" the software after downloading it. A EULA explicitly states that you retain ownership and the user is granted a <strong>revocable, non-transferable license</strong> — protecting you from reverse engineering, redistribution, and piracy.',
  },
  {
    question: 'What is the difference between a EULA and Terms of Service?',
    answer: 'A <strong>EULA</strong> focuses on the right to use <em>software</em> — granting a license, prohibiting reverse engineering, and restricting redistribution. Best for downloadable apps and desktop software. A <strong>Terms of Service</strong> focuses on rules for using a <em>service</em> — covering user accounts, acceptable behavior, and uptime. Best for SaaS platforms and websites. Generate your ToS with our <a href="/tos-generator">free Terms of Service Generator</a>.',
  },
  {
    question: 'What should a EULA include?',
    answer: 'A comprehensive EULA should cover: <strong>license grant</strong> (what the user is allowed to do), <strong>restrictions</strong> (no copying, reverse engineering, or redistribution), <strong>intellectual property rights</strong>, <strong>limitation of liability</strong>, <strong>warranty disclaimer</strong>, <strong>termination conditions</strong>, <strong>governing law</strong>, and <strong>update/modification rights</strong> (your right to push updates that change functionality).',
  },
  {
    question: 'Can a EULA prevent software piracy?',
    answer: 'A EULA provides <strong>legal protection</strong> against piracy, not technical protection. It establishes that unauthorized copying, distribution, or modification of your software is a breach of contract and potentially copyright infringement — giving you grounds to pursue legal action. For technical protection, you\'d combine a EULA with license keys or DRM.',
  },
  {
    question: 'Is a EULA legally enforceable?',
    answer: 'Yes, when properly implemented. <strong>Clickwrap EULAs</strong> (where users must click "I Agree" before installing or using the software) are highly enforceable in court. <strong>Shrinkwrap EULAs</strong> (printed inside physical packaging) and <strong>browsewrap</strong> (hidden on a website) are more difficult to enforce. Always use clickwrap for maximum protection.',
  },
  {
    question: 'Do mobile apps on the App Store need a EULA?',
    answer: 'Both the <strong>Apple App Store</strong> and <strong>Google Play Store</strong> provide default EULAs, but they offer <strong>minimal protection</strong> for developers. It\'s strongly recommended to create a custom EULA that specifically addresses your app\'s unique features, data handling, in-app purchases, subscription terms, and content restrictions.',
  },
];

export const EulaGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free EULA Generator',
    url: 'https://legalpolicygen.com/eula-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate a free End-User License Agreement (EULA) for your software or mobile app in minutes. No signup required.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'EULA Generator', item: 'https://legalpolicygen.com/eula-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free EULA Generator — End-User License Agreement (2026)"
        description="Create a customized End-User License Agreement (EULA) for your software, desktop application, or mobile app."
        canonical="/eula-generator"
        jsonLd={[pageJsonLd, breadcrumbJsonLd]}
      />

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>💻 Free EULA Generator</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>End-User License Agreement</strong> for your app or software. Protect your intellectual property from reverse engineering and abuse.
        </p>
        <button className="btn-primary" onClick={() => router.push('/')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Generate Your EULA — Free →</button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>EULA vs. Terms of Service</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>While both are legal agreements, they serve different purposes:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>EULA (End-User License Agreement):</strong> Focuses on the right to use software. It grants a license and strictly prohibits copying, modifying, or reverse-engineering the source code. Best for downloadable software and mobile apps.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Terms of Service:</strong> Focuses on the rules for using a service. It covers user accounts, acceptable behavior, and service availability. Best for SaaS platforms and websites.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={EULA_FAQS} />

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button className="btn-primary" onClick={() => router.push('/')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Create Your Free EULA Now →</button>
      </section>
    </div>
  );
};
