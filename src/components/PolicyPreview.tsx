import React, { useRef } from 'react';
import { toast } from 'sonner';
import html2pdf from 'html2pdf.js';

interface PolicyPreviewProps {
  content: string;
  onReset: () => void;
}

export const PolicyPreview: React.FC<PolicyPreviewProps> = ({ content, onReset }) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast.success('Copied to clipboard!');
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'legal-policy.html'; // Basic HTML download for now
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('HTML downloaded successfully!');
  };

 const handleDownloadPdf = () => {
    const element = document.createElement('div');
    element.innerHTML = content.replace(/\n/g, '<br>'); // Simple formatting for PDF
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.lineHeight = '1.5';
    element.style.color = 'black'; // Ensure text is black for PDF
    element.style.background = 'white';

    const opt = {
      margin:       1,
      filename:     'legal-policy.pdf',
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

    // Use toast.promise for better UX during generation
    toast.promise(html2pdf().set(opt).from(element).save(), {
      loading: 'Generating PDF...',
      success: 'PDF downloaded successfully!',
      error: 'Failed to generate PDF'
    });
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
        ref={contentRef}
        readOnly
        value={content}
        style={{ width: '100%', height: '400px', resize: 'vertical', fontFamily: 'monospace', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)' }}
      />

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn-primary" style={{ filter: 'hue-rotate(90deg)' }} onClick={handleDownloadHtml}>
          Download HTML
        </button>
        <button className="btn-primary" style={{ filter: 'hue-rotate(180deg)' }} onClick={handleDownloadPdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
};
