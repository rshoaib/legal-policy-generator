'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const AiEthicsPolicyGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free AI Ethics Policy Generator',
    url: 'https://legalpolicygen.com/ai-ethics-policy-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate an AI Ethics and Acceptable Use Policy for your company. Establish guidelines for employee use of ChatGPT, Copilot, and Claude.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI Ethics Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI Ethics Policy (or AI Acceptable Use Policy) is a corporate document that outlines exactly how employees are allowed to use Generative AI tools (like ChatGPT, Midjourney, or GitHub Copilot) in their daily work, focusing on data privacy, avoiding bias, and protecting intellectual property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do we need a corporate AI policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If employees paste confidential client data, financial projections, or proprietary source code into public AI tools, that data may be used to train the AI maker\'s core models, effectively leaking your company\'s secrets to the public. A policy forbids this.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we lose copyright if we use AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The US Copyright Office has repeatedly ruled that AI-generated text and images cannot be copyrighted. An AI policy requires employees to heavily modify AI outputs to ensure your final products remain legally protectable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does it address AI hallucinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A strong policy dictates a "Human-in-the-Loop" workflow, legally requiring employees to verify the accuracy of AI outputs before publishing them or sending them to clients, preventing catastrophic PR crises caused by AI hallucinations.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'AI Ethics Policy Generator', item: 'https://legalpolicygen.com/ai-ethics-policy-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Corporate AI Ethics Policy Generator (Acceptable Use)"
        description="Create an internal AI Policy to govern your employees' use of ChatGPT and Copilot. Protect trade secrets, prevent copyright loss, and stop hallucinations."
        canonical="/ai-ethics-policy-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🤖 Free Corporate AI Ethics Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a modern <strong style={{ color: 'var(--text-primary)' }}>AI Acceptable Use Policy</strong>. Govern how your employees use ChatGPT, Copilot, and Claude to protect your trade secrets and client data.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=ai-ethics')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your AI Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Company Needs an AI Policy Today</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Employees are already using Generative AI tools to write code, draft emails, and analyze spreadsheets. Without a formal AI Ethics Policy, your organization is at high risk of massive data leaks, copyright invalidation, and reputational damage.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Stop Proprietary Data Leaks:</strong> By default, free versions of ChatGPT and Claude train their models on user inputs. If an employee uploads your source code to debug it, your code is now in the public training set. An AI policy legally forbids inputting PII or trade secrets into unauthorized AIs.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent Copyright Disasters:</strong> According to the US Copyright Office, completely AI-generated content cannot be copyrighted. An AI policy requires employees to substantially edit AI output, ensuring your marketing assets remain legally yours.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Mandate 'Human-in-the-Loop':</strong> AI models "hallucinate" fake facts and legal citations. A policy enforces that human employees remain entirely responsible for the final accuracy of the output delivered to clients.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR and Algorithmic Bias:</strong> If you use AI to screen resumes or approve loans, you run the risk of algorithmic bias. An ethics policy establishes fairness monitoring to prevent discrimination lawsuits.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Should we ban AI entirely?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>No. Banning AI only pushes "Shadow AI" usage underground where you cannot monitor it. A strong AI policy embraces the productivity gains while formally mitigating the security risks.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Does this policy cover developer tools like GitHub Copilot?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. While specific tools often offer enterprise data protections, the policy dictates the general rules of engagement regarding what repositories developers are allowed to expose to AI assistants.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is "Shadow AI"?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Shadow AI refers to employees using unauthorized, unsanctioned generative AI web apps on their work devices, often bypassing firewall regulations and placing company data at risk.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=ai-ethics')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Corporate AI Policy Now →
        </button>
      </section>
    </div>
  );
};
