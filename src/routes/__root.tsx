import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import { socialImages } from '../lib/seo'
import appCss from '../styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#100b08' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/logo.png' },
      { rel: 'apple-touch-icon', href: '/logo.png' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <meta property="og:image" content={socialImages.small.url} />
        <meta property="og:image:secure_url" content={socialImages.small.url} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={String(socialImages.small.width)} />
        <meta property="og:image:height" content={String(socialImages.small.height)} />
        <meta property="og:image:alt" content={socialImages.small.alt} />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
