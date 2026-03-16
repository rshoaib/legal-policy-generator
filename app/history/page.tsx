import type { Metadata } from 'next'
import { PolicyHistory } from '@/components/PolicyHistory'

export const metadata: Metadata = {
  title: 'Policy History',
  description: 'View your previously generated policies',
}

export default function Page() {
  return <PolicyHistory />
}