import type { Metadata } from 'next'
import { AffiliateDisclaimerGenerator } from '@/components/AffiliateDisclaimerGenerator'

const URL = 'https://legalpolicygen.com/affiliate-disclaimer-generator'
const TITLE = 'Free Affiliate Disclaimer Generator (FTC Compliant) — 2026'
const DESC =
  'Create an FTC-compliant affiliate disclosure for your blog or website. Required for Amazon Associates and other affiliate programs. 100% Free.'

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
  name: 'Free Affiliate Disclaimer Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Generate an FTC-compliant Affiliate Disclaimer for your blog. Protect your Amazon Associates and other affiliate network accounts.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an Affiliate Disclaimer?', acceptedAnswer: { '@type': 'Answer', text: 'An Affiliate Disclaimer is a public statement on your website that discloses to your readers that you may earn a commission if they click on certain links or purchase recommended products. It ensures transparency in your content monetization.' } },
    { '@type': 'Question', name: 'Is an Affiliate Disclaimer legally required by the FTC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. In the United States, the Federal Trade Commission (FTC) strictly mandates that any material connection between an endorser (you) and an advertiser must be clearly and conspicuously disclosed to consumers.' } },
    { '@type': 'Question', name: 'Do I need this for the Amazon Associates program?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Section 5 of the Amazon Associates Operating Agreement explicitly requires you to state: "As an Amazon Associate I earn from qualifying purchases." Failing to do so will result in your Amazon account being banned and your commissions forfeited.' } },
    { '@type': 'Question', name: 'Where should I place my affiliate disclaimer?', acceptedAnswer: { '@type': 'Answer', text: 'The FTC requires the disclosure to be "clear and conspicuous." This means it should be placed *before* the affiliate links appear (e.g., at the top of a blog post), not hidden at the very bottom in the footer.' } },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Affiliate Disclaimer Generator', item: URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AffiliateDisclaimerGenerator />
    </>
  )
}
