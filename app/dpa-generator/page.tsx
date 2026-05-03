import type { Metadata } from 'next'
import { DpaGenerator } from '@/components/DpaGenerator'

const URL = 'https://legalpolicygen.com/dpa-generator'
const TITLE = 'Free DPA Generator — Data Processing Agreement (GDPR Compliant)'
const DESC =
  'Generate a Data Processing Agreement (DPA) to legally handle client data. Protect your B2B SaaS or agency and guarantee GDPR & CCPA compliance.'

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
    name: 'Free DPA Generator (Data Processing Agreement)',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Create a free, GDPR-compliant Data Processing Agreement (DPA). Protect your B2B SaaS or agency when handling client data.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Data Processing Agreement (DPA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A DPA is a legally binding contract between a Data Controller (your client) and a Data Processor (your business). It dictates exactly how you are allowed to collect, store, and protect their end-users\' personal data under laws like the GDPR.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who needs a DPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any B2B business that processes personal data on behalf of another company. This includes SaaS platforms, marketing agencies, cloud hosting providers, and freelance web developers handling customer databases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a DPA legally required under GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Article 28 of the GDPR explicitly states that Data Controllers must only use Processors that provide sufficient guarantees to implement appropriate technical and organizational measures, governed by a binding written contract (the DPA).',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'DPA Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <DpaGenerator />
    </>
  )
}
