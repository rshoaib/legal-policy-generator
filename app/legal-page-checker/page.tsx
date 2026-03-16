import type { Metadata } from 'next'
import { LegalPageChecker } from '@/components/LegalPageChecker'

export const metadata: Metadata = {
  title: 'Legal Page Checker',
  description: 'Check if a website has all essential legal pages',
}

export default function Page() {
  return <LegalPageChecker />
}