import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { SiteFooter } from '../components/legal-page'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/android-beta')({
  validateSearch: (search: Record<string, unknown>) => ({
    submitted: search.submitted === 'true',
  }),
  head: () => seo({
    title: 'Join the Android beta — Tomeio',
    description: 'Request access to the Tomeio Android beta on Google Play.',
    path: '/android-beta',
  }),
  component: AndroidBetaPage,
})

function AndroidBetaPage() {
  const { submitted } = Route.useSearch()
  const submissionStartedRef = useRef(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (submissionStartedRef.current) {
      event.preventDefault()
      return
    }

    submissionStartedRef.current = true
    setIsSubmitting(true)
  }

  return (
    <main className="beta-main">
      <header className="beta-header">
        <a className="legal-brand" href="/" aria-label="Tomeio home">
          <img src="/logo.png" alt="" />
          <span>Tomeio</span>
        </a>
      </header>

      <article className="beta-card">
        <div className="beta-intro">
          <p className="beta-eyebrow">Android beta</p>
          <h1>Read with us before release.</h1>
          <p>
            Request access to the Tomeio beta on Google Play. Use the Google account connected to
            Google Play so we can add you to the tester list and send you the installation link.
          </p>
        </div>

        {submitted ? (
          <div className="beta-success" role="status">
            <strong>Your request has been sent.</strong>
            <p>We’ll email your Google Play address once you have been added to the beta.</p>
            <a className="button button-secondary" href="/">Back to Tomeio</a>
          </div>
        ) : (
          <form
            className="beta-form"
            action="https://formsubmit.co/contact@tomeio.app"
            method="post"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="New Tomeio Android beta request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://tomeio.app/android-beta?submitted=true" />
            <input type="hidden" name="_url" value="https://tomeio.app/android-beta" />
            <input
              className="beta-honeypot"
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <label>
              <span>Full name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>

            <label>
              <span>Google Play email address</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
              />
              <small>Use the Google account signed in to Google Play on your Android device.</small>
            </label>

            <label>
              <span>Anything else? <em>(optional)</em></span>
              <textarea name="message" rows={4} />
            </label>

            <p className="beta-disclosure">
              We’ll use these details only to manage beta access. FormSubmit processes the form and
              emails it to <a href="mailto:contact@tomeio.app">contact@tomeio.app</a>. See our{' '}
              <a href="/privacy">Privacy Policy</a>.
            </p>

            <button
              className="button button-primary beta-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending request…' : 'Request beta access'}
            </button>
          </form>
        )}
      </article>

      <SiteFooter />
    </main>
  )
}
