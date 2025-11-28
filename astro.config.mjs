import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { h } from "hastscript";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

function customHeadingContent(node) {
    const level = node.tagName.charAt(1);
    const hashes = "#".repeat(parseInt(level, 10));
    return h("span", hashes + " ");
}

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_URL || "http://localhost:4321",
    base: process.env.BASE_PATH || "/",
    integrations: [mdx(), sitemap(), tailwind()],
    markdown: {
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "prepend",
                    content: customHeadingContent,
                },
            ],
        ],
    },
});
