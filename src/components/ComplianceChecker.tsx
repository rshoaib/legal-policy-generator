'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { SEO } from './SEO';
import { analyzePolicy, type AnalysisResult, type CategoryResult } from '../utils/policyAnalyzer';

/* ─── Score Gauge (circular) ──────────────────────────────────────────────── */

const ScoreGauge: React.FC<{ score: number; size?: number; label?: string }> = ({ score, size = 140, label }) => {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 70 ? '#22c55e' : score >= 40 ? '#eab308' : '#ef4444';

  return (
    <div style={{ textAlign: 'center' }}>
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
      {label && <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{label}</div>}
    </div>
  );
};

/* ─── Category Card ───────────────────────────────────────────────────────── */

const CategoryCard: React.FC<{ category: CategoryResult; defaultOpen?: boolean }> = ({ category, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const passedCount = category.checks.filter(c => c.passed).length;

  return (
    <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-primary)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{category.name}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {passedCount}/{category.checks.length} checks passed
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ScoreGauge score={category.score} size={56} />
          <span style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>
            ▾
          </span>
        </div>
      </button>

      {open && (
        <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
          {category.checks.map(check => (
            <div key={check.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '0.1rem' }}>
                {check.passed ? '✅' : '❌'}
              </span>
              <div>
                <div style={{ fontWeight: 500, color: check.passed ? 'var(--text-primary)' : '#f87171' }}>
                  {check.label}
                </div>
                {!check.passed && (
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    💡 {check.suggestion}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Readability Card ────────────────────────────────────────────────────── */

const ReadabilityCard: React.FC<{ readability: AnalysisResult['readability']; wordCount: number }> = ({ readability, wordCount }) => (
  <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <span style={{ fontSize: '1.5rem' }}>📖</span>
      <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>Readability Analysis</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
      <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: readability.score >= 60 ? '#22c55e' : readability.score >= 40 ? '#eab308' : '#ef4444' }}>
          {readability.score}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Flesch Score</div>
      </div>
      <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{readability.grade}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Reading Level</div>
      </div>
      <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{readability.verdict}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Verdict</div>
      </div>
      <div style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '10px', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{wordCount.toLocaleString()}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Words</div>
      </div>
    </div>
  </div>
);

/* ─── Main Component ──────────────────────────────────────────────────────── */

export const ComplianceChecker: React.FC = () => {
  const [policyText, setPolicyText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (policyText.trim().length < 50) return;
    setAnalyzing(true);
    // Tiny delay for visual feedback
    setTimeout(() => {
      setResult(analyzePolicy(policyText));
      setAnalyzing(false);
    }, 600);
  };

  const handleReset = () => {
    setResult(null);
    setPolicyText('');
  };

  const failedChecks = result?.categories.flatMap(c => c.checks.filter(ch => !ch.passed)) ?? [];

  return (
    <>
      <SEO
        title="Free Policy Compliance Checker — GDPR & CCPA Analysis"
        description="Paste your privacy policy and get an instant compliance analysis. Check for GDPR, CCPA, and general best-practice gaps with actionable suggestions."
        canonical="/compliance-checker"
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Policy Compliance Checker',
          url: 'https://legalpolicygen.com/compliance-checker',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'All',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Free GDPR and CCPA compliance analyzer for privacy policies.',
        }]}
      />

      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <div className="animate-enter" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Policy Compliance Checker
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Paste your privacy policy below and get an instant GDPR, CCPA, and best-practice analysis with actionable suggestions.
          </p>
        </div>

        {/* Educational Intro */}
        <div className="glass-panel animate-enter delay-100" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--accent-tertiary)', fontSize: '1.2rem', marginBottom: '1rem' }}>What This Tool Checks</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Our free compliance checker analyzes your privacy policy or terms of service against real-world regulatory requirements and industry best practices. The analysis covers <strong style={{ color: 'var(--text-primary)' }}>GDPR compliance</strong> (data subject rights, lawful basis for processing, data retention), <strong style={{ color: 'var(--text-primary)' }}>CCPA compliance</strong> (right to know, right to delete, opt-out of sale), and <strong style={{ color: 'var(--text-primary)' }}>general best practices</strong> (contact information, cookie disclosure, third-party sharing).
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Each policy is scored across multiple categories, with individual checks for specific clauses and provisions that regulatory authorities expect to find. The tool also measures <strong style={{ color: 'var(--text-primary)' }}>readability</strong> using the Flesch Reading Ease score — because a privacy policy that users can't understand doesn't truly provide informed consent.
            </p>
            <p>
              All analysis happens <strong style={{ color: 'var(--text-primary)' }}>entirely in your browser</strong> — your policy text is never sent to any server. This means your confidential legal documents remain private and secure throughout the entire process.
            </p>
          </div>
        </div>

        {!result ? (
          <div className="glass-panel animate-enter delay-100" style={{ padding: '2rem' }}>
            <textarea
              value={policyText}
              onChange={e => setPolicyText(e.target.value)}
              placeholder="Paste your full privacy policy or terms of service text here..."
              style={{
                width: '100%', minHeight: '280px', resize: 'vertical',
                background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', padding: '1.25rem', color: 'var(--text-primary)',
                fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.7,
                outline: 'none', transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = 'var(--accent-primary)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {policyText.split(/\s+/).filter(w => w.length > 0).length} words
                {policyText.trim().length > 0 && policyText.trim().length < 50 && (
                  <span style={{ color: '#eab308', marginLeft: '0.5rem' }}>— minimum 50 characters needed</span>
                )}
              </span>
              <button
                className="btn-primary"
                onClick={handleAnalyze}
                disabled={policyText.trim().length < 50 || analyzing}
                style={{ minWidth: '160px', opacity: policyText.trim().length < 50 ? 0.5 : 1 }}
              >
                {analyzing ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="spinner" /> Analyzing...
                  </span>
                ) : (
                  '🔍 Analyze Policy'
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-enter">
            {/* Overall Score */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              <ScoreGauge score={result.overallScore} size={160} />
              <div style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.75rem' }}>
                Overall Compliance Score
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                {result.overallScore >= 80
                  ? 'Excellent! Your policy covers most required areas.'
                  : result.overallScore >= 60
                  ? 'Good, but some areas need attention.'
                  : result.overallScore >= 40
                  ? 'Needs improvement — several important clauses are missing.'
                  : 'Significant gaps detected — your policy needs major updates.'}
              </div>
            </div>

            {/* Category Breakdowns */}
            {result.categories.map((cat, i) => (
              <CategoryCard key={cat.name} category={cat} defaultOpen={i === 0} />
            ))}

            {/* Readability */}
            <ReadabilityCard readability={result.readability} wordCount={result.wordCount} />

            {/* Failed Checks Summary */}
            {failedChecks.length > 0 && (
              <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.5rem', borderLeft: '3px solid #ef4444' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ⚠️ {failedChecks.length} Issue{failedChecks.length > 1 ? 's' : ''} Found
                </h3>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  {failedChecks.slice(0, 8).map(c => (
                    <li key={c.id} style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '0.4rem', lineHeight: 1.5 }}>
                      {c.suggestion}
                    </li>
                  ))}
                  {failedChecks.length > 8 && (
                    <li style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontStyle: 'italic' }}>
                      ...and {failedChecks.length - 8} more
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(76,201,240,0.08), rgba(123,94,167,0.08))' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Fix These Issues in Minutes
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Use our free generator to create a fully compliant policy tailored to your business.
              </p>
              <Link href="/" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Generate a Compliant Policy →
              </Link>
            </div>

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
                ← Analyze Another Policy
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .spinner {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
};
