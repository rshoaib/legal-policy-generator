'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { SEO } from './SEO';

export const DisclaimerGenerator: React.FC = () => {
  const router = useRouter();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Disclaimer Generator',
    url: 'https://legalpolicygen.com/disclaimer-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free, professional disclaimer for your website or blog. Limit your liability for medical, legal, or financial information.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a disclaimer on my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your website provides any kind of information, advice, or services, you almost certainly need a disclaimer. It limits your liability for the accuracy of the information and protects you from lawsuits if someone relies on your content and suffers damages.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a professional disclaimer cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A good disclaimer clarifies that your content is for informational purposes only. It specifically states that the information does not constitute professional advice, such as medical, legal, or financial advice, and limits your liability for errors or omissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a disclaimer protect me from all lawsuits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While a disclaimer cannot prevent someone from suing you, it provides a strong legal defense. By explicitly stating your limitations and requiring users to assume the risk of using your information, courts are highly likely to dismiss claims against you.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is an affiliate disclaimer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The FTC requires publishers to disclose if they earn commissions through affiliate links. An affiliate disclaimer lets readers know that you may earn a small commission from purchases made through your links, ensuring transparency.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Disclaimer Generator', item: 'https://legalpolicygen.com/disclaimer-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Disclaimer Generator — Limit Your Website Liability (2026)"
        description="Create a professional disclaimer to protect your blog, medical, or financial site from liability. Includes FTC affiliate disclosures. 100% Free."
        canonical="/disclaimer-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ⚖️ Free Disclaimer Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Disclaimer</strong> to protect your blog or business website from liability lawsuits. Includes FTC affiliate disclosures.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=disclaimer')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Disclaimer — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a Disclaimer</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            A disclaimer is a legal statement that formally limits your liability for the content published on your website. Without it, you open your business up to lawsuits initiated by users who acted upon your advice or information and suffered damages or financial loss.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Medical and Health Blogs:</strong> Prevent readers from replacing professional medical diagnosis with your informational wellness or fitness content.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Financial Advice:</strong> Protect yourself from lawsuits if a reader invests money based on your blog post and loses their investment.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>FTC Affiliate Requirements:</strong> If you use Amazon Associates or other affiliate links, the FTC explicitly mandates that you have a conspicuous affiliate disclosure warning.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>General Liability Limit:</strong> Establishes that the information you provide is "as is" and you make no guarantees regarding its absolute accuracy or completeness.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do I need a disclaimer on my website?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>If your website provides any kind of information, advice, or services, you certainly need a disclaimer. It limits your liability for the accuracy of the information and protects you from lawsuits.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What does a professional disclaimer cover?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It clarifies that your content is for informational purposes only. It states that the information does not constitute professional advice, placing the responsibility safely back onto the user.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can a disclaimer stop me from getting sued?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>While anyone can file a lawsuit, a well-written disclaimer gives you a powerful, immediate legal defense that often leads to the case being dismissed early, saving you thousands in legal fees.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=disclaimer')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Disclaimer Now →
        </button>
      </section>
    </div>
  );
};
