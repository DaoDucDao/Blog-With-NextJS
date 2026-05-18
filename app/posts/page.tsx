import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
   title: "Posts",
   description: "All posts on the blog.",
};

const formatDate = (iso: string) =>
   new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
   });

const PostsPage = () => {
   const posts = getAllPosts();

   if (posts.length === 0)
      return (
         <div className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Posts</h1>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">No posts yet.</p>
         </div>
      );

   return (
      <div className="mx-auto max-w-3xl px-6 py-16">
         <h1 className="text-3xl font-semibold tracking-tight">Posts</h1>

         <ul className="mt-10 flex flex-col gap-8">
            {posts.map(post => (
               <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`} className="group flex flex-col gap-2">
                     <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {formatDate(post.date)}
                     </span>
                     <h2 className="text-xl font-semibold tracking-tight group-hover:underline">
                        {post.title}
                     </h2>
                     <p className="text-zinc-600 dark:text-zinc-400">{post.summary}</p>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default PostsPage;
