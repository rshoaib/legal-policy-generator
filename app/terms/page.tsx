import type { Metadata } from 'next'
import { TermsPage } from '@/components/TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Our terms of service',
}

export default function Page() {
  return <TermsPage />
}