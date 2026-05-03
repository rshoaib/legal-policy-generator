import type { Metadata } from 'next'
import { NewsletterPolicyGenerator } from '@/components/NewsletterPolicyGenerator'

const URL = 'https://legalpolicygen.com/newsletter-policy-generator'
const TITLE = 'Free Newsletter Privacy Policy (CAN-SPAM & GDPR Compliant)'
const DESC =
  'Create a clear, compliant Newsletter Privacy Policy for your email marketing list. Adhere to CAN-SPAM, CASL, and GDPR data collection laws.'

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
    name: 'Free Newsletter Privacy Policy Generator',
    url: URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a GDPR and CAN-SPAM compliant Newsletter Privacy Policy. Ensure your marketing emails are legal and transparent.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a separate policy just for my newsletter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If your main website is very simple but your email marketing is aggressive (using pixel tracking, cross-selling data, or third-party sponsors), a dedicated Newsletter Policy clearly outlines these specific data practices without cluttering your main site Privacy Policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the CAN-SPAM Act?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The CAN-SPAM Act is a U.S. law that sets the rules for commercial email. It requires you to accurately identify yourself, not use deceptive subject lines, include a valid physical postal address, and provide a clear, working opt-out (unsubscribe) mechanism.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are single opt-ins legal under GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under GDPR, consent must be freely given, specific, and unambiguous. While single opt-in is not strictly illegal, double opt-in (where the user confirms their email click) is highly recommended as definitive proof of consent under European law.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I sell my email subscriber list?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under CCPA and GDPR, you cannot legally sell an email list unless you explicitly disclosed this intention at the exact point of data collection and the user actively opted into that specific sale of their data.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Newsletter Policy Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NewsletterPolicyGenerator />
    </>
  )
}
