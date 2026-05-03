import type { Metadata } from 'next'
import { SlaGenerator } from '@/components/SlaGenerator'

const URL = 'https://legalpolicygen.com/sla-generator'
const TITLE = 'Free SLA Generator — Service Level Agreement for SaaS'
const DESC =
  'Create an SLA for your IT agency or B2B SaaS. Define 99.9% uptime guarantees, support response times, and service credit penalties.'

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
    name: 'Free Service Level Agreement (SLA) Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a Service Level Agreement (SLA) for your B2B SaaS or IT agency. Define uptime guarantees, support response times, and service credits.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Service Level Agreement (SLA)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An SLA is a contract between a service provider and a client that defines the expected level of service. It typically covers uptime guarantees (e.g., 99.9% uptime), support response times, and the penalties (service credits) if those levels are not met.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does my SaaS startup need an SLA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For B2C (consumer) software, no. However, if you sell to B2B enterprise clients, an SLA is almost always required during the procurement process. Enterprise clients need a financial guarantee that your software won\'t crash during critical business hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are "Service Credits"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Service credits are the financial remedy if you fail to meet your SLA. Instead of the client suing you for lost revenue due to an outage, your SLA dictates they receive a percentage of their subscription fee back (e.g., a 10% discount next month).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you calculate 99.9% uptime?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '99.9% uptime allows for approximately 43.8 minutes of downtime per month. If your servers are down for longer than 44 minutes in a 30-day period, you have breached a 99.9% SLA.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'SLA Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SlaGenerator />
    </>
  )
}
