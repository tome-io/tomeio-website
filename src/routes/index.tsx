import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SiteFooter } from '../components/legal-page'
import { seo } from '../lib/seo'

const featureSlides = [
  {
    src: '20260827-170345.webp',
    video: '/videos/discover.mp4',
    title: 'Find your next read.',
    description: 'Explore recommendations and the books waiting for you.',
  },
  {
    src: '20260827-170525.webp',
    video: '/videos/search.mp4',
    title: 'Search every source.',
    description: 'Find books across an open and extensible catalog.',
  },
  {
    src: '20260827-170503.webp',
    video: '/videos/book-overview.mp4',
    title: 'Know every detail.',
    description: 'See editions, descriptions, covers, and download options in one place.',
  },
  {
    src: '20260827-170446.webp',
    video: '/videos/library.mp4',
    title: 'Your whole library.',
    description: 'Keep local files, saved books, and current reads together in one calm place.',
  },
  {
    src: '20260827-170556.webp',
    video: '/videos/change-cover.mp4',
    title: 'Make every cover yours.',
    description: 'Choose the artwork that makes each book feel at home on your shelf.',
  },
  {
    src: '20260827-170532.webp',
    video: '/videos/library-sync.mp4',
    title: 'Your library, everywhere.',
    description: 'Keep your library, reading list, and progress aligned across your devices.',
  },
  {
    src: '20260827-170540.webp',
    video: '/videos/addons.mp4',
    title: 'Extend Tomeio.',
    description: 'Add new sources and reading tools from a growing extension catalog.',
  },
] as const

const providers = [
  {
    name: 'Open Library',
    logo: '/providers/open-library.png',
    href: 'https://openlibrary.org/',
  },
  {
    name: 'Project Gutenberg',
    logo: '/providers/project-gutenberg.png',
    href: 'https://www.gutenberg.org/',
  },
  {
    name: 'Google Drive',
    logo: '/providers/google-drive.svg',
    href: 'https://workspace.google.com/products/drive/',
  },
  { name: 'iCloud', logo: '/providers/icloud.png', href: 'https://www.icloud.com/' },
  {
    name: 'Readium React',
    logo: '/providers/readium-react.jpg',
    href: 'https://github.com/5-stones/react-native-readium',
  },
] as const

const communityExtensions = [
  {
    name: 'Hardcover',
    logo: '/community-extensions/hardcover.png',
    path: 'community/hardcover',
    description:
      'Discover weekly trends and curated vibes, search the catalog, and bring Hardcover ratings, covers, and reader reviews into Tomeio.',
  },
  {
    name: 'Moon+ Reader',
    logo: '/community-extensions/moon-reader.webp',
    path: 'community/moon-reader',
    description:
      'Open local books in Moon+ Reader and import books, reading progress, and statistics from an existing Moon+ backup.',
  },
  {
    name: 'Kobo eReader',
    logo: '/community-extensions/kobo.png',
    path: 'community/kobo',
    description:
      'Connect a Kobo eReader to Tomeio Sync for EPUB library metadata and reading progress.',
  },
] as const

const faqs = [
  {
    question: 'What can I do with Tomeio?',
    answer:
      'Discover, download, organize, and read EPUB and PDF books inside Tomeio, with customizable reading controls and synchronized progress.',
  },
  {
    question: 'Which platforms does Tomeio support?',
    answer:
      'Tomeio is currently available in beta for iOS and Android. You can join either beta from the links at the top of this page.',
  },
  {
    question: 'Where does Tomeio find books?',
    answer:
      'Tomeio brings together sources including Open Library and Project Gutenberg, your own cloud files, and additional discovery or reader integrations built by the community.',
  },
  {
    question: 'Can Tomeio keep my reading in sync?',
    answer:
      'Yes. Optional Tomeio Sync keeps your library, reading list, and furthest reading position aligned across signed-in iOS and Android devices. Supported progress also syncs with KOReader, Moon+ Reader, and Kobo eReaders.',
  },
  {
    question: 'Do my book files get uploaded to Tomeio Sync?',
    answer:
      'No. Tomeio Sync never stores your EPUB or PDF files. Files remain in the storage locations you choose and must be available locally before they can be opened.',
  },
  {
    question: 'Can the community add new sources and reading tools?',
    answer:
      'Yes. Tomeio provides a public TypeScript Add-on SDK for capability-based extensions, with community projects and examples available through the Tomeio GitHub organization.',
  },
] as const

