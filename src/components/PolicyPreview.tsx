import React from 'react';

interface PolicyPreviewProps {
  content: string;
  onReset: () => void;
}

export const PolicyPreview: React.FC<PolicyPreviewProps> = ({ content, onReset }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert('Copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'legal-policy.html'; // Basic HTML download for now
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-secondary)' }}>Generated Policy</h2>
        <button onClick={onReset} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'underline' }}>
          Create New
        </button>
      </div>

      <textarea
        readOnly
        value={content}
        style={{ width: '100%', height: '400px', resize: 'vertical', fontFamily: 'monospace', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)' }}
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="btn-primary" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn-primary" style={{ filter: 'hue-rotate(90deg)' }} onClick={handleDownload}>
          Download HTML
        </button>
      </div>
    </div>
  );
};
