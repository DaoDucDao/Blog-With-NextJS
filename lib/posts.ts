import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

const WORDS_PER_MINUTE = 200;

type Post = {
   slug: string;
   title: string;
   date: string;
   summary: string;
   tags: string[];
   content: string;
   readingTime: number;
};

const calculateReadingTime = (content: string): number => {
   const words = content.trim().split(/\s+/).length;
   return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

const readPost = (filename: string): Post => {
   const slug = filename.replace(/\.mdx$/, "");
   const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
   const { data, content } = matter(raw);

   const {
      title = "",
      date = new Date(),
      summary = "",
      tags = [],
   } = data;

   return {
      slug,
      title,
      date: new Date(date).toISOString(),
      summary,
      tags,
      content,
      readingTime: calculateReadingTime(content),
   };
};

const getAllPosts = (): Post[] =>
   fs.readdirSync(POSTS_DIR)
      .filter(filename => filename.endsWith(".mdx"))
      .map(readPost)
      .sort((postA, postB) => postB.date.localeCompare(postA.date));

const getPostBySlug = (slug: string): Post | null => {
   const filename = `${slug}.mdx`;
   if (!fs.existsSync(path.join(POSTS_DIR, filename))) return null;

   return readPost(filename);
};

const getPostsByTag = (tag: string): Post[] =>
   getAllPosts().filter(post => post.tags.includes(tag));

type TagCount = { tag: string; count: number };

const getAllTags = (): TagCount[] => {
   const counts: Record<string, number> = {};

   getAllPosts().forEach(post => {
      post.tags.forEach(tag => {
         counts[tag] = (counts[tag] ?? 0) + 1;
      });
   });

   return Object.entries(counts)
      .map(([tag, count]) => ({ tag, count }))
      .sort(
         (tagA, tagB) =>
            tagB.count - tagA.count || tagA.tag.localeCompare(tagB.tag),
      );
};

export { getAllPosts, getPostBySlug, getPostsByTag, getAllTags };
export type { Post, TagCount };
