'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
export const NewsletterPolicyGenerator: React.FC = () => {
  const router = useRouter();
return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          📧 Free Newsletter Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a legally compliant <strong style={{ color: 'var(--text-primary)' }}>Newsletter Policy</strong>. Build your subscriber list while satisfying strict <strong style={{ color: 'var(--accent-primary)' }}>CAN-SPAM</strong> and GDPR anti-spam regulations.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=newsletter')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Email List Needs a Privacy Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            Collecting an email address seems simple, but email marketing is arguably the most heavily regulated form of digital communication globally. Before a user clicks "Subscribe," they must legally be informed exactly how that email address will be used.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Anti-Spam Law Compliance:</strong> A policy helps you prove compliance with the US CAN-SPAM Act, Canada's CASL, and the EU's GDPR, all of which impose massive fines per unsolicited email sent.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Disclose Pixel Tracking:</strong> Standard email platforms (Mailchimp, ConvertKit, Beehiiv) use invisible tracking pixels to log when an email is opened and which links are clicked. This is a form of data collection that must be explicitly disclosed.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Sponsorships & Monetization:</strong> If you plan to sell sponsored slots in your newsletter, your policy must clarify that subscriber data (like email addresses) is not being handed over directly to the sponsors.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>The Right to be Forgotten:</strong> A compliant policy clearly provides instructions on how users can immediately unsubscribe and request their data be entirely scrubbed from your CRM.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is the CAN-SPAM Act?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It's a US law that regulates commercial email. It requires you to clearly identify yourself, never use deceptive subject lines, include a physical postal address in the footer, and offer a quick opt-out mechanism.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can I add existing customers to my newsletter list?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Under US law, an existing business relationship often permits this (soft opt-in). Under EU GDPR, however, you cannot add a customer to a marketing list without explicit, unambiguous consent specifically for marketing emails.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Can I sell my email subscriber list?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Under modern privacy laws like CCPA and GDPR, you cannot legally sell an email list unless you explicitly disclosed this intention at the exact point of data collection and the user opted in to that sale.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=newsletter')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Newsletter Policy Now →
        </button>
      </section>
    </div>
  );
};
