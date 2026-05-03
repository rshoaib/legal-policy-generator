'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const DMCA_FAQS: FAQItem[] = [
  {
    question: 'What is a DMCA Policy?',
    answer: 'A DMCA Policy outlines the procedure copyright owners must follow to request the removal of infringing content from your website, in accordance with the <strong>Digital Millennium Copyright Act of 1998</strong>. It also describes the counter-notice process for users whose content was incorrectly removed.',
  },
  {
    question: 'Do I need a DMCA Policy on my website?',
    answer: 'If your website allows <strong>any user-generated content</strong> — comments, forum posts, image uploads, reviews, or shared links — you absolutely need a DMCA policy. Without one, you are <strong>personally liable</strong> for copyright infringement committed by your users. The DMCA\'s Safe Harbor provision only protects you if you have a policy and a designated agent.',
  },
  {
    question: 'What is DMCA Safe Harbor and how do I qualify?',
    answer: 'The Safe Harbor provision shields website owners from copyright lawsuits caused by user-uploaded content. To qualify, you must: <strong>(1)</strong> publish a DMCA policy, <strong>(2)</strong> designate a Copyright Agent, <strong>(3)</strong> register that agent with the US Copyright Office, and <strong>(4)</strong> promptly remove infringing content when you receive a valid takedown notice.',
  },
  {
    question: 'How do I file a DMCA takedown notice?',
    answer: 'A valid takedown notice must include: a physical or electronic <strong>signature</strong> of the copyright owner, <strong>identification</strong> of the copyrighted work, the <strong>specific URL</strong> of the infringing content, your <strong>contact information</strong>, a statement of <strong>good faith belief</strong>, and a statement under <strong>penalty of perjury</strong> that you own the rights.',
  },
  {
    question: 'What happens if someone copies my content without permission?',
    answer: 'If your content appears on another website without permission, you can file a DMCA takedown notice with their hosting provider (e.g., Cloudflare, AWS, Google). The host is legally required to remove the content promptly. If the infringer is a US-based entity, you can also pursue legal action for damages.',
  },
  {
    question: 'Do I need a DMCA Policy if I write all my own content?',
    answer: 'If your site hosts <strong>zero user-generated content</strong> (no comments, uploads, or forums), a DMCA policy is less critical. However, having one still demonstrates good faith and can protect you if a user somehow submits infringing material through contact forms or other channels.',
  },
  {
    question: 'What is a DMCA counter-notice?',
    answer: 'A counter-notice is the legal process that protects users from <strong>false takedown claims</strong>. If a user believes their content was wrongly removed, they can file a counter-notice. The website must then restore the content within 10–14 business days unless the original claimant files a court order.',
  },
];

export const DmcaGenerator: React.FC = () => {
  const router = useRouter();
 return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>©️ Free DMCA Policy Generator</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a clear <strong style={{ color: 'var(--text-primary)' }}>DMCA Takedown Policy</strong> to establish Safe Harbor protection and avoid massive copyright lawsuits.
        </p>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=dmca')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Generate Your DMCA Policy — Free →</button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a DMCA Policy</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>If your website allows users to post comments, upload images, or share URLs, you are at severe risk of copyright lawsuits. A user might upload a copyrighted photo, and without Safe Harbor, the copyright owner can sue <em>you</em> for hosting it.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Safe Harbor Immunity:</strong> Having a DMCA policy grants you "Safe Harbor" — you cannot be sued for users' actions as long as you act swiftly to remove infringing content when notified.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Standardized Takedown Process:</strong> Gives copyright holders a specific form and email address to send their claims to, preventing lawsuits from being filed without warning.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Counter-Notice Rights:</strong> Protects your users from false copyright claims by outlining the formal counter-notice process.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Hosting Provider Compliance:</strong> Providers like AWS, DigitalOcean, and Vercel require you to handle copyright complaints independently.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={DMCA_FAQS} />

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=dmca')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>Create Your DMCA Policy Now →</button>
      </section>
    </div>
  );
};
