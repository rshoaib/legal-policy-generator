import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blogService';
import { type BlogPost } from '../lib/blogData';
import { SEO } from './SEO';

export const BlogIndex: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    
    async function loadPosts() {
      try {
        setLoading(true);
        const data = await getAllPosts();
        if (!cancelled) {
          setPosts(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Failed to load articles. Please try again later.');
          console.error(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    
    loadPosts();
    return () => { cancelled = true; };
  }, []);

  return (
    <div>
      <SEO
        title="Blog — Helpful Guides & Resources"
        description="Expert guides on privacy policies, terms & conditions, cookie policies, GDPR, CCPA compliance, and more. Free legal resources for website owners."
        canonical="/blog"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://legalpolicygen.com/blog' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Helpful Guides & Resources',
            url: 'https://legalpolicygen.com/blog',
            description: 'Expert guides on privacy policies, terms & conditions, cookie policies, GDPR, CCPA compliance, and more.',
            isPartOf: { '@type': 'WebSite', name: 'Legal Policy Generator', url: 'https://legalpolicygen.com' },
          },
        ]}
      />
      <h1 style={{ marginBottom: '2rem', background: 'linear-gradient(to right, #ec4899 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '2.5rem' }}>
        Helpful Guides & Resources
      </h1>

      {loading && (
        <div style={{ display: 'grid', gap: '2rem' }}>
          {[1, 2, 3].map(i => (
            <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ height: '0.875rem', width: '100px', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '0.75rem' }} />
              <div style={{ height: '1.5rem', width: '80%', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '1rem' }} />
              <div style={{ height: '1rem', width: '95%', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '0.5rem' }} />
              <div style={{ height: '1rem', width: '60%', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '1.5rem' }} />
              <div style={{ height: '1rem', width: '120px', background: 'var(--border-color)', borderRadius: '4px' }} />
            </div>
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div style={{ display: 'grid', gap: '2rem' }}>
          {posts.map(post => (
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
      )}
    </div>
  );
};
