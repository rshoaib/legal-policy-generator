'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const SOCIAL_MEDIA_FAQS: FAQItem[] = [
  { question: 'What is a corporate Social Media Policy?', answer: 'A set of guidelines governing how employees should conduct themselves online when representing your company or discussing their employment — what they can and cannot post.' },
  { question: 'Why do companies need a Social Media Policy?', answer: 'It protects brand reputation from PR disasters, prevents leaking of trade secrets, outlines consequences for online harassment, and ensures FTC compliance when employees endorse products.' },
  { question: 'Can I fire an employee for a social media post?', answer: 'Generally yes (in at-will states) if the post violates a clearly established policy, such as sharing confidential data or severe harassment. However, the NLRB protects rights to discuss working conditions.' },
  { question: 'Does this policy cover personal accounts?', answer: 'Yes. The policy governs how employees reference the company on personal Twitter, LinkedIn, or TikTok — usually requiring a disclaimer that "opinions are my own."' },
  { question: 'Are there limits to what a policy can restrict?', answer: 'Yes. The NLRB protects employees\' rights to "concerted activity" — you cannot ban them from discussing working conditions or pay online.' },
];

export const SocialMediaPolicyGenerator: React.FC = () => {
  const router = useRouter();
return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📱 Corporate Social Media Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear <strong style={{ color: 'var(--text-primary)' }}>Social Media Policy</strong> for your workforce. Protect your brand reputation, secure trade secrets, and define acceptable online behavior.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=social-media')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Company Needs a Social Media Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            In the era of viral TikToks and corporate Twitter accounts, a single rogue tweet or unauthorized behind-the-scenes video from an employee can trigger a massive PR crisis or leak confidential financial data. A formal policy establishes strict boundaries.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Protect Confidentiality:</strong> Explicitly ban employees from posting photos of internal documents, proprietary software code, unreleased products, or discussing internal financial metrics online.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent PR Nightmares:</strong> Establish rules stating that employees must not engage in hate speech, harassment, or controversial political discourse while wearing company branded clothing or visibly identifying their employer.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>FTC Endorsement Compliance:</strong> Your policy ensures that if employees promote your products on their personal accounts, they use explicit hashtags like `#employee` to comply with Federal Trade Commission disclosure laws.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Clear Disciplinary Action:</strong> Without a written policy distributed during onboarding, firing an employee for a severe social media misstep can lead to wrongful termination lawsuits.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={SOCIAL_MEDIA_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=social-media')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Social Media Policy Now →
        </button>
      </section>
    </div>
  );
};
