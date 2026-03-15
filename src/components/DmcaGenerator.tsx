import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from './SEO';

export const DmcaGenerator: React.FC = () => {
  const navigate = useNavigate();

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free DMCA Policy Generator',
    url: 'https://legalpolicygen.com/dmca-generator',
    applicationCategory: 'LegalApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a professional DMCA Policy for your website. Establish a safe harbor and protect your business from user-generated copyright infringement.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a DMCA Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A DMCA Policy outlines the procedure copyright owners must follow to request the removal of infringing content from your website, in accordance with the Digital Millennium Copyright Act of 1998.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the "Safe Harbor" provision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Safe Harbor provision protects website owners (service providers) from being held legally liable for copyright infringement committed by their users, provided the owner promptly removes the content upon receiving a valid DMCA takedown notice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a DMCA Policy if I write all my own content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your site strictly hosts only your own original content and has zero user-generated content (no comments, no user uploads, no forums), a DMCA policy is less critical. However, if users can post anything, you absolutely need one to be protected by Safe Harbor.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I designate a DMCA agent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In your DMCA Policy, you must provide the contact information (name, address, email, phone) of your Designated Copyright Agent. To receive full federal protection in the US, you must also register this agent with the US Copyright Office electronically.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'DMCA Generator', item: 'https://legalpolicygen.com/dmca-generator' },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Free DMCA Policy Generator — Copyright Safe Harbor (2026)"
        description="Create a DMCA Policy to protect your platform from copyright lawsuits. Establish Safe Harbor for user-generated content. Free, no registration."
        canonical="/dmca-generator"
        jsonLd={[pageJsonLd, faqJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ©️ Free DMCA Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear <strong style={{ color: 'var(--text-primary)' }}>DMCA Takedown Policy</strong> to establish Safe Harbor protection and avoid massive copyright lawsuits.
        </p>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=dmca')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your DMCA Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a DMCA Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If your website allows users to post comments, upload images, or share URLs (User-Generated Content), you are at severe risk of copyright lawsuits. A user might upload a copyrighted photo, and without Safe Harbor, the copyright owner can sue *you* for hosting it.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Safe Harbor Immunity:</strong> Having a DMCA policy grants you "Safe Harbor" under the Digital Millennium Copyright Act. This means you cannot be sued for users' actions as long as you act swiftly to remove the infringing content when notified.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Standardized Takedown Process:</strong> Your policy gives copyright holders a specific, standardized form and email address to send their claims to, preventing lawsuits from being filed without warning.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Counter-Notice Rights:</strong> A good DMCA policy also protects your users. It outlines the process for them to file a counter-notice if their content was incorrectly taken down by a false copyright claim.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Hosting Provider Compliance:</strong> Providers like AWS, DigitalOcean, and Vercel require you to handle copyright complaints independently. If you lack a DMCA policy, your host may simply shut off your server down if they receive the complaint instead of you.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is the "Safe Harbor" provision?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It protects website owners from being held legally liable for copyright infringement committed by their users, provided they maintain a DMCA policy and promptly remove content upon receiving a valid notice.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do I need a DMCA Policy if I write all my own content?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>If your site strictly hosts original content with zero external user uploads or comments, a DMCA policy isn't strictly necessary. However, if users can post *anything*, you absolutely need one.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What makes a takedown notice "valid"?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>A valid notice must include a physical or electronic signature, identification of the copyrighted work, the specific URL of the infringement, contact info, and a statement of good faith belief.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => navigate('/?step=form&type=dmca')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your DMCA Policy Now →
        </button>
      </section>
    </div>
  );
};
