import type { Metadata } from 'next'
import { ShippingPolicyGenerator } from '@/components/ShippingPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Shipping Policy Generator (2026)',
  description: 'Generate a shipping policy for your e-commerce store.',
}

export default function Page() {
  return <ShippingPolicyGenerator />
}