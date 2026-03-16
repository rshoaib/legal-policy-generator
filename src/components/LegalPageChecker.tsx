'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { SEO } from './SEO';
import { checkLegalPages, type ScanResult, type PageResult } from '../utils/legalPageChecker';

/* ─── Score Gauge (circular) ──────────────────────────────────────────────── */

const ScoreGauge: React.FC<{ score: number; size?: number }> = ({ score, size = 160 }) => {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? '#22c55e' : score >= 40 ? '#eab308' : '#ef4444';

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none"
        stroke={color} strokeWidth="8" strokeLinecap="round"
        strokeDasharray={circumference} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1s ease, stroke 0.5s' }}
      />
      <text
        x={size / 2} y={size / 2}
        textAnchor="middle" dominantBaseline="central"
        fill="white" fontSize={size * 0.26} fontWeight="700"
        style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
      >
        {score}
      </text>
    </svg>
  );
};

/* ─── Page icons ──────────────────────────────────────────────────────────── */

const PAGE_ICONS: Record<string, string> = {
  privacy: '🔒',
  terms: '📜',
  cookies: '🍪',
  disclaimer: '⚖️',
  refund: '💳',
  dmca: '©️',
  accessibility: '♿',
  contact: '📧',
};

/* ─── Single Page Result Card ─────────────────────────────────────────────── */

