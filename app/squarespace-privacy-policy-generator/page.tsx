import type { Metadata } from 'next'
import { SquarespacePrivacyPolicyLanding } from '@/components/SquarespacePrivacyPolicyLanding'

const URL = 'https://legalpolicygen.com/squarespace-privacy-policy-generator'
const TITLE = 'Free Squarespace Privacy Policy Generator (2026) — GDPR & CCPA Compliant'
const DESC =
  'Generate a free privacy policy for your Squarespace site in minutes. Covers Squarespace Commerce, Acuity Scheduling, Email Campaigns, Member Areas, GDPR, and CCPA. Step-by-step Squarespace install instructions included.'

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
  name: 'Free Squarespace Privacy Policy Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate a free, GDPR/CCPA-compliant privacy policy specifically tailored to Squarespace sites. Covers Squarespace Commerce, Acuity Scheduling, Email Campaigns, Member Areas, and common third-party integrations.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is a privacy policy legally required for a Squarespace site?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Squarespace sites collect personal data through forms, commerce orders, scheduling, member accounts, email signups, and analytics — all of which legally require a privacy policy under GDPR (EU/UK), CCPA (California), and most US state privacy laws. Squarespace itself prompts you to add one when you enable Commerce or Member Areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I add the privacy policy on Squarespace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Squarespace, go to Pages → Not Linked → + → Page (Blank), title it "Privacy Policy", and paste the generated HTML into a Code block (or use a Markdown block for plain content). Then add a footer link to /privacy-policy. For Commerce stores, also configure the privacy policy URL under Commerce → Customer Notifications → Footer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Squarespace features need to be disclosed in the privacy policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Squarespace Commerce (Stripe / PayPal / Square payments), Acuity Scheduling (now integrated into Squarespace, captures appointment data), Email Campaigns (captures email subscribers + behavior), Member Areas (captures account profiles), Squarespace Forms (every submission), and Squarespace Analytics (visitor behavior). Plus any third-party integrations like Google Analytics, Meta Pixel, or Mailchimp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Squarespace handle cookie consent for me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Squarespace has a built-in cookie banner under Settings → Cookies & Visitor Data → Cookie Banner. Enable it for EU/UK compliance, but configure carefully — the default settings often allow non-essential cookies before consent, which fails GDPR strict opt-in. Pair with an itemized Cookie Policy that lists every tracking technology you use.',
      },
    },
    {
      '@type': 'Question',
      name: 'My Squarespace site uses Acuity Scheduling — what do I disclose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acuity Scheduling (now part of Squarespace) captures attendee names, emails, appointment details, and any custom intake form data. This is sensitive personal data — your privacy policy must name Acuity, describe what data it captures, the purpose of processing, and the legal basis (typically consent or contract).',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Squarespace Privacy Policy Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SquarespacePrivacyPolicyLanding />
    </>
  )
}
