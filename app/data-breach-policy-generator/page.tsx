import type { Metadata } from 'next'
import { DataBreachPolicyGenerator } from '@/components/DataBreachPolicyGenerator'

const URL = 'https://legalpolicygen.com/data-breach-policy-generator'
const TITLE = 'Free Data Breach Response Policy Generator (Incident Plan)'
const DESC =
  'Create an Incident Response and Data Breach Policy for your business. Comply with GDPR 72-hour reporting laws. Free tool.'

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
    name: 'Free Data Breach Response Policy Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a GDPR and CCPA compliant Data Breach Response Policy. Establish internal protocols for managing, containing, and reporting cyber attacks.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Data Breach Response Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is an internal corporate document that outlines the exact step-by-step procedures an organization must follow when a cyber attack, ransomware event, or accidental data exposure occurs. It defines who is on the Incident Response Team and reporting timelines.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a Data Breach Policy legally required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The GDPR (Article 33) and the CCPA require businesses to have established security protocols. Furthermore, if you handle healthcare data (HIPAA) or credit cards (PCI-DSS), an Incident Response Plan is a strict regulatory requirement.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly must I report a data breach under GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under the European GDPR, you are legally required to notify the relevant supervisory authority within 72 hours of becoming aware of the breach, where feasible. Your policy must reflect this strict timeline.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if we hide a data breach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Covering up a data breach usually results in the maximum possible regulatory fines (e.g., up to 4% of global turnover under GDPR), massive class-action lawsuits, and often criminal charges against executives (as seen in the Uber 2016 breach cover-up).',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Data Breach Policy Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <DataBreachPolicyGenerator />
    </>
  )
}
