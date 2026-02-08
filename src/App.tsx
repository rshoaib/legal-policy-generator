import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
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

type Step = 'landing' | 'form' | 'preview'
type PolicyType = 'privacy' | 'terms' | 'cookie' | 'refund' | 'disclaimer' | 'cookie-banner' | 'robots-txt'

function GeneratorApp() {
  const [step, setStep] = useState<Step>('landing')
  const [selectedType, setSelectedType] = useState<PolicyType>('privacy')
  const [generatedContent, setGeneratedContent] = useState('')

  const handleStart = (type: PolicyType) => {
    setSelectedType(type)
    setStep('form')
  }

  const handleGenerate = (data: PolicyData) => {
    let content = ''
    if (selectedType === 'privacy') {
      content = generatePrivacyPolicy(data)
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
    } else {
      content = generateRobotsTxt(data)
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
      {step === 'landing' && (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Free Legal Policy Generator
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Generate professional Privacy Policies, Terms & Conditions, and Cookie Policies for your website or app in minutes.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
              onClick={() => handleStart('privacy')}
            >
              Create Privacy Policy
            </button>
            <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem', filter: 'hue-rotate(45deg)' }}
              onClick={() => handleStart('terms')}
            >
              Create Terms & Conditions
            </button>
            <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem', filter: 'hue-rotate(90deg)' }}
              onClick={() => handleStart('cookie')}
            >
              Create Cookie Policy
            </button>
            <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem', filter: 'hue-rotate(135deg)' }}
              onClick={() => handleStart('refund')}
            >
              Create Refund Policy
            </button>
            <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem', filter: 'hue-rotate(180deg)' }}
              onClick={() => handleStart('disclaimer')}
            >
              Create Disclaimer
            </button>
             <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem', filter: 'hue-rotate(270deg)' }}
              onClick={() => handleStart('cookie-banner')}
            >
              Create Cookie Banner
            </button>
             <button 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem', filter: 'hue-rotate(330deg)' }}
              onClick={() => handleStart('robots-txt')}
            >
              Create Robots.txt
            </button>
          </div>

          <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--glass-bg)', borderRadius: '1rem', maxWidth: '600px', margin: '0 auto' }}>
             <h3 style={{ marginBottom: '1rem' }}>Not sure what you need?</h3>
             <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Check out our guides to understand legal requirements for your project.</p>
             <Link to="/blog" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', background: 'var(--bg-secondary)', border: '1px solid var(--accent-primary)' }}>
                Read Our Guides
             </Link>
          </div>
        </div>
      )}

      {step === 'form' && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <button 
            onClick={() => setStep('landing')}
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', marginBottom: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            ← Back to Home
          </button>
          <GeneratorForm onGenerate={handleGenerate} selectedType={selectedType} />
        </div>
      )}

      {step === 'preview' && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
