# Black Relay Docs

Documentation site for Black Relay at `docs.blackrelay.network`. The docs first explain EVE Frontier development boundaries across wallets, Sui reads, world contracts, static-client data, Smart Assemblies, programmable SSUs, dApp architecture, testing and operations. Black Relay API guidance is also included where a public source-aware read layer is the right tool.

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
