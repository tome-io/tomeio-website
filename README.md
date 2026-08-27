# Tomeio website

The lightweight landing page for Tomeio, built with the same TanStack Start, React, Vite, Tailwind CSS, Bun, and Cloudflare Workers stack as the Finchy website.

## Development

```sh
bun install
cp .env.example .env.local
bun run dev
```

Set the beta and Discord destinations in `.env.local`. Missing destinations remain visibly disabled instead of linking somewhere incorrect.

## Build and deploy

```sh
bun run build
bun run deploy
```
