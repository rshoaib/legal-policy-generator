import type { Metadata } from 'next'
import { EulaGenerator } from '@/components/EulaGenerator'

const URL = 'https://legalpolicygen.com/eula-generator'
const TITLE = 'Free EULA Generator — End-User License Agreement (2026)'
const DESC =
  'Create a customized End-User License Agreement (EULA) for your software, desktop application, or mobile app.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: 'website', title: TITLE, description: DESC, url: URL, siteName: 'LegalPolicyGen', images: [{ url: '/og-image.png' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/og-image.png'] },
}

const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free EULA Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate a free End-User License Agreement (EULA) for your software or mobile app in minutes. No signup required.',
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'EULA Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <EulaGenerator />
    </>
  )
}
