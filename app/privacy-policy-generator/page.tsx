import type { Metadata } from 'next'
import { PrivacyPolicyGenerator } from '@/components/PrivacyPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Privacy Policy Generator (2026)',
  description: 'Generate a free, GDPR and CCPA-compliant privacy policy for your website.',
}

export default function Page() {
  return <PrivacyPolicyGenerator />
}