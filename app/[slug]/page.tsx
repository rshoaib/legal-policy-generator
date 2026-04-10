import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { seoPages } from '@/data/seoPages'
import { PolicyIndustryPage } from '@/components/PolicyIndustryPage'

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

  const url = `https://legalpolicygen.com/${slug}`
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'website',
    },
  }
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params
  const page = seoPages.find(p => p.slug === slug)

  if (!page) {
    notFound()
  }

  return <PolicyIndustryPage page={page} />
}
