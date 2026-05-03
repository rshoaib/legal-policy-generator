'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export const AffiliateDisclaimerGenerator: React.FC = () => {
  const router = useRouter();

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🔗 Free Affiliate Disclaimer Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create an <strong style={{ color: 'var(--text-primary)' }}>FTC-Compliant Affiliate Disclaimer</strong> for your blog in seconds. Protect your affiliate accounts and maintain reader trust.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=affiliate-disclaimer')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Disclaimer — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Blog Needs an Affiliate Disclaimer</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you monetize your website using affiliate marketing, transparency is not just an ethical best practice—it is a strict legal and contractual requirement. Failing to disclose affiliate links can result in severe financial penalties and account bans.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>FTC Compliance (USA):</strong> The Federal Trade Commission actively penalizes influencers, bloggers, and publishers who fail to clearly disclose their financial relationship with brands they promote.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Amazon Associates Requirement:</strong> The Amazon Associates program algorithmically scans your website to ensure the mandatory disclosure ("As an Amazon Associate I earn...") is present. Missing it will trigger an automatic account shut down.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Consumer Trust:</strong> Readers are more likely to support your work by clicking your links when you are upfront and honest about how your site is monetized, rather than feeling tricked.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Ad Network Demands:</strong> Premium display ad networks like Mediavine and AdThrive require you to have professional disclosures and a high standard of compliance across all pages.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Do I need this for the Amazon Associates program?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Absolutely. Section 5 of their Operating Agreement explicitly requires you to state your earning potential from qualifying purchases clearly on your site.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Where should I place my affiliate disclaimer?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>The FTC mandates it must be "clear and conspicuous." A dedicated Disclaimer page is required, but you must also include a short, visible summary sentence at the top of any post containing affiliate links.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What happens if I don't use a disclaimer?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>You risk being reported to the FTC (resulting in massive fines) and having your affiliate program accounts (like ShareASale, CJ, or Amazon) permanently closed, losing all unpaid commissions.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=affiliate-disclaimer')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your FTC Affiliate Disclaimer Now →
        </button>
      </section>
    </div>
  );
};
