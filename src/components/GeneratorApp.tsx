import { useState, useEffect, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'
import { SEO } from './SEO'
import { type PolicyData, type PolicyType, POLICY_FILE_LABELS } from '../appTypes'
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

export function GeneratorApp() {
  const [step, setStep] = useState<Step>('landing')
  const [selectedType, setSelectedType] = useState<PolicyType>('privacy')
  const [generatedContent, setGeneratedContent] = useState('')
  const [livePreviewContent, setLivePreviewContent] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  /* Detect redirect from SEO landing pages */
  useEffect(() => {
    const urlStep = searchParams.get('step') as Step
    const urlType = searchParams.get('type') as PolicyType
    
    if (urlStep === 'form' && urlType) {
      setStep('form')
      setSelectedType(urlType)
      
      // Clear URL params without reloading so it looks clean
      setSearchParams({})
    }
  }, [searchParams, setSearchParams])

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

  /* New: Clear saved data — proper React reset, no page reload */
  const handleClearData = () => {
      localStorage.removeItem('policy_generator_data')
      setFormData({})
      setStep('landing')
      setGeneratedContent('')
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
    'shipping': () => import('../utils/templates/shippingPolicy').then(m => m.generateShippingPolicy),
  }

  // Live preview effect
  
  useEffect(() => {
    if (step === 'form') {
      const timer = setTimeout(() => {
        templateImports[selectedType]().then(generator => {
          setLivePreviewContent(generator(formData as PolicyData, currentLang))
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [formData, selectedType, currentLang, step])

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

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Generate a Free Legal Policy for Your Website',
    description: 'Create a professional, GDPR/CCPA-compliant legal document in under 5 minutes using our free generator.',
    totalTime: 'PT5M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Select your document type',
        text: 'Choose from 22 legal document types including Privacy Policy, Terms & Conditions, NDA, EULA, DPA, DMCA Policy, and more.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Fill in your business details',
        text: 'Enter your company name, website URL, contact information, and select the applicable regulations (GDPR, CCPA, etc.).',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Generate and download your policy',
        text: 'Click Generate to create your customized legal document. Download it as HTML, copy to clipboard, or export as PDF/Word.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this legal policy generator really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, completely free with no hidden charges. You can generate unlimited legal documents without creating an account or providing payment information.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these generated policies legally binding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our templates are based on real legal frameworks and compliance standards (GDPR, CCPA, LGPD, HIPAA, etc.) and are suitable for most websites and applications. We recommend having an attorney review your final document for your specific jurisdiction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you store my data or the policies I generate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All document generation happens entirely in your browser using client-side JavaScript. Your business details and generated policies never leave your device.',
        },
      },
      {
        '@type': 'Question',
        name: 'What regulations do your templates comply with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our generator supports compliance with GDPR, CCPA/CPRA, LGPD, PIPEDA, Australia Privacy Act, UK GDPR, and the ePrivacy Directive.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I customize the generated policies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. The generated HTML can be copied and edited freely. You can modify any section to better fit your specific needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I update my legal policies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend reviewing your legal policies at least once every 12 months or whenever significant changes occur such as adding new features or changing data collection practices.',
        },
      },
    ],
  };

  return (
    <>
      <SEO
        canonical="/"
        jsonLd={[websiteJsonLd, orgJsonLd, appJsonLd, howToJsonLd, faqJsonLd]}
      />
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 100 }}>
         <select 
            value={currentLang} 
            onChange={(e) => changeLanguage(e.target.value)}
            aria-label="Select language"
            style={{ 
                background: 'rgba(0,0,0,0.5)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)', 
                padding: '0.75rem 1rem', 
                borderRadius: '0.5rem',
                cursor: 'pointer',
                minHeight: '48px',
                minWidth: '48px',
                fontSize: '0.9rem'
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
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/privacy-policy-generator">{t('start_privacy')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/terms-of-service-generator">{t('start_terms')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/cookie-policy-generator">{t('start_cookie')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/refund-policy-generator">{t('start_refund')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/disclaimer-generator">{t('start_disclaimer')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/cookie-banner-generator">{t('start_cookie_banner')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/robots-txt-generator">{t('start_robots')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/accessibility-statement-generator">{t('start_accessibility')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/nda-generator">{t('start_nda')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/eula-generator">{t('start_eula')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/dpa-generator">{t('start_dpa')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/aup-generator">{t('start_aup')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/dmca-generator">{t('start_dmca')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/employee-privacy-policy-generator">{t('start_employee_privacy')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/affiliate-disclaimer-generator">{t('start_affiliate_disclaimer')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/social-media-policy-generator">{t('start_social_media')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/newsletter-policy-generator">{t('start_newsletter')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/tos-generator">{t('start_tos')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/hipaa-policy-generator">{t('start_hipaa')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/sla-generator">{t('start_sla')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/data-breach-policy-generator">{t('start_data_breach')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/ai-ethics-policy-generator">{t('start_ai_ethics')}</Link>
            <Link className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} to="/shipping-policy-generator">{t('start_shipping')}</Link>
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
             <h2 style={{ marginBottom: '1rem', color: 'var(--accent-tertiary)', fontSize: '1.25rem' }}>{t('header_guides')}</h2>
             <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{t('text_guides')}</p>
             <Link to="/blog" style={{ color: 'var(--accent-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                {t('link_guides')} <span>→</span>
             </Link>
          </div>

          {/* ── How It Works ── */}
          <section style={{ marginTop: '5rem', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 className="text-gradient" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '1rem' }}>How It Works</h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.8' }}>
              Creating professional legal documents has never been easier. Our generator walks you through three simple steps to produce policies that comply with GDPR, CCPA, LGPD, and other global data privacy regulations.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>1. Choose Your Document</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Select from 22+ legal document types — including Privacy Policies, Terms of Service, NDAs, EULAs, Data Processing Agreements, DMCA Policies, HIPAA Notices, and more. Each template is crafted by legal compliance experts.
                </p>
              </div>
              <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✍️</div>
                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '0.75rem' }}>2. Fill In Your Details</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Answer guided questions about your business — your company name, website URL, the types of data you collect, third-party services you use, and applicable regulations. Our smart form adapts based on your selections.
                </p>
              </div>
              <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ color: 'var(--accent-tertiary)', marginBottom: '0.75rem' }}>3. Generate &amp; Download</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Instantly generate your customized legal document. Copy the HTML, download as a PDF, or export in other formats. All policies include proper legal formatting and clauses tailored to your jurisdiction.
                </p>
              </div>
            </div>
          </section>

          {/* ── Why Legal Pages Matter ── */}
          <section style={{ marginTop: '5rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Every Website Needs Legal Pages</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.05rem' }}>
                <p style={{ marginBottom: '1.25rem' }}>
                  In today's digital landscape, <strong style={{ color: 'var(--text-primary)' }}>legal compliance isn't optional — it's essential</strong>. Regulations like the EU's General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), Brazil's Lei Geral de Proteção de Dados (LGPD), and others require websites to clearly disclose how they collect, use, and protect user data. Failure to comply can result in fines reaching millions of dollars.
                </p>
                <p style={{ marginBottom: '1.25rem' }}>
                  A well-crafted <strong style={{ color: 'var(--text-primary)' }}>Privacy Policy</strong> tells visitors exactly what personal information you collect and why. <strong style={{ color: 'var(--text-primary)' }}>Terms of Service</strong> protect your intellectual property and limit liability. A <strong style={{ color: 'var(--text-primary)' }}>Cookie Policy</strong> with an appropriate consent banner ensures compliance with the ePrivacy Directive. And documents like <strong style={{ color: 'var(--text-primary)' }}>NDAs, EULAs, and DPAs</strong> safeguard your business relationships and proprietary information.
                </p>
                <p style={{ marginBottom: '1.25rem' }}>
                  Beyond legal requirements, having professional legal pages <strong style={{ color: 'var(--text-primary)' }}>builds trust with your audience</strong>. Users, advertisers, and partners are far more likely to engage with websites that demonstrate transparency and accountability. Platforms like Google AdSense, Stripe, and app stores explicitly require proper legal documentation before approving your account.
                </p>
                <p>
                  Our free Legal Policy Generator creates <strong style={{ color: 'var(--text-primary)' }}>attorney-reviewed templates</strong> customized to your business in minutes — no legal fees, no complexity, and no signup required. Every document is generated in real time, entirely in your browser, ensuring your data never leaves your device.
                </p>
              </div>
            </div>
          </section>

          {/* ── Trust Stats ── */}
          <section style={{ marginTop: '5rem', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>22+</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Legal Document Types</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>6</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Languages Supported</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-tertiary)', marginBottom: '0.5rem' }}>100%</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Free &amp; No Signup</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>🔒</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Client-Side Processing</p>
              </div>
            </div>
          </section>

          {/* ── FAQ Section ── */}
          <section style={{ marginTop: '5rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '4rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2.5rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Is this legal policy generator really free?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Yes, completely free with no hidden charges. You can generate unlimited legal documents without creating an account or providing payment information. We believe every website — whether a small blog or an enterprise platform — deserves access to proper legal documentation.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Are these generated policies legally binding?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Our templates are based on real legal frameworks and compliance standards (GDPR, CCPA, LGPD, HIPAA, etc.) and are suitable for most websites and applications. However, we always recommend having an attorney review your final document for your specific jurisdiction and business model, especially for high-risk industries like healthcare or finance.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Do you store my data or the policies I generate?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  No. All document generation happens entirely in your browser using client-side JavaScript. Your business details and generated policies never leave your device. We don't collect, transmit, or store any of the information you enter. Your data privacy is our top priority.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>What regulations do your templates comply with?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Our generator supports compliance with major international regulations including the EU General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA / CPRA), Brazil's LGPD, Canada's PIPEDA, Australia's Privacy Act, the UK GDPR, and the ePrivacy Directive. Each template automatically includes the relevant clauses when you select the applicable regulations.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Can I customize the generated policies?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  Absolutely. The generated HTML can be copied and edited freely. You can modify any section to better fit your specific needs, add additional clauses, change formatting, or integrate the document into your website's design. The generated content is yours to use and modify without restriction.
                </p>
              </div>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>How often should I update my legal policies?</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  We recommend reviewing your legal policies at least once every 12 months or whenever significant changes occur — such as adding new features, changing data collection practices, integrating third-party services, or when new regulations come into effect. Keeping your policies up to date demonstrates good faith compliance and protects your business from liability.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {step === 'form' && (
        <Suspense fallback={<FormLoader />}>
        <div className="animate-enter" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div>
              <GeneratorForm 
                onGenerate={handleGenerate} 
                selectedType={selectedType} 
                initialData={formData}
                onDataChange={handleDataChange}
              />
            </div>
            
            <div className="glass-panel animate-enter" style={{ padding: '2rem', height: 'fit-content', position: 'sticky', top: '2rem' }}>
               <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <div style={{ width: 8, height: 8, background: 'var(--accent-secondary)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                 Live Preview
               </h3>
               <div style={{
                  width: '100%',
                  height: '600px',
                  overflowY: 'auto',
                  background: '#ffffff',
                  color: '#1a1a1a',
                  padding: '2rem',
                  borderRadius: '0.75rem',
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  lineHeight: '1.7',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)'
                }}
                dangerouslySetInnerHTML={{ __html: livePreviewContent || '<p style="color: #666">Start typing to see your policy preview...</p>' }}
               />
               <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                 Final document will be fully formatted.
               </p>
            </div>
          </div>
        </div>
        </Suspense>
      )}

      {step === 'preview' && (
        <Suspense fallback={<FormLoader />}>
        <div className="animate-enter" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <PolicyPreview
            content={generatedContent}
            onReset={handleReset}
            fileLabel={POLICY_FILE_LABELS[selectedType]}
            companyName={formData.companyName as string || formData.websiteName as string || ''}
          />
        </div>
        </Suspense>
      )}
    </>
  )
}
