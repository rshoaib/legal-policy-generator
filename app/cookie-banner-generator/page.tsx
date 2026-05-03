import type { Metadata } from 'next'
import { CookieBannerGenerator } from '@/components/CookieBannerGenerator'

const URL = 'https://legalpolicygen.com/cookie-banner-generator'
const TITLE = 'Free Cookie Consent Banner Generator — GDPR Compliant HTML (2026)'
const DESC =
  'Create a GDPR and ePrivacy compliant cookie consent banner in seconds. Copy-paste the HTML/JS code into WordPress, Shopify, or any site.'

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
    name: 'Free Cookie Consent Banner Generator',
    url: URL,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Generate a free, GDPR-compliant cookie consent banner for your website. Easy HTML integration for WordPress, Shopify, and custom sites.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is a cookie banner required by law?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if you have visitors from the European Union or the UK. The GDPR and ePrivacy Directive require explicit, informed consent before placing non-essential cookies (like Google Analytics or Facebook Pixel) on a user\'s device.',
        },
      },
      {
        '@type': 'Question',
        name: 'What must a compliant cookie banner include?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GDPR-compliant banner must have clear language, an equally prominent "Reject" option alongside the "Accept" option, granular controls for categorical opt-ins, and a link to your full Cookie Policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this banner work on WordPress or Shopify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Our generator creates raw HTML, CSS, and vanilla JavaScript that you can copy and paste into the header or footer of any platform, including WordPress, Shopify, Webflow, or custom React apps.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is implied consent enough?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The EU courts have ruled that "implied consent" (e.g., "By browsing this site, you accept cookies") or pre-checked checkboxes do not meet the standard for explicit consent under GDPR.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Cookie Banner Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CookieBannerGenerator />
    </>
  )
}
