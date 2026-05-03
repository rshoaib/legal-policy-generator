'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const HIPAA_FAQS: FAQItem[] = [
  { question: 'What is a HIPAA Notice of Privacy Practices (NPP)?', answer: 'A specific legal document required by HHS that informs patients of their rights regarding Protected Health Information (PHI) and how your organization may use or disclose that data.' },
  { question: 'Who must comply with HIPAA?', answer: 'HIPAA applies to Covered Entities (doctors, dentists, health plans, clearinghouses) and their Business Associates — such as SaaS vendors who host or process medical data.' },
  { question: 'Can I use a standard website Privacy Policy?', answer: 'No. A standard Privacy Policy covers marketing cookies and analytics. It does not meet the strict federal regulatory requirements under HIPAA for handling medical records (PHI).' },
  { question: 'What happens if I violate HIPAA?', answer: 'Fines range from $137 to $68,928 per violation depending on negligence level. Willful neglect can lead to federal criminal charges and imprisonment.' },
  { question: 'What is PHI?', answer: 'Protected Health Information is any demographic data that identifies a patient (name, SSN, phone) linked to their past, present, or future physical or mental health condition.' },
];

export const HipaaGenerator: React.FC = () => {
  const router = useRouter();
return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ⚕️ Free HIPAA Privacy Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a federal-level <strong style={{ color: 'var(--text-primary)' }}>Notice of Privacy Practices (NPP)</strong>. Essential for clinics, telehealth apps, and B2B medical vendors handling protected health information (PHI).
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=hipaa')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your HIPAA Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Healthcare Businesses Need a HIPAA Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            If you collect medical data, appointment details, or health conditions in the United States, you are subject to HIPAA (Health Insurance Portability and Accountability Act). The HIPAA Privacy Rule legally requires you to develop and distribute a specific "Notice of Privacy Practices" to every patient.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Federal Requirement for Covered Entities:</strong> Any doctor's office, dental clinic, or telehealth startup must prominently display this HIPAA notice on their website and provide a physical copy during onboarding.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Disclose Permitted PHI Uses:</strong> The policy explicitly outlines how Protected Health Information (PHI) will be used strictly for Treatment, Payment, and Health Care Operations (TPO).</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Patient Legal Rights:</strong> The Notice must explicitly establish the patient's right to inspect their medical records, request amendments, request an accounting of disclosures, and file formal complaints with the OCR.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Massive Non-Compliance Fines:</strong> The Office for Civil Rights (OCR) actively audits healthcare providers. Failing to correctly provide and document the receipt of a proper Privacy Practices notice can result in fines up to $68,000 per missing instance.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={HIPAA_FAQS} />

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=hipaa')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your HIPAA Privacy Notice Now →
        </button>
      </section>
    </div>
  );
};
