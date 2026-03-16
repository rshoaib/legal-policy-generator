import type { Metadata } from 'next'
import { RefundPolicyGenerator } from '@/components/RefundPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Refund Policy Generator (2026)',
  description: 'Generate a clear refund policy for your e-commerce store.',
}

export default function Page() {
  return <RefundPolicyGenerator />
}