const PageCard: React.FC<{ page: PageResult }> = ({ page }) => (
  <div
    className="glass-panel"
    style={{
      padding: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      borderLeft: `3px solid ${page.found ? '#22c55e' : '#ef4444'}`,
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>
      {PAGE_ICONS[page.id] || '📄'}
    </span>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>
        {page.label}
      </div>
      {page.found ? (
        <div style={{ fontSize: '0.82rem', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          ✅ Found
          {page.foundPath && (
            <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              — {page.foundPath}
            </span>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.82rem', color: '#ef4444' }}>❌ Not found</span>
          <Link
            href={page.generatorPath}
            className="btn-primary"
            style={{
              fontSize: '0.75rem',
              padding: '0.3rem 0.8rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Generate Now →
          </Link>
        </div>
      )}
    </div>
  </div>
);

/* ─── Main Component ──────────────────────────────────────────────────────── */

export const LegalPageChecker: React.FC = () => {
  const [url, setUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValidUrl = (s: string) => {
    try {
      new URL(s.startsWith('http') ? s : 'https://' + s);
      return s.includes('.');
    } catch { return false; }
  };

  const handleScan = async () => {
    if (!isValidUrl(url)) return;
    setScanning(true);
    setError(null);
    setResult(null);
    try {
      const data = await checkLegalPages(url);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Scan failed. Please try again.');
    } finally {
      setScanning(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setUrl('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isValidUrl(url) && !scanning) handleScan();
  };

  const missingPages = result?.pages.filter(p => !p.found) ?? [];
  const foundPages = result?.pages.filter(p => p.found) ?? [];

  const scoreLabel =
    result && result.score >= 80 ? 'Excellent! Your site has most essential legal pages.'
    : result && result.score >= 50 ? 'Good start, but some important pages are missing.'
    : result ? 'Needs attention — several critical legal pages are missing.'
    : '';

  return (
    <>
      <SEO
        title="Free Website Legal Page Checker — Scan Your Site for Missing Policies"
        description="Enter your website URL and instantly check if you have all essential legal pages: Privacy Policy, Terms, Cookie Policy, Disclaimer, DMCA, and more."
        canonical="/legal-page-checker"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Website Legal Page Checker',
          url: 'https://legalpolicygen.com/legal-page-checker',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'All',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Free tool to scan any website for essential legal pages like Privacy Policy, Terms of Service, Cookie Policy, and more.',
        }]}
      />

      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        {/* Header */}
        <div className="animate-enter" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1
            className="text-gradient"
            style={{ fontSize: '2.5rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}
          >
            Website Legal Page Checker
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
            Enter any website URL to instantly check if it has all essential legal pages.
            Get a compliance scorecard and generate any missing policies for free.
          </p>
        </div>

        {/* Educational Intro */}
        <div className="glass-panel animate-enter delay-100" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--accent-tertiary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Why Check Your Legal Pages?</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Missing legal pages can expose your website to <strong style={{ color: 'var(--text-primary)' }}>regulatory fines, lawsuits, and lost business opportunities</strong>. Under GDPR, the absence of a proper privacy policy alone can result in penalties of up to €20 million or 4% of annual global revenue. Platforms like Google AdSense, Stripe, Shopify, and Apple's App Store require specific legal documents before approving your account.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Our Legal Page Checker scans your website for <strong style={{ color: 'var(--text-primary)' }}>8 essential legal pages</strong>: Privacy Policy, Terms of Service, Cookie Policy, Disclaimer, Refund Policy, DMCA / Copyright Notice, Accessibility Statement, and Contact Page. The scan checks common URL patterns, navigation links, and footer references to determine which pages exist on your site.
            </p>
            <p>
              After the scan, you'll receive a <strong style={{ color: 'var(--text-primary)' }}>compliance scorecard</strong> showing which pages are present and which are missing — with one-click links to generate any missing policies using our free generator.
            </p>
          </div>
        </div>

        {/* Input / Results */}
        {!result ? (
          <div className="glass-panel animate-enter delay-100" style={{ padding: '2rem' }}>
            <label
              htmlFor="site-url-input"
              style={{ display: 'block', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}
            >
              Website URL
            </label>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input
                id="site-url-input"
                type="text"
                value={url}
                onChange={e => setUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. example.com"
                autoFocus
                style={{
                  flex: 1,
                  minWidth: '220px',
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  padding: '0.85rem 1.25rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent-primary)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <button
                className="btn-primary"
                onClick={handleScan}
                disabled={!isValidUrl(url) || scanning}
                style={{ minWidth: '160px', opacity: !isValidUrl(url) ? 0.5 : 1 }}
              >
                {scanning ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="lpc-spinner" /> Scanning…
                  </span>
                ) : (
                  '🔍 Scan Website'
                )}
              </button>
            </div>

            {error && (
              <div style={{
                marginTop: '1rem',
                padding: '0.85rem 1rem',
                borderRadius: '10px',
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#f87171',
                fontSize: '0.9rem',
              }}>
                ⚠️ {error}
              </div>
            )}

            {/* What we check */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                What We Check
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.6rem' }}>
                {Object.entries(PAGE_ICONS).map(([id, icon]) => {
                  const labels: Record<string, string> = {
                    privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookie Policy',
                    disclaimer: 'Disclaimer', refund: 'Refund Policy', dmca: 'DMCA / Copyright',
                    accessibility: 'Accessibility', contact: 'Contact Page',
                  };
                  return (
                    <div
                      key={id}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 0.85rem', borderRadius: '8px',
                        background: 'rgba(255,255,255,0.03)', fontSize: '0.88rem',
                      }}
                    >
                      <span>{icon}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>{labels[id]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-enter">
            {/* Score */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              <ScoreGauge score={result.score} size={160} />
              <div style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.75rem' }}>
                Legal Page Score
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                {scoreLabel}
              </div>
              <div style={{
                display: 'inline-block', marginTop: '0.75rem',
                padding: '0.4rem 1rem', borderRadius: '20px',
                background: 'rgba(255,255,255,0.05)', fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}>
                {result.found}/{result.total} pages found on <strong style={{ color: 'var(--text-primary)' }}>{result.url.replace(/^https?:\/\//, '')}</strong>
              </div>
            </div>

            {/* Missing Pages */}
            {missingPages.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ⚠️ Missing Pages ({missingPages.length})
                </h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {missingPages.map(p => <PageCard key={p.id} page={p} />)}
                </div>
              </div>
            )}

            {/* Found Pages */}
            {foundPages.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✅ Found Pages ({foundPages.length})
                </h2>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {foundPages.map(p => <PageCard key={p.id} page={p} />)}
                </div>
              </div>
            )}

            {/* CTA */}
            {missingPages.length > 0 && (
              <div
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(76,201,240,0.08), rgba(123,94,167,0.08))',
                  marginBottom: '1.5rem',
                }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Generate All Missing Policies for Free
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem', maxWidth: '500px', margin: '0 auto 1.25rem' }}>
                  Use our free generator to create {missingPages.length === 1 ? 'the' : 'all'} missing {missingPages.length === 1 ? 'policy' : 'policies'} in minutes — fully GDPR &amp; CCPA compliant.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
                    Generate Policies →
                  </Link>
                  <Link
                    href="/bundle"
                    style={{
                      display: 'inline-block', textDecoration: 'none',
                      padding: '0.6rem 1.25rem', borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text-secondary)',
                      fontSize: '0.9rem', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    Or Use Policy Bundle
                  </Link>
                </div>
              </div>
            )}

            {/* Reset */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={handleReset}
                style={{
                  background: 'none', border: '1px solid rgba(255,255,255,0.15)',
                  color: 'var(--text-secondary)', padding: '0.6rem 1.5rem', borderRadius: '8px',
                  cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                ← Scan Another Website
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .lpc-spinner {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: lpc-spin 0.6s linear infinite;
        }
        @keyframes lpc-spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
};
