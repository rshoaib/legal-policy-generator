import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import html2pdf from 'html2pdf.js';
// @ts-ignore
import { asBlob } from 'html-docx-js-typescript';
import { saveAs } from 'file-saver';

interface PolicyPreviewProps {
  content: string;
  onReset: () => void;
  /** Policy type label for file naming, e.g. 'privacy-policy' */
  fileLabel?: string;
  /** Company or website name for file naming */
  companyName?: string;
}

export const PolicyPreview: React.FC<PolicyPreviewProps> = ({
  content,
  onReset,
  fileLabel = 'legal-policy',
  companyName = '',
}) => {
  const { t } = useTranslation();
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  /** Build a slugified filename from type + company */
  const buildFilename = (ext: string) => {
    const slug = companyName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return slug ? `${fileLabel}-${slug}.${ext}` : `${fileLabel}.${ext}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast.success(t('copied'));
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = buildFilename('html');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(t('html_downloaded'));
  };

 const handleDownloadPdf = () => {
    const element = document.createElement('div');
    element.innerHTML = content.replace(/\n/g, '<br>');
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.lineHeight = '1.5';
    element.style.color = 'black';
    element.style.background = 'white';

    const opt = {
      margin:       1,
      filename:     buildFilename('pdf'),
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

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
          saveAs(blob, buildFilename('docx'));
          toast.success(t('word_downloaded'));
      }).catch((err: any) => {
          console.error(err);
          toast.error(t('word_error'));
      });
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <h2 style={{ color: 'var(--accent-secondary)' }}>{t('generated_policy')}</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/history" style={{ color: 'var(--accent-tertiary)', fontSize: '0.9rem', textDecoration: 'none' }}>
            📋 {t('view_history')}
          </Link>
          <button onClick={onReset} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', textDecoration: 'underline' }}>
            {t('create_new')}
          </button>
        </div>
      </div>

      {/* View mode toggle */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setViewMode('preview')}
          style={{
            background: viewMode === 'preview' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
            border: '1px solid ' + (viewMode === 'preview' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'),
            color: viewMode === 'preview' ? '#fff' : 'var(--text-secondary)',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'all 0.2s',
          }}
        >
          👁️ Preview
        </button>
        <button
          onClick={() => setViewMode('code')}
          style={{
            background: viewMode === 'code' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
            border: '1px solid ' + (viewMode === 'code' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'),
            color: viewMode === 'code' ? '#fff' : 'var(--text-secondary)',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600,
            transition: 'all 0.2s',
          }}
        >
          &lt;/&gt; Code
        </button>
      </div>

      {viewMode === 'code' ? (
        <textarea
          ref={contentRef}
          readOnly
          value={content}
          style={{ width: '100%', height: '400px', resize: 'vertical', fontFamily: 'monospace', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.3)' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            minHeight: '400px',
            maxHeight: '600px',
            overflowY: 'auto',
            background: '#ffffff',
            color: '#1a1a1a',
            padding: '2rem',
            borderRadius: '0.75rem',
            marginBottom: '1.5rem',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.7',
            fontSize: '0.95rem',
            border: '1px solid rgba(0,0,0,0.1)',
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

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
