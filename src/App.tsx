import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Toaster } from 'sonner'
import { SEO } from './components/SEO'
import { Layout } from './components/Layout'
import { PrivacyPage } from './components/PrivacyPage'
import { TermsPage } from './components/TermsPage'
import { CookieConsent } from './components/CookieConsent'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ScrollToTop } from './components/ScrollToTop'

/* ── Lazy-loaded route components (code-split) ── */
const GeneratorApp = lazy(() => import('./components/GeneratorApp').then(m => ({ default: m.GeneratorApp })))
const BlogLayout = lazy(() => import('./components/BlogLayout').then(m => ({ default: m.BlogLayout })))
const BlogIndex = lazy(() => import('./components/BlogIndex').then(m => ({ default: m.BlogIndex })))
const BlogPost = lazy(() => import('./components/BlogPost').then(m => ({ default: m.BlogPost })))
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })))
const ComplianceChecker = lazy(() => import('./components/ComplianceChecker').then(m => ({ default: m.ComplianceChecker })))
const LegalPageChecker = lazy(() => import('./components/LegalPageChecker').then(m => ({ default: m.LegalPageChecker })))
const PolicyHistory = lazy(() => import('./components/PolicyHistory').then(m => ({ default: m.PolicyHistory })))
const PolicyBundle = lazy(() => import('./components/PolicyBundle').then(m => ({ default: m.PolicyBundle })))
const PolicyGuide = lazy(() => import('./components/PolicyGuide').then(m => ({ default: m.PolicyGuide })))
const PolicyIndustryPage = lazy(() => import('./components/PolicyIndustryPage').then(m => ({ default: m.PolicyIndustryPage })))
const CookiePolicyGenerator = lazy(() => import('./components/CookiePolicyGenerator').then(m => ({ default: m.CookiePolicyGenerator })))
const PrivacyPolicyGenerator = lazy(() => import('./components/PrivacyPolicyGenerator').then(m => ({ default: m.PrivacyPolicyGenerator })))
const TermsOfServiceGenerator = lazy(() => import('./components/TermsOfServiceGenerator').then(m => ({ default: m.TermsOfServiceGenerator })))
const EulaGenerator = lazy(() => import('./components/EulaGenerator').then(m => ({ default: m.EulaGenerator })))
const NdaGenerator = lazy(() => import('./components/NdaGenerator').then(m => ({ default: m.NdaGenerator })))
import { seoPages } from './data/seoPages'

/* ── Loading fallback ── */
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
    <div style={{ width: 40, height: 40, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
)

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
        <ScrollToTop />
        <Layout>
            <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
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
                <Route path="/legal-page-checker" element={<LegalPageChecker />} />
                <Route path="/history" element={<PolicyHistory />} />
                <Route path="/bundle" element={<PolicyBundle />} />
                <Route path="/policy-guide" element={<PolicyGuide />} />
                <Route path="/cookie-policy-generator" element={<CookiePolicyGenerator />} />
                <Route path="/cookie-policy" element={<Navigate to="/cookie-policy-generator" replace />} />
                <Route path="/privacy-policy-generator" element={<PrivacyPolicyGenerator />} />
                <Route path="/privacy-policy" element={<Navigate to="/privacy-policy-generator" replace />} />
                <Route path="/terms-of-service-generator" element={<TermsOfServiceGenerator />} />
                <Route path="/terms-of-service" element={<Navigate to="/terms-of-service-generator" replace />} />
                <Route path="/eula-generator" element={<EulaGenerator />} />
                <Route path="/nda-generator" element={<NdaGenerator />} />
                {/* PROGRAMMATIC SEO: [Policy] for [Industry] */}
                {seoPages.map(page => (
                    <Route key={page.slug} path={`/${page.slug}`} element={<PolicyIndustryPage page={page} />} />
                ))}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Suspense>
            </ErrorBoundary>
            <Toaster position="top-right" />
            <CookieConsent />
        </Layout>
    </BrowserRouter>
  )
}

export default App
