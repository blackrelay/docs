import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.blackrelay.network",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: "Black Relay Docs",
      description:
        "Practical notes for building around EVE Frontier public data, Sui reads, wallet identity, static client data and the Black Relay API.",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preload",
            href: "/fonts/space-grotesk-latin-wght-normal.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preload",
            href: "/fonts/jetbrains-mono-latin-wght-normal.woff2",
            as: "font",
            type: "font/woff2",
            crossorigin: "anonymous",
          },
        },
      ],
      customCss: ["./src/styles/starlight.css"],
      favicon: "/logo.png",
      components: {
        ThemeProvider: "./src/components/Empty.astro",
        ThemeSelect: "./src/components/Empty.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        TableOfContents: "./src/components/Empty.astro",
        MobileTableOfContents: "./src/components/Empty.astro",
      },
      editLink: {
        baseUrl: "https://github.com/blackrelay/docs/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "Black Relay on GitHub",
          href: "https://github.com/blackrelay",
        },
      ],
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", slug: "index" },
            { label: "Why use Black Relay", slug: "why-use-black-relay" },
            { label: "Source map", slug: "source-map" },
            { label: "Known stale assumptions", slug: "known-stale-assumptions" },
          ],
        },
        {
          label: "Frontier builder guide",
          items: [
            {
              label: "Builder orientation",
              slug: "frontier/builder-orientation",
            },
            {
              label: "Environment and identity",
              slug: "frontier/environment-and-identity",
            },
            {
              label: "Development workflows",
              slug: "frontier/development-workflows",
            },
            {
              label: "Identifiers and data model",
              slug: "frontier/identifiers-data-model",
            },
            {
              label: "World, chain and client",
              slug: "frontier/world-chain-client",
            },
            { label: "World upgrades", slug: "frontier/world-upgrades" },
            {
              label: "Sui CLI and GraphQL",
              slug: "frontier/sui-cli-graphql",
            },
            {
              label: "Events and indexing",
              slug: "frontier/events-and-indexing",
            },
            { label: "Smart Assemblies", slug: "frontier/smart-assemblies" },
            { label: "Programmable SSUs", slug: "frontier/programmable-ssus" },
            {
              label: "Gates, turrets and routes",
              slug: "frontier/gates-turrets-routes",
            },
            { label: "Rifts and locations", slug: "frontier/rifts-and-locations" },
            {
              label: "Static client data",
              slug: "frontier/static-client-data",
            },
            {
              label: "Tooling and references",
              slug: "frontier/tooling-references",
            },
            { label: "Reference links", slug: "frontier/reference-links" },
            {
              label: "Testing and localnet",
              slug: "frontier/testing-localnet",
            },
            {
              label: "dApp Architecture",
              slug: "frontier/dapp-architecture",
            },
            {
              label: "Deployment and operations",
              slug: "frontier/deployment-operations",
            },
            {
              label: "Debugging and help",
              slug: "frontier/debugging-and-help",
            },
            {
              label: "Move security checklist",
              slug: "frontier/move-security-checklist",
            },
            { label: "Builder safety", slug: "frontier/builder-safety" },
          ],
        },
        {
          label: "API reference",
          items: [
            { label: "API quickstart", slug: "quickstart" },
            { label: "Runnable examples", slug: "examples" },
            { label: "Responses", slug: "responses" },
            { label: "Routes", slug: "routes" },
            { label: "Current collections", slug: "collections" },
            { label: "Provenance", slug: "provenance" },
            { label: "Events and killmails", slug: "events-killmails" },
            { label: "Operations and exports", slug: "operations-exports" },
          ],
        },
      ],
    }),
  ],
});
