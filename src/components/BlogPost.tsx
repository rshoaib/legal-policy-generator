import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../lib/blogData';
import { SEO } from './SEO';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Legal Policy Generator',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Legal Policy Generator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://legalpolicygen.com/og-image.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://legalpolicygen.com/blog/${post.slug}`,
    },
  };

  return (
      <article className="glass-panel" style={{ padding: '3rem 2rem' }}>
        <SEO
          title={post.title}
          description={post.excerpt}
          canonical={`/blog/${post.slug}`}
          ogType="article"
          article={{ publishedTime: post.date }}
          jsonLd={articleJsonLd}
        />
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

