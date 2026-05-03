import type { Metadata } from 'next'
import { RobotsTxtGenerator } from '@/components/RobotsTxtGenerator'

const URL = 'https://legalpolicygen.com/robots-txt-generator'
const TITLE = 'Free Robots.txt Generator — Optimize SEO Crawl Budget (2026)'
const DESC =
  'Generate a standard robots.txt file for your website in 30 seconds. Instruct Googlebot exactly what to index and where your sitemap is located.'

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
    name: 'Free Robots.txt Generator',
    url: URL,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Create a proper robots.txt file to instruct Googlebot and search engines on how to crawl your site. Optimize your crawl budget instantly.',
  }

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a robots.txt file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A robots.txt file is a plain text file placed in the root directory of your website. It uses the Robots Exclusion Protocol to communicate with web crawlers (like Googlebot), telling them which parts of your site should or shouldn\'t be scanned and indexed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need a robots.txt file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It allows you to optimize your "crawl budget." By blocking automated bots from wasting time crawling admin panels, duplicate URLs, or private directories, you ensure that search engines focus on ranking your valuable content.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where should I place the robots.txt file?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It must be placed in the highest-level root directory of your website domain. For example, it must be accessible at exactly https://www.yourdomain.com/robots.txt to function properly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a robots.txt file hide my site from hackers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Robots.txt is a public directive, not a security measure. Malicious bots will ignore the rules. Never use robots.txt to hide sensitive data; use server authentication instead.',
        },
      },
    ],
  }

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Robots.txt Generator', item: URL },
    ],
  }

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <RobotsTxtGenerator />
    </>
  )
}
