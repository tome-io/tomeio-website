const origin = 'https://tomeio.app'

export const socialImages = {
  large: {
    url: `${origin}/assets/social/tomeio-large.jpg`,
    width: 1200,
    height: 630,
    alt: 'Tomeio book discovery app',
  },
  small: {
    url: `${origin}/assets/social/tomeio-small.jpg`,
    width: 1024,
    height: 683,
    alt: 'Tomeio logo',
  },
} as const

interface SeoOptions {
  title: string
  description: string
  path: string
  socialDescription?: string
}

export function seo({ title, description, path, socialDescription = description }: SeoOptions) {
  const canonical = path === '/' ? `${origin}/` : `${origin}${path}`

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: socialDescription },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: 'Tomeio' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: socialImages.large.url },
      { property: 'og:image:secure_url', content: socialImages.large.url },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: String(socialImages.large.width) },
      { property: 'og:image:height', content: String(socialImages.large.height) },
      { property: 'og:image:alt', content: socialImages.large.alt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: socialDescription },
      { name: 'twitter:image', content: socialImages.large.url },
      { name: 'twitter:image:alt', content: socialImages.large.alt },
    ],
    links: [{ rel: 'canonical', href: canonical }],
  }
}
