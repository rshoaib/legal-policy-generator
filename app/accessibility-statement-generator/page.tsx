import type { Metadata } from 'next'
import { AccessibilityStatementGenerator } from '@/components/AccessibilityStatementGenerator'

const URL = 'https://legalpolicygen.com/accessibility-statement-generator'
const TITLE = 'Free Accessibility Statement Generator (ADA & WCAG Compliant)'
const DESC =
  'Create an ADA and WCAG 2.1 compliant accessibility statement for your website. Free generator to protect against lawsuits and show commitment to inclusion.'

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
    name: 'Free Accessibility Statement Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate an ADA and WCAG compliant accessibility statement for your website. Show your commitment to inclusive design.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a website accessibility statement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An accessibility statement is a public document where an organization outlines its commitment to accessibility, the specific standards it aims to meet (like WCAG 2.1 AA), any known limitations on the site, and contact information for users who experience barriers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does an accessibility statement protect me from ADA lawsuits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While a statement alone does not make your website accessible or grant absolute immunity, it serves as crucial legal evidence of your "good faith effort" to comply with ADA laws and gives specialized law firms a reason to look elsewhere.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does WCAG stand for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WCAG stands for Web Content Accessibility Guidelines. It is the international standard for web accessibility published by the W3C. Most modern laws require compliance with WCAG 2.1 Level AA.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Accessibility Statement Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AccessibilityStatementGenerator />
    </>
  )
}
