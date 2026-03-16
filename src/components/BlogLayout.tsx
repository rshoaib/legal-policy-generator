'use client'

import React from 'react';
import Link from 'next/link';

interface BlogLayoutWrapperProps {
  children: React.ReactNode;
}

export const BlogLayout: React.FC<BlogLayoutWrapperProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginBottom: '2rem', padding: '1rem 0', borderBottom: '1px solid var(--border-color)' }}>
            <Link href="/blog" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-primary)', textDecoration: 'none' }}>
                Latest Insights
            </Link>
            <span style={{ margin: '0 0.5rem', color: 'var(--text-secondary)' }}>/</span>
            <Link href="/" style={{ color: 'var(--accent-primary)' }}>Back to Generator</Link>
        </div>
        {children}
    </div>
  );
};
