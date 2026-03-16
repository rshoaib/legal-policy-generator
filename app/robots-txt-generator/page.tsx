import type { Metadata } from 'next'
import { RobotsTxtGenerator } from '@/components/RobotsTxtGenerator'

export const metadata: Metadata = {
  title: 'Free Robots.txt Generator (2026)',
  description: 'Generate a robots.txt file for your website.',
}

export default function Page() {
  return <RobotsTxtGenerator />
}