const destinations = {
  testflight: import.meta.env.VITE_TESTFLIGHT_URL || 'https://testflight.apple.com/join/wCETmTr6',
  google: import.meta.env.VITE_GOOGLE_BETA_URL || '/android-beta',
  discord: import.meta.env.VITE_DISCORD_URL || 'https://discord.gg/T9d5gQQaK4',
  extensions:
    import.meta.env.VITE_EXTENSIONS_URL || 'https://github.com/tome-io/extensions/tree/main',
  addonSdk: import.meta.env.VITE_ADDON_SDK_URL || 'https://github.com/tome-io/addon-sdk',
  github: 'https://github.com/tome-io?view_as=public',
}

export const Route = createFileRoute('/')({
  head: () => seo({
    title: 'Tomeio — Your books, all together',
    description: 'Discover, download, organize, and enjoy books from extensible sources with Tomeio.',
    socialDescription: 'Discover, download, organize, and enjoy books from extensible sources.',
    path: '/',
  }),
  component: HomePage,
})

function HomePage() {
  const heroActionsRef = useRef<HTMLDivElement>(null)
  const [showFloatingNav, setShowFloatingNav] = useState(false)

  useEffect(() => {
    const heroActions = heroActionsRef.current

    if (!heroActions) return

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      if (!entry) return

      setShowFloatingNav(!entry.isIntersecting && entry.boundingClientRect.bottom < 16)
    })

    observer.observe(heroActions)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <FloatingNav visible={showFloatingNav} />
      <main>
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <img className="app-logo" src="/logo.png" alt="Tomeio" />
          <h1 id="hero-title">Tomeio</h1>
          <p>
            Discover, download, and keep your books together.
            <br />
            Tomeio brings open book sources, your reading list, and your local library into one
            calm place.
          </p>
          <div
            className="actions"
            ref={heroActionsRef}
            aria-label="Join the Tomeio beta and community"
          >
            <DestinationLink
              href={destinations.testflight}
              icon="testflight"
              label="Join TestFlight"
              variant="primary"
            />
            <DestinationLink
              href={destinations.google}
              icon="google-play"
              label="Join Google Beta"
              variant="primary"
            />
            <DestinationLink
              href={destinations.discord}
              icon="discord"
              label="Join Community Discord"
              variant="secondary"
            />
          </div>
        </section>

        <FeatureHub />
        <SyncEngine />
        <CommunityExtensions />
        <Faq />
        <SiteFooter />
      </main>
    </>
  )
}

