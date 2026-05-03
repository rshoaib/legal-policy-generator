import type { Metadata } from 'next'
import { PolicyHistory } from '@/components/PolicyHistory'

export const metadata: Metadata = {
  title: 'Policy History | Legal Policy Generator',
  description: 'Browse and manage your previously generated legal policies.',
  alternates: { canonical: 'https://legalpolicygen.com/history' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <PolicyHistory />
}
