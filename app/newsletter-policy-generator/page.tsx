import type { Metadata } from 'next'
import { NewsletterPolicyGenerator } from '@/components/NewsletterPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Newsletter Policy Generator',
  description: 'Generate a newsletter privacy policy.',
}

export default function Page() {
  return <NewsletterPolicyGenerator />
}