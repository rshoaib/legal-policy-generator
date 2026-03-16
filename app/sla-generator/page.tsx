import type { Metadata } from 'next'
import { SlaGenerator } from '@/components/SlaGenerator'

export const metadata: Metadata = {
  title: 'Free SLA Generator (2026)',
  description: 'Generate a service level agreement.',
}

export default function Page() {
  return <SlaGenerator />
}