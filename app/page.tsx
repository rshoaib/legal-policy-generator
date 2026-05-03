import { Suspense } from 'react'
import type { Metadata } from 'next'
import { GeneratorApp } from '@/components/GeneratorApp'

const URL = 'https://legalpolicygen.com'

export const metadata: Metadata = {
  alternates: { canonical: URL },
}

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Legal Policy Generator',
  url: URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Generate 22+ free legal documents including Privacy Policies, Terms & Conditions, NDA, EULA, DPA, DMCA Policies, HIPAA Notices, SLA, Data Breach Notifications, AI Ethics Policies, and more. GDPR, CCPA, and WCAG compliant.',
  featureList:
    'Privacy Policy Generator, Terms & Conditions Generator, NDA Generator, EULA Generator, DPA Generator, DMCA Policy Generator, AUP Generator, Cookie Policy Generator, Cookie Consent Banner Generator, Robots.txt Generator, Accessibility Statement Generator, Refund Policy Generator, Disclaimer Generator, Employee Privacy Policy Generator, Affiliate Disclosure Generator, Social Media Policy Generator, Newsletter Policy Generator, HIPAA Notice Generator, SLA Generator, Data Breach Notification Generator, AI Ethics Policy Generator, Compliance Checker',
}

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Generate a Free Legal Policy for Your Website',
  description:
    'Create a professional, GDPR/CCPA-compliant legal document in under 5 minutes using our free generator.',
  totalTime: 'PT5M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Select your document type',
      text: 'Choose from 22 legal document types including Privacy Policy, Terms & Conditions, NDA, EULA, DPA, DMCA Policy, and more.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Fill in your business details',
      text: 'Enter your company name, website URL, contact information, and select the applicable regulations (GDPR, CCPA, etc.).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Generate and download your policy',
      text: 'Click Generate to create your customized legal document. Download it as HTML, copy to clipboard, or export as PDF/Word.',
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this legal policy generator really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, completely free with no hidden charges. You can generate unlimited legal documents without creating an account or providing payment information.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are these generated policies legally binding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our templates are based on real legal frameworks and compliance standards (GDPR, CCPA, LGPD, HIPAA, etc.) and are suitable for most websites and applications. We recommend having an attorney review your final document for your specific jurisdiction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you store my data or the policies I generate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All document generation happens entirely in your browser using client-side JavaScript. Your business details and generated policies never leave your device.',
      },
    },
    {
      '@type': 'Question',
      name: 'What regulations do your templates comply with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our generator supports compliance with GDPR, CCPA/CPRA, LGPD, PIPEDA, Australia Privacy Act, UK GDPR, and the ePrivacy Directive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize the generated policies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. The generated HTML can be copied and edited freely. You can modify any section to better fit your specific needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I update my legal policies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend reviewing your legal policies at least once every 12 months or whenever significant changes occur such as adding new features or changing data collection practices.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* WebSite + Organization JSON-LD already emitted by app/layout.tsx; here
          we only add homepage-specific schema (WebApplication, HowTo, FAQPage). */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Suspense>
        <GeneratorApp />
      </Suspense>
    </>
  )
}
