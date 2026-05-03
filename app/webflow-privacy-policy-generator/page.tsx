import type { Metadata } from 'next'
import { WebflowPrivacyPolicyLanding } from '@/components/WebflowPrivacyPolicyLanding'

const URL = 'https://legalpolicygen.com/webflow-privacy-policy-generator'
const TITLE = 'Free Webflow Privacy Policy Generator (2026) — GDPR & CCPA Compliant'
const DESC =
  'Generate a free privacy policy for your Webflow site in minutes. Covers Webflow Forms, Webflow Ecommerce, Memberstack, Outseta, common integrations, GDPR, and CCPA. Step-by-step Webflow install instructions included.'

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
  name: 'Free Webflow Privacy Policy Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate a free, GDPR/CCPA-compliant privacy policy specifically tailored to Webflow sites. Covers Webflow Forms, Webflow Ecommerce, Memberships, and common third-party integrations.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a privacy policy legally required for a Webflow site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Even a simple Webflow marketing site collects personal data through forms, analytics, and integrations, which legally requires a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. If you also run Webflow Ecommerce or Memberships, the obligation is even more explicit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I add the privacy policy on Webflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the Webflow Designer, go to Pages → New Page → Static, title it "Privacy Policy", and paste the generated HTML into a Rich Text element or a custom Embed component. Then add a footer link pointing to /privacy-policy. For Webflow Ecommerce, link the policy from the cart and checkout pages.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Webflow integrations need to be disclosed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any service that processes visitor data on your behalf must be named in the privacy policy. Common Webflow integrations: Webflow Forms (data sent to your email or Zapier), Webflow Ecommerce (Stripe, PayPal), Memberstack or Outseta for memberships, Mailchimp for email capture, Hotjar / Microsoft Clarity for session recording, Google Analytics or GA4, and Meta Pixel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Webflow set cookies by default?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Webflow itself sets minimal cookies, but most Webflow sites add cookies via Google Analytics, Hotjar, Meta Pixel, or other custom code embeds. If your site serves EU/UK visitors, you need a cookie consent banner that lets users reject non-essential cookies before they are set.',
      },
    },
    {
      '@type': 'Question',
      name: 'My Webflow site uses Memberstack / Outseta — what do I disclose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Memberstack and Outseta act as third-party data processors handling member accounts, authentication, and (in Outseta\'s case) billing. Each must be named in your privacy policy along with the categories of data they receive (name, email, payment info, account activity) and a link to their own privacy policy.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Webflow Privacy Policy Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <WebflowPrivacyPolicyLanding />
    </>
  )
}
