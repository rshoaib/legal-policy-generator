import type { Metadata } from 'next'
import { DmcaGenerator } from '@/components/DmcaGenerator'

const URL = 'https://legalpolicygen.com/dmca-generator'
const TITLE = 'Free DMCA Policy Generator — Copyright Safe Harbor (2026)'
const DESC =
  'Create a DMCA Policy to protect your platform from copyright lawsuits. Establish Safe Harbor for user-generated content. Free, no registration.'

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
    name: 'Free DMCA Policy Generator',
    url: URL,
    applicationCategory: 'LegalApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate a professional DMCA Policy for your website. Establish Safe Harbor and protect your business from user-generated copyright infringement.',
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'DMCA Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <DmcaGenerator />
    </>
  )
}
