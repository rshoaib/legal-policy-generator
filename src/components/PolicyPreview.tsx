import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import html2pdf from 'html2pdf.js';
// @ts-ignore
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

interface PolicyPreviewProps {
  content: string;
  onReset: () => void;
}

export const PolicyPreview: React.FC<PolicyPreviewProps> = ({ content, onReset }) => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast.success(t('copied'));
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
    URL.revokeObjectURL(url);
    toast.success(t('html_downloaded'));
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
      loading: t('pdf_generating'),
      success: t('pdf_downloaded'),
      error: t('pdf_error')
    });
  };

  const handleDownloadWord = () => {
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Legal Policy</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.5; }
          </style>
        </head>
        <body>
          ${content.replace(/\n/g, '<br>')}
        </body>
        </html>
      `;
      
      asBlob(htmlContent).then((blob: any) => {
          saveAs(blob, 'legal-policy.docx');
          toast.success(t('word_downloaded'));
      }).catch((err: any) => {
          console.error(err);
          toast.error(t('word_error'));
      });
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ color: 'var(--accent-secondary)' }}>{t('generated_policy')}</h2>
        <button onClick={onReset} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'underline' }}>
          {t('create_new')}
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
          {t('copy_clipboard')}
        </button>
        <button className="btn-primary" style={{ filter: 'hue-rotate(90deg)' }} onClick={handleDownloadHtml}>
          {t('download_html')}
        </button>
        <button className="btn-primary" style={{ filter: 'hue-rotate(180deg)' }} onClick={handleDownloadPdf}>
          {t('download_pdf')}
        </button>
        <button className="btn-primary" style={{ filter: 'hue-rotate(270deg)' }} onClick={handleDownloadWord}>
          {t('download_word')}
        </button>
      </div>
    </div>
  );
};
