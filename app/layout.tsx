import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Outfit } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { CookieConsent } from '@/components/CookieConsent'
import { I18nProvider } from '@/components/I18nProvider'
import { Toaster } from 'sonner'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://legalpolicygen.com'),
  title: {
    default: 'Free Legal Policy Generator | Privacy, Terms, NDA, EULA, DPA, DMCA & More — Legal Policy Generator',
    template: '%s | Legal Policy Generator',
  },
  description: 'Generate free Privacy Policies, Terms, NDA, EULA, DMCA, Cookie Banners & 22 more legal documents. GDPR/CCPA compliant — no signup required.',
  keywords: 'privacy policy generator, terms generator, refund policy, disclaimer generator, cookie consent banner, robots.txt generator, accessibility statement generator, NDA generator, EULA generator, DPA generator, DMCA policy, AUP generator, employee privacy policy, affiliate disclosure, social media policy, newsletter policy, compliance checker, wcag, gdpr, ccpa, free legal tools',
  openGraph: {
    type: 'website',
    siteName: 'LegalPolicyGen',
    title: 'Free Legal Policy Generator | Privacy, Terms, NDA & More',
    description: 'Generate free Privacy Policies, Terms, NDA, EULA, DMCA, Cookie Banners & 22 more legal documents. GDPR/CCPA compliant.',
    images: [{ url: '/og-image.png' }],
    url: 'https://legalpolicygen.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Legal Policy Generator | Privacy, Terms, NDA & More',
    description: 'Generate free Privacy Policies, Terms, NDA, EULA, DMCA, Cookie Banners & 22 more legal documents. GDPR/CCPA compliant.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'eQuLiSbiykNngy21ZpYGas-qRRHmzv3-E3u1Ax1OrCY',
  },
  other: {
    'og:site_name': 'LegalPolicyGen',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LegalPolicyGen',
              url: 'https://legalpolicygen.com',
              description: 'Free legal policy generator for Privacy Policies, Terms of Service, NDA, EULA, DMCA, Cookie Banners and 22 more legal documents.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LegalPolicyGen',
              url: 'https://legalpolicygen.com',
              logo: 'https://legalpolicygen.com/favicon.svg',
              description: 'Free legal document generator — GDPR/CCPA compliant privacy policies, terms, NDA, EULA, and more.',
            }),
          }}
        />
      </head>
      <body>
        {/* GA4 — deferred */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H9TQLEH22X"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H9TQLEH22X');
          `}
        </Script>

        {/* AdSense — deferred */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3166995085202346"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        <I18nProvider>
          <Layout>
            {children}
          </Layout>
          <Toaster position="top-right" />
          <CookieConsent />
        </I18nProvider>
      </body>
    </html>
  )
}
