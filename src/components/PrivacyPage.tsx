'use client'
import React, { useEffect } from 'react';
import { SEO } from './SEO';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container animate-enter" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <SEO
        title="Privacy Policy"
        description="Read our Privacy Policy to understand how Legal Policy Generator collects, uses, and protects your personal information."
        canonical="/privacy"
      />
      <h1 className="text-gradient" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <p style={{ marginBottom: '1rem' }}><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Introduction</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          Welcome to Legal Policy Generator ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit or use our website.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Information We Collect</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          <strong>A. Information You Provide:</strong> We do not require you to create an account to use our basic tools. The information you enter into the generators (e.g., company name, email) is processed locally in your browser to generate the policy text. We may store this data in your browser's Local Storage for your convenience, but we do not transmit it to our servers for permanent storage.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          <strong>B. Automatically Collected Information:</strong> We may use Google Analytics and other tracking technologies to collect information about your interactions with our site, such as your IP address, browser type, and pages visited. This helps us improve our service.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. How We Use Your Information</h2>
        <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>To provide and maintain our Service.</li>
            <li>To improve and optimize our website.</li>
            <li>To monitor usage of our Service.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Third-Party Services</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          We use third-party services such as Google Analytics and Google AdSense. These third parties may access data as necessary to perform their functions. We do not sell your personal data to third parties.
        </p>

        <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>4a. Google AdSense &amp; the DoubleClick DART Cookie</h3>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DoubleClick DART cookie enables it to serve ads to our users based on their visits to this site and other sites on the Internet.
        </p>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          You may opt out of the use of the DART cookie by visiting the{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>
            Google Ad and Content Network Privacy Policy
          </a>.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Cookies</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          We use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but some features of the site may not function properly. The cookies used on this site include:
        </p>
        <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
          <li><strong>Google Analytics cookies</strong> — to measure site traffic and understand how visitors use our site.</li>
          <li><strong>Google AdSense cookies (including DART)</strong> — to serve relevant advertisements based on your browsing behavior.</li>
          <li><strong>Preference cookies</strong> — to remember your settings such as theme preference and cookie consent choice.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>6. Changes to This Policy</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>7. Contact Us</h2>
        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
          If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@legalpolicygen.com" style={{ color: 'var(--accent-primary)' }}>contact@legalpolicygen.com</a>
        </p>
      </div>
    </div>
  );
};
