import type { Metadata } from 'next'
import { NdaGenerator } from '@/components/NdaGenerator'

export const metadata: Metadata = {
  title: 'Free NDA Generator (2026)',
  description: 'Generate a free non-disclosure agreement.',
}

export default function Page() {
  return <NdaGenerator />
}