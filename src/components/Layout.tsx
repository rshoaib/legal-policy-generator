'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
    { href: '/bundle', label: 'Starter Kit' },
    { href: '/profile', label: 'Company Profile' },
    { href: '/policy-guide', label: 'Policy Guide' },
    { href: '/compliance-checker', label: 'Compliance Checker' },
    { href: '/legal-page-checker', label: 'Legal Page Checker' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="layout-wrapper">
      {/* Skip to content — accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="main-header glass-panel">
        <div className="container header-content">
          <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }} role="img" aria-label="Legal scales">⚖️</span>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', marginLeft: '0.5rem' }}>
              PolicyGen
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
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
          <Link key={link.href} href={link.href} className="mobile-drawer-link">
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
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/bundle">Starter Kit</Link>
            <Link href="/profile">Company Profile</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/policy-guide">Policy Guide</Link>
            <Link href="/compliance-checker">Compliance Checker</Link>
            <Link href="/legal-page-checker">Legal Page Checker</Link>
            <Link href="/history">Policy History</Link>
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

    </div>
  );
};
