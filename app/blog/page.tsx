import type { Metadata } from 'next'
import { BlogLayout } from '@/components/BlogLayout'
import { BlogIndex } from '@/components/BlogIndex'

export const metadata: Metadata = {
  title: 'Legal Blog — Guides, Tips & Compliance Updates',
  description: 'Expert guides on GDPR compliance, cookie consent requirements, privacy law updates, and legal policy best practices for 2026.',
}

export default function BlogPage() {
  return (
    <BlogLayout>
      <BlogIndex />
    </BlogLayout>
  )
}
