import type { Metadata } from 'next'
import { TosGenerator } from '@/components/TosGenerator'

export const metadata: Metadata = {
  title: 'Free Terms of Service Generator (2026)',
  description: 'Generate terms of service for your platform.',
}

export default function Page() {
  return <TosGenerator />
}