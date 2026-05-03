import type { Metadata } from 'next'
import { ComplianceChecker } from '@/components/ComplianceChecker'

const URL = 'https://legalpolicygen.com/compliance-checker'
const TITLE = 'Free Policy Compliance Checker — GDPR & CCPA Analysis'
const DESC =
  'Paste your privacy policy and get an instant compliance analysis. Check for GDPR, CCPA, and general best-practice gaps with actionable suggestions.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'LegalPolicyGen',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og-image.png'],
  },
}

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Policy Compliance Checker',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free GDPR and CCPA compliance analyzer for privacy policies.',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <ComplianceChecker />
    </>
  )
}
