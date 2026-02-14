import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from './SEO';
import type { PolicyData } from '../appTypes';
import { generatePrivacyPolicy } from '../utils/templates/privacyPolicy';
import { generateTermsConditions } from '../utils/templates/termsConditions';
import { generateCookiePolicy } from '../utils/templates/cookiePolicy';
import { generateDisclaimer } from '../utils/templates/disclaimer';
import { generateRefundPolicy } from '../utils/templates/refundPolicy';
import { generateTermsOfService } from '../utils/templates/termsOfService';

const BUNDLE_POLICIES = [
  { id: 'privacy', labelKey: 'privacy_policy', default: true },
  { id: 'terms', labelKey: 'terms_conditions', default: true },
  { id: 'cookie', labelKey: 'cookie_policy', default: true },
  { id: 'disclaimer', labelKey: 'disclaimer', default: true },
  { id: 'refund', labelKey: 'refund_policy', default: false },
  { id: 'tos', labelKey: 'tos', default: false },
] as const;

type BundlePolicyId = typeof BUNDLE_POLICIES[number]['id'];

export const PolicyBundle: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  const [formData, setFormData] = useState<PolicyData>({
    companyName: '',
    companyAddress: '',
    websiteUrl: '',
    websiteName: '',
    contactEmail: '',
    country: '',
    date: new Date().toISOString().split('T')[0],
  });

  const [selectedPolicies, setSelectedPolicies] = useState<Set<BundlePolicyId>>(
    new Set(BUNDLE_POLICIES.filter(p => p.default).map(p => p.id))
  );

  const [generated, setGenerated] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePolicy = (id: BundlePolicyId) => {
    setSelectedPolicies(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleGenerateAll = (e: React.FormEvent) => {
    e.preventDefault();
    const results: Record<string, string> = {};
    const generators: Record<string, () => string> = {
      privacy: () => generatePrivacyPolicy(formData, currentLang),
      terms: () => generateTermsConditions(formData),
      cookie: () => generateCookiePolicy(formData),
      disclaimer: () => generateDisclaimer(formData),
      refund: () => generateRefundPolicy(formData),
      tos: () => generateTermsOfService(formData, currentLang),
    };

    for (const id of selectedPolicies) {
      if (generators[id]) results[id] = generators[id]();
    }

    setGenerated(results);
    const firstKey = Object.keys(results)[0];
    if (firstKey) setActiveTab(firstKey);
  };

  const handleDownloadAll = () => {
    const combined = Object.entries(generated)
      .map(([key, content]) => `<!-- === ${key.toUpperCase()} === -->\n${content}`)
      .join('\n\n<hr/>\n\n');

    const blob = new Blob([`<html><head><meta charset="utf-8"><title>Legal Policy Bundle — ${formData.companyName}</title><style>body{font-family:system-ui;max-width:800px;margin:2rem auto;padding:0 1rem;line-height:1.7;color:#1a1a2e}h1,h2,h3{color:#0f172a}hr{margin:3rem 0;border:none;border-top:2px solid #e2e8f0}</style></head><body>${combined}</body></html>`], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `legal-bundle-${formData.companyName.replace(/\s+/g, '-').toLowerCase()}.html`;
    link.click();
  };

  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Website Legal Starter Kit',
    url: 'https://legalpolicygen.com/bundle',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate all essential legal policies at once — Privacy Policy, Terms & Conditions, Cookie Policy, and more.',
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Website Legal Starter Kit — Generate All Policies at Once"
        description="Generate all essential legal policies for your website in one click. Privacy Policy, Terms & Conditions, Cookie Policy, Disclaimer, and more."
        canonical="/bundle"
        jsonLd={[appJsonLd]}
      />

      <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
        📦 {t('bundle_title')}
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
        {t('bundle_subtitle')}
      </p>

      {Object.keys(generated).length === 0 ? (
        <form onSubmit={handleGenerateAll} className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('company_name')}</label>
              <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g. Acme Corp" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('company_address')}</label>
              <input name="companyAddress" value={formData.companyAddress} onChange={handleChange} placeholder="e.g. 123 Main St" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('website_name')}</label>
              <input name="websiteName" value={formData.websiteName} onChange={handleChange} placeholder="e.g. Acme Website" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('website_url')}</label>
              <input name="websiteUrl" type="url" value={formData.websiteUrl} onChange={handleChange} placeholder="https://example.com" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('contact_email')}</label>
              <input name="contactEmail" type="email" value={formData.contactEmail} onChange={handleChange} placeholder="contact@example.com" required />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('country')}</label>
              <input name="country" value={formData.country} onChange={handleChange} placeholder="e.g. United States" required />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--accent-tertiary)' }}>{t('bundle_select_policies')}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {BUNDLE_POLICIES.map(p => (
                <label key={p.id} style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
                  padding: '0.75rem 1rem', borderRadius: '0.75rem',
                  background: selectedPolicies.has(p.id) ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${selectedPolicies.has(p.id) ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                  transition: 'all 0.2s'
                }}>
                  <input
                    type="checkbox"
                    checked={selectedPolicies.has(p.id)}
                    onChange={() => togglePolicy(p.id)}
                    style={{ accentColor: 'var(--accent-primary)' }}
                  />
                  {t(p.labelKey)}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
            🚀 {t('bundle_generate_all')} ({selectedPolicies.size})
          </button>
        </form>
      ) : (
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {Object.keys(generated).map(key => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer',
                  background: activeTab === key ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)', border: '1px solid',
                  borderColor: activeTab === key ? 'var(--accent-primary)' : 'var(--glass-border)',
                  fontWeight: activeTab === key ? '700' : '400',
                  transition: 'all 0.2s', textTransform: 'capitalize'
                }}
              >
                {key.replace(/-/g, ' ')}
              </button>
            ))}
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '0.75rem',
            maxHeight: '400px', overflowY: 'auto', whiteSpace: 'pre-wrap',
            fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            {generated[activeTab]}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={handleDownloadAll}>
              ⬇️ {t('bundle_download_all')}
            </button>
            <button className="btn-primary" onClick={() => setGenerated({})} style={{ filter: 'hue-rotate(120deg)'}}>
              {t('create_new')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
