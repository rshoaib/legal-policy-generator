import type { Metadata } from 'next'
import { EulaGenerator } from '@/components/EulaGenerator'

export const metadata: Metadata = {
  title: 'Free EULA Generator (2026)',
  description: 'Generate a free end-user license agreement for your software.',
}

export default function Page() {
  return <EulaGenerator />
}