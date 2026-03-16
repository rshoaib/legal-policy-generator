import type { Metadata } from 'next'
import { ContactPage } from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Legal Policy Generator',
}

export default function Page() {
  return <ContactPage />
}