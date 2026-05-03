import type { Metadata } from 'next'
import { BlogLayout } from '@/components/BlogLayout'
import { BlogIndex } from '@/components/BlogIndex'
import { getAllPosts } from '@/lib/blogService'

const URL = 'https://legalpolicygen.com/blog'
const TITLE = 'Blog — Helpful Guides & Resources'
const DESC =
  'Expert guides on privacy policies, terms & conditions, cookie policies, GDPR, CCPA compliance, and more. Free legal resources for website owners.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: 'website', title: TITLE, description: DESC, url: URL, siteName: 'LegalPolicyGen', images: [{ url: '/og-image.png' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/og-image.png'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: URL },
  ],
}

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Helpful Guides & Resources',
  url: URL,
  description:
    'Expert guides on privacy policies, terms & conditions, cookie policies, GDPR, CCPA compliance, and more.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Legal Policy Generator',
    url: 'https://legalpolicygen.com',
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <BlogLayout>
        <BlogIndex posts={posts} />
      </BlogLayout>
    </>
  )
}
