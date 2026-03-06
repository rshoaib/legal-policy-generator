import React, { useEffect } from 'react';
import { SEO } from './SEO';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container animate-enter" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <SEO
        title="About Us — Legal Policy Generator"
        description="Learn about Legal Policy Generator — our mission to make legal compliance accessible and free for everyone, from solo developers to enterprise teams."
        canonical="/about"
      />
      <h1 className="text-gradient" style={{ marginBottom: '2rem' }}>About Us</h1>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Mission</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          At Legal Policy Generator, our mission is to make essential legal compliance accessible to everyone. Whether you are a solo developer launching your first side project, a small business owner expanding online, or a content creator building your brand — you shouldn't have to worry about expensive legal fees just to get your website running lawfully.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          We believe that <strong style={{ color: 'var(--text-primary)' }}>legal compliance is a right, not a privilege</strong>. Every website in the world — regardless of size or budget — deserves access to professional-grade legal documents that protect both the business and its users.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>How It Started</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Legal Policy Generator was born out of frustration. When launching several web applications, we found that generating proper legal documents — Privacy Policies, Terms of Service, Cookie Policies — was either prohibitively expensive (hiring an attorney) or unreliable (copying templates from the internet). Existing free generators were often bare-bones, required sign-ups, or locked essential clauses behind paywalls.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          So we built the tool we wished existed: a <strong style={{ color: 'var(--text-primary)' }}>completely free, no-signup-required</strong> legal document generator that covers 22+ document types, supports 6 languages, and processes everything client-side so your data never leaves your device.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Why Choose Us?</h2>
        <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>100% Free:</strong> No hidden fees, no "premium" locks for standard policies. Every document type is available at no cost.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>No Sign-up Required:</strong> Generate your documents instantly without creating an account or providing payment details.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Privacy First:</strong> All policy generation happens entirely in your browser. We never see, store, or transmit your business information.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Multi-Regulation Support:</strong> Templates cover GDPR, CCPA, LGPD, PIPEDA, UK GDPR, ePrivacy Directive, and more.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>22+ Document Types:</strong> From Privacy Policies and NDAs to HIPAA notices and AI Ethics Policies.</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>6 Languages:</strong> Generate policies in English, Spanish, French, German, Portuguese, and Arabic.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Technology</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Legal Policy Generator is built as a modern, fast single-page application using React and Vite. All document generation logic runs client-side in JavaScript — meaning your browser does all the work. No server, no database, no data collection. This architecture ensures maximum privacy, instant generation speed, and zero downtime.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Team</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          We are a small team of developers, legal enthusiasts, and privacy advocates passionate about open web standards and accessibility. Our team combines experience in web development, data privacy regulations, and user experience design to create tools that are both legally sound and easy to use. We continuously update our templates to reflect the latest regulatory changes worldwide.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Have questions, feedback, or a feature request? We'd love to hear from you. Visit our <a href="/contact" style={{ color: 'var(--accent-primary)' }}>Contact page</a> or email us directly at <a href="mailto:contact@legalpolicygen.com" style={{ color: 'var(--accent-primary)' }}>contact@legalpolicygen.com</a>. We typically respond within 24–48 business hours.
        </p>
      </div>
    </div>
  );
};


