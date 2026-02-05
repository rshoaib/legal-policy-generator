import React, { useState } from 'react';
import type { PolicyData } from '../appTypes';

interface GeneratorFormProps {
  onGenerate: (data: PolicyData) => void;
  selectedType: 'privacy' | 'terms' | 'cookie';
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({ onGenerate, selectedType }) => {
  const [formData, setFormData] = useState<PolicyData>({
    companyName: '',
    websiteUrl: '',
    websiteName: '',
    contactEmail: '',
    country: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
        {selectedType === 'privacy' ? 'Privacy Policy' : selectedType === 'terms' ? 'Terms & Conditions' : 'Cookie Policy'} Details
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Company Name</label>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Corp"
            required
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Website Name</label>
          <input
            name="websiteName"
            value={formData.websiteName}
            onChange={handleChange}
            placeholder="e.g. Acme Website"
            required
          />
        </div>

        <div>
           <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Website URL</label>
           <input
            name="websiteUrl"
            type="url"
            value={formData.websiteUrl}
            onChange={handleChange}
            placeholder="https://example.com"
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Contact Email</label>
          <input
            name="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="contact@example.com"
            required
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Country</label>
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g. United States"
            required
          />
        </div>

        <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Generate {selectedType === 'privacy' ? 'Privacy Policy' : selectedType === 'terms' ? 'Terms & Conditions' : 'Cookie Policy'}
          </button>
        </div>
      </form>
    </div>
  );
};
