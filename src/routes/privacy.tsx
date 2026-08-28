import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '../components/legal-page'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/privacy')({
  head: () => seo({
    title: 'Privacy Policy — Tomeio',
    description: 'How Tomeio handles local library data, reading progress, sync, and extensions.',
    path: '/privacy',
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Tomeio is designed to work without an account or a Tomeio-operated backend. Your library remains under your control."
      updated="28 August 2026"
    >
      <section>
        <h2>1. Scope</h2>
        <p>
          This Privacy Policy applies to the Tomeio mobile application and the Tomeio website.
          “Tomeio”, “we”, and “us” refer to the Tomeio project. Tomeio is a free book discovery,
          download, library, and reading-progress utility.
        </p>
      </section>

      <section>
        <h2>2. What Tomeio does not collect</h2>
        <p>
          Tomeio does not require or provide user accounts. We do not operate an application
          backend that receives your library, reading history, searches, downloaded books, or
          extension configuration. Tomeio does not include advertising, behavioural analytics,
          tracking SDKs, or in-app payments. We do not sell personal information.
        </p>
      </section>

      <section>
        <h2>3. Data stored on your device</h2>
        <p>Tomeio stores information locally so the app can work, including:</p>
        <ul>
          <li>your library, reading list, book metadata, file locations, and downloaded files;</li>
          <li>reading progress, read status, reading time, and related timestamps;</li>
          <li>app settings, selected folders, installed extensions, and provider preferences;</li>
          <li>cached catalog responses, covers, extension manifests, and extension bundles; and</li>
          <li>extension configuration and extension-scoped data.</li>
        </ul>
        <p>
          Password-type extension fields are stored using the operating system’s secure storage
          where available. Other extension configuration is stored in the app’s local storage.
          Tomeio can also read files and Moon+ Reader metadata from folders you explicitly select.
          Folder access is limited to locations you grant through the operating system picker.
        </p>
      </section>

      <section>
        <h2>4. Optional progress sync</h2>
        <p>
          On supported Android devices, you can choose a shared folder, including a folder provided
          by Google Drive, for reading-progress sync. Tomeio reads and writes small JSON files in
          that folder. Those files can contain a randomly generated installation identifier, book
          title, author, format, progress, read status, and timestamps. Tomeio does not upload the
          contents of your books as part of progress sync.
        </p>
        <p>
          Android’s system document picker mediates this access. Tomeio does not receive your Google
          password and does not operate the Google Drive account. Files stored in Google Drive or
          another selected provider are handled under that provider’s terms and privacy policy.
          Sync is optional and can be disabled in Tomeio’s settings.
        </p>
      </section>

      <section>
        <h2>5. Book sources and network requests</h2>
        <p>
          Tomeio connects directly from your device to book sources such as Open Library, Project
          Gutenberg, and Internet Archive. Searches may send the query, page, language, format, and
          selected book identifiers needed to return results or downloads. These services also
          receive ordinary network information such as your IP address and user agent. Tomeio does
          not receive a copy through a Tomeio server.
        </p>
        <p>
          Each source handles information under its own policies. Relevant policies include the
          <a href="https://archive.org/about/terms.php" target="_blank" rel="noopener noreferrer"> Internet Archive terms</a>,
          <a href="https://www.gutenberg.org/policy/privacy_policy.html" target="_blank" rel="noopener noreferrer"> Project Gutenberg privacy policy</a>, and
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>6. Extensions</h2>
        <p>
          You may install third-party extensions from a repository or manifest URL. Tomeio stores
          the extension’s manifest, code bundle, settings, and extension-scoped data locally. An
          extension can send requests only to HTTPS hosts declared in its manifest, but those hosts
          and the extension author may process the information you provide to the extension. This
          can include searches, book identifiers, configuration, credentials, and response data.
        </p>
        <p>
          Third-party extensions are independently operated and are not reviewed or controlled by
          Tomeio. Review an extension and its permissions before installing or configuring it.
          Removing an extension removes its Tomeio-managed configuration, cached bundle, and
          extension-scoped storage from the app.
        </p>
      </section>

      <section>
        <h2>7. Website data</h2>
        <p>
          The Tomeio website does not use advertising cookies or analytics scripts. Its hosting
          provider may process standard connection information, such as IP address, browser type,
          requested page, and request time, to deliver and protect the website. That processing is
          governed by the hosting provider’s own privacy terms.
        </p>
        <p>
          If you request Android beta access, we receive the full name, Google Play email address,
          and optional message you submit. We use this information only to add testers, manage beta
          access, provide related support, and contact participants. FormSubmit processes the form
          on our behalf and forwards the submission to our email provider. Those services may also
          process ordinary connection and delivery information under their own privacy terms.
        </p>
      </section>

      <section>
        <h2>8. Retention and deletion</h2>
        <p>
          Because Tomeio has no accounts or application backend, there is no server-side Tomeio
          profile to request or delete. You control data stored on your device and in folders you
          select. You can remove books, reading-list entries, progress records, extensions, and
          folder connections from the app where those controls are available.
        </p>
        <p>
          We keep Android beta requests only while they are needed to manage beta access and
          related support. You may ask us to correct or delete your request by emailing
          <a href="mailto:contact@tomeio.app"> contact@tomeio.app</a>.
        </p>
        <p>
          Uninstalling Tomeio generally removes its app-private database and settings. Files saved
          in user-selected folders, including downloads and sync files, remain until you delete them
          using your file or cloud-storage provider. Secure extension values may remain in the iOS
          Keychain after uninstall and can reappear if Tomeio is reinstalled with the same bundle
          identifier; remove the extension configuration before uninstalling if you want Tomeio to
          request deletion of those values.
        </p>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>
          Tomeio limits custom extension requests to declared HTTPS origins, checks downloaded
          script extensions against their declared SHA-256 digest, and runs script extensions in a
          restricted environment. No software or storage method is completely secure. You are
          responsible for your device security, cloud-storage account, selected folders, and the
          extensions you choose to install.
        </p>
      </section>

      <section>
        <h2>10. Children</h2>
        <p>
          Tomeio does not provide accounts, advertising, social profiles, or a mechanism for us to
          knowingly collect personal information from children through a Tomeio server. Parents and
          guardians should supervise the book sources and extensions used by children.
        </p>
      </section>

      <section>
        <h2>11. Changes and contact</h2>
        <p>
          We may update this policy when Tomeio’s features or data practices change. The current
          version and its effective date will remain available on this page.
        </p>
        <p>
          For a private privacy question or request, email
          <a href="mailto:contact@tomeio.app"> contact@tomeio.app</a>. For a public product issue,
          use the
          <a href="https://github.com/tome-io/core/issues/new" target="_blank" rel="noopener noreferrer"> Tomeio core repository</a>.
          Do not include passwords, access tokens, book files, or other sensitive information in a
          public issue.
        </p>
      </section>
    </LegalPage>
  )
}
