import type { Metadata } from 'next'
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
      images: [{ url: `${SITE_URL}/og-image.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  return (
    <BlogLayout>
      <BlogPost slug={slug} />
    </BlogLayout>
  )
}
