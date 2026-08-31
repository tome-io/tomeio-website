# Tomeio website

The lightweight landing page for Tomeio, built with the same TanStack Start, React, Vite, Tailwind CSS, Bun, and Cloudflare Workers stack as the Finchy website.

The project requires Bun 1.4.x because its text lockfile uses lockfile version 2.

## Development

```sh
bun install
cp .env.example .env.local
bun run dev
```

Set the TestFlight, Discord, community extensions, and Add-on SDK destinations in `.env.local`. The Google beta button defaults to the website's `/android-beta` signup form; `VITE_GOOGLE_BETA_URL` can override it with a direct external destination.

## Build and deploy

```sh
bun run build
bun run deploy
```
