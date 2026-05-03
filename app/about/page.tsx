import type { Metadata } from 'next'
import { AboutPage } from '@/components/AboutPage'

const URL = 'https://legalpolicygen.com/about'
const TITLE = 'About Us — Legal Policy Generator'
const DESC =
  'Learn about Legal Policy Generator — our mission to make legal compliance accessible and free for everyone, from solo developers to enterprise teams.'

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
  return <AboutPage />
}
