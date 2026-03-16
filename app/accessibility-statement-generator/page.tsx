import type { Metadata } from 'next'
import { AccessibilityStatementGenerator } from '@/components/AccessibilityStatementGenerator'

export const metadata: Metadata = {
  title: 'Free Accessibility Statement Generator',
  description: 'Generate a WCAG-compliant accessibility statement.',
}

export default function Page() {
  return <AccessibilityStatementGenerator />
}