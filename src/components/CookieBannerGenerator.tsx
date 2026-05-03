'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
export const CookieBannerGenerator: React.FC = () => {
  const router = useRouter();
return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🍪 Free Cookie Consent Banner Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a fully <strong style={{ color: 'var(--text-primary)' }}>GDPR and UK PECR compliant</strong> cookie consent banner in seconds. Easy HTML/JS copy-paste integration.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=cookie-banner')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Cookie Banner — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why You Need a Compliant Cookie Banner</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If your website uses Google Analytics, Facebook Pixel, Google AdSense, or third-party embedded videos, you are placing "non-essential" tracking cookies on your visitors' devices. Global laws regulate how you must handle this.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>EU GDPR & ePrivacy Directive:</strong> The strictest laws globally. You cannot load tracking scripts until a user explicitly clicks "Accept" on a cookie banner. Pre-ticked boxes are illegal.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>UK PECR compliance:</strong> The UK's Information Commissioner's Office (ICO) actively penalizes websites that do not offer an equally prominent "Reject All" button next to "Accept All".</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>AdSense & Analytics Access:</strong> Google has begun enforcing Google Consent Mode v2 in 2026. Without a valid cookie banner capturing verified consent, your analytics data and ad revenue will be blocked.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Build User Trust:</strong> Transparently showing users exactly what they are opting into builds professional credibility and respect for their digital privacy.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is a cookie banner required by law?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes, if you have any visitors from the EU or the UK. The GDPR and ePrivacy Directive require explicit consent before placing non-essential tracking cookies on a user's device.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Does this banner work on WordPress or Shopify?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Yes. Our generator creates lightweight, raw HTML/JS code that you can copy and paste directly into the header or footer of any CMS platform without installing bloated plugins.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Is implied consent ("By continuing to browse...") enough?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>No. The highest European courts have ruled that "implied consent" banners are invalid. A user must take an active, deliberate action to provide consent, such as clicking an "Accept" button.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=cookie-banner')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Free HTML Cookie Banner Now →
        </button>
      </section>
    </div>
  );
};
