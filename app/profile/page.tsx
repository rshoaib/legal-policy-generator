import type { Metadata } from 'next'
import { CompanyProfile } from '@/components/CompanyProfile'

export const metadata: Metadata = {
  title: 'Company Profile Settings | Legal Policy Generator',
  description:
    'Save your business details securely in your browser to auto-fill all 22+ legal document generators instantly.',
  alternates: { canonical: 'https://legalpolicygen.com/profile' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <CompanyProfile />
}
