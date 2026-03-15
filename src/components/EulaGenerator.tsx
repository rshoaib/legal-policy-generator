import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const EulaGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free EULA Generator',
    url: 'https://legalpolicygen.com/eula-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free End-User License Agreement (EULA) for your software or mobile app in minutes. No signup required.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a EULA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An End-User License Agreement (EULA) is a legal contract entered into between a software developer or vendor and the user of the software. It specifies the rights and restrictions which apply to the use of the software.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a EULA for my app?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you are distributing software, a mobile app, or a desktop application, a EULA is crucial. It protects your intellectual property by granting users a license to use the software (rather than selling it to them), and limits your liability for damages caused by the software.',
        },
      },
    ],
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
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          💻 Free EULA Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>End-User License Agreement</strong> for your app or software. Protect your intellectual property from reverse engineering and abuse.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your EULA — Free →
        </button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>EULA vs. Terms of Service</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            While both are legal agreements, they serve different purposes:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>EULA (End-User License Agreement):</strong> Focuses on the right to use software. It grants a license and strictly prohibits copying, modifying, or reverse-engineering the source code. Best for downloadable software and mobile apps.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Terms of Service:</strong> Focuses on the rules for using a service. It covers user accounts, acceptable behavior, and service availability. Best for SaaS platforms and websites.</li>
          </ul>
        </div>
      </section>

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free EULA Now →
        </button>
      </section>
    </div>
  );
};
