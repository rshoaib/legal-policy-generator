'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { SEO } from './SEO';
import { type PolicyData } from '../appTypes';

export const CompanyProfile: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<PolicyData>>({});

  useEffect(() => {
    const saved = localStorage.getItem('policy_generator_data');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('policy_generator_data', JSON.stringify(formData));
    toast.success('Company Profile saved!', {
      description: 'Your details will automatically pre-fill in all legal documents.',
    });
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear your saved business details?")) {
      localStorage.removeItem('policy_generator_data');
      setFormData({});
      toast.success('Profile cleared successfully.');
    }
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <SEO
        title="Company Profile Settings | Legal Policy Generator"
        description="Save your business details securely in your browser to auto-fill all 22+ legal document generators instantly."
        canonical="/profile"
        noindex
      />

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          🏢 Company Profile
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Save your business details here securely in your browser's local storage. They will automatically pre-fill every time you generate a new legal policy.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <form onSubmit={handleSave} style={{ display: 'grid', gap: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Company Name / Legal Entity
              </label>
              <input
                name="companyName"
                value={formData.companyName || ''}
                onChange={handleChange}
                placeholder="e.g. Acme Corporation LLC"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Website Name
              </label>
              <input
                name="websiteName"
                value={formData.websiteName || ''}
                onChange={handleChange}
                placeholder="e.g. Acme Store"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Website URL
              </label>
              <input
                name="websiteUrl"
                type="url"
                value={formData.websiteUrl || ''}
                onChange={handleChange}
                placeholder="https://example.com"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Contact Email Address
              </label>
              <input
                name="contactEmail"
                type="email"
                value={formData.contactEmail || ''}
                onChange={handleChange}
                placeholder="legal@example.com"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div>
             <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Full Company Address
             </label>
             <input
                name="companyAddress"
                value={formData.companyAddress || ''}
                onChange={handleChange}
                placeholder="e.g. 123 Business Rd, Suite 100, City, State, ZIP"
                style={{ width: '100%' }}
             />
          </div>

          <div>
             <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Country
             </label>
             <input
                name="country"
                value={formData.country || ''}
                onChange={handleChange}
                placeholder="e.g. United States"
                style={{ width: '100%' }}
             />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            <button 
              type="button" 
              onClick={handleClear}
              className="btn-primary" 
              style={{ background: 'transparent', border: '1px solid var(--accent-secondary)', color: 'var(--accent-secondary)', flex: 1, filter: 'grayscale(0.5)' }}
            >
              Clear Data
            </button>
            <button type="submit" className="btn-primary" style={{ flex: 3 }}>
              Save Profile Preferences
            </button>
          </div>
        </form>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button 
          onClick={() => router.push('/')}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
        >
          ← Return to Generator
        </button>
      </div>
    </div>
  );
};
