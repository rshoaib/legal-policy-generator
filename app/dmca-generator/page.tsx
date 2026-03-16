import type { Metadata } from 'next'
import { DmcaGenerator } from '@/components/DmcaGenerator'

export const metadata: Metadata = {
  title: 'Free DMCA Policy Generator (2026)',
  description: 'Generate a DMCA takedown policy for your website.',
}

export default function Page() {
  return <DmcaGenerator />
}