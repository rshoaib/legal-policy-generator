import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const RobotsTxtGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Robots.txt Generator',
    url: 'https://legalpolicygen.com/robots-txt-generator',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Create a proper robots.txt file to instruct Googlebot and search engines on how to crawl your site. Optimize your crawl budget instantly.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a robots.txt file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A robots.txt file is a plain text file placed in the root directory of your website. It uses the Robots Exclusion Protocol to communicate with web crawlers (like Googlebot), telling them which parts of your site should or shouldn\'t be scanned and indexed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need a robots.txt file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It allows you to optimize your "crawl budget." By blocking automated bots from wasting time crawling admin panels, duplicate URLs, or private directories, you ensure that search engines focus on ranking your valuable content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where should I place the robots.txt file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It must be placed in the highest-level root directory of your website domain. For example, it must be accessible at exactly https://www.yourdomain.com/robots.txt to function properly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a robots.txt file hide my site from hackers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Robots.txt is a public directive, not a security measure. Malicious bots will ignore the rules. Never use robots.txt to hide sensitive data; use server authentication instead.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Robots.txt Generator', item: 'https://legalpolicygen.com/robots-txt-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free Robots.txt Generator — Optimize SEO Crawl Budget (2026)"
        description="Generate a standard robots.txt file for your website in 30 seconds. Instruct Googlebot exactly what to index and where your sitemap is located."
        canonical="/robots-txt-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🤖 Free Robots.txt Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a pristine <strong style={{ color: 'var(--text-primary)' }}>Robots.txt</strong> file to optimize your SEO crawl budget. Safely instruct Googlebot what it should—and shouldn't—index.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=robots-txt')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Robots.txt — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a Robots.txt File</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Before Google indexes your website, its crawlers ("bots") first look for a file at `/robots.txt`. If you don't have this file configured correctly, you are leaving your technical SEO to chance.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Maximize Crawl Budget:</strong> Google spends a limited amount of time on your site. By using `Disallow` rules on admin folders (`/wp-admin/`) or internal searches, you force the bot to index your valuable money-pages.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Prevent Duplicate Content Penalties:</strong> If you use query parameters for tracking or filtering (e.g., `?sort=price`), robots.txt prevents search engines from indexing these variations as duplicate content.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Sitemap Discovery:</strong> Your `robots.txt` is the absolute best place to declare the location of your `sitemap.xml` file, ensuring search engines find all your links instantly.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Block Unwanted AI Scrapers:</strong> In 2026, you can explicitly use rules in your robots.txt to prevent generative AI companies from using your site's data to train their models without compensation.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is a robots.txt file?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is a plain text file placed in your website's root directory that communicates with web crawlers (like Googlebot), telling them which parts of your site they should or shouldn't scan.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Where should I place the robots.txt file?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It must be placed in the highest-level root directory. For example, it must be accessible at exactly `https://www.yourdomain.com/robots.txt` to function correctly.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can a robots.txt file hide my site from hackers?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>No. Robots.txt is a public directive, not a security protocol. Malicious scrapers will ignore the rules entirely. Never put sensitive data paths in your robots.txt file—use authentication instead.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=robots-txt')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free Robots.txt File Now →
        </button>
      </section>
    </div>
  );
};
