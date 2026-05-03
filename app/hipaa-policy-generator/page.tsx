import type { Metadata } from 'next'
import { HipaaGenerator } from '@/components/HipaaGenerator'

const URL = 'https://legalpolicygen.com/hipaa-policy-generator'
const TITLE = 'Free HIPAA Privacy Policy Generator — Medical Notice of Privacy (2026)'
const DESC =
  'Create a HIPAA-compliant Notice of Privacy Practices (NPP). Legally required for doctors, telehealth apps, and medical SaaS handling PHI.'

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
    name: 'Free HIPAA Privacy Policy Generator',
    url: URL,
    applicationCategory: 'MedicalApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a HIPAA-compliant Privacy Policy for your medical practice, telehealth app, or pharmacy. Disclose how PHI is secured and handled.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a HIPAA Notice of Privacy Practices (NPP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is a specific legal document required by the US Department of Health and Human Services. It informs patients of their rights regarding their Protected Health Information (PHI) and outlines how your organization may use or disclose that data.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who must comply with HIPAA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'HIPAA applies to "Covered Entities," which include healthcare providers (doctors, dentists, psychologists), health plans (insurance companies), healthcare clearinghouses, and their "Business Associates" (like SaaS vendors hosting medical data).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I just use a standard website Privacy Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. A standard website Privacy Policy deals with consumer data like IP addresses and marketing cookies. It does not meet the strict federal regulatory requirements set by HIPAA for handling medical and health records (PHI).',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I violate the HIPAA Privacy Rule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fines for HIPAA violations are severe, ranging from $137 to $68,928 per violation, depending on the level of negligence. In extreme cases of willful neglect, federal criminal charges and jail time may be pursued.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'HIPAA Policy Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <HipaaGenerator />
    </>
  )
}
