import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { seoPages } from '@/data/seoPages'
import { PolicyIndustryPage } from '@/components/PolicyIndustryPage'

const SITE_URL = 'https://legalpolicygen.com'

// Pre-generate all 60 programmatic SEO pages at build time
export function generateStaticParams() {
  return seoPages.map(page => ({ slug: page.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = seoPages.find(p => p.slug === slug)
  if (!page) return {}

  const url = `${SITE_URL}/${slug}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'website',
      siteName: 'LegalPolicyGen',
      images: [{ url: `${SITE_URL}/og-image.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params
  const page = seoPages.find(p => p.slug === slug)

  if (!page) {
    notFound()
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PolicyIndustryPage page={page} />
    </>
  )
}
