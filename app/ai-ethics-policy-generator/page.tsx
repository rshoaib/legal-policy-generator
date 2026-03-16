import type { Metadata } from 'next'
import { AiEthicsPolicyGenerator } from '@/components/AiEthicsPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free AI Ethics Policy Generator (2026)',
  description: 'Generate an AI ethics policy for your organization.',
}

export default function Page() {
  return <AiEthicsPolicyGenerator />
}