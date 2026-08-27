import { createFileRoute } from '@tanstack/react-router'
import { SiteFooter } from '../components/legal-page'

const screenshots = [
  {
    src: '20260827-161546.webp',
    device: 'tablet',
    alt: 'Tomeio discovery shelves on a tablet',
  },
  {
    src: '20260827-170345.webp',
    device: 'phone',
    alt: 'Tomeio discovery shelves on a phone',
  },
  {
    src: '20260827-161643.webp',
    device: 'tablet',
    alt: 'Book search results in Tomeio on a tablet',
  },
  {
    src: '20260827-170525.webp',
    device: 'phone',
    alt: 'Book search results in Tomeio on a phone',
  },
  {
    src: '20260827-161922.webp',
    device: 'tablet',
    alt: 'Book details and download options in Tomeio on a tablet',
  },
  {
    src: '20260827-170503.webp',
    device: 'phone',
    alt: 'A book in the Tomeio library on a phone',
  },
  {
    src: '20260827-161943.webp',
    device: 'tablet',
    alt: 'Trending books in Tomeio on a tablet',
  },
  {
    src: '20260827-170556.webp',
    device: 'phone',
    alt: 'Trending books in Tomeio on a phone',
  },
  {
    src: '20260827-162055.webp',
    device: 'tablet',
    alt: 'The Tomeio library on a tablet',
  },
  {
    src: '20260827-170446.webp',
    device: 'phone',
    alt: 'The Tomeio library on a phone',
  },
  {
    src: '20260827-162051.webp',
    device: 'tablet',
    alt: 'Library sorting options in Tomeio on a tablet',
  },
  {
    src: '20260827-170540.webp',
    device: 'phone',
    alt: 'Tomeio settings on a phone',
  },
  {
    src: '20260827-161538.webp',
    device: 'tablet',
    alt: 'Tomeio add-ons on a tablet',
  },
  {
    src: '20260827-170532.webp',
    device: 'phone',
    alt: 'Tomeio add-ons on a phone',
  },
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
                    className={`screenshot screenshot-${screenshot.device}`}
                    src={`/screenshots/${screenshot.src}`}
                    alt={group === 0 ? screenshot.alt : ''}
                    loading={index < 3 && group === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    key={screenshot.src}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
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
