import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
    const posts = await getCollection("blog");
    const siteUrl = context.site || 'https://joeduncko.com';
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts
            .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
            .map((post) => ({
                ...post.data,
                link: `${siteUrl}/blog/${post.slug}/`,
            })),
    });
}
