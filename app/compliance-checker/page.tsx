import type { Metadata } from 'next'
import { ComplianceChecker } from '@/components/ComplianceChecker'

export const metadata: Metadata = {
  title: 'Compliance Checker',
  description: 'Check your existing policy for compliance gaps',
}

export default function Page() {
  return <ComplianceChecker />
}