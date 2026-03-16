import type { Metadata } from 'next'
import { AupGenerator } from '@/components/AupGenerator'

export const metadata: Metadata = {
  title: 'Free AUP Generator (2026)',
  description: 'Generate an acceptable use policy for your platform.',
}

export default function Page() {
  return <AupGenerator />
}