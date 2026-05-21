import { getAllPosts } from "@/lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3500";

const escapeXml = (value: string) =>
   value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

const GET = async () => {
   const posts = getAllPosts();

   const items = posts
      .map(
         post => `
      <item>
         <title>${escapeXml(post.title)}</title>
         <link>${BASE_URL}/posts/${post.slug}</link>
         <guid>${BASE_URL}/posts/${post.slug}</guid>
         <description>${escapeXml(post.summary)}</description>
         <pubDate>${new Date(post.date).toUTCString()}</pubDate>
         ${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join("")}
      </item>`,
      )
      .join("");

   const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
   <channel>
      <title>Blog With Next.js</title>
      <link>${BASE_URL}</link>
      <description>A personal blog built while learning the Next.js App Router.</description>
      <language>en</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
      ${items}
   </channel>
</rss>`;

   return new Response(xml, {
      headers: {
         "Content-Type": "application/rss+xml; charset=utf-8",
      },
   });
};

export { GET };
