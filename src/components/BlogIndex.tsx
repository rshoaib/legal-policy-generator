'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { type BlogPost } from '../lib/blogService';

const POSTS_PER_PAGE = 6;

interface BlogIndexProps {
  posts: BlogPost[];
}

export const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', background: 'linear-gradient(to right, #ec4899 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem' }}>
        Helpful Guides & Resources
      </h1>

      {posts.length === 0 ? (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p>No articles published yet. Check back soon.</p>
        </div>
      ) : (
        <>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {visiblePosts.map(post => (
              <article key={post.slug} className="glass-panel" style={{ padding: 0, transition: 'transform 0.2s', overflow: 'hidden' }}>
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    {post.date}
                  </div>
                  <h2 style={{ marginBottom: '1rem' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'var(--text-primary)' }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More / Counter */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            {hasMore ? (
              <button
                className="btn-primary"
                onClick={() => setVisibleCount(prev => prev + POSTS_PER_PAGE)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Load More ({posts.length - visibleCount} remaining)
              </button>
            ) : posts.length > POSTS_PER_PAGE && (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Showing all {posts.length} articles
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
