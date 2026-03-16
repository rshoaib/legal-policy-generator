'use client'
import React, { useEffect, useState } from 'react';
import { SEO } from './SEO';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@legalpolicygen.com?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="container animate-enter" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      <SEO
        title="Contact Us — Legal Policy Generator"
        description="Get in touch with the Legal Policy Generator team. Ask questions about privacy policies, terms of service, GDPR compliance, cookie policies, or any of our 22+ free legal document generators."
        canonical="/contact"
      />
      <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.8', maxWidth: '700px' }}>
        Have a question about our legal policy generators, need help with GDPR or CCPA compliance, or want to suggest a new document type? We're here to help. Fill out the form below or email us directly — we typically respond within 24–48 business hours.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Contact Form */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '1.25rem' }}>Send Us a Message</h2>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ color: 'var(--accent-tertiary)', marginBottom: '0.75rem' }}>Message Prepared!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Your email client should have opened with your message. If it didn't, please email us directly at <a href="mailto:contact@legalpolicygen.com" style={{ color: 'var(--accent-secondary)' }}>contact@legalpolicygen.com</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Subject</label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                >
                  <option value="">Select a topic...</option>
                  <option value="General Question">General Question</option>
                  <option value="Policy Generator Help">Policy Generator Help</option>
                  <option value="GDPR/CCPA Compliance">GDPR/CCPA Compliance</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Business Inquiry">Business Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>
              <button className="btn-primary" type="submit" style={{ marginTop: '0.5rem' }}>Send Message</button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '0.75rem' }}>📧 Email Us Directly</h3>
            <a href="mailto:contact@legalpolicygen.com" style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', fontWeight: 'bold', textDecoration: 'none', wordBreak: 'break-all' }}>
              contact@legalpolicygen.com
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.75rem', lineHeight: '1.6' }}>
              We typically respond within 24–48 business hours.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h3 style={{ color: 'var(--accent-tertiary)', marginBottom: '1rem' }}>Common Topics We Can Help With</h3>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '2', listStyleType: 'none', padding: 0 }}>
              <li>📋 Choosing the right legal documents for your website</li>
              <li>🔒 Understanding GDPR, CCPA, and LGPD requirements</li>
              <li>🍪 Setting up cookie consent and compliance</li>
              <li>📝 Customizing generated policy templates</li>
              <li>🏥 HIPAA compliance for health-related websites</li>
              <li>🤖 AI ethics policies and data processing agreements</li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>💡 Quick Tip</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Before reaching out, check our <a href="/blog" style={{ color: 'var(--accent-secondary)' }}>blog and guides</a> — we have 28+ articles covering privacy law, compliance best practices, and step-by-step tutorials for each document type.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
