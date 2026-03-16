import type { Metadata } from 'next'
import { AboutPage } from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Legal Policy Generator',
}

export default function Page() {
  return <AboutPage />
}