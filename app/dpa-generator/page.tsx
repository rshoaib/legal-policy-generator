import type { Metadata } from 'next'
import { DpaGenerator } from '@/components/DpaGenerator'

export const metadata: Metadata = {
  title: 'Free DPA Generator (2026)',
  description: 'Generate a data processing agreement for GDPR compliance.',
}

export default function Page() {
  return <DpaGenerator />
}