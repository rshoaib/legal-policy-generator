import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../lib/blogData';

export const BlogIndex: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '2rem', background: 'linear-gradient(to right, #ec4899 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem' }}>
        Helpful Guides & Resources
      </h1>
      <div style={{ display: 'grid', gap: '2rem' }}>
        {blogPosts.map(post => (
          <article key={post.slug} className="glass-panel" style={{ padding: '2rem', transition: 'transform 0.2s' }}>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              {post.date}
            </div>
            <h2 style={{ marginBottom: '1rem' }}>
              <Link to={`/blog/${post.slug}`} style={{ color: 'var(--text-primary)' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>
            <Link to={`/blog/${post.slug}`} style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};
