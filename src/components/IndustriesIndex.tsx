'use client'
import React from 'react';
import Link from 'next/link';
import { SEO } from './SEO';
import { seoPages } from '../data/seoPages';

export const IndustriesIndex: React.FC = () => {
  // Group policies by industry
  const groupedByIndustry = seoPages.reduce((acc, page) => {
    if (!acc[page.industry]) {
      acc[page.industry] = [];
    }
    acc[page.industry].push(page);
    return acc;
  }, {} as Record<string, typeof seoPages>);

  const industries = Object.keys(groupedByIndustry).sort();

  return (
    <div className="animate-enter" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <SEO
        title="Legal Policies by Industry | Legal Policy Generator"
        description="Find free, tailored legal policies (Privacy Policies, Terms of Service, EULAs) specifically crafted for your industry."
        canonical="/industries"
      />

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Industry-Specific Legal Policies
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Every industry has unique data privacy requirements. Browse our collection of tailored legal policies specifically crafted for your exact business model.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {industries.map((industry) => (
          <div key={industry} className="glass-panel" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
              {industry}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {groupedByIndustry[industry].map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                    {page.policyLabel}
                  </strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {page.description.split('.')[0]}.
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
