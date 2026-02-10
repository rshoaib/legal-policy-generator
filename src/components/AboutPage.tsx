import React, { useEffect } from 'react';
import { SEO } from './SEO';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container animate-enter" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <SEO
        title="About Us"
        description="Learn about Legal Policy Generator — our mission to make legal compliance accessible and free for everyone, from solo developers to small businesses."
        canonical="/about"
      />
      <h1 className="text-gradient" style={{ marginBottom: '2rem' }}>About Us</h1>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Mission</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          At Legal Policy Generator, our mission is to make essential legal compliance accessible to everyone. Whether you are a solo developer, a small business owner, or a content creator, you shouldn't have to worry about the high costs of legal fees just to get your website up and running lawfully.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            We provide free, easy-to-use tools to generate professional-grade Privacy Policies, Terms & Conditions, and more. Our goal is to save you time and protect your business.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Why Choose Us?</h2>
        <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li><strong>100% Free:</strong> No hidden fees or "premium" locks for standard policies.</li>
            <li><strong>No Sign-up Required:</strong> Generate your documents instantly without creating an account.</li>
            <li><strong>Privacy First:</strong> We process your data locally in your browser whenever possible.</li>
            <li><strong>Comprehensive:</strong> Covering GDPR, CCPA, and standard web requirements.</li>
        </ul>

         <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Team</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            We are a small team of developers and legal enthusiasts passionate about open web standards and accessibility.
        </p>
      </div>
    </div>
  );
};

