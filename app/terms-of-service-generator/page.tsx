import type { Metadata } from 'next'
import { TermsOfServiceGenerator } from '@/components/TermsOfServiceGenerator'

export const metadata: Metadata = {
  title: 'Free Terms of Service Generator (2026)',
  description: 'Generate free terms of service for your website or app.',
}

export default function Page() {
  return <TermsOfServiceGenerator />
}