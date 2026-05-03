import type { Metadata } from 'next'
import { ContactPage } from '@/components/ContactPage'

const URL = 'https://legalpolicygen.com/contact'
const TITLE = 'Contact Us — Legal Policy Generator'
const DESC =
  'Get in touch with the Legal Policy Generator team. Ask questions about privacy policies, terms of service, GDPR compliance, cookie policies, or any of our 22+ free legal document generators.'

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
  return <ContactPage />
}
