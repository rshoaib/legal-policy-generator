import type { Metadata } from 'next'
import { IndustriesIndex } from '@/components/IndustriesIndex'

const URL = 'https://legalpolicygen.com/industries'
const TITLE = 'Legal Policies by Industry | Legal Policy Generator'
const DESC =
  'Find free, tailored legal policies (Privacy Policies, Terms of Service, EULAs) specifically crafted for your industry.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { type: 'website', title: TITLE, description: DESC, url: URL, siteName: 'LegalPolicyGen', images: [{ url: '/og-image.png' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/og-image.png'] },
}

export default function Page() {
  return <IndustriesIndex />
}
