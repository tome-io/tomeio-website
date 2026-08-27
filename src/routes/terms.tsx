import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/legal-page'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms of Use — Tomeio' },
      {
        name: 'description',
        content: 'Terms governing use of the Tomeio application, website, sources, and extensions.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="Tomeio gives you tools for managing a book library. You remain in control of the sources, extensions, files, and services you choose to use."
      updated="27 August 2026"
    >
      <section>
        <h2>1. Acceptance</h2>
        <p>
          By downloading, accessing, or using Tomeio, you agree to these Terms of Use. If you do not
          agree, do not use Tomeio. “Tomeio”, “we”, and “us” refer to the Tomeio project.
        </p>
      </section>

      <section>
        <h2>2. The service</h2>
        <p>
          Tomeio is a free application that helps you discover books, download compatible files,
          organize a local library and reading list, open books in compatible readers, and
          optionally synchronize reading progress through a folder you select. Tomeio does not
          provide user accounts, paid content, cloud storage, or a guarantee that any particular
          source, file, format, extension, or external reader will remain available.
        </p>
      </section>

      <section>
        <h2>3. Your files and storage</h2>
        <p>
          You are responsible for your book files, backups, selected folders, device, and cloud
          storage. Tomeio may create, read, update, index, or delete data only as needed for features
          you use and permissions you grant. Removing Tomeio does not necessarily remove downloads
          or sync files saved outside its app-private storage.
        </p>
      </section>

      <section>
        <h2>4. Book sources and copyright</h2>
        <p>
          Tomeio is a client, not a publisher, bookseller, host, or rights-clearance service. Book
          metadata, covers, files, and links are supplied by third-party sources. The presence of a
          result or download link does not mean Tomeio owns, licenses, endorses, or has verified the
          legality, accuracy, safety, or availability of that content in your location.
        </p>
        <p>
          You are responsible for determining whether you may access, download, copy, store,
          convert, share, or read a particular work. Use Tomeio only in accordance with applicable
          law, the rights holder’s permissions, and the terms of the source providing the content.
          Do not use Tomeio to infringe copyright or other rights.
        </p>
      </section>

      <section>
        <h2>5. Built-in and third-party extensions</h2>
        <p>
          Tomeio includes built-in extensions and allows you to install third-party extensions from
          locations you provide. Third-party extensions are independently developed, are not
          reviewed by Tomeio, and may change or stop working without notice. Their authors and
          services are responsible for their own code, content, availability, policies, and data
          practices.
        </p>
        <p>
          You install and use custom extensions at your own discretion. You are responsible for
          reviewing their source, declared hosts, configuration requirements, credentials, terms,
          and privacy practices. Tomeio is not responsible for content obtained through a custom
          extension or for loss, misuse, suspension, security incidents, or other consequences
          caused by an extension or its external services.
        </p>
      </section>

      <section>
        <h2>6. Third-party services</h2>
        <p>
          Tomeio can interact with services including Google Drive, Android document providers,
          Open Library, Project Gutenberg, Internet Archive, GitHub, Moon+ Reader, and services
          selected by extensions. Those services are governed by their own terms and privacy
          policies. Tomeio is not affiliated with or endorsed by them unless expressly stated.
        </p>
      </section>

      <section>
        <h2>7. Acceptable use</h2>
        <p>You must not use Tomeio to:</p>
        <ul>
          <li>violate applicable law or another person’s rights;</li>
          <li>distribute malware, harmful extensions, or deceptive manifests;</li>
          <li>bypass access controls, digital rights management, or service restrictions;</li>
          <li>gain unauthorized access to a device, account, source, or network; or</li>
          <li>interfere with Tomeio, its users, or third-party services.</li>
        </ul>
      </section>

      <section>
        <h2>8. Open-source software</h2>
        <p>
          Portions of Tomeio may be distributed under open-source licences. Those licences govern
          your use of the corresponding source code and take precedence over these Terms where they
          expressly grant different rights.
        </p>
      </section>

      <section>
        <h2>9. Updates and availability</h2>
        <p>
          We may update, change, suspend, or discontinue Tomeio or any feature at any time. We may
          change built-in sources or restrict an integration when needed for security, reliability,
          legal compliance, or source-policy compliance. We do not promise support, compatibility,
          uptime, or continued availability.
        </p>
      </section>

      <section>
        <h2>10. Disclaimer of warranties</h2>
        <p>
          To the fullest extent permitted by law, Tomeio is provided “as is” and “as available”,
          without warranties of any kind, whether express, implied, or statutory. We do not warrant
          that Tomeio will be uninterrupted, error-free, secure, compatible with every device or
          file, or that source metadata and content will be accurate or lawful.
        </p>
      </section>

      <section>
        <h2>11. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Tomeio and its contributors will not be liable for
          indirect, incidental, special, consequential, or punitive loss, or for loss of data,
          content, access, profits, or goodwill arising from your use of Tomeio, a third-party
          extension, a book source, an external reader, or a storage provider. Nothing in these Terms
          excludes liability that cannot legally be excluded.
        </p>
      </section>

      <section>
        <h2>12. Changes and contact</h2>
        <p>
          We may update these Terms as Tomeio changes. Continued use after revised Terms take effect
          means you accept the revised Terms. The current version and update date will be available
          on this page.
        </p>
        <p>
          Questions about these Terms can be submitted through the
          <a href="https://github.com/tome-io/core/issues/new" target="_blank" rel="noopener noreferrer"> Tomeio core issue tracker</a>.
          Do not include sensitive information in a public issue.
        </p>
      </section>
    </LegalPage>
  )
}
