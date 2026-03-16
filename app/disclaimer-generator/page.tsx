import type { Metadata } from 'next'
import { DisclaimerGenerator } from '@/components/DisclaimerGenerator'

export const metadata: Metadata = {
  title: 'Free Disclaimer Generator (2026)',
  description: 'Generate a legal disclaimer for your website.',
}

export default function Page() {
  return <DisclaimerGenerator />
}