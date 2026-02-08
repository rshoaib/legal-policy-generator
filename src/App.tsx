import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Toaster } from 'sonner'
import { Layout } from './components/Layout'
import { GeneratorForm } from './components/GeneratorForm'
import { PolicyPreview } from './components/PolicyPreview'
import { BlogLayout } from './components/BlogLayout'
import { BlogIndex } from './components/BlogIndex'
import { BlogPost } from './components/BlogPost'
import type { PolicyData } from './appTypes'
import { generatePrivacyPolicy } from './utils/templates/privacyPolicy'
import { generateTermsConditions } from './utils/templates/termsConditions'

import { generateCookiePolicy } from './utils/templates/cookiePolicy'
import { generateRefundPolicy } from './utils/templates/refundPolicy'
import { generateDisclaimer } from './utils/templates/disclaimer'
import { generateCookieBannerCode } from './utils/templates/cookieBanner'
import { generateRobotsTxt } from './utils/templates/robotsTxt'
import { generateAccessibilityStatement } from './utils/templates/accessibilityStatement'

type Step = 'landing' | 'form' | 'preview'
type PolicyType = 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt' | 'accessibility'

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
    } else {
      content = generateAccessibilityStatement(data)
    }
    setGeneratedContent(content)
    setStep('preview')
  }

  const handleReset = () => {
    setStep('landing')
    setGeneratedContent('')
  }

  return (
    <>
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

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<GeneratorApp />} />
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index element={<BlogIndex />} />
                    <Route path=":slug" element={<BlogPost />} />
                </Route>
            </Routes>
            <Toaster position="top-right" />
        </Layout>
    </BrowserRouter>
  )
}

export default App
