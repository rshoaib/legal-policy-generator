import type { Metadata } from 'next'
import { CookieBannerGenerator } from '@/components/CookieBannerGenerator'

export const metadata: Metadata = {
  title: 'Free Cookie Banner Generator (2026)',
  description: 'Generate a GDPR-compliant cookie consent banner.',
}

export default function Page() {
  return <CookieBannerGenerator />
}