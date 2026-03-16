import type { Metadata } from 'next'
import { HipaaGenerator } from '@/components/HipaaGenerator'

export const metadata: Metadata = {
  title: 'Free HIPAA Notice Generator (2026)',
  description: 'Generate a HIPAA-compliant privacy notice.',
}

export default function Page() {
  return <HipaaGenerator />
}