import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

type Post = {
   slug: string;
   title: string;
   date: string;
   summary: string;
   tags: string[];
   content: string;
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

export { getAllPosts, getPostBySlug };
export type { Post };
