import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

const BUSINESS_TYPES = [
  { id: 'ecommerce', label: 'E-Commerce Store' },
  { id: 'saas', label: 'SaaS / Web App' },
  { id: 'blog', label: 'Blog / Content Site' },
  { id: 'mobile', label: 'Mobile App' },
  { id: 'agency', label: 'Agency / Freelancer' },
  { id: 'nonprofit', label: 'Non-Profit' },
];

const POLICY_COLUMNS = [
  { id: 'privacy', labelKey: 'privacy_policy', path: '/' },
  { id: 'terms', labelKey: 'terms_conditions', path: '/' },
  { id: 'tos', labelKey: 'tos', path: '/' },
  { id: 'cookie', labelKey: 'cookie_policy', path: '/' },
  { id: 'refund', labelKey: 'refund_policy', path: '/' },
  { id: 'disclaimer', labelKey: 'disclaimer', path: '/' },
  { id: 'nda', labelKey: 'start_nda', path: '/' },
  { id: 'eula', labelKey: 'eula', path: '/' },
  { id: 'dpa', labelKey: 'dpa', path: '/' },
  { id: 'dmca', labelKey: 'dmca', path: '/' },
  { id: 'accessibility', labelKey: 'accessibility_statement', path: '/' },
];

// Which policies each business type needs (true = required, 'rec' = recommended)
const MATRIX: Record<string, Record<string, boolean | string>> = {
  ecommerce:  { privacy: true, terms: true, tos: true, cookie: true, refund: true, disclaimer: true, nda: false, eula: false, dpa: true, dmca: false, accessibility: true },
  saas:       { privacy: true, terms: true, tos: true, cookie: true, refund: false, disclaimer: true, nda: true, eula: true, dpa: true, dmca: true, accessibility: true },
  blog:       { privacy: true, terms: true, tos: false, cookie: true, refund: false, disclaimer: true, nda: false, eula: false, dpa: false, dmca: true, accessibility: 'rec' },
  mobile:     { privacy: true, terms: true, tos: true, cookie: false, refund: true, disclaimer: true, nda: true, eula: true, dpa: true, dmca: false, accessibility: true },
  agency:     { privacy: true, terms: true, tos: true, cookie: true, refund: false, disclaimer: true, nda: true, eula: false, dpa: true, dmca: false, accessibility: 'rec' },
  nonprofit:  { privacy: true, terms: true, tos: false, cookie: true, refund: false, disclaimer: true, nda: false, eula: false, dpa: true, dmca: false, accessibility: true },
};

export const PolicyGuide: React.FC = () => {
  const { t } = useTranslation();

  const guideJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Policy Guide — Which Legal Policies Does Your Website Need?',
    url: 'https://legalpolicygen.com/policy-guide',
    description: 'Interactive guide showing which legal documents your business needs based on your business type.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does my website need a privacy policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If your website collects any personal data — including names, emails, IP addresses, or cookies — you are legally required to have a privacy policy under GDPR, CCPA, and most other data protection laws worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'What legal pages does an e-commerce store need?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At minimum, e-commerce stores need a Privacy Policy, Terms & Conditions, Refund/Return Policy, Cookie Policy, and a Disclaimer. A Data Processing Agreement (DPA) is also required if you share customer data with third-party processors.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do SaaS applications need a EULA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A EULA (End User License Agreement) is strongly recommended for any SaaS application. It defines how users may use your software, protects your intellectual property, and limits your liability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a cookie banner required for my website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your website uses cookies and serves users in the EU, UK, or other jurisdictions with cookie consent laws, you need a cookie banner that allows users to accept or decline non-essential cookies before they are set.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Terms of Service and Terms & Conditions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They are essentially the same document with different names. Terms of Service (ToS) is more common for SaaS and online platforms, while Terms & Conditions (T&C) is more common for e-commerce and general websites. Both establish the rules users must agree to when using your service.',
        },
      },
    ],
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <SEO
        title="Policy Guide — Which Legal Policies Does Your Website Need?"
        description="Interactive guide showing which legal documents your business needs. Compare requirements for e-commerce, SaaS, blogs, mobile apps, agencies, and non-profits."
        canonical="/policy-guide"
        jsonLd={[guideJsonLd, faqJsonLd]}
      />

      <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        📋 {t('policy_guide_title')}
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
        {t('policy_guide_subtitle')}
      </p>

      <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
          <thead>
            <tr>
              <th style={thStyle}>Business Type</th>
              {POLICY_COLUMNS.map(col => (
                <th key={col.id} style={{ ...thStyle, fontSize: '0.75rem', maxWidth: '80px', textAlign: 'center' }}>
                  {t(col.labelKey)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BUSINESS_TYPES.map((biz, idx) => (
              <tr key={biz.id} style={{ background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <td style={{ ...tdStyle, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {biz.label}
                </td>
                {POLICY_COLUMNS.map(col => {
                  const value = MATRIX[biz.id]?.[col.id];
                  return (
                    <td key={col.id} style={{ ...tdStyle, textAlign: 'center' }}>
                      {value === true ? (
                        <Link to="/" title={`Generate ${t(col.labelKey)}`} style={{ fontSize: '1.2rem', textDecoration: 'none' }}>✅</Link>
                      ) : value === 'rec' ? (
                        <Link to="/" title={`Generate ${t(col.labelKey)} (Recommended)`} style={{ fontSize: '1.2rem', textDecoration: 'none' }}>🟡</Link>
                      ) : (
                        <span style={{ opacity: 0.3 }}>—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span>✅</span> Required
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span>🟡</span> Recommended
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          <span style={{ opacity: 0.3 }}>—</span> Not Needed
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/bundle" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          📦 {t('bundle_title')}
        </Link>
      </div>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '0.75rem 0.5rem',
  textAlign: 'left',
  borderBottom: '2px solid var(--glass-border)',
  color: 'var(--accent-tertiary)',
  fontSize: '0.85rem',
  fontWeight: 700,
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem 0.5rem',
  borderBottom: '1px solid var(--glass-border)',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
};
