'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const AI_ETHICS_FAQS: FAQItem[] = [
  { question: 'What is an AI Ethics Policy?', answer: 'An AI Ethics Policy outlines exactly how employees are allowed to use Generative AI tools (ChatGPT, GitHub Copilot, Midjourney) — focusing on data privacy, avoiding bias, and protecting intellectual property.' },
  { question: 'Why does our company need an AI policy?', answer: 'Without a policy, employees may paste confidential client data into public AI tools, effectively leaking trade secrets. A policy formally forbids inputting PII, source code, or financial data into unauthorized AI services.' },
  { question: 'Can we lose copyright if we use AI-generated content?', answer: 'Yes. The US Copyright Office has ruled that purely AI-generated content cannot be copyrighted. The policy requires employees to substantially edit AI output to ensure final products remain legally theirs.' },
  { question: 'Should we ban AI entirely?', answer: 'No. Banning AI only pushes "Shadow AI" usage underground where you cannot monitor it. A strong policy embraces productivity gains while formally mitigating security risks.' },
  { question: 'Does this policy cover developer tools like GitHub Copilot?', answer: 'Yes. The policy governs which repositories developers can expose to AI assistants and requires review of generated code before committing.' },
];

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

      <ToolFAQ faqs={AI_ETHICS_FAQS} />

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
