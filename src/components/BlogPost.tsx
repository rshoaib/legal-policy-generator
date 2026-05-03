import React from 'react';
import { type BlogPost as BlogPostType } from '../lib/blogService';
import { marked } from 'marked';

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  /* Note: SEO meta + JSON-LD are now emitted server-side from
     app/blog/[slug]/page.tsx (generateMetadata + script tags). */

  const html = /^\s*<[a-z]/i.test(post.content)
    ? post.content
    : (marked.parse(post.content) as string);

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
          dangerouslySetInnerHTML={{ __html: html }}
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
            .blog-content svg {
                max-width: 100%;
                height: auto;
                display: block;
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
