'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToolFAQ, type FAQItem } from './ToolFAQ';

const DISCLAIMER_FAQS: FAQItem[] = [
  {
    question: 'Do I need a disclaimer on my website?',
    answer: 'If your website provides <strong>any</strong> kind of information, advice, or services — including blog posts, tutorials, product reviews, or health/fitness content — you should have a disclaimer. It limits your liability if someone acts on your content and suffers damages or financial loss.',
  },
  {
    question: 'What is the difference between a disclaimer and a terms of service?',
    answer: 'A <strong>disclaimer</strong> limits liability for the accuracy of your content (e.g., "this is not medical advice"). A <strong>Terms of Service</strong> is a broader legal contract governing how users interact with your platform — covering account rules, IP rights, and dispute resolution. Most websites benefit from <strong>both</strong>. Generate your ToS with our <a href="/tos-generator">free Terms of Service Generator</a>.',
  },
  {
    question: 'What types of disclaimers exist?',
    answer: 'The most common types include: <strong>General disclaimers</strong> ("for informational purposes only"), <strong>medical/health disclaimers</strong> ("not a substitute for professional medical advice"), <strong>legal disclaimers</strong> ("not legal counsel"), <strong>financial disclaimers</strong> ("not investment advice"), <strong>affiliate disclaimers</strong> (FTC-required), and <strong>testimonial disclaimers</strong> ("results may vary").',
  },
  {
    question: 'Do bloggers need a disclaimer?',
    answer: 'Yes. Bloggers who share opinions, product reviews, recipes, health tips, or financial insights should have a disclaimer. If a reader follows your advice and suffers harm (e.g., an allergic reaction to a recipe ingredient), a disclaimer provides a crucial legal defense.',
  },
  {
    question: 'What is an affiliate disclaimer and is it required?',
    answer: 'An affiliate disclaimer discloses that you may earn a commission from links on your site. The <strong>FTC (Federal Trade Commission)</strong> legally requires this disclosure for any website using Amazon Associates, ShareASale, or other affiliate programs. Failure to disclose can result in FTC enforcement actions and fines.',
  },
  {
    question: 'Can a disclaimer protect me from all lawsuits?',
    answer: 'A disclaimer <strong>cannot prevent</strong> someone from filing a lawsuit. However, it provides a <strong>powerful legal defense</strong>. Courts regularly dismiss claims when the defendant had a clear, visible disclaimer that the user acknowledged. It demonstrates that the user assumed the risk of relying on your content.',
  },
  {
    question: 'Does a medical or health website need a professional disclaimer?',
    answer: 'Absolutely. Health and medical websites face the <strong>highest liability risk</strong>. Your disclaimer must clearly state that content is for informational purposes only, is not a substitute for professional medical advice, and that readers should consult a qualified healthcare provider before making health decisions.',
  },
];

export const DisclaimerGenerator: React.FC = () => {
  const router = useRouter();
 return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          ⚖️ Free Disclaimer Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create a professional <strong style={{ color: 'var(--text-primary)' }}>Disclaimer</strong> to protect your blog or business website from liability lawsuits. Includes FTC affiliate disclosures.
        </p>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=disclaimer')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>
          Generate Your Disclaimer — Free →
        </button>
      </section>

      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Website Needs a Disclaimer</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>A disclaimer is a legal statement that formally limits your liability for the content published on your website. Without it, you open your business up to lawsuits initiated by users who acted upon your advice or information and suffered damages or financial loss.</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Medical and Health Blogs:</strong> Prevent readers from replacing professional medical diagnosis with your informational wellness or fitness content.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Financial Advice:</strong> Protect yourself from lawsuits if a reader invests money based on your blog post and loses their investment.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>FTC Affiliate Requirements:</strong> If you use Amazon Associates or other affiliate links, the FTC explicitly mandates that you have a conspicuous affiliate disclosure warning.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>General Liability Limit:</strong> Establishes that the information you provide is "as is" and you make no guarantees regarding its absolute accuracy or completeness.</li>
          </ul>
        </div>
      </section>

      <ToolFAQ faqs={DISCLAIMER_FAQS} />

      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button className="btn-primary" onClick={() => router.push('/?step=form&type=disclaimer')} style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}>
          Create Your Free Disclaimer Now →
        </button>
      </section>
    </div>
  );
};
