import { BlogLayout } from '@/components/BlogLayout'
import { BlogPost } from '@/components/BlogPost'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  return (
    <BlogLayout>
      <BlogPost slug={slug} />
    </BlogLayout>
  )
}
