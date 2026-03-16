import type { Metadata } from 'next'
import { PolicyGuide } from '@/components/PolicyGuide'

export const metadata: Metadata = {
  title: 'Policy Guide',
  description: 'Complete guide to legal policies for your website',
}

export default function Page() {
  return <PolicyGuide />
}