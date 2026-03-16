import type { Metadata } from 'next'
import { PrivacyPage } from '@/components/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy',
}

export default function Page() {
  return <PrivacyPage />
}