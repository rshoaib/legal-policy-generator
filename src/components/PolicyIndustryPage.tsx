'use client'
import { useState } from 'react'
import Link from 'next/link';
import type { SeoPage } from '../data/seoPages'
import { seoPages } from '../data/seoPages'

interface Props {
  page: SeoPage;
}

export function PolicyIndustryPage({ page }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Related pages: same policy type, different industries
  const related = seoPages
    .filter(p => p.policyType === page.policyType && p.slug !== page.slug)
    .slice(0, 6)

  /* Note: FAQ JSON-LD + meta are now emitted server-side from app/[slug]/page.tsx. */

  return (
    <>
      <div className="animate-enter" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: '2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <Link href="/" style={{ color: 'var(--accent-secondary)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>›</span>
          <span>{page.policyLabel} for {page.industry}</span>
        </nav>

        {/* Hero */}
        <h1 className="text-gradient" style={{ fontSize: '2.8rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          {page.policyLabel} for {page.industry}
        </h1>
        <p className="delay-100 animate-enter" style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          {page.heroText}
        </p>

        {/* CTA */}
        <div className="delay-200 animate-enter" style={{ marginBottom: '3rem' }}>
          <Link
            href={`/?type=${page.policyType}`}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '1.1rem', padding: '1rem 2.5rem' }}
          >
            Generate Your {page.policyLabel} Free →
          </Link>
        </div>

        {/* Features */}
        <div className="glass-panel delay-200 animate-enter" style={{ marginBottom: '3rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Why {page.industry} Businesses Need a {page.policyLabel}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {page.features.map((feat, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', flexShrink: 0 }}>✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div className="delay-300 animate-enter" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>
          {page.faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{ marginBottom: '0.75rem', padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)', fontWeight: 600 }}>{faq.q}</h3>
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </div>
              {openFaq === i && (
                <p style={{ marginTop: '1rem', marginBottom: 0, color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Related Pages */}
        {related.length > 0 && (
          <div className="delay-300 animate-enter" style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {page.policyLabel} for Other Industries
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="glass-panel"
                  style={{ padding: '1rem 1.25rem', textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500, transition: 'all 0.2s' }}
                >
                  {r.industry} →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Ready to Generate Your {page.policyLabel}?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Free, instant, and compliant with GDPR, CCPA, and more.
          </p>
          <Link
            href={`/?type=${page.policyType}`}
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            Generate Now — It's Free →
          </Link>
        </div>
      </div>
    </>
  )
}
