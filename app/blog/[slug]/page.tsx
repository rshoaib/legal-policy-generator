import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogLayout } from '@/components/BlogLayout'
import { BlogPost } from '@/components/BlogPost'
import { getPostBySlug, getAllPosts } from '@/lib/blogService'

interface PageProps {
  params: Promise<{ slug: string }>
}

const SITE_URL = 'https://legalpolicygen.com'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: 'LegalPolicyGen',
      images: [{ url: `${SITE_URL}/og-image.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  /* Server-rendered JSON-LD (was previously injected by the <SEO> client component
     in BlogPost.tsx, which is unreliable for crawlers). */
  const wordCount = post.content
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    image: `${SITE_URL}/og-image.png`,
    author: {
      '@type': 'Organization',
      name: 'Legal Policy Generator',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Legal Policy Generator',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogLayout>
        <BlogPost post={post} />
      </BlogLayout>
    </>
  )
}
