import type { Metadata } from 'next'
import { CompanyProfile } from '@/components/CompanyProfile'

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Save your company details to auto-fill forms',
}

export default function Page() {
  return <CompanyProfile />
}