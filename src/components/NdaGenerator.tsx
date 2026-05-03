'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const NDA_FAQS: FAQItem[] = [
  {
    question: 'What is a Non-Disclosure Agreement (NDA)?',
    answer: 'An NDA is a <strong>legally binding contract</strong> that creates a confidential relationship between two or more parties. The signing parties agree that sensitive information shared during the relationship — such as trade secrets, business plans, client lists, or proprietary technology — will not be disclosed to others.',
  },
  {
    question: 'When should I use an NDA?',
    answer: 'You should use an NDA whenever you need to share confidential information with a third party. Common scenarios include: <strong>hiring freelancers or contractors</strong>, <strong>pitching to investors</strong>, <strong>discussing partnerships or joint ventures</strong>, <strong>sharing prototypes with beta testers</strong>, and <strong>onboarding new employees</strong> who will access proprietary information.',
  },
  {
    question: 'What is the difference between a unilateral and mutual NDA?',
    answer: 'A <strong>unilateral NDA</strong> is one-way — only one party discloses confidential information (e.g., a company sharing trade secrets with a freelancer). A <strong>mutual NDA</strong> (also called a bilateral NDA) is two-way — both parties share confidential information with each other (e.g., two companies exploring a joint venture). Use mutual NDAs when both sides are sharing sensitive data.',
  },
  {
    question: 'What should an NDA include?',
    answer: 'A well-drafted NDA should include: <strong>definition of confidential information</strong> (what is and isn\'t covered), <strong>obligations of the receiving party</strong>, <strong>exclusions from confidentiality</strong> (publicly available info, independently developed info), <strong>duration</strong> (how long the NDA lasts), <strong>consequences of breach</strong>, and <strong>governing law and jurisdiction</strong>.',
  },
  {
    question: 'How long should an NDA last?',
    answer: 'The typical NDA duration is <strong>2 to 5 years</strong>, depending on the industry and sensitivity of the information. For trade secrets, NDAs can last <strong>indefinitely</strong>. The duration should be reasonable — courts may refuse to enforce overly long NDAs that unreasonably restrict the receiving party.',
  },
  {
    question: 'What happens if someone violates an NDA?',
    answer: 'A breach of an NDA can lead to: <strong>injunctive relief</strong> (a court order to stop the disclosure), <strong>monetary damages</strong> (compensating for actual losses), <strong>liquidated damages</strong> (a pre-agreed penalty amount specified in the NDA), and in extreme cases, <strong>criminal charges</strong> if the breach involves theft of trade secrets under the Defend Trade Secrets Act.',
  },
  {
    question: 'Can I use a free NDA for serious business deals?',
    answer: 'Yes. Our NDA generator creates professional, legally-structured documents suitable for freelancer agreements, investor pitches, and business partnerships. For <strong>high-stakes</strong> situations (M&A deals, international joint ventures), we still recommend having an attorney review the final document to ensure jurisdiction-specific compliance.',
  },
];

export const NdaGenerator: React.FC = () => {
  const router = useRouter();
 return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>🤫 Free NDA Generator</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Non-Disclosure Agreement</strong> in minutes. Protect your confidential business information and trade secrets.
        </p>
        <button className="btn-primary" onClick={() => router.push('/')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Generate Your NDA — Free →</button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Types of NDAs</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>There are generally two types of NDAs:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Unilateral NDA:</strong> One-way agreement. Best used when only one party is disclosing confidential information (e.g., a company hiring a freelancer).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Mutual NDA:</strong> Two-way agreement. Best used when both parties are sharing confidential information with each other (e.g., two companies exploring a joint venture).</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={NDA_FAQS} />

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button className="btn-primary" onClick={() => router.push('/')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Create Your Free NDA Now →</button>
      </section>
    </div>
  );
};
