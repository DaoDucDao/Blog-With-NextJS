import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3500";

const robots = (): MetadataRoute.Robots => ({
   rules: [
      {
         userAgent: "*",
         allow: "/",
      },
   ],
   sitemap: `${BASE_URL}/sitemap.xml`,
   host: BASE_URL,
});

export default robots;
