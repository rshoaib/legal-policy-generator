import type { Metadata } from 'next'
import { PolicyBundle } from '@/components/PolicyBundle'

const URL = 'https://legalpolicygen.com/bundle'
const TITLE = 'Website Legal Starter Kit — Generate All Policies at Once'
const DESC =
  'Generate all essential legal policies for your website in one click. Privacy Policy, Terms & Conditions, Cookie Policy, Disclaimer, and more.'

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
  name: 'Website Legal Starter Kit',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate all essential legal policies at once — Privacy Policy, Terms & Conditions, Cookie Policy, and more.',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <PolicyBundle />
    </>
  )
}
