import { createFileRoute } from '@tanstack/react-router'

const screenshots = [
  '20260827-161538.webp',
  '20260827-161546.webp',
  '20260827-161643.webp',
  '20260827-161910.webp',
  '20260827-161922.webp',
  '20260827-161943.webp',
  '20260827-162051.webp',
  '20260827-162055.webp',
  '20260827-170345.webp',
  '20260827-170446.webp',
  '20260827-170503.webp',
  '20260827-170525.webp',
  '20260827-170532.webp',
  '20260827-170540.webp',
  '20260827-170556.webp',
] as const

const destinations = {
  testflight: import.meta.env.VITE_TESTFLIGHT_URL,
  google: import.meta.env.VITE_GOOGLE_BETA_URL,
  discord: import.meta.env.VITE_DISCORD_URL,
}

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Tomeio — Your books, all together' },
      {
        name: 'description',
        content: 'Discover, download, organize, and enjoy books from extensible sources with Tomeio.',
      },
      { property: 'og:title', content: 'Tomeio — Your books, all together' },
      {
        property: 'og:description',
        content: 'Discover, download, organize, and enjoy books from extensible sources.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <img className="app-logo" src="/logo.png" alt="Tomeio" />
        <h1 id="hero-title">Tomeio</h1>
        <p>
          Discover, download, and keep your books together. Tomeio brings open book sources,
          your reading list, and your local library into one calm place.
        </p>
        <div className="actions" aria-label="Join the Tomeio beta and community">
          <DestinationLink href={destinations.testflight} label="Join TestFlight" variant="primary" />
          <DestinationLink href={destinations.google} label="Join Google Beta" variant="primary" />
          <DestinationLink href={destinations.discord} label="Join Community Discord" variant="secondary" />
        </div>
      </section>

      <section className="showcase" aria-label="Tomeio app screenshots">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div className="marquee-group" aria-hidden={group === 1} key={group}>
                {screenshots.map((screenshot, index) => (
                  <img
                    src={`/screenshots/${screenshot}`}
                    alt={group === 0 ? `Tomeio app screenshot ${index + 1}` : ''}
                    loading={index < 3 && group === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    key={screenshot}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function DestinationLink({ href, label, variant }: { href?: string; label: string; variant: 'primary' | 'secondary' }) {
  const className = `button button-${variant}`

  if (!href) {
    return (
      <span className={`${className} button-disabled`} aria-disabled="true" title="Invite link coming soon">
        {label}
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )
}
