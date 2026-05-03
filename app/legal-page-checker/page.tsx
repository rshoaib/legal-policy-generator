import type { Metadata } from 'next'
import { LegalPageChecker } from '@/components/LegalPageChecker'

const URL = 'https://legalpolicygen.com/legal-page-checker'
const TITLE = 'Free Website Legal Page Checker — Scan Your Site for Missing Policies'
const DESC =
  'Enter your website URL and instantly check if you have all essential legal pages: Privacy Policy, Terms, Cookie Policy, Disclaimer, DMCA, and more.'

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
  name: 'Website Legal Page Checker',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free tool to scan any website for essential legal pages like Privacy Policy, Terms of Service, Cookie Policy, and more.',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <LegalPageChecker />
    </>
  )
}
