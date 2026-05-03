'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const AUP_FAQS: FAQItem[] = [
  { question: 'What is an Acceptable Use Policy (AUP)?', answer: 'An AUP is a set of rules restricting how users may use your network, website, or platform — explicitly forbidding spam, hacking, harassment, or posting illegal content.' },
  { question: 'Why do I need an AUP if I already have Terms of Service?', answer: 'A ToS covers the broad legal relationship (payment, liability). An AUP isolates prohibited user behavior, making it far easier to enforce rules and ban abusive users without navigating complex ToS clauses.' },
  { question: 'Can an AUP help me ban users legally?', answer: 'Yes. An AUP serves as your contractual justification for terminating an account immediately. If a user violates an explicitly listed rule, you have the right to revoke access without notice or refund.' },
  { question: 'Who typically needs an Acceptable Use Policy?', answer: 'SaaS platforms, web hosting companies, ISPs, online communities, and corporate networks. B2B providers like AWS and Stripe also often require that you have an AUP in place to pass their compliance audits.' },
  { question: 'What happens if a user breaks an AUP rule?', answer: 'Your AUP explicitly grants you the right to suspend or terminate their account indefinitely and without a refund for prepaid services.' },
];

export const AupGenerator: React.FC = () => {
  const router = useRouter();

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🛑 Free Acceptable Use Policy (AUP) Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a comprehensive <strong style={{ color: 'var(--text-primary)' }}>Acceptable Use Policy</strong> to protect your app, network, or community from abuse, spam, and destructive users.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=aup')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your AUP — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Platform Needs an AUP</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            When you open your software or platform to the public, you invite both good users and bad actors. Without a formalized Acceptable Use Policy, you lack the clear legal criteria required to evict malicious users who damage your brand or infrastructure.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Legal Enforcement of Bans:</strong> If you ban a paying user without a referenced AUP violation, they can file a chargeback or lawsuit. An AUP gives you an airtight reason to terminate an account.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Protect Infrastructure from Abuse:</strong> Stop users from mining cryptocurrency on your servers, DDoS-ing targets using your IP addresses, or sending massive volumes of spam emails.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Maintain Brand Safety:</strong> For online communities, an AUP forbids hate speech, harassment, doxxing, and illegal content, ensuring your platform remains safe for advertisers and the majority of users.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>B2B Tier Protections:</strong> If you are a B2B service (like an email API), major providers (like AWS or Stripe) demand that *you* have an AUP in place to pass their compliance audits.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={AUP_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=aup')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Acceptable Use Policy Now →
        </button>
      </section>
    </div>
  );
};
