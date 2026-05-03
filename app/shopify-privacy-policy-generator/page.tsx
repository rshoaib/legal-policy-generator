import type { Metadata } from 'next'
import { ShopifyPrivacyPolicyLanding } from '@/components/ShopifyPrivacyPolicyLanding'

const URL = 'https://legalpolicygen.com/shopify-privacy-policy-generator'
const TITLE = 'Free Shopify Privacy Policy Generator (2026) — GDPR & CCPA Compliant'
const DESC =
  'Generate a free privacy policy for your Shopify store in minutes. Covers Shopify Pay, Analytics, third-party apps (Klaviyo, Privy, Yotpo), GDPR, and CCPA. Step-by-step Shopify install instructions included.'

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
  name: 'Free Shopify Privacy Policy Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate a free, GDPR/CCPA-compliant privacy policy specifically tailored to Shopify stores. Covers Shopify Pay, Shopify Analytics, and common third-party Shopify apps.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a privacy policy legally required for a Shopify store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every Shopify store collects personal data (name, email, shipping address, payment details) which legally requires a privacy policy under GDPR (EU/UK customers), CCPA (California), and most US state privacy laws. Shopify itself requires you to publish one in your store settings before processing live orders.',
      },
    },
    {
      '@type': 'Question',
      name: "Doesn't Shopify provide a privacy policy template already?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify provides a basic template you can paste into Settings → Policies, but it covers Shopify\'s own data practices generically and does not disclose any third-party apps you have installed (Klaviyo, Privy, Yotpo, Hotjar, etc.). Each app that processes customer data must be disclosed individually under GDPR Article 13 and CCPA, which the Shopify template does not do.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I add the privacy policy in Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In your Shopify admin, go to Settings → Policies → Privacy policy. Paste the generated HTML into the editor and click Save. Shopify automatically links the policy at checkout and in the storefront footer if your theme supports it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to disclose every Shopify app I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — any app that processes personal data on your behalf (email marketing, reviews, abandoned cart recovery, analytics, popups, chat) is a data processor under GDPR and must be named in your privacy policy along with the categories of data it processes and the legal basis for sharing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my Shopify store need a Data Processing Agreement (DPA) too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you process personal data of EU residents, GDPR Article 28 requires a DPA between you (controller) and any third-party app (processor). Shopify provides a DPA you can accept in your account; most major apps do too. For B2B Shopify stores, you may also need to provide a DPA to your own customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about cookies and tracking on Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shopify Analytics and most apps drop cookies. If you sell to EU/UK customers, you need a cookie consent banner that lets users reject non-essential cookies before they are set, plus a Cookie Policy that itemizes each tracking technology. We have free generators for both — see the cookie banner generator and cookie policy generator.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Shopify Privacy Policy Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ShopifyPrivacyPolicyLanding />
    </>
  )
}
