import type { Metadata } from 'next'
import { EmployeePrivacyGenerator } from '@/components/EmployeePrivacyGenerator'

const URL = 'https://legalpolicygen.com/employee-privacy-policy-generator'
const TITLE = 'Free Employee Privacy Policy Generator (CPRA & GDPR) - 2026'
const DESC =
  'Generate an Employee Privacy Policy for your business. Disclose HR data collection to comply with California CPRA and EU GDPR requirements.'

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
    name: 'Free Employee Privacy Policy Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Create an Employee Privacy Policy to comply with CPRA and GDPR workplace data regulations. Protect employee rights and your HR department.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an Employee Privacy Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An Employee Privacy Policy (or Notice at Collection) is an internal HR document that discloses to your workforce exactly what personal data you collect from them, how it is used, and who it is shared with (e.g., payroll providers).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is an Employee Privacy Policy legally required?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In the European Union (under GDPR) and in California (under CPRA), employers are legally obligated to provide a specific privacy notice to applicants, employees, and independent contractors regarding their workplace data.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data does this policy cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It covers Social Security numbers, bank details for direct deposit, background check results, biometric data (like fingerprint time clocks), health data for insurance, and digital surveillance (like email monitoring or GPS tracking).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I just use my website\'s standard Privacy Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A standard website Privacy Policy is for external consumers using your app or site. Employee data is handled completely differently (payroll, benefits, performance reviews) and requires a distinct, specialized HR policy.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Employee Privacy Policy Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <EmployeePrivacyGenerator />
    </>
  )
}
