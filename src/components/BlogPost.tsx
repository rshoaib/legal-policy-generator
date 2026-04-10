'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPostBySlug } from '../lib/blogService';
import { type BlogPost as BlogPostType } from '../lib/blogService';
import { SEO } from './SEO';
import { marked } from 'marked';
import { blogHeroImages } from '../data/blogHeroImages';

interface BlogPostProps {
  slug: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ slug }) => {
  const router = useRouter();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await getPostBySlug(slug);
        if (!cancelled) {
          if (data) {
            setPost(data);
          } else {
            setNotFound(true);
          }
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setNotFound(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPost();
    return () => { cancelled = true; };
  }, [slug]);

  useEffect(() => {
    if (notFound && !loading) {
      router.push('/blog');
    }
  }, [notFound, loading, router]);

  if (loading) {
    return (
      <article className="glass-panel" style={{ padding: '3rem 2rem' }}>
        <header style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
          <div style={{ height: '0.875rem', width: '150px', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '1rem' }} />
          <div style={{ height: '2.5rem', width: '90%', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '0.5rem' }} />
          <div style={{ height: '2.5rem', width: '60%', background: 'var(--border-color)', borderRadius: '4px' }} />
        </header>
        <div>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ height: '1rem', width: i % 2 === 0 ? '80%' : '95%', background: 'var(--border-color)', borderRadius: '4px', marginBottom: '1rem' }} />
          ))}
        </div>
      </article>
    );
  }

  if (!post) return null;

  const heroImage = blogHeroImages[post.slug] ?? null;
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://legalpolicygen.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://legalpolicygen.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://legalpolicygen.com/blog/${post.slug}` },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    image: heroImage ? `https://legalpolicygen.com${heroImage}` : 'https://legalpolicygen.com/og-image.png',
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
          jsonLd={[breadcrumbJsonLd, articleJsonLd]}
        />
        <header style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
           <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              PUBLISHED ON {post.date}
            </div>
          <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1rem' }}>{post.title}</h1>
        </header>

        {heroImage && (
          <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src={heroImage}
              alt={post.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="eager"
            />
          </div>
        )}

        <div
          className="blog-content"
          style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)' }}
          dangerouslySetInnerHTML={{ __html: /^\s*<[a-z]/i.test(post.content) ? post.content : marked.parse(post.content) as string }}
        />
        
        <style>{`
            .blog-content h2 {
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                color: var(--accent-primary);
                font-size: 1.75rem;
                font-weight: 700;
            }
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
            .blog-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 1.5rem 0;
                font-size: 0.95rem;
            }
            .blog-content th {
                text-align: left;
                font-weight: 600;
                color: var(--text-primary, #f1f5f9);
                padding: 0.75rem 1rem;
                border-bottom: 2px solid var(--accent-primary, #6366f1);
                background: rgba(99, 102, 241, 0.08);
            }
            .blog-content td {
                padding: 0.75rem 1rem;
                border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.08));
                vertical-align: top;
            }
            .blog-content tbody tr:hover {
                background: rgba(99, 102, 241, 0.04);
            }
            .blog-content strong {
                color: var(--text-primary, #f1f5f9);
            }
            .blog-content img {
                max-width: 100%;
                height: auto;
                border-radius: 12px;
                margin-bottom: 1.5rem;
            }
            .blog-content code {
                background: rgba(99, 102, 241, 0.1);
                padding: 0.15rem 0.4rem;
                border-radius: 4px;
                font-size: 0.9em;
            }
            .blog-content pre {
                background: rgba(0,0,0,0.3);
                padding: 1rem 1.25rem;
                border-radius: 8px;
                overflow-x: auto;
                margin-bottom: 1.5rem;
            }
            .blog-content pre code {
                background: none;
                padding: 0;
            }
            .blog-content blockquote {
                border-left: 3px solid var(--accent-primary);
                padding-left: 1rem;
                margin: 1.5rem 0;
                color: var(--text-secondary);
                font-style: italic;
            }
            .blog-content a {
                color: var(--accent-primary);
                text-decoration: underline;
            }
        `}</style>
      </article>
  );
};
