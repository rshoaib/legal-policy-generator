'use client'
import React, { useState, useEffect } from 'react';

const CONSENT_KEY = 'cookie_consent';

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="cookie-consent-banner" role="dialog" aria-label="Cookie consent">
        <div className="cookie-consent-content">
          <p>
            We use cookies to enhance your experience and analyze site traffic (Google Analytics).
            By clicking "Accept," you consent to our use of cookies. See our{' '}
            <a href="/privacy" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
              Privacy Policy
            </a>{' '}
            for details.
          </p>
          <div className="cookie-consent-buttons">
            <button onClick={handleDecline} className="cookie-btn cookie-btn-decline">
              Decline
            </button>
            <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
              Accept
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .cookie-consent-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(10, 10, 30, 0.97);
          border-top: 1px solid var(--glass-border, rgba(255,255,255,0.1));
          padding: 1rem 1.5rem;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .cookie-consent-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cookie-consent-content p {
          flex: 1;
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-secondary, #a0a0b0);
          line-height: 1.5;
          min-width: 200px;
        }

        .cookie-consent-buttons {
          display: flex;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .cookie-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }

        .cookie-btn-decline {
          background: transparent;
          color: var(--text-secondary, #a0a0b0);
          border: 1px solid var(--glass-border, rgba(255,255,255,0.15));
        }

        .cookie-btn-decline:hover {
          background: rgba(255,255,255,0.05);
          color: var(--text-primary, #fff);
        }

        .cookie-btn-accept {
          background: var(--accent-primary, #4cc9f0);
          color: #0a0a1e;
        }

        .cookie-btn-accept:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .cookie-consent-content {
            flex-direction: column;
            text-align: center;
          }
          .cookie-consent-buttons {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};
