import type { Metadata } from 'next'
import { AiEthicsPolicyGenerator } from '@/components/AiEthicsPolicyGenerator'

const URL = 'https://legalpolicygen.com/ai-ethics-policy-generator'
const TITLE = 'Free Corporate AI Ethics Policy Generator (Acceptable Use)'
const DESC =
  'Create an internal AI Policy to govern your employees\' use of ChatGPT and Copilot. Protect trade secrets, prevent copyright loss, and stop hallucinations.'

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
    name: 'Free AI Ethics Policy Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate an AI Ethics and Acceptable Use Policy for your company. Establish guidelines for employee use of ChatGPT, Copilot, and Claude.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an AI Ethics Policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI Ethics Policy (or AI Acceptable Use Policy) is a corporate document that outlines exactly how employees are allowed to use Generative AI tools (like ChatGPT, Midjourney, or GitHub Copilot) in their daily work, focusing on data privacy, avoiding bias, and protecting intellectual property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do we need a corporate AI policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If employees paste confidential client data, financial projections, or proprietary source code into public AI tools, that data may be used to train the AI maker\'s core models, effectively leaking your company\'s secrets to the public. A policy forbids this.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we lose copyright if we use AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The US Copyright Office has repeatedly ruled that AI-generated text and images cannot be copyrighted. An AI policy requires employees to heavily modify AI outputs to ensure your final products remain legally protectable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does it address AI hallucinations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A strong policy dictates a "Human-in-the-Loop" workflow, legally requiring employees to verify the accuracy of AI outputs before publishing them or sending them to clients, preventing catastrophic PR crises caused by AI hallucinations.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'AI Ethics Policy Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AiEthicsPolicyGenerator />
    </>
  )
}
