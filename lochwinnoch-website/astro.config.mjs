import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://example.com",

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    }),
    react({
      experimentalReactChildren: true,
      experimentalDisableStreaming: true
    })
  ],

  adapter: node({
    mode: "standalone"
  }),

  experimental: {
    session: true
  },

  session: {
    driver: "fs",
    ttl: 60 * 60
  }
});

