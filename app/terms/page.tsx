import type { Metadata } from 'next'
import { TermsPage } from '@/components/TermsPage'

const URL = 'https://legalpolicygen.com/terms'
const TITLE = 'Terms of Service'
const DESC =
  'Read the Terms of Service for Legal Policy Generator. Understand the rules, disclaimer of legal advice, and limitation of liability.'

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
  return <TermsPage />
}
