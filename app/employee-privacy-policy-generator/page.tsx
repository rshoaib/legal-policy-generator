import type { Metadata } from 'next'
import { EmployeePrivacyGenerator } from '@/components/EmployeePrivacyGenerator'

export const metadata: Metadata = {
  title: 'Free Employee Privacy Policy Generator',
  description: 'Generate an employee privacy policy for your business.',
}

export default function Page() {
  return <EmployeePrivacyGenerator />
}