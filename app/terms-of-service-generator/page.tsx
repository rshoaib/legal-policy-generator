import type { Metadata } from 'next'
import { TermsOfServiceGenerator } from '@/components/TermsOfServiceGenerator'

const URL = 'https://legalpolicygen.com/terms-of-service-generator'
const TITLE = 'Free Terms of Service Generator — Protect Your Business (2026)'
const DESC =
  'Create a customized Terms of Service (ToS) / Terms and Conditions agreement for your website or app. Completely free with no signup.'

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
    name: 'Free Terms of Service Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free Terms of Service (ToS) agreement for your website or app. Protect your business from liability. No signup required.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this Terms of Service generator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our generator is 100% free to use. There are no hidden costs, limits, or signup requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need a Terms of Service agreement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Terms of Service (ToS) agreement is the legal contract between you and your users. It protects your business by limiting your liability, establishing rules of conduct, and protecting your intellectual property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it Terms of Service, Terms of Use, or Terms and Conditions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'These terms are largely interchangeable. "Terms of Service" is commonly used for SaaS and digital services, "Terms of Use" for informational websites, and "Terms and Conditions" for e-commerce. You can use this generator for all three.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TermsOfServiceGenerator />
    </>
  )
}
