import type { Metadata } from 'next'
import { PrivacyPage } from '@/components/PrivacyPage'

const URL = 'https://legalpolicygen.com/privacy'
const TITLE = 'Privacy Policy'
const DESC =
  'Read our Privacy Policy to understand how Legal Policy Generator collects, uses, and protects your personal information.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'LegalPolicyGen',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <PrivacyPage />
}
