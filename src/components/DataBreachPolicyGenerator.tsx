'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
export const DataBreachPolicyGenerator: React.FC = () => {
  const router = useRouter();
return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>
          🚨 Free Data Breach Response Policy Generator
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '650px', margin: '0 auto 2rem' }}>
          Create an internal <strong style={{ color: 'var(--text-primary)' }}>Incident Response Plan</strong>. Establish clear protocols for containing cyber attacks, mitigating damage, and legally reporting data leaks under GDPR.
        </p>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=data-breach')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Generate Your Breach Policy — Free →
        </button>
      </section>

      {/* Why You Need a Policy */}
      <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Why Your Company Needs an Incident Response Plan</h2>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            It is no longer a question of *if* your company will experience a data breach or ransomware attack, but *when*. During the chaos of an active cyber attack, having a predefined Data Breach Policy is the difference between an orderly recovery and a company-ending disaster.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>GDPR 72-Hour Rule:</strong> If EU citizen data is leaked, you have exactly 72 hours to report it to the authorities. Your policy outlines the template and assigns the specific employee responsible for sending this notification.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Stop the Bleeding:</strong> An effective policy immediately authorizes the IT team to sever network connections, shut down API endpoints, and pull servers offline without waiting for CEO approval, containing the breach instantly.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>Legal Defense:</strong> When regulators audit you post-breach, showing them a documented Incident Response plan proves that you took data security seriously, drastically reducing corporate negligence fines.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--accent-primary)' }}>B2B Vendor Requirements:</strong> If you sell B2B SaaS, your clients' procurement teams will demand a copy of your internal Data Breach Policy before signing a contract to ensure their data is safe in your hands.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>What is a Data Breach?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>It is any security incident that results in the unauthorized access, destruction, use, modification, or disclosure of personal data or corporate intellectual property.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Who should be on our Incident Response Team?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Typically, it consists of a Lead Incident Commander (CTO/CISO), Lead Legal Counsel, PR/Communications Director, and the Lead Systems Engineer.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>When must we notify customers?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Most state and international laws mandate that users must be notified "without unreasonable delay" if the stolen data (like passwords, SSNs, or credit cards) poses a high risk to their rights and freedoms.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: 'center', paddingBottom: '3rem' }}>
        <button
          className="btn-primary"
          onClick={() => router.push('/?step=form&type=data-breach')}
          style={{ fontSize: '1.15rem', padding: '1rem 2.5rem' }}
        >
          Create Your Data Breach Policy Now →
        </button>
      </section>
    </div>
  );
};
