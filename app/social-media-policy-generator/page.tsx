import type { Metadata } from 'next'
import { SocialMediaPolicyGenerator } from '@/components/SocialMediaPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Social Media Policy Generator',
  description: 'Generate a social media policy for your organization.',
}

export default function Page() {
  return <SocialMediaPolicyGenerator />
}