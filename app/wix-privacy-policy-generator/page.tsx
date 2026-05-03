import type { Metadata } from 'next'
import { WixPrivacyPolicyLanding } from '@/components/WixPrivacyPolicyLanding'

const URL = 'https://legalpolicygen.com/wix-privacy-policy-generator'
const TITLE = 'Free Wix Privacy Policy Generator (2026) — GDPR & CCPA Compliant'
const DESC =
  'Generate a free privacy policy for your Wix site in minutes. Covers Wix Stores, Wix Bookings, Wix Forms, common Wix App Market integrations, GDPR, and CCPA. Step-by-step Wix install instructions included.'

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
  name: 'Free Wix Privacy Policy Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate a free, GDPR/CCPA-compliant privacy policy specifically tailored to Wix sites. Covers Wix Stores, Wix Bookings, Wix Forms, and common Wix App Market integrations.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a privacy policy legally required for a Wix site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any Wix site that collects personal data — through forms, bookings, orders, member accounts, or even basic analytics — legally requires a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. Wix itself prompts you to add one when you publish a site.',
      },
    },
    {
      '@type': 'Question',
      name: "Doesn't Wix have a built-in privacy policy generator?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wix offers a basic generator inside the editor, but it produces a generic boilerplate that does not enumerate any third-party Wix Apps you have installed (Wix Forms, Wix Bookings, Wix Stores, payment processors, marketing apps). Each one is a separate data processor that must be named under GDPR Article 13 and CCPA. Our generator lets you list them explicitly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I add the privacy policy on a Wix site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Two paths. Easiest: in the Wix editor, add a new page (Pages → Add Page → Blank), title it 'Privacy Policy', set it as 'Hidden from menu' if you only want it linked from the footer, and paste the generated HTML using the HTML embed element. Then add a footer link pointing to that page. Wix Stores and Wix Bookings can be configured to link your privacy policy at checkout under their respective settings.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to disclose Wix Apps individually?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Wix Forms, Wix Bookings, Wix Stores, Wix Chat, Ascend marketing tools, and any third-party app you installed from the Wix App Market are data processors under GDPR. Each one must be named in your privacy policy along with the categories of data it collects and the purpose of processing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about cookies on Wix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Wix sets several cookies by default for analytics and site functionality. Wix has a built-in cookie banner under Settings → Cookies & Privacy, but configure it carefully — the default options often don't meet GDPR's strict opt-in requirements. Pair this site's free Cookie Banner Generator with Wix's settings if you sell to EU/UK customers.",
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wix Privacy Policy Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <WixPrivacyPolicyLanding />
    </>
  )
}
