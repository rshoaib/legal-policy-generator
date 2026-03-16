import type { Metadata } from 'next'
import { CookiePolicyGenerator } from '@/components/CookiePolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Cookie Policy Generator (2026)',
  description: 'Create a GDPR-compliant cookie policy for your website.',
}

export default function Page() {
  return <CookiePolicyGenerator />
}