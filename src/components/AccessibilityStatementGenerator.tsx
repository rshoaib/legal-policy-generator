'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const ACCESSIBILITY_FAQS: FAQItem[] = [
  { question: 'What is a website accessibility statement?', answer: 'An accessibility statement is a public document stating your commitment to accessibility, the WCAG 2.1 AA standards you target, known limitations, and how users can report barriers.' },
  { question: 'Does an accessibility statement protect me from ADA lawsuits?', answer: 'While it does not grant absolute immunity, a clear statement serves as strong evidence of good-faith compliance effort — which courts frequently consider when dismissing ADA claims.' },
  { question: 'What does WCAG stand for?', answer: 'WCAG stands for Web Content Accessibility Guidelines, the international W3C standard. Most modern laws (ADA, EAA) require WCAG 2.1 Level AA compliance.' },
  { question: 'Do e-commerce sites need an accessibility statement?', answer: 'Yes — especially under the European Accessibility Act (EAA) which mandated compliance for EU e-commerce businesses from June 2025. US businesses should also publish one to reduce ADA litigation risk.' },
  { question: 'Will this statement make my site ADA compliant?', answer: 'No. A statement is a legal disclaimer. You must also fix HTML structure, keyboard navigation, color contrast, and add alt text to all images.' },
];

export const AccessibilityStatementGenerator: React.FC = () => {
  const router = useRouter();
return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ♿ Free Accessibility Statement Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create an <strong style={{ color: 'var(--text-primary)' }}>ADA and WCAG compliant</strong> accessibility statement for your website in minutes. Show your commitment to digital inclusion.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=accessibility')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Statement — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs an Accessibility Statement</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            In 2026, web accessibility is not just the right thing to do; it is increasingly a strict legal requirement. If your website is considered a "public accommodation," you are required by law to make it accessible to people with disabilities.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Avoid ADA Lawsuits:</strong> ADA-related website lawsuits have surged past 5,000 cases annually. Publishing a clear accessibility statement reduces your risk of being targeted by "surf-by" plaintiffs.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Demonstrate Compliance:</strong> An official statement proves that you are actively working towards WCAG (Web Content Accessibility Guidelines) Level AA compliance, showing a "good faith" legal effort.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Help Disabled Users:</strong> Providing a dedicated contact email or phone number in your statement ensures users who encounter a barrier have a way to securely access your services offline.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>European Accessibility Act (EAA):</strong> Essential for EU businesses, as the EAA strictly scopes accessibility for digital products and online commerce.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={ACCESSIBILITY_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=accessibility')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Accessibility Statement Now →
        </button>
      </section>
    </div>
  );
};
