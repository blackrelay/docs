# Black Relay Docs

Documentation site for the Black Relay public API at `docs.blackrelay.network`.

The site uses Astro Starlight because this repo is documentation-first: API reference, response shapes, provenance rules, export details and operational status routes.

## Development

Install dependencies:
```sh
pnpm install
```

Windows:
```powershell
pnpm install
```

Run checks and build:
```sh
pnpm check
pnpm build
```

Windows:
```powershell
pnpm check
pnpm build
```

Run locally:
```sh
pnpm dev
```

Windows:
```powershell
pnpm dev
```

## Deployment

Build output is written to `dist` for Cloudflare Pages.
```sh
pnpm build
pnpm pages:deploy
```

Windows:
```powershell
pnpm build
pnpm pages:deploy
```
