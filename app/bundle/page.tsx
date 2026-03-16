import type { Metadata } from 'next'
import { PolicyBundle } from '@/components/PolicyBundle'

export const metadata: Metadata = {
  title: 'Policy Starter Kit',
  description: 'Generate all essential legal pages in one click',
}

export default function Page() {
  return <PolicyBundle />
}