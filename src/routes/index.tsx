import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useEffect, useRef } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'
import { SiteFooter } from '../components/legal-page'
import { seo } from '../lib/seo'

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
  google: import.meta.env.VITE_GOOGLE_BETA_URL || '/android-beta',
  discord: import.meta.env.VITE_DISCORD_URL || 'https://discord.gg/T9d5gQQaK4',
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
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <img className="app-logo" src="/logo.png" alt="Tomeio" />
        <h1 id="hero-title">Tomeio</h1>
        <p>
          Discover, download, and keep your books together.
          <br />
          Tomeio brings open book sources, your reading list, and your local library into one calm
          place.
        </p>
        <div className="actions" aria-label="Join the Tomeio beta and community">
          <DestinationLink href={destinations.testflight} label="Join TestFlight" variant="primary" />
          <DestinationLink href={destinations.google} label="Join Google Beta" variant="primary" />
          <DestinationLink href={destinations.discord} label="Join Community Discord" variant="secondary" />
        </div>
      </section>

      <section className="showcase" aria-label="Tomeio app screenshots">
        <ScreenshotMarquee />
      </section>
      <SiteFooter />
    </main>
  )
}

function ScreenshotMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const loopWidthRef = useRef(0)
  const pausedRef = useRef(false)
  const draggingRef = useRef({ active: false, pointerId: -1, startX: 0, startScroll: 0 })

  const setLoopedScroll = useCallback((nextScroll: number) => {
    const marquee = marqueeRef.current
    const loopWidth = loopWidthRef.current

    if (!marquee || loopWidth <= 0) return

    marquee.scrollLeft = ((nextScroll % loopWidth) + loopWidth) % loopWidth
  }, [])

  useEffect(() => {
    const marquee = marqueeRef.current
    const track = marquee?.querySelector<HTMLElement>('.marquee-track')
    const firstGroup = track?.querySelector<HTMLElement>('.marquee-group')

    if (!marquee || !track || !firstGroup) return

    const updateLoopWidth = () => {
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
      loopWidthRef.current = firstGroup.getBoundingClientRect().width + gap
    }

    updateLoopWidth()
    const resizeObserver = new ResizeObserver(updateLoopWidth)
    resizeObserver.observe(firstGroup)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let previousFrame = performance.now()
    let animationFrame = 0

    const animate = (frame: number) => {
      const elapsed = Math.min(frame - previousFrame, 50)
      previousFrame = frame

      if (!pausedRef.current && !reducedMotion.matches) {
        setLoopedScroll(marquee.scrollLeft + elapsed * 0.045)
      }

      animationFrame = window.requestAnimationFrame(animate)
    }

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return

      event.preventDefault()
      const scale = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? marquee.clientWidth
          : 1
      setLoopedScroll(marquee.scrollLeft + event.deltaX * scale)
    }

    const pause = () => {
      pausedRef.current = true
    }

    const resume = () => {
      if (!draggingRef.current.active) pausedRef.current = false
    }

    marquee.addEventListener('wheel', handleWheel, { passive: false })
    marquee.addEventListener('mouseenter', pause)
    marquee.addEventListener('mouseleave', resume)
    animationFrame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      marquee.removeEventListener('wheel', handleWheel)
      marquee.removeEventListener('mouseenter', pause)
      marquee.removeEventListener('mouseleave', resume)
    }
  }, [setLoopedScroll])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return

    const marquee = event.currentTarget
    draggingRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: marquee.scrollLeft,
    }
    pausedRef.current = true
    marquee.setPointerCapture(event.pointerId)
    marquee.classList.add('is-dragging')
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = draggingRef.current

    if (!drag.active || drag.pointerId !== event.pointerId) return

    event.preventDefault()
    setLoopedScroll(drag.startScroll + drag.startX - event.clientX)
  }

  const endPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const marquee = event.currentTarget

    if (!draggingRef.current.active || draggingRef.current.pointerId !== event.pointerId) return

    draggingRef.current.active = false
    marquee.classList.remove('is-dragging')
    if (marquee.hasPointerCapture(event.pointerId)) marquee.releasePointerCapture(event.pointerId)
    pausedRef.current = marquee.matches(':hover')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

    event.preventDefault()
    setLoopedScroll(
      (marqueeRef.current?.scrollLeft ?? 0) + (event.key === 'ArrowLeft' ? -180 : 180),
    )
  }

  return (
    <div
      className="marquee"
      ref={marqueeRef}
      role="region"
      tabIndex={0}
      aria-label="Tomeio screenshots. Scroll or drag to browse."
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endPointerDrag}
      onPointerCancel={endPointerDrag}
      onKeyDown={handleKeyDown}
    >
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" aria-hidden={group === 1} key={group}>
            {screenshots.map((screenshot, index) => (
              <img
                className="screenshot"
                src={`/screenshots/${screenshot.src}`}
                alt={group === 0 ? screenshot.alt : ''}
                width={screenshot.device === 'tablet' ? 2560 : 1080}
                height={screenshot.device === 'tablet' ? 1600 : 2400}
                loading={index < 3 && group === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable={false}
                key={screenshot.src}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
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

  const external = href.startsWith('http://') || href.startsWith('https://')

  return (
    <a
      className={className}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {label}
    </a>
  )
}
