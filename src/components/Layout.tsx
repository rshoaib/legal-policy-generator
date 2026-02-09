import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <header className="main-header glass-panel">
        <div className="container header-content">
          <div className="logo">
            <span style={{ fontSize: '1.5rem' }}>⚖️</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem' }}>
              PolicyGen
            </span>
          </div>
          <nav>
            {/* Add nav links later if needed */}
          </nav>
        </div>
      </header>

      <main className="container main-content">
        {children}
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
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
