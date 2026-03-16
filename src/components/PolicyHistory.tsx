'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { SEO } from './SEO';
import {
  getHistory,
  deletePolicy,
  clearHistory as clearAll,
  type SavedPolicy,
} from '../utils/useHistoryStorage';

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

const TYPE_ICONS: Record<string, string> = {
  privacy: '🔒',
  terms: '📜',
  cookie: '🍪',
  refund: '💰',
  disclaimer: '⚠️',
  'cookie-banner': '🪧',
  'robots-txt': '🤖',
  accessibility: '♿',
  nda: '🤝',
  eula: '📋',
};

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

/* ─── Preview Modal ───────────────────────────────────────────────────────── */

const PreviewModal: React.FC<{
  policy: SavedPolicy;
  onClose: () => void;
}> = ({ policy, onClose }) => {
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(policy.content);
    toast.success(t('copied'));
  };

  return (
    <div className="history-modal-overlay" onClick={onClose}>
      <div
        className="history-modal glass-panel animate-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="history-modal-header">
          <div>
            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>
              {TYPE_ICONS[policy.type] || '📄'}
            </span>
            <strong>{policy.label}</strong>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        <textarea
          readOnly
          value={policy.content}
          style={{
            width: '100%',
            height: '350px',
            resize: 'vertical',
            fontFamily: 'monospace',
            marginBottom: '1rem',
            background: 'rgba(0,0,0,0.3)',
          }}
        />

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={handleCopy}>
            {t('copy_clipboard')}
          </button>
          <button
            className="btn-primary"
            style={{ filter: 'hue-rotate(90deg)' }}
            onClick={onClose}
          >
            {t('history_close')}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ──────────────────────────────────────────────────────── */

export const PolicyHistory: React.FC = () => {
  const { t } = useTranslation();
  const [history, setHistory] = useState<SavedPolicy[]>([]);
  const [previewItem, setPreviewItem] = useState<SavedPolicy | null>(null);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleDelete = (id: string) => {
    deletePolicy(id);
    setHistory(getHistory());
    toast.success(t('history_deleted'));
  };

  const handleClearAll = () => {
    if (!window.confirm(t('history_clear_confirm'))) return;
    clearAll();
    setHistory([]);
    toast.success(t('history_cleared'));
  };

  return (
    <div className="animate-enter" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <SEO
        title="Policy History | Legal Policy Generator"
        description="Browse and manage your previously generated legal policies."
        canonical="/history"
        noindex
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            ← {t('back_home')}
          </Link>
          <h1 className="text-gradient" style={{ fontSize: '2rem' }}>
            {t('history_title')}
          </h1>
        </div>

        {history.length > 0 && (
          <button
            onClick={handleClearAll}
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.2s',
            }}
          >
            🗑️ {t('history_clear')}
          </button>
        )}
      </div>

      {/* Empty State */}
      {history.length === 0 && (
        <div
          className="glass-panel"
          style={{ textAlign: 'center', padding: '4rem 2rem' }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.6 }}>📂</div>
          <h2
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              fontWeight: 500,
            }}
          >
            {t('history_empty')}
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              opacity: 0.7,
              marginBottom: '2rem',
            }}
          >
            {t('history_empty_desc')}
          </p>
          <Link
            href="/"
            className="btn-primary"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            {t('history_empty_cta')}
          </Link>
        </div>
      )}

      {/* History Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {history.map((item) => (
          <div
            key={item.id}
            className="glass-panel history-card"
            style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => setPreviewItem(item)}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: '2rem',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                background: 'rgba(139, 92, 246, 0.1)',
                borderRadius: '0.75rem',
              }}
            >
              {TYPE_ICONS[item.type] || '📄'}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  opacity: 0.7,
                }}
              >
                {relativeTime(item.createdAt)} ·{' '}
                {item.content.split(/\s+/).length} words
              </div>
            </div>

            {/* Actions */}
            <div
              style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="history-action-btn"
                title={t('history_preview')}
                onClick={() => setPreviewItem(item)}
              >
                👁️
              </button>
              <button
                className="history-action-btn history-delete-btn"
                title={t('history_delete')}
                onClick={() => handleDelete(item.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewItem && (
        <PreviewModal
          policy={previewItem}
          onClose={() => setPreviewItem(null)}
        />
      )}
    </div>
  );
};
