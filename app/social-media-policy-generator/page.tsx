import type { Metadata } from 'next'
import { SocialMediaPolicyGenerator } from '@/components/SocialMediaPolicyGenerator'

const URL = 'https://legalpolicygen.com/social-media-policy-generator'
const TITLE = 'Free Corporate Social Media Policy Generator for Employees'
const DESC =
  'Create a clear Social Media Policy to protect your company\'s brand reputation from PR disasters. Define rules for employee online conduct.'

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
    name: 'Free Corporate Social Media Policy Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a corporate Social Media Policy for your employees. Protect your brand reputation, prevent PR disasters, and define acceptable online behavior.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a corporate Social Media Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A corporate social media policy is a set of guidelines explaining how employees should conduct themselves online when representing your company or discussing their employment. It outlines what they can—and cannot—post regarding company business.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do companies need a Social Media Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It protects your brand reputation from PR disasters caused by employee posts, prevents the leaking of confidential trade secrets, outlines consequences for harassment or hate speech online, and ensures FTC compliance when employees endorse your products.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I fire an employee for a social media post?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally, yes (in "at-will" states), provided the post violates a clearly established, legally sound Social Media Policy (such as sharing confidential data or engaging in severe harassment). However, the NLRB protects employees\' rights to discuss working conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this policy cover personal accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A comprehensive policy governs how employees reference the company on their personal Twitter, LinkedIn, or TikTok accounts, usually requiring a disclaimer stating that "opinions are my own."',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Social Media Policy Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SocialMediaPolicyGenerator />
    </>
  )
}
