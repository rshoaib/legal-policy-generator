import type { Metadata } from 'next'
import { DataBreachPolicyGenerator } from '@/components/DataBreachPolicyGenerator'

export const metadata: Metadata = {
  title: 'Free Data Breach Policy Generator',
  description: 'Generate a data breach notification policy.',
}

export default function Page() {
  return <DataBreachPolicyGenerator />
}