function FloatingNav({ visible }: { visible: boolean }) {
  return (
    <header
      className={`floating-nav${visible ? ' floating-nav-visible' : ''}`}
      aria-hidden={!visible}
    >
      <nav className="floating-nav-inner" aria-label="Main navigation">
        <a className="floating-nav-brand" href="#top">
          <img src="/logo.png" alt="" width={40} height={40} />
          <span>Tomeio</span>
        </a>
        <ul className="floating-nav-links" role="list">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#sync">Sync</a>
          </li>
          <li>
            <a href="#extensions">Extensions</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <a
          className="floating-nav-cta"
          href={destinations.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubMark />
          GitHub
        </a>
      </nav>
    </header>
  )
}

function FeatureHub() {
  const railRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: featureSlides.length > 1,
  })

  const updateScrollState = useCallback(() => {
    const rail = railRef.current

    if (!rail) return

    const maxScrollLeft = rail.scrollWidth - rail.clientWidth
    const nextState = {
      canScrollLeft: rail.scrollLeft > 2,
      canScrollRight: rail.scrollLeft < maxScrollLeft - 2,
    }

    setScrollState((currentState) => (
      currentState.canScrollLeft === nextState.canScrollLeft
      && currentState.canScrollRight === nextState.canScrollRight
        ? currentState
        : nextState
    ))
  }, [])

  useEffect(() => {
    const rail = railRef.current

    if (!rail) return

    updateScrollState()
    rail.addEventListener('scroll', updateScrollState, { passive: true })

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(rail)

    return () => {
      rail.removeEventListener('scroll', updateScrollState)
      resizeObserver.disconnect()
    }
  }, [updateScrollState])

  const scrollRail = useCallback((direction: -1 | 1) => {
    const rail = railRef.current
    const slide = rail?.querySelector<HTMLElement>('[data-feature-slide]')

    if (!rail || !slide) return

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0
    rail.scrollBy({
      left: direction * (slide.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }, [])

  return (
    <section id="features" className="feature-hub" aria-label="A closer look at Tomeio">
      <div className="feature-hub-slider">
        <div
          className="feature-hub-rail"
          ref={railRef}
          role="region"
          tabIndex={0}
          aria-label="Tomeio feature previews. Swipe or scroll to browse."
        >
          {featureSlides.map((slide) => (
            <figure className="feature-card" data-feature-slide key={slide.src}>
              <h2>{slide.title}</h2>
              <div className="feature-device">
                <video
                  className="feature-device-screen"
                  src={slide.video}
                  poster={`/screenshots/${slide.src}`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  draggable={false}
                />
                <img
                  className="feature-device-frame"
                  src="/frame-iphone.png"
                  alt=""
                  aria-hidden="true"
                  width={1129}
                  height={2329}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <figcaption>{slide.description}</figcaption>
            </figure>
          ))}
        </div>
        <div className="feature-hub-controls">
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            aria-label="Show previous feature"
            disabled={!scrollState.canScrollLeft}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            aria-label="Show next feature"
            disabled={!scrollState.canScrollRight}
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <div className="powered-by">
        <p>Powered by</p>
        <ul className="powered-by-logos" role="list">
          {providers.map((provider) => (
            <li key={provider.name}>
              <a
                href={provider.href}
                aria-label={provider.name}
                title={provider.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={provider.logo}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SyncEngine() {
  return (
    <section id="sync" className="sync-engine" aria-labelledby="sync-engine-title">
      <header className="sync-engine-intro">
        <h2 id="sync-engine-title">Your reading, in sync.</h2>
        <p>
          Tomeio keeps your library, reading list, and progress aligned across iOS and Android.
          KOReader and Moon+ Reader each exchange progress with Tomeio through KOSync and built-in
          WebDAV, while Kobo eReaders join through built-in sync for library and progress.
        </p>
      </header>

      <div
        className="sync-engine-visual"
        role="img"
        aria-label="Tomeio Sync connects Tomeio on iOS and Android with KOReader, Moon+ Reader, and Kobo. Library changes flow between Tomeio devices and Kobo, reading-list changes flow between Tomeio devices, and each reader exchanges reading progress with Tomeio Sync."
      >
        <div className="sync-engine-grid" aria-hidden="true" />
        <svg
          className="sync-engine-connections"
          viewBox="0 0 1000 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sync-progress-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ff6a00" stopOpacity="0" />
              <stop offset="0.45" stopColor="#ff6a00" />
              <stop offset="1" stopColor="#ffc21c" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="sync-progress-gradient-kobo-desktop"
              gradientUnits="userSpaceOnUse"
              x1="180"
              y1="280"
              x2="405"
              y2="280"
            >
              <stop offset="0" stopColor="#ff6a00" stopOpacity="0" />
              <stop offset="0.45" stopColor="#ff6a00" />
              <stop offset="1" stopColor="#ffc21c" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="sync-progress-gradient-kobo-mobile"
              gradientUnits="userSpaceOnUse"
              x1="500"
              y1="67"
              x2="500"
              y2="228"
            >
              <stop offset="0" stopColor="#ff6a00" stopOpacity="0" />
              <stop offset="0.45" stopColor="#ff6a00" />
              <stop offset="1" stopColor="#ffc21c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sync-library-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff2cf" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff2cf" />
              <stop offset="1" stopColor="#ffc21c" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="sync-library-gradient-kobo-desktop"
              gradientUnits="userSpaceOnUse"
              x1="180"
              y1="280"
              x2="405"
              y2="280"
            >
              <stop offset="0" stopColor="#fff2cf" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff2cf" />
              <stop offset="1" stopColor="#ffc21c" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="sync-library-gradient-kobo-mobile"
              gradientUnits="userSpaceOnUse"
              x1="500"
              y1="67"
              x2="500"
              y2="228"
            >
              <stop offset="0" stopColor="#fff2cf" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff2cf" />
              <stop offset="1" stopColor="#ffc21c" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sync-reading-list-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff2cf" stopOpacity="0" />
              <stop offset="0.5" stopColor="#fff2cf" />
              <stop offset="1" stopColor="#fff2cf" stopOpacity="0" />
            </linearGradient>
            <filter id="sync-beam-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="sync-paths">
            <path d="M 180 157 C 300 165 340 225 405 258" />
            <path d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-kobo-desktop" d="M 180 280 C 300 280 340 280 405 280" />
            <path className="sync-kobo-mobile" d="M 500 67 C 500 130 500 190 500 228" />
            <path d="M 180 430 C 300 420 340 335 405 302" />
            <path d="M 820 430 C 700 420 660 335 595 302" />
          </g>

          <g className="sync-progress-beams" filter="url(#sync-beam-glow)">
            <path className="sync-beam sync-beam-one" pathLength="1" d="M 180 157 C 300 165 340 225 405 258" />
            <path className="sync-beam sync-beam-two" pathLength="1" d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-beam sync-beam-three sync-kobo-desktop" pathLength="1" d="M 180 280 C 300 280 340 280 405 280" />
            <path className="sync-beam sync-beam-three sync-kobo-mobile" pathLength="1" d="M 500 67 C 500 130 500 190 500 228" />
            <path className="sync-beam sync-beam-four" pathLength="1" d="M 180 430 C 300 420 340 335 405 302" />
            <path className="sync-beam sync-beam-five" pathLength="1" d="M 820 430 C 700 420 660 335 595 302" />
            <path className="sync-beam sync-beam-one sync-beam-reverse" pathLength="1" d="M 180 157 C 300 165 340 225 405 258" />
            <path className="sync-beam sync-beam-two sync-beam-reverse" pathLength="1" d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-beam sync-beam-three sync-beam-reverse sync-kobo-desktop" pathLength="1" d="M 180 280 C 300 280 340 280 405 280" />
            <path className="sync-beam sync-beam-three sync-beam-reverse sync-kobo-mobile" pathLength="1" d="M 500 67 C 500 130 500 190 500 228" />
            <path className="sync-beam sync-beam-four sync-beam-reverse" pathLength="1" d="M 180 430 C 300 420 340 335 405 302" />
            <path className="sync-beam sync-beam-five sync-beam-reverse" pathLength="1" d="M 820 430 C 700 420 660 335 595 302" />
          </g>

          <g className="sync-library-beams" filter="url(#sync-beam-glow)">
            <path className="sync-library-one" pathLength="1" d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-library-two sync-kobo-desktop" pathLength="1" d="M 180 280 C 300 280 340 280 405 280" />
            <path className="sync-library-two sync-kobo-mobile" pathLength="1" d="M 500 67 C 500 130 500 190 500 228" />
            <path className="sync-library-three" pathLength="1" d="M 820 430 C 700 420 660 335 595 302" />
            <path className="sync-library-one sync-library-reverse" pathLength="1" d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-library-two sync-library-reverse sync-kobo-desktop" pathLength="1" d="M 180 280 C 300 280 340 280 405 280" />
            <path className="sync-library-two sync-library-reverse sync-kobo-mobile" pathLength="1" d="M 500 67 C 500 130 500 190 500 228" />
            <path className="sync-library-three sync-library-reverse" pathLength="1" d="M 820 430 C 700 420 660 335 595 302" />
          </g>

          <g className="sync-reading-list-beams" filter="url(#sync-beam-glow)">
            <path className="sync-reading-list-one" pathLength="1" d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-reading-list-two" pathLength="1" d="M 820 430 C 700 420 660 335 595 302" />
            <path className="sync-reading-list-one sync-reading-list-reverse" pathLength="1" d="M 820 157 C 700 165 660 225 595 258" />
            <path className="sync-reading-list-two sync-reading-list-reverse" pathLength="1" d="M 820 430 C 700 420 660 335 595 302" />
          </g>
        </svg>

        <SyncNode
          className="sync-node-koreader"
          icon="koreader"
          name="KOReader"
        />
        <SyncNode
          className="sync-node-android"
          icon="android"
          name="Tomeio for Android"
        />
        <SyncNode
          className="sync-node-kobo"
          icon="kobo"
          name="Kobo eReader"
        />
        <SyncNode
          className="sync-node-moonreader"
          icon="moon-reader"
          name="Moon+ Reader"
        />
        <SyncNode
          className="sync-node-ios"
          icon="ios"
          name="Tomeio for iOS"
        />

        <div className="sync-engine-hub">
          <div className="sync-engine-hub-card">
            <img src="/logo.png" alt="" width={46} height={46} />
            <span>Tomeio Sync</span>
          </div>
        </div>
      </div>

      <div className="sync-engine-footer">
        <div className="sync-engine-legend" aria-label="Diagram legend">
          <span><i className="sync-legend-progress" />Reading progress</span>
          <span><i className="sync-legend-library" />Library</span>
          <span><i className="sync-legend-reading-list" />Reading list</span>
        </div>
        <p>Book files stay on your devices.</p>
      </div>
    </section>
  )
}

function SyncNode({
  className,
  icon,
  name,
}: {
  className: string
  icon: 'android' | 'ios' | 'kobo' | 'koreader' | 'moon-reader'
  name: string
}) {
  return (
    <div className={`sync-node ${className}`}>
      <span className={`sync-node-mark sync-node-mark-${icon}`} aria-hidden="true">
        <SyncNodeIcon name={icon} />
      </span>
      <span className="sync-node-copy">
        <strong>{name}</strong>
      </span>
    </div>
  )
}

function SyncNodeIcon({ name }: { name: 'android' | 'ios' | 'kobo' | 'koreader' | 'moon-reader' }) {
  if (name === 'koreader') {
    return <img src="/sync-icons/koreader.png" alt="" width={34} height={34} />
  }

  if (name === 'moon-reader') {
    return <img src="/community-extensions/moon-reader.webp" alt="" width={34} height={34} />
  }

  if (name === 'kobo') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" />
        <path className="sync-kobo-letter" d="M7.5 5.5h3v5.2l4.6-5.2h3.7l-5.2 5.8 5.6 7.2h-3.8l-3.9-5.2-1 1.1v4.1h-3Z" />
      </svg>
    )
  }

  if (name === 'android') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.44 5.56c-.68 1.16-1.36 2.33-2.03 3.5l-.11-.05a12.4 12.4 0 0 0-4.42-.78c-1.86.01-3.35.46-4.26.82L5.6 5.56a1.15 1.15 0 0 0-.14-.19c-.33-.36-.91-.49-1.38-.2-.48.28-.72.93-.39 1.5l1.95 3.36c-.02.01-.5.26-1.4 1.02C2.9 12.18.45 14.77 0 18.99h24a12.1 12.1 0 0 0-.75-3.07 12.02 12.02 0 0 0-4.87-5.87l1.97-3.38c.2-.37.18-.8-.01-1.12a1.1 1.1 0 0 0-.85-.54c-.52-.05-.94.32-1.05.55Zm-.04 8.46c.4.59.32 1.33-.16 1.65-.48.32-1.19.1-1.58-.5-.4-.59-.32-1.33.16-1.65.47-.31 1.18-.1 1.58.5Zm-11.2-.5c.48.32.56 1.06.16 1.65-.39.6-1.1.82-1.58.5-.48-.32-.55-1.06-.16-1.65.4-.6 1.11-.81 1.59-.5Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.15 6.9c-.95 0-2.41-1.08-3.96-1.04-2.04.02-3.91 1.18-4.96 3.01-2.12 3.68-.55 9.1 1.52 12.09 1.01 1.45 2.2 3.09 3.79 3.04 1.52-.07 2.09-.99 3.94-.99 1.83 0 2.35.99 3.96.95 1.64-.03 2.68-1.48 3.68-2.95 1.15-1.69 1.63-3.33 1.66-3.42-.04-.01-3.18-1.22-3.22-4.85-.03-3.04 2.48-4.5 2.6-4.56-1.43-2.09-3.63-2.32-4.4-2.38-2-.15-3.67 1.1-4.6 1.1Zm3.38-3.07C16.37 2.82 16.93 1.4 16.78 0c-1.21.05-2.67.8-3.54 1.82-.78.9-1.45 2.34-1.27 3.71 1.34.1 2.72-.69 3.56-1.7Z" />
    </svg>
  )
}

function CommunityExtensions() {
  const extensionsBase = destinations.extensions.replace(/\/$/, '')

  return (
    <section
      id="extensions"
      className="community-extensions"
      aria-labelledby="community-extensions-title"
    >
      <header className="community-extensions-intro">
        <h2 id="community-extensions-title">Built by the community.</h2>
        <p className="community-extensions-lead">
          New sources and reading tools, reviewed for Tomeio.
        </p>
        <p className="community-extensions-description">
          The public TypeScript SDK gives developers a capability-based way to add discovery,
          search, reviews, book sources, and reader integrations while Tomeio keeps control of the
          interface and permissions.
        </p>
        <a
          className="community-extensions-cta"
          href={destinations.addonSdk}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubMark />
          Explore the Add-on SDK
        </a>
      </header>

      <div className="community-extensions-list">
        {communityExtensions.map((extension) => (
          <article className="community-extension" key={extension.name}>
            <div className="community-extension-panel">
              <img
                src={extension.logo}
                alt={`${extension.name} logo`}
                width={128}
                height={128}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="community-extension-copy">
              <h3>
                <a
                  href={`${extensionsBase}/${extension.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {extension.name}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </h3>
              <p>{extension.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">Your questions, answered.</h2>
      <div className="faq-list">
        {faqs.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              <span>{item.question}</span>
              <span className="faq-toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="faq-answer">
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
    </svg>
  )
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.01a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

type DestinationIconName = 'testflight' | 'google-play' | 'discord'

function DestinationLink({
  href,
  icon,
  label,
  variant,
}: {
  href?: string
  icon: DestinationIconName
  label: string
  variant: 'primary' | 'secondary'
}) {
  const className = `button button-${variant}`
  const content = (
    <>
      <DestinationIcon name={icon} />
      {label}
    </>
  )

  if (!href) {
    return (
      <span className={`${className} button-disabled`} aria-disabled="true" title="Invite link coming soon">
        {content}
      </span>
    )
  }

  const external = href.startsWith('http://') || href.startsWith('https://')

  return (
    <a
      className={className}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {content}
    </a>
  )
}

function DestinationIcon({ name }: { name: DestinationIconName }) {
  if (name === 'testflight') {
    return (
      <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 10.9c-1.02-1.47-1.44-3.05-1.18-4.75C11.05 4.61 11.62 3 12 3s.95 1.61 1.18 3.15c.26 1.7-.16 3.28-1.18 4.75Z" />
        <path d="M12 10.9c-1.02-1.47-1.44-3.05-1.18-4.75C11.05 4.61 11.62 3 12 3s.95 1.61 1.18 3.15c.26 1.7-.16 3.28-1.18 4.75Z" transform="rotate(120 12 12)" />
        <path d="M12 10.9c-1.02-1.47-1.44-3.05-1.18-4.75C11.05 4.61 11.62 3 12 3s.95 1.61 1.18 3.15c.26 1.7-.16 3.28-1.18 4.75Z" transform="rotate(240 12 12)" />
        <circle cx="12" cy="12" r="1.35" />
      </svg>
    )
  }

  if (name === 'google-play') {
    return (
      <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m22.018 13.298-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594ZM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924Zm12.207 10.065 3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973Zm0 2.067-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21Z" />
      </svg>
    )
  }

  return (
    <svg className="button-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.618-1.25.077.077 0 0 0-.078-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.1 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 12.3 12.3 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.007.128c-.598.343-1.22.645-1.873.891a.077.077 0 0 0-.041.107c.361.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.003-3.03a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.029ZM8.02 15.331c-1.182 0-2.157-1.086-2.157-2.419s.956-2.419 2.157-2.419c1.211 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419s.955-2.419 2.157-2.419c1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419Z" />
    </svg>
  )
}
