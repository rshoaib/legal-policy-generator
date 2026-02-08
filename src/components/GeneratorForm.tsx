import React, { useState } from 'react';
import type { PolicyData } from '../appTypes';

interface GeneratorFormProps {
  onGenerate: (data: PolicyData) => void;
  selectedType: 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt';
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, selectedType }) => {
  const [formData, setFormData] = useState<PolicyData>({
    companyName: '',
    websiteUrl: '',
    websiteName: '',
    contactEmail: '',
    country: '',
    date: new Date().toISOString().split('T')[0],
    refundDays: '30',
    refundConditions: 'Items must be unused and in original packaging.',
    disclaimerAffiliate: false,
    disclaimerHealth: false,
    disclaimerFinancial: false,
    bannerPosition: 'bottom',
    bannerColor: '#2b2b2b',
    bannerTextColor: '#ffffff',
    buttonColor: '#f1d600',
    buttonTextColor: '#000000',
    bannerText: 'We use cookies to improve your experience.',
    buttonText: 'Got it!',
    robotsUserAgent: '*',
    robotsAllow: '/',
    robotsDisallow: '',
    robotsSitemap: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
        {selectedType === 'privacy' ? 'Privacy Policy' : selectedType === 'terms' ? 'Terms & Conditions' : selectedType === 'refund' ? 'Refund Policy' : selectedType === 'disclaimer' ? 'Disclaimer' : selectedType === 'cookie-banner' ? 'Cookie Consent Banner' : selectedType === 'robots-txt' ? 'Robots.txt Generator' : 'Cookie Policy'} Details
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Company Name</label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Corp"
            required
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Website Name</label>
          <input
            name="websiteName"
            value={formData.websiteName}
            onChange={handleChange}
            placeholder="e.g. Acme Website"
            required
          />
        </div>

        <div>
           <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Website URL</label>
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
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Contact Email</label>
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
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Country</label>
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Return Window (Days)</label>
              <input
                name="refundDays"
                type="number"
                value={formData.refundDays}
                onChange={handleChange}
                placeholder="e.g. 30"
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
               <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Return Conditions</label>
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
              Include Affiliate Disclaimer (e.g. Amazon Associates)
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="disclaimerHealth"
                type="checkbox"
                checked={formData.disclaimerHealth}
                onChange={handleChange}
              />
              Include Health/Medical Disclaimer
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="disclaimerFinancial"
                type="checkbox"
                checked={formData.disclaimerFinancial}
                onChange={handleChange}
              />
              Include Financial/Investment Advice Disclaimer
            </label>
          </div>
        )}



        {selectedType === 'cookie-banner' && (
          <>
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Banner Text</label>
                <input
                  name="bannerText"
                  value={formData.bannerText}
                  onChange={handleChange}
                  placeholder="We use cookies..."
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Button Text</label>
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Position</label>
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
                <option value="bottom">Bottom Full Width</option>
                <option value="top">Top Full Width</option>
                <option value="bottom-right">Bottom Right Floating</option>
                <option value="bottom-left">Bottom Left Floating</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Banner Color</label>
                <input
                  name="bannerColor"
                  type="color"
                  value={formData.bannerColor}
                  onChange={handleChange}
                  style={{ width: '100%', height: '40px', padding: 0, border: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Text Color</label>
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
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Button Color</label>
                <input
                  name="buttonColor"
                  type="color"
                  value={formData.buttonColor}
                  onChange={handleChange}
                  style={{ width: '100%', height: '40px', padding: 0, border: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Button Text Color</label>
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>User Agent</label>
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Allow Paths (One per line)</label>
              <textarea
                name="robotsAllow"
                value={formData.robotsAllow}
                onChange={(e) => setFormData(prev => ({ ...prev, robotsAllow: e.target.value }))}
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Disallow Paths (One per line)</label>
              <textarea
                name="robotsDisallow"
                value={formData.robotsDisallow}
                onChange={(e) => setFormData(prev => ({ ...prev, robotsDisallow: e.target.value }))}
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Sitemap URL</label>
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

        <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Generate {selectedType === 'privacy' ? 'Privacy Policy' : selectedType === 'terms' ? 'Terms & Conditions' : selectedType === 'refund' ? 'Refund Policy' : selectedType === 'disclaimer' ? 'Disclaimer' : selectedType === 'cookie-banner' ? 'Banner Code' : selectedType === 'robots-txt' ? 'Robots.txt' : 'Cookie Policy'}
          </button>
        </div>
      </form>
    </div>
  );
};
