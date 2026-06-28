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
      title: "Black Relay API Docs",
      description:
        "Reference documentation for the Black Relay public API and Registry export surface.",
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
          label: "API",
          items: [
            { label: "Overview", slug: "index" },
            { label: "Quickstart", slug: "quickstart" },
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
