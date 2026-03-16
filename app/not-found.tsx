import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="animate-enter" style={{ textAlign: 'center', marginTop: '6rem' }}>
      <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary" style={{ display: 'inline-block' }}>
        ← Back to Home
      </Link>
    </div>
  )
}
