import React, { useEffect } from 'react';
import { SEO } from './SEO';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container animate-enter" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <SEO
        title="Contact Us"
        description="Have questions or suggestions about Legal Policy Generator? Get in touch with us via email. We typically respond within 24-48 hours."
        canonical="/contact"
      />
      <h1 className="text-gradient" style={{ marginBottom: '2rem' }}>Contact Us</h1>
      
      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Have questions, suggestions, or need support? We'd love to hear from you.
        </p>

        <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Email Us</h3>
            <a href="mailto:contact@legalpolicygen.com" style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                contact@legalpolicygen.com
            </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            We typically respond within 24-48 hours.
        </p>
      </div>
    </div>
  );
};

