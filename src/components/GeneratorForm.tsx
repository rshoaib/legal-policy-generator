import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { PolicyData } from '../appTypes';

interface GeneratorFormProps {
  onGenerate: (data: PolicyData) => void;
  selectedType: 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt' | 'accessibility' | 'nda';
  initialData?: Partial<PolicyData>;
  onDataChange?: (data: PolicyData) => void;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, selectedType, initialData, onDataChange }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<PolicyData>({
    companyName: initialData?.companyName || '',
    companyAddress: initialData?.companyAddress || '',
    websiteUrl: initialData?.websiteUrl || '',
    websiteName: initialData?.websiteName || '',
    contactEmail: initialData?.contactEmail || '',
    country: initialData?.country || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    refundDays: initialData?.refundDays || '30',
    refundConditions: initialData?.refundConditions || 'Items must be unused and in original packaging.',
    disclaimerAffiliate: initialData?.disclaimerAffiliate || false,
    disclaimerHealth: initialData?.disclaimerHealth || false,
    disclaimerFinancial: initialData?.disclaimerFinancial || false,
    bannerPosition: initialData?.bannerPosition || 'bottom',
    bannerColor: initialData?.bannerColor || '#2b2b2b',
    bannerTextColor: initialData?.bannerTextColor || '#ffffff',
    buttonColor: initialData?.buttonColor || '#f1d600',
    buttonTextColor: initialData?.buttonTextColor || '#000000',
    bannerText: initialData?.bannerText || 'We use cookies to improve your experience.',
    buttonText: initialData?.buttonText || 'Got it!',
    robotsUserAgent: initialData?.robotsUserAgent || '*',
    robotsAllow: initialData?.robotsAllow || '/',
    robotsDisallow: initialData?.robotsDisallow || '',
    robotsSitemap: initialData?.robotsSitemap || '',
    accessibilityStandard: initialData?.accessibilityStandard || 'WCAG 2.1 Level AA',
    accessibilityContactEmail: initialData?.accessibilityContactEmail || '',
    accessibilityContactPhone: initialData?.accessibilityContactPhone || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => {
      const newData = { 
        ...prev, 
        [name]: type === 'checkbox' ? checked : value 
      };
      if (onDataChange) {
        onDataChange(newData);
      }
      return newData;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
        {selectedType === 'privacy' ? t('privacy_policy') : selectedType === 'terms' ? t('terms_conditions') : selectedType === 'refund' ? t('refund_policy') : selectedType === 'disclaimer' ? t('disclaimer') : selectedType === 'cookie-banner' ? t('cookie_consent_banner') : selectedType === 'robots-txt' ? t('robots_txt_generator') : selectedType === 'accessibility' ? t('accessibility_statement') : selectedType === 'nda' ? t('start_nda') : t('cookie_policy')} {t('details')}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('company_name')}</label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Corp"
            required
          />
        </div>
        
        
        <div>
           <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('company_address')}</label>
           <input
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleChange}
            placeholder="e.g. 123 Main St, New York, NY"
            required
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('website_name')}</label>
          <input
            name="websiteName"
            value={formData.websiteName}
            onChange={handleChange}
            placeholder="e.g. Acme Website"
            required
          />
        </div>

        <div>
           <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('website_url')}</label>
           <input
            name="websiteUrl"
            type="url"
            value={formData.websiteUrl}
            onChange={handleChange}
            placeholder="https://example.com"
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('contact_email')}</label>
          <input
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="contact@example.com"
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('country')}</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. United States"
            required
          />
        </div>

        {selectedType === 'refund' && (
          <>
             <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('return_window')}</label>
              <input
                name="refundDays"
                type="number"
                value={formData.refundDays}
                onChange={handleChange}
                placeholder="e.g. 30"
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
               <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('return_conditions')}</label>
               <input
                name="refundConditions"
                value={formData.refundConditions}
                onChange={handleChange}
                placeholder="e.g. Items must be unused..."
              />
            </div>
          </>
        )}



        {selectedType === 'disclaimer' && (
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="disclaimerAffiliate"
                type="checkbox"
                checked={formData.disclaimerAffiliate}
                onChange={handleChange}
              />
              {t('include_affiliate')}
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="disclaimerHealth"
                type="checkbox"
                checked={formData.disclaimerHealth}
                onChange={handleChange}
              />
              {t('include_health')}
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="disclaimerFinancial"
                type="checkbox"
                checked={formData.disclaimerFinancial}
                onChange={handleChange}
              />
              {t('include_financial')}
            </label>
          </div>
        )}



        {selectedType === 'cookie-banner' && (
          <>
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('banner_text')}</label>
                <input
                  name="bannerText"
                  value={formData.bannerText}
                  onChange={handleChange}
                  placeholder="We use cookies..."
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('button_text')}</label>
                <input
                  name="buttonText"
                  value={formData.buttonText}
                  onChange={handleChange}
                  placeholder="Got it!"
                  style={{ width: '100%' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('position')}</label>
              <select
                name="bannerPosition"
                value={formData.bannerPosition}
                onChange={handleChange}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: 'var(--text-primary)' 
                }}
              >
                <option value="bottom">{t('pos_bottom')}</option>
                <option value="top">{t('pos_top')}</option>
                <option value="bottom-right">{t('pos_bottom_right')}</option>
                <option value="bottom-left">{t('pos_bottom_left')}</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('banner_color')}</label>
                <input
                  name="bannerColor"
                  type="color"
                  value={formData.bannerColor}
                  onChange={handleChange}
                  style={{ width: '100%', height: '40px', padding: 0, border: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('text_color')}</label>
                <input
                  name="bannerTextColor"
                  type="color"
                  value={formData.bannerTextColor}
                  onChange={handleChange}
                  style={{ width: '100%', height: '40px', padding: 0, border: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
               <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('button_color')}</label>
                <input
                  name="buttonColor"
                  type="color"
                  value={formData.buttonColor}
                  onChange={handleChange}
                  style={{ width: '100%', height: '40px', padding: 0, border: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('button_text_color')}</label>
                <input
                  name="buttonTextColor"
                  type="color"
                  value={formData.buttonTextColor}
                  onChange={handleChange}
                   style={{ width: '100%', height: '40px', padding: 0, border: 'none' }}
                />
              </div>
            </div>
          </>
        )}



        {selectedType === 'robots-txt' && (
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('user_agent')}</label>
              <select
                name="robotsUserAgent"
                value={formData.robotsUserAgent}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)'
                }}
              >
                <option value="*">All Bots (*)</option>
                <option value="Googlebot">Googlebot</option>
                <option value="Bingbot">Bingbot</option>
                <option value="DuckDuckBot">DuckDuckBot</option>
                <option value="Baiduspider">Baiduspider</option>
                <option value="YandexBot">YandexBot</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('allow_paths')}</label>
              <textarea
                name="robotsAllow"
                value={formData.robotsAllow}
                onChange={(e) => {
                    const newData = { ...formData, robotsAllow: e.target.value };
                    setFormData(newData);
                    if (onDataChange) onDataChange(newData);
                }}
                placeholder="/"
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)',
                  fontFamily: 'monospace'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('disallow_paths')}</label>
              <textarea
                name="robotsDisallow"
                value={formData.robotsDisallow}
                onChange={(e) => {
                    const newData = { ...formData, robotsDisallow: e.target.value };
                    setFormData(newData);
                    if (onDataChange) onDataChange(newData);
                }}
                placeholder="/admin&#10;/private"
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)',
                   fontFamily: 'monospace'
                }}
              />
            </div>

             <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('sitemap_url')}</label>
              <input
                name="robotsSitemap"
                value={formData.robotsSitemap}
                onChange={handleChange}
                placeholder="https://example.com/sitemap.xml"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        )}



        {selectedType === 'accessibility' && (
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('accessibility_standard')}</label>
              <input
                name="accessibilityStandard"
                value={formData.accessibilityStandard}
                onChange={handleChange}
                placeholder="WCAG 2.1 Level AA"
                style={{ width: '100%' }}
              />
            </div>

             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('contact_email_optional')}</label>
                <input
                  name="accessibilityContactEmail"
                  type="email"
                  value={formData.accessibilityContactEmail}
                  onChange={handleChange}
                  placeholder={formData.contactEmail || "accessibility@example.com"}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('contact_phone')}</label>
                 <input
                  name="accessibilityContactPhone"
                  type="tel"
                  value={formData.accessibilityContactPhone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>
        )}

        <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            {selectedType === 'privacy' ? t('generate_button') : selectedType === 'terms' ? t('generate_button') : selectedType === 'refund' ? t('generate_button') : selectedType === 'disclaimer' ? t('generate_button') : selectedType === 'cookie-banner' ? t('generate_banner') : selectedType === 'robots-txt' ? t('generate_robots') : selectedType === 'accessibility' ? t('generate_accessibility') : t('generate_button')}
          </button>
        </div>
      </form>
    </div>
  );
};
