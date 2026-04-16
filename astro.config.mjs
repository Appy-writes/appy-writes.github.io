import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.PUBLIC_SITE_URL ?? "https://appy-writes.github.io";
const rawBasePath = process.env.PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath && rawBasePath !== "/"
  ? `/${rawBasePath.replace(/^\/|\/$/g, "")}`
  : "/";

export default defineConfig({
  site,
  base: basePath,
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
