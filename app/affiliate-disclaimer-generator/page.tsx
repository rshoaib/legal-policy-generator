import type { Metadata } from 'next'
import { AffiliateDisclaimerGenerator } from '@/components/AffiliateDisclaimerGenerator'

export const metadata: Metadata = {
  title: 'Free Affiliate Disclaimer Generator',
  description: 'Generate an affiliate disclosure for your website.',
}

export default function Page() {
  return <AffiliateDisclaimerGenerator />
}