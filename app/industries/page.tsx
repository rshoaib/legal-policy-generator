import type { Metadata } from 'next'
import { IndustriesIndex } from '@/components/IndustriesIndex'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Legal policies by industry',
}

export default function Page() {
  return <IndustriesIndex />
}