import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) &&
          toggleRef.current && !toggleRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { to: '/bundle', label: 'Starter Kit' },
    { to: '/policy-guide', label: 'Policy Guide' },
    { to: '/compliance-checker', label: 'Compliance Checker' },
    { to: '/legal-page-checker', label: 'Legal Page Checker' },
    { to: '/blog', label: 'Blog' },
  ];

  return (
    <div className="layout-wrapper">
      {/* Skip to content — accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="main-header glass-panel">
        <div className="container header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }} role="img" aria-label="Legal scales">⚖️</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem' }}>
              PolicyGen
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <div className="mobile-nav-controls">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="theme-toggle"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              ref={toggleRef}
              className={`hamburger ${menuOpen ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Mobile drawer */}
      <nav
        ref={menuRef}
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} className="mobile-drawer-link">
            {link.label}
          </Link>
        ))}
      </nav>

      <main id="main-content" className="container main-content">
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
            <Link to="/legal-page-checker">Legal Page Checker</Link>
            <Link to="/history">Policy History</Link>
          </div>
          <div className="footer-links" style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Our Other Free Tools:</span>
            <a href="https://dailysmartcalc.com" target="_blank" rel="noopener noreferrer">Smart Calculators</a>
            <a href="https://mycalcfinance.com" target="_blank" rel="noopener noreferrer">Finance Calculators</a>
            <a href="https://onlineimageshrinker.com" target="_blank" rel="noopener noreferrer">Image Compressor</a>
            <a href="https://tinypdftools.com" target="_blank" rel="noopener noreferrer">PDF Tools</a>
            <a href="https://imrizwan.com" target="_blank" rel="noopener noreferrer">Developer Blog</a>
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

        /* ── Skip Link (hidden until focused) ── */
        .skip-link {
          position: absolute;
          top: -100%;
          left: 1rem;
          z-index: 9999;
          background: var(--accent-primary);
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 0 0 0.5rem 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: top 0.2s;
        }
        .skip-link:focus {
          top: 0;
        }

        /* ── Header ── */
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

        /* ── Desktop Nav ── */
        .desktop-nav {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .desktop-nav a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .desktop-nav a:hover {
          color: var(--accent-primary);
          text-shadow: none;
        }

        .theme-toggle {
          background: none;
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          padding: 0.6rem 0.75rem;
          cursor: pointer;
          font-size: 1.1rem;
          line-height: 1;
          color: var(--text-primary);
          transition: all 0.2s;
          min-height: 44px;
          min-width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Mobile Controls ── */
        .mobile-nav-controls {
          display: none;
          align-items: center;
          gap: 0.5rem;
        }

        /* ── Hamburger Button ── */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          padding: 0.6rem;
          cursor: pointer;
          min-height: 44px;
          min-width: 44px;
          align-items: center;
          transition: border-color 0.2s;
        }
        .hamburger:hover { border-color: var(--accent-primary); }
        .hamburger-line {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger.is-active .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.is-active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.is-active .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── Mobile Overlay ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 998;
          animation: fadeIn 0.2s ease;
        }

        /* ── Mobile Drawer ── */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 280px;
          height: 100vh;
          background: var(--bg-secondary);
          border-left: 1px solid var(--glass-border);
          z-index: 999;
          display: flex;
          flex-direction: column;
          padding: 5rem 1.5rem 2rem;
          gap: 0.25rem;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
        }
        .mobile-drawer.is-open {
          transform: translateX(0);
        }
        .mobile-drawer-link {
          color: var(--text-primary);
          text-decoration: none;
          padding: 0.85rem 1rem;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
        }
        .mobile-drawer-link:hover {
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-primary);
          text-shadow: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ── Main Content ── */
        .main-content {
          flex: 1;
          padding-top: 2rem;
          padding-bottom: 2rem;
          width: 100%;
        }

        /* ── Footer ── */
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
          min-height: 160px;
          contain: layout style;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          min-height: 28px;
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
          text-shadow: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-nav-controls { display: flex; }

          .main-header {
            margin: 0.5rem 1rem 0;
          }
        }
      `}</style>
    </div>
  );
};
