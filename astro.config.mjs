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
        "EVE Frontier builder workflows, Registry provenance model and Black Relay public API reference.",
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
            { label: "Why Use Black Relay", slug: "why-use-black-relay" },
            { label: "Source Map", slug: "source-map" },
          ],
        },
        {
          label: "Frontier Builder Guide",
          items: [
            {
              label: "Builder Orientation",
              slug: "frontier/builder-orientation",
            },
            {
              label: "Environment And Identity",
              slug: "frontier/environment-and-identity",
            },
            {
              label: "Development Workflows",
              slug: "frontier/development-workflows",
            },
            {
              label: "Identifiers And Data Model",
              slug: "frontier/identifiers-data-model",
            },
            {
              label: "World, Chain And Client",
              slug: "frontier/world-chain-client",
            },
            { label: "World Upgrades", slug: "frontier/world-upgrades" },
            {
              label: "Sui CLI And GraphQL",
              slug: "frontier/sui-cli-graphql",
            },
            {
              label: "Events And Indexing",
              slug: "frontier/events-and-indexing",
            },
            { label: "Smart Assemblies", slug: "frontier/smart-assemblies" },
            { label: "Programmable SSUs", slug: "frontier/programmable-ssus" },
            {
              label: "Gates, Turrets And Routes",
              slug: "frontier/gates-turrets-routes",
            },
            { label: "Rifts And Locations", slug: "frontier/rifts-and-locations" },
            {
              label: "Static Client Data",
              slug: "frontier/static-client-data",
            },
            {
              label: "Tooling And References",
              slug: "frontier/tooling-references",
            },
            { label: "Reference Links", slug: "frontier/reference-links" },
            {
              label: "Testing And Localnet",
              slug: "frontier/testing-localnet",
            },
            {
              label: "dApp Architecture",
              slug: "frontier/dapp-architecture",
            },
            {
              label: "Deployment And Operations",
              slug: "frontier/deployment-operations",
            },
            {
              label: "Debugging And Help",
              slug: "frontier/debugging-and-help",
            },
            {
              label: "Move Security Checklist",
              slug: "frontier/move-security-checklist",
            },
            { label: "Builder Safety", slug: "frontier/builder-safety" },
          ],
        },
        {
          label: "API Reference",
          items: [
            { label: "API Quickstart", slug: "quickstart" },
            { label: "Responses", slug: "responses" },
            { label: "Routes", slug: "routes" },
            { label: "Current Collections", slug: "collections" },
            { label: "Provenance", slug: "provenance" },
            { label: "Events And Killmails", slug: "events-killmails" },
            { label: "Operations And Exports", slug: "operations-exports" },
          ],
        },
      ],
    }),
  ],
});
