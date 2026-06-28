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
      customCss: ["./src/styles/starlight.css"],
      favicon: "/logo.png",
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    }),
  ],
});
