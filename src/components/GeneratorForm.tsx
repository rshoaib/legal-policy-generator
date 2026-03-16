'use client'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type PolicyData, type PolicyType, POLICY_TITLE_KEYS, POLICY_GENERATE_KEYS } from '../appTypes';

interface GeneratorFormProps {
  onGenerate: (data: PolicyData) => void;
  selectedType: PolicyType;
  initialData?: Partial<PolicyData>;
  onDataChange?: (data: PolicyData) => void;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, selectedType, initialData, onDataChange }) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<number>(1);
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
    privacySellData: initialData?.privacySellData || false,
    privacyChildren: initialData?.privacyChildren || false,
    privacyGoogleAnalytics: initialData?.privacyGoogleAnalytics || false,
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
    accessibilityContactPhone: initialData?.accessibilityContactPhone || '',
    eulaLicenseType: initialData?.eulaLicenseType || 'single-user',
    eulaSubscription: initialData?.eulaSubscription || false,
    dpaDataTypes: initialData?.dpaDataTypes || '',
    dpaProcessingPurpose: initialData?.dpaProcessingPurpose || ''
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setFormData(prev => {
          const newData = { ...prev, [name]: checked };
          if (onDataChange) onDataChange(newData);
          return newData;
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onGenerate(formData);
    }
  };

  const hasSpecificFields = ['privacy', 'refund', 'shipping', 'disclaimer', 'cookie-banner', 'robots-txt', 'accessibility', 'eula', 'dpa', 'sla'].includes(selectedType);
  const totalSteps = hasSpecificFields ? 2 : 1;

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
        {t(POLICY_TITLE_KEYS[selectedType])} {t('details')}
      </h2>

      {/* Progress Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{currentStep === 1 ? 'Business Details' : 'Policy Specifics'}</span>
        </div>
        <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(currentStep / totalSteps) * 100}%`, background: 'var(--accent-primary)', transition: 'width 0.3s ease' }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        
        {currentStep === 1 && (
          <>
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
        </>
      )}

      {currentStep === 2 && (
        <>

        {selectedType === 'privacy' && (
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Enable advanced clauses to ensure compliance with specific regulations.
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="privacySellData"
                type="checkbox"
                checked={formData.privacySellData}
                onChange={handleCheckboxChange}
              />
              Do you sell user data? (Adds CCPA "Do Not Sell My Info" clause)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="privacyChildren"
                type="checkbox"
                checked={formData.privacyChildren}
                onChange={handleCheckboxChange}
              />
              Is your site/app aimed at children under 13? (Adds COPPA compliance clause)
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="privacyGoogleAnalytics"
                type="checkbox"
                checked={formData.privacyGoogleAnalytics}
                onChange={handleCheckboxChange}
              />
              Do you use Google Analytics or AdSense? (Adds required Third-Party Tracking clauses)
            </label>
          </div>
        )}

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

        {selectedType === 'shipping' && (
          <>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('shipping_processing_time')}</label>
              <input
                name="shippingProcessingTime"
                value={formData.shippingProcessingTime || ''}
                onChange={handleChange}
                placeholder="e.g. 1–2 business days"
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('shipping_methods')}</label>
              <textarea
                name="shippingMethods"
                value={formData.shippingMethods || ''}
                onChange={(e) => {
                    const newData = { ...formData, shippingMethods: e.target.value };
                    setFormData(newData);
                    if (onDataChange) onDataChange(newData);
                }}
                placeholder="Standard Shipping&#10;Express Shipping&#10;Overnight Shipping"
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('shipping_domestic_time')}</label>
              <input
                name="shippingDomesticTime"
                value={formData.shippingDomesticTime || ''}
                onChange={handleChange}
                placeholder="e.g. 5–7 business days"
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  name="shippingInternational"
                  type="checkbox"
                  checked={formData.shippingInternational || false}
                  onChange={handleCheckboxChange}
                />
                {t('shipping_international')}
              </label>
            </div>
            {formData.shippingInternational && (
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('shipping_international_time')}</label>
                <input
                  name="shippingInternationalTime"
                  value={formData.shippingInternationalTime || ''}
                  onChange={handleChange}
                  placeholder="e.g. 10–20 business days"
                />
              </div>
            )}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('shipping_free_threshold')}</label>
              <input
                name="shippingFreeThreshold"
                type="number"
                min="0"
                value={formData.shippingFreeThreshold || ''}
                onChange={handleChange}
                placeholder="e.g. 50 (leave empty if none)"
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('shipping_restrictions')}</label>
              <textarea
                name="shippingRestrictions"
                value={formData.shippingRestrictions || ''}
                onChange={(e) => {
                    const newData = { ...formData, shippingRestrictions: e.target.value };
                    setFormData(newData);
                    if (onDataChange) onDataChange(newData);
                }}
                placeholder="Hazardous materials&#10;P.O. Boxes&#10;International restricted items"
                style={{
                  width: '100%',
                  minHeight: '80px',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit'
                }}
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
        {(selectedType === 'cookie-banner') && (
          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('banner_link_text')}</label>
                  <input
                      name="bannerLinkText"
                      value={formData.bannerLinkText || ''}
                      onChange={handleChange}
                      placeholder="Learn more"
                      style={{ width: '100%' }}
                  />
              </div>
              <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('banner_link_url')}</label>
                  <input
                      name="bannerLinkUrl"
                      value={formData.bannerLinkUrl || ''}
                      onChange={handleChange}
                      placeholder="/privacy-policy"
                      style={{ width: '100%' }}
                  />
              </div>

              <div style={{ gridColumn: '1 / -1', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', marginBottom: '1rem' }}>
                    <input
                        name="bannerDeclineButton"
                        type="checkbox"
                        checked={formData.bannerDeclineButton || false}
                        onChange={handleCheckboxChange}
                    />
                    {t('enable_decline_button')}
                </label>

                {formData.bannerDeclineButton && (
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('decline_button_text')}</label>
                        <input
                            name="bannerDeclineText"
                            value={formData.bannerDeclineText || ''}
                            onChange={handleChange}
                            placeholder="Decline"
                            style={{ width: '100%' }}
                        />
                    </div>
                )}
            </div>
          </div>
        )}
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
        {selectedType === 'eula' && (
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('eula_license_type')}</label>
              <select
                name="eulaLicenseType"
                value={formData.eulaLicenseType}
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
                <option value="single-user">{t('eula_single_user')}</option>
                <option value="multi-user">{t('eula_multi_user')}</option>
                <option value="saas">{t('eula_saas')}</option>
              </select>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                name="eulaSubscription"
                type="checkbox"
                checked={formData.eulaSubscription}
                onChange={handleChange}
              />
              {t('eula_subscription')}
            </label>
          </div>
        )}

        {selectedType === 'dpa' && (
          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('dpa_data_types')}</label>
              <input
                name="dpaDataTypes"
                value={formData.dpaDataTypes}
                onChange={handleChange}
                placeholder="e.g. names, email addresses, IP addresses, usage data"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('dpa_processing_purpose')}</label>
              <input
                name="dpaProcessingPurpose"
                value={formData.dpaProcessingPurpose}
                onChange={handleChange}
                placeholder="e.g. to provide and improve services offered through the website"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        )}

        {selectedType === 'sla' && (
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{t('sla_uptime')}</label>
            <input
              name="slaUptimeGuarantee"
              value={formData.slaUptimeGuarantee || '99.9'}
              onChange={handleChange}
              placeholder="e.g. 99.9"
              style={{ width: '100%' }}
            />
          </div>
        )}

          </>
        )}

        {/* Buttons */}
        <div style={{ gridColumn: '1 / -1', marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
          {currentStep > 1 && (
            <button 
              type="button" 
              className="btn-primary" 
              style={{ background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--text-primary)', flex: 1 }}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </button>
          )}
          <button type="submit" className="btn-primary" style={{ flex: 2 }}>
            {currentStep < totalSteps ? 'Next Step →' : t(POLICY_GENERATE_KEYS[selectedType])}
          </button>
        </div>
      </form>
    </div>
  );
};
