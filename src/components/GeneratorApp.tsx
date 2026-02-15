import { useState, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SEO } from './SEO'
import type { PolicyData } from '../appTypes'
import { savePolicy } from '../utils/useHistoryStorage'

/* ── Heavy components loaded only when user clicks a policy type ── */
const GeneratorForm = lazy(() => import('./GeneratorForm').then(m => ({ default: m.GeneratorForm })))
const PolicyPreview = lazy(() => import('./PolicyPreview').then(m => ({ default: m.PolicyPreview })))

const FormLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
    <div style={{ width: 40, height: 40, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
)

type Step = 'landing' | 'form' | 'preview'
type PolicyType = 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt' | 'accessibility' | 'nda' | 'eula' | 'dpa' | 'aup' | 'dmca' | 'employee-privacy' | 'affiliate-disclaimer' | 'social-media' | 'newsletter' | 'tos' | 'hipaa' | 'sla' | 'data-breach' | 'ai-ethics'

export function GeneratorApp() {
  const [step, setStep] = useState<Step>('landing')
  const [selectedType, setSelectedType] = useState<PolicyType>('privacy')
  const [generatedContent, setGeneratedContent] = useState('')

  /* New: Language Handling */
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState('en')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setCurrentLang(lng)
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
  }

  /* New: Load initial data from local storage */
  const [formData, setFormData] = useState<Partial<PolicyData>>(() => {
    const saved = localStorage.getItem('policy_generator_data')
    return saved ? JSON.parse(saved) : {}
  })

  /* New: Save data to local storage on change */
  const handleDataChange = (data: PolicyData) => {
    setFormData(data)
    localStorage.setItem('policy_generator_data', JSON.stringify(data))
  }

  /* New: Clear saved data */
  const handleClearData = () => {
      localStorage.removeItem('policy_generator_data')
      setFormData({})
      window.location.reload()
  }

  const handleStart = (type: PolicyType) => {
    setSelectedType(type)
    setStep('form')
  }

  /* ── Dynamic template map — loaded only when user generates ── */
  const templateImports: Record<PolicyType, () => Promise<(data: PolicyData, lang?: string) => string>> = {
    'privacy': () => import('../utils/templates/privacyPolicy').then(m => m.generatePrivacyPolicy),
    'terms': () => import('../utils/templates/termsConditions').then(m => m.generateTermsConditions),
    'tos': () => import('../utils/templates/termsOfService').then(m => m.generateTermsOfService),
    'cookie': () => import('../utils/templates/cookiePolicy').then(m => m.generateCookiePolicy),
    'refund': () => import('../utils/templates/refundPolicy').then(m => m.generateRefundPolicy),
    'disclaimer': () => import('../utils/templates/disclaimer').then(m => m.generateDisclaimer),
    'cookie-banner': () => import('../utils/templates/cookieBanner').then(m => m.generateCookieBannerCode),
    'robots-txt': () => import('../utils/templates/robotsTxt').then(m => m.generateRobotsTxt),
    'accessibility': () => import('../utils/templates/accessibilityStatement').then(m => m.generateAccessibilityStatement),
    'nda': () => import('../utils/templates/nda').then(m => m.generateNDA),
    'eula': () => import('../utils/templates/eula').then(m => m.generateEULA),
    'dpa': () => import('../utils/templates/dpa').then(m => m.generateDPA),
    'aup': () => import('../utils/templates/aup').then(m => m.generateAUP),
    'dmca': () => import('../utils/templates/dmca').then(m => m.generateDMCA),
    'employee-privacy': () => import('../utils/templates/employeePrivacy').then(m => m.generateEmployeePrivacy),
    'affiliate-disclaimer': () => import('../utils/templates/affiliateDisclaimer').then(m => m.generateAffiliateDisclaimer),
    'social-media': () => import('../utils/templates/socialMediaPolicy').then(m => m.generateSocialMediaPolicy),
    'newsletter': () => import('../utils/templates/newsletterPolicy').then(m => m.generateNewsletterPolicy),
    'hipaa': () => import('../utils/templates/hipaaNotice').then(m => m.generateHIPAANotice),
    'sla': () => import('../utils/templates/sla').then(m => m.generateSLA),
    'data-breach': () => import('../utils/templates/dataBreachNotification').then(m => m.generateDataBreachNotification),
    'ai-ethics': () => import('../utils/templates/aiEthicsPolicy').then(m => m.generateAIEthicsPolicy),
  }

  const handleGenerate = async (data: PolicyData) => {
    handleDataChange(data)
    const generator = await templateImports[selectedType]()
    const content = generator(data, currentLang)

    // Save to policy history
    const label = `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1).replace(/-/g, ' ')} — ${data.companyName || data.websiteName || 'Untitled'}`
    savePolicy(selectedType, label, content)

    setGeneratedContent(content)
    setStep('preview')
  }

  const handleReset = () => {
    setStep('landing')
    setGeneratedContent('')
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Legal Policy Generator',
    url: 'https://legalpolicygen.com',
    description: 'Free legal policy generator for Privacy Policies, Terms & Conditions, NDA, EULA, DPA, DMCA, AUP, Refund Policies, Disclaimers, Cookie Banners, Robots.txt, Accessibility Statements, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://legalpolicygen.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Legal Policy Generator',
    url: 'https://legalpolicygen.com',
    logo: 'https://legalpolicygen.com/og-image.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@legalpolicygen.com',
      contactType: 'customer service',
    },
  };

  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Legal Policy Generator',
    url: 'https://legalpolicygen.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate 22+ free legal documents including Privacy Policies, Terms & Conditions, NDA, EULA, DPA, DMCA Policies, HIPAA Notices, SLA, Data Breach Notifications, AI Ethics Policies, and more. GDPR, CCPA, and WCAG compliant.',
    featureList: 'Privacy Policy Generator, Terms & Conditions Generator, NDA Generator, EULA Generator, DPA Generator, DMCA Policy Generator, AUP Generator, Cookie Policy Generator, Cookie Consent Banner Generator, Robots.txt Generator, Accessibility Statement Generator, Refund Policy Generator, Disclaimer Generator, Employee Privacy Policy Generator, Affiliate Disclosure Generator, Social Media Policy Generator, Newsletter Policy Generator, HIPAA Notice Generator, SLA Generator, Data Breach Notification Generator, AI Ethics Policy Generator, Compliance Checker',
  };

  return (
    <>
      <SEO
        canonical="/"
        jsonLd={[websiteJsonLd, orgJsonLd, appJsonLd]}
      />
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100 }}>
         <select 
            value={currentLang} 
            onChange={(e) => changeLanguage(e.target.value)}
            style={{ 
                background: 'rgba(0,0,0,0.5)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)', 
                padding: '0.5rem', 
                borderRadius: '0.5rem',
                cursor: 'pointer'
            }}
          >
             <option value="en">English (EN)</option>
             <option value="es">Español (ES)</option>
             <option value="fr">Français (FR)</option>
             <option value="de">Deutsch (DE)</option>
             <option value="pt">Português (PT)</option>
             <option value="ar">العربية (AR)</option>
          </select>
      </div>

      {step === 'landing' && (
        <div style={{ textAlign: 'center', marginTop: '4rem' }} className="animate-enter">
          <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            {t('app_title')}
          </h1>
          <p className="delay-100 animate-enter" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            {t('app_subtitle')}
          </p>
          
          <div className="delay-200 animate-enter" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto 4rem' }}>
            <button className="btn-primary" onClick={() => handleStart('privacy')}>{t('start_privacy')}</button>
            <button className="btn-primary" onClick={() => handleStart('terms')}>{t('start_terms')}</button>
            <button className="btn-primary" onClick={() => handleStart('cookie')}>{t('start_cookie')}</button>
            <button className="btn-primary" onClick={() => handleStart('refund')}>{t('start_refund')}</button>
            <button className="btn-primary" onClick={() => handleStart('disclaimer')}>{t('start_disclaimer')}</button>
            <button className="btn-primary" onClick={() => handleStart('cookie-banner')}>{t('start_cookie_banner')}</button>
            <button className="btn-primary" onClick={() => handleStart('robots-txt')}>{t('start_robots')}</button>
            <button className="btn-primary" onClick={() => handleStart('accessibility')}>{t('start_accessibility')}</button>
            <button className="btn-primary" onClick={() => handleStart('nda')}>{t('start_nda')}</button>
            <button className="btn-primary" onClick={() => handleStart('eula')}>{t('start_eula')}</button>
            <button className="btn-primary" onClick={() => handleStart('dpa')}>{t('start_dpa')}</button>
            <button className="btn-primary" onClick={() => handleStart('aup')}>{t('start_aup')}</button>
            <button className="btn-primary" onClick={() => handleStart('dmca')}>{t('start_dmca')}</button>
            <button className="btn-primary" onClick={() => handleStart('employee-privacy')}>{t('start_employee_privacy')}</button>
            <button className="btn-primary" onClick={() => handleStart('affiliate-disclaimer')}>{t('start_affiliate_disclaimer')}</button>
            <button className="btn-primary" onClick={() => handleStart('social-media')}>{t('start_social_media')}</button>
            <button className="btn-primary" onClick={() => handleStart('newsletter')}>{t('start_newsletter')}</button>
            <button className="btn-primary" onClick={() => handleStart('tos')}>{t('start_tos')}</button>
            <button className="btn-primary" onClick={() => handleStart('hipaa')}>{t('start_hipaa')}</button>
            <button className="btn-primary" onClick={() => handleStart('sla')}>{t('start_sla')}</button>
            <button className="btn-primary" onClick={() => handleStart('data-breach')}>{t('start_data_breach')}</button>
            <button className="btn-primary" onClick={() => handleStart('ai-ethics')}>{t('start_ai_ethics')}</button>
          </div>

          <div className="delay-200 animate-enter" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link
              to="/compliance-checker"
              className="btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                textDecoration: 'none', filter: 'hue-rotate(45deg)',
                padding: '0.85rem 2rem', fontSize: '1.05rem',
              }}
            >
              🔍 Check Your Existing Policy
            </Link>
            <Link
              to="/history"
              className="btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                textDecoration: 'none', filter: 'hue-rotate(200deg)',
                padding: '0.85rem 2rem', fontSize: '1.05rem',
                marginLeft: '1rem',
              }}
            >
              📋 {t('view_history')}
            </Link>
          </div>

          <div className="glass-panel delay-300 animate-enter" style={{ marginTop: '4rem', maxWidth: '600px', margin: '0 auto' }}>
             <h3 style={{ marginBottom: '1rem', color: 'var(--accent-tertiary)' }}>{t('header_guides')}</h3>
             <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{t('text_guides')}</p>
             <Link to="/blog" style={{ color: 'var(--accent-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                {t('link_guides')} <span>→</span>
             </Link>
          </div>
        </div>
      )}

      {step === 'form' && (
        <Suspense fallback={<FormLoader />}>
        <div className="animate-enter" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <button 
                onClick={() => setStep('landing')}
                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                ← {t('back_home')}
            </button>
            <button 
                onClick={handleClearData}
                style={{ background: 'none', border: 'none', color: 'var(--accent-secondary)', cursor: 'pointer', fontSize: '0.8rem', opacity: 0.8 }}
            >
                {t('clear_data')}
            </button>
          </div>
          <GeneratorForm 
            onGenerate={handleGenerate} 
            selectedType={selectedType} 
            initialData={formData}
            onDataChange={handleDataChange}
          />
        </div>
        </Suspense>
      )}

      {step === 'preview' && (
        <Suspense fallback={<FormLoader />}>
        <div className="animate-enter" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <PolicyPreview content={generatedContent} onReset={handleReset} />
        </div>
        </Suspense>
      )}
    </>
  )
}
