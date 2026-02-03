import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../lib/blogData';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
      <article className="glass-panel" style={{ padding: '3rem 2rem' }}>
        <header style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
           <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              PUBLISHED ON {post.date}
            </div>
          <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem' }}>{post.title}</h1>
        </header>
        
        <div 
          className="blog-content"
          style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <style>{`
            .blog-content h3 {
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: var(--accent-secondary);
                font-size: 1.5rem;
            }
            .blog-content p {
                 margin-bottom: 1.5rem;
            }
            .blog-content ul {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
            }
            .blog-content li {
                margin-bottom: 0.5rem;
            }
        `}</style>
      </article>
  );
};
