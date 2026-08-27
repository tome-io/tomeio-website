import type { ReactNode } from 'react'

interface LegalPageProps {
  title: string
  description: string
  updated: string
  children: ReactNode
}

export function LegalPage({ title, description, updated, children }: LegalPageProps) {
  return (
    <main className="legal-main">
      <header className="legal-header">
        <a className="legal-brand" href="/" aria-label="Tomeio home">
          <img src="/logo.png" alt="" />
          <span>Tomeio</span>
        </a>
      </header>

      <article className="legal-document">
        <header className="legal-title">
          <h1>{title}</h1>
          <p>{description}</p>
          <p className="legal-updated">Last updated: {updated}</p>
        </header>
        <div className="legal-content">{children}</div>
      </article>

      <SiteFooter />
    </main>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 Tomeio</span>
      <nav aria-label="Legal">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="https://github.com/tome-io/core" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  )
}
