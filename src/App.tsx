import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Toaster } from 'sonner'
import { SEO } from './components/SEO'
import { Layout } from './components/Layout'
import { GeneratorForm } from './components/GeneratorForm'
import { PolicyPreview } from './components/PolicyPreview'
import { BlogLayout } from './components/BlogLayout'
import { BlogIndex } from './components/BlogIndex'
import { BlogPost } from './components/BlogPost'
import { PrivacyPage } from './components/PrivacyPage'
import { TermsPage } from './components/TermsPage'
import { AboutPage } from './components/AboutPage'
import { ContactPage } from './components/ContactPage'
import { CookieConsent } from './components/CookieConsent'
import { ComplianceChecker } from './components/ComplianceChecker'
import { PolicyHistory } from './components/PolicyHistory'
import type { PolicyData } from './appTypes'
import { generatePrivacyPolicy } from './utils/templates/privacyPolicy'
import { generateTermsConditions } from './utils/templates/termsConditions'

import { generateCookiePolicy } from './utils/templates/cookiePolicy'
import { generateRefundPolicy } from './utils/templates/refundPolicy'
import { generateDisclaimer } from './utils/templates/disclaimer'
import { generateCookieBannerCode } from './utils/templates/cookieBanner'
import { generateRobotsTxt } from './utils/templates/robotsTxt'

import { generateAccessibilityStatement } from './utils/templates/accessibilityStatement'
import { generateNDA } from './utils/templates/nda'
import { generateEULA } from './utils/templates/eula'
import { generateDPA } from './utils/templates/dpa'
import { generateAUP } from './utils/templates/aup'
import { generateDMCA } from './utils/templates/dmca'
import { generateEmployeePrivacy } from './utils/templates/employeePrivacy'
import { generateAffiliateDisclaimer } from './utils/templates/affiliateDisclaimer'
import { generateSocialMediaPolicy } from './utils/templates/socialMediaPolicy'
import { generateNewsletterPolicy } from './utils/templates/newsletterPolicy'
import { savePolicy } from './utils/useHistoryStorage'

type Step = 'landing' | 'form' | 'preview'
type PolicyType = 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt' | 'accessibility' | 'nda' | 'eula' | 'dpa' | 'aup' | 'dmca' | 'employee-privacy' | 'affiliate-disclaimer' | 'social-media' | 'newsletter'

function GeneratorApp() {
  const [step, setStep] = useState<Step>('landing')
  const [selectedType, setSelectedType] = useState<PolicyType>('privacy')
  const [generatedContent, setGeneratedContent] = useState('')

  /* New: Language Handling */
  const { t, i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState('en')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setCurrentLang(lng)
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
      window.location.reload() // Simple way to reset form state for now
  }

  const handleStart = (type: PolicyType) => {
    setSelectedType(type)
    setStep('form')
  }

  const handleGenerate = (data: PolicyData) => {
    handleDataChange(data) // Ensure final state is saved
    let content = ''
    if (selectedType === 'privacy') {
      content = generatePrivacyPolicy(data, currentLang)
    } else if (selectedType === 'terms') {
      content = generateTermsConditions(data)
    } else if (selectedType === 'cookie') {
      content = generateCookiePolicy(data)
    } else if (selectedType === 'refund') {
      content = generateRefundPolicy(data)
    } else if (selectedType === 'disclaimer') {
      content = generateDisclaimer(data)
    } else if (selectedType === 'cookie-banner') {
      content = generateCookieBannerCode(data)
    } else if (selectedType === 'robots-txt') {
      content = generateRobotsTxt(data)
    } else if (selectedType === 'accessibility') {
      content = generateAccessibilityStatement(data)
    } else if (selectedType === 'nda') {
      content = generateNDA(data, currentLang)
    } else if (selectedType === 'dpa') {
      content = generateDPA(data, currentLang)
    } else if (selectedType === 'aup') {
      content = generateAUP(data, currentLang)
    } else if (selectedType === 'dmca') {
      content = generateDMCA(data, currentLang)
    } else if (selectedType === 'employee-privacy') {
      content = generateEmployeePrivacy(data, currentLang)
    } else if (selectedType === 'affiliate-disclaimer') {
      content = generateAffiliateDisclaimer(data, currentLang)
    } else if (selectedType === 'social-media') {
      content = generateSocialMediaPolicy(data, currentLang)
    } else if (selectedType === 'newsletter') {
      content = generateNewsletterPolicy(data, currentLang)
    } else {
      content = generateEULA(data, currentLang)
    }

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
    description: 'Generate 17+ free legal documents including Privacy Policies, Terms & Conditions, NDA, EULA, DPA, DMCA Policies, and more. GDPR, CCPA, and WCAG compliant.',
    featureList: 'Privacy Policy Generator, Terms & Conditions Generator, NDA Generator, EULA Generator, DPA Generator, DMCA Policy Generator, AUP Generator, Cookie Policy Generator, Cookie Consent Banner Generator, Robots.txt Generator, Accessibility Statement Generator, Refund Policy Generator, Disclaimer Generator, Employee Privacy Policy Generator, Affiliate Disclosure Generator, Social Media Policy Generator, Newsletter Policy Generator, Compliance Checker',
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
      )}

      {step === 'preview' && (
        <div className="animate-enter" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <PolicyPreview content={generatedContent} onReset={handleReset} />
        </div>
      )}
    </>
  )
}

function NotFoundPage() {
  return (
    <div className="animate-enter" style={{ textAlign: 'center', marginTop: '6rem' }}>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." noindex />
      <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>← Back to Home</Link>
    </div>
  )
}

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language || 'en';
  }, [i18n.language]);

  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<GeneratorApp />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index element={<BlogIndex />} />
                    <Route path=":slug" element={<BlogPost />} />
                </Route>
                <Route path="/compliance-checker" element={<ComplianceChecker />} />
                <Route path="/history" element={<PolicyHistory />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster position="top-right" />
            <CookieConsent />
        </Layout>
    </BrowserRouter>
  )
}

export default App
