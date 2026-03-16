'use client'
import React from 'react';
import Link from 'next/link';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>⚠️</div>
          <h2
            className="text-gradient"
            style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}
          >
            Something went wrong
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.7',
            }}
          >
            This page failed to load. This is usually a temporary network issue.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={this.handleRetry}>
              ↻ Try Again
            </button>
            <Link
              href="/"
              className="btn-primary"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                filter: 'hue-rotate(90deg)',
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
