import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <header className="main-header glass-panel">
        <div className="container header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }} role="img" aria-label="Legal scales">⚖️</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem' }}>
              PolicyGen
            </span>
          </Link>
          <nav aria-label="Main navigation" style={{ display: 'flex', gap: '1.25rem' }}>
            <Link to="/compliance-checker" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Compliance Checker</Link>
            <Link to="/blog" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Blog</Link>
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
            <Link to="/compliance-checker">Compliance Checker</Link>
            <Link to="/history">Policy History</Link>
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
          border-top: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          margin-top: auto;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </div>
  );
};

