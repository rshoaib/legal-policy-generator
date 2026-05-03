import type { Metadata } from 'next'
import { AupGenerator } from '@/components/AupGenerator'

const URL = 'https://legalpolicygen.com/aup-generator'
const TITLE = 'Free Acceptable Use Policy Generator (AUP) — Protect Your App'
const DESC =
  'Create a clear Acceptable Use Policy for your SaaS, community, or app. Ban destructive users and outline prohibited behavior easily. Free tool.'

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

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free Acceptable Use Policy Generator (AUP)',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate a professional Acceptable Use Policy (AUP) for your SaaS, forum, or network. Protect your platform from abuse, spam, and illegal activity.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an Acceptable Use Policy (AUP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Acceptable Use Policy (AUP) is a set of rules applied by the owner of a network, website, or service that restricts the ways in which the network or site may be used. It explicitly defines what behavior is forbidden, such as spamming, hacking, or posting illegal content.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I need an AUP if I already have a Terms of Service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While a Terms of Service (ToS) covers the broad legal relationship (payment terms, liability limits), an AUP specifically isolates and details prohibited user behavior. Having a standalone AUP makes it much easier to enforce rules and ban abusive users without navigating complex ToS clauses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can an AUP help me ban users?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An AUP serves as your legal justification for terminating an account immediately. If a user violates an explicitly forbidden action listed in your AUP, you have the contractual right to revoke their access without notice or refund.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who typically needs an Acceptable Use Policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SaaS platforms (especially those sending emails or hosting data), web hosting companies, internet service providers (ISPs), online communities, and corporate internal networks all require strict AUPs.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'AUP Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AupGenerator />
    </>
  )
}
