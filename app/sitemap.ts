import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3500";

const sitemap = (): MetadataRoute.Sitemap => {
   const staticPages: MetadataRoute.Sitemap = [
      {
         url: BASE_URL,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 1,
      },
      {
         url: `${BASE_URL}/posts`,
         lastModified: new Date(),
         changeFrequency: "weekly",
         priority: 0.8,
      },
   ];

   const postPages: MetadataRoute.Sitemap = getAllPosts().map(post => ({
      url: `${BASE_URL}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
   }));

   return [...staticPages, ...postPages];
};

export default sitemap;
