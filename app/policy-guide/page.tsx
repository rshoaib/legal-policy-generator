import type { Metadata } from 'next'
import { PolicyGuide } from '@/components/PolicyGuide'

const URL = 'https://legalpolicygen.com/policy-guide'
const TITLE = 'Policy Guide — Which Legal Policies Does Your Website Need?'
const DESC =
  'Interactive guide showing which legal documents your business needs. Compare requirements for e-commerce, SaaS, blogs, mobile apps, agencies, and non-profits.'

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

const guideJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: TITLE,
  url: URL,
  description: 'Interactive guide showing which legal documents your business needs based on your business type.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does my website need a privacy policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If your website collects any personal data — including names, emails, IP addresses, or cookies — you are legally required to have a privacy policy under GDPR, CCPA, and most other data protection laws worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'What legal pages does an e-commerce store need?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At minimum, e-commerce stores need a Privacy Policy, Terms & Conditions, Refund/Return Policy, Cookie Policy, and a Disclaimer. A Data Processing Agreement (DPA) is also required if you share customer data with third-party processors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do SaaS applications need a EULA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A EULA (End User License Agreement) is strongly recommended for any SaaS application. It defines how users may use your software, protects your intellectual property, and limits your liability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a cookie banner required for my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your website uses cookies and serves users in the EU, UK, or other jurisdictions with cookie consent laws, you need a cookie banner that allows users to accept or decline non-essential cookies before they are set.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Terms of Service and Terms & Conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are essentially the same document with different names. Terms of Service (ToS) is more common for SaaS and online platforms, while Terms & Conditions (T&C) is more common for e-commerce and general websites. Both establish the rules users must agree to when using your service.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PolicyGuide />
    </>
  )
}
