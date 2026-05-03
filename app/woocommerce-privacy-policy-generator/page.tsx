import type { Metadata } from 'next'
import { WooCommercePrivacyPolicyLanding } from '@/components/WooCommercePrivacyPolicyLanding'

const URL = 'https://legalpolicygen.com/woocommerce-privacy-policy-generator'
const TITLE = 'Free WooCommerce Privacy Policy Generator (2026) — GDPR & CCPA Compliant'
const DESC =
  'Generate a free privacy policy for your WooCommerce store in minutes. Covers WordPress + WooCommerce data flows, Stripe/PayPal Payments, MailChimp for WooCommerce, Klaviyo, Yotpo, GDPR, and CCPA. Step-by-step Woo install instructions included.'

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
  name: 'Free WooCommerce Privacy Policy Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate a free, GDPR/CCPA-compliant privacy policy specifically tailored to WooCommerce stores. Covers WordPress comments, WooCommerce orders, Stripe/PayPal payments, and common WooCommerce extensions.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a privacy policy legally required for a WooCommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WooCommerce stores collect personal data through orders, accounts, comments, and any installed extensions, which legally requires a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. WordPress itself flags missing privacy policies in the admin dashboard for this reason.',
      },
    },
    {
      '@type': 'Question',
      name: "WordPress already generates a privacy policy under Settings → Privacy. Why use this instead?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "WordPress's built-in generator produces a long, generic boilerplate that covers WordPress core but does not enumerate WooCommerce extensions, payment processors, marketing plugins, or analytics services that you actually have installed. Each one of those is a separate data processor that must be named under GDPR Article 13 and CCPA. Our generator lets you list them explicitly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I add the privacy policy in WooCommerce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Two-step setup. First, paste the generated HTML into a WordPress page (Pages → Add New, title it 'Privacy Policy'). Then in WordPress admin go to Settings → Privacy and select that page as your privacy policy page. WooCommerce reads from this setting and automatically links the policy at checkout, on the My Account page, and in registration forms.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to disclose every WooCommerce extension and WordPress plugin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any extension or plugin that processes personal data on your behalf (payment gateways, email marketing, abandoned cart, reviews, popups, analytics, A/B testing, security scanners) is a data processor under GDPR and must be named in your privacy policy along with what data it receives and the legal basis for sharing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the policy need to mention WordPress comments and Gravatar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. WordPress core sends commenter email addresses to Gravatar by default to show profile images. This is a third-party data transfer that must be disclosed under GDPR. You can disable Gravatar in Settings → Discussion if you prefer not to disclose it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about cookies on a WooCommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WooCommerce sets several cookies (cart, session, recently viewed). Combined with whatever your theme and plugins set, most Woo stores drop 10+ cookies. EU/UK customers must be able to reject non-essential cookies before they are set, which means a real consent banner — not just a passive notice. We have free generators for both the cookie banner and a matching cookie policy.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'WooCommerce Privacy Policy Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <WooCommercePrivacyPolicyLanding />
    </>
  )
}
