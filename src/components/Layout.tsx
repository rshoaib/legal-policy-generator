import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  const [showValentine, setShowValentine] = useState(() => {
    const now = new Date();
    return now.getMonth() === 1 && now.getDate() === 14 && !sessionStorage.getItem('valentine_dismissed');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const dismissValentine = () => {
    setShowValentine(false);
    sessionStorage.setItem('valentine_dismissed', 'true');
  };

  return (
    <div className="layout-wrapper">
      {showValentine && (
        <div className="valentine-banner">
          <div className="valentine-content">
            <span className="valentine-hearts">💝</span>
            <span>Happy Valentine's Day! Generate a love-ly legal policy today!</span>
            <span className="valentine-hearts">💝</span>
            <button onClick={dismissValentine} className="valentine-close" aria-label="Dismiss">✕</button>
          </div>
        </div>
      )}

      <header className="main-header glass-panel">
        <div className="container header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }} role="img" aria-label="Legal scales">⚖️</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem' }}>
              PolicyGen
            </span>
          </Link>
          <nav aria-label="Main navigation" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <Link to="/bundle" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Starter Kit</Link>
            <Link to="/policy-guide" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Policy Guide</Link>
            <Link to="/compliance-checker" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Compliance Checker</Link>
            <Link to="/blog" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Blog</Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: 'none', border: '1px solid var(--glass-border)',
                borderRadius: '0.5rem', padding: '0.4rem 0.6rem',
                cursor: 'pointer', fontSize: '1.1rem', lineHeight: 1,
                color: 'var(--text-primary)', transition: 'all 0.2s',
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main className="container main-content">
        {children}
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/bundle">Starter Kit</Link>
            <Link to="/policy-guide">Policy Guide</Link>
            <Link to="/compliance-checker">Compliance Checker</Link>
            <Link to="/history">Policy History</Link>
          </div>
          <div className="footer-links" style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Our Other Free Tools:</span>
            <a href="https://dailysmartcalc.com" target="_blank" rel="noopener noreferrer">Smart Calculators</a>
            <a href="https://mycalcfinance.com" target="_blank" rel="noopener noreferrer">Finance Calculators</a>
            <a href="https://onlineimageshrinker.com" target="_blank" rel="noopener noreferrer">Image Compressor</a>
            <a href="https://imrizwan.com" target="_blank" rel="noopener noreferrer">Developer Blog</a>
            <a href="https://orderviachat.com" target="_blank" rel="noopener noreferrer">OrderViaChat</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Legal Policy Generator. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .valentine-banner {
          background: linear-gradient(135deg, #be185d, #e11d48, #f43f5e, #ec4899);
          color: white;
          text-align: center;
          padding: 0.6rem 1rem;
          font-weight: 600;
          font-size: 0.95rem;
          position: relative;
          animation: valentineSlideIn 0.5s ease-out;
          background-size: 200% 200%;
          animation: valentineGlow 3s ease-in-out infinite alternate, valentineSlideIn 0.5s ease-out;
        }

        .valentine-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .valentine-hearts {
          animation: heartbeat 1.2s ease-in-out infinite;
          display: inline-block;
        }

        .valentine-close {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .valentine-close:hover {
          opacity: 1;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes valentineSlideIn {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes valentineGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .main-header {
          position: sticky;
          top: 1rem;
          margin: 1rem 2rem 0;
          z-index: 100;
          padding: 1rem 0;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          color: var(--text-primary);
        }

        .main-content {
          flex: 1;
          padding-top: 2rem;
          padding-bottom: 2rem;
          width: 100%;
        }

        .main-footer {
          text-align: center;
          padding: 2rem 0;
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
          border-top: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          margin-top: auto;
          min-height: 90px;
          contain: layout style;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          min-height: 24px;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.5;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .header-content nav {
            gap: 0.5rem !important;
            flex-wrap: wrap;
          }

          .header-content nav a {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

