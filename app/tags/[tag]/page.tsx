import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import TagList from "@/app/Components/TagList/TagList";

export const dynamicParams = false;

export const generateStaticParams = async () =>
   getAllTags().map(({ tag }) => ({ tag }));

type Props = {
   params: Promise<{ tag: string }>;
};

const formatDate = (iso: string) =>
   new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
   });

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
   const { tag } = await params;

   return {
      title: `#${tag}`,
      description: `Posts tagged "${tag}".`,
   };
};

const TagPage = async ({ params }: Props) => {
   const { tag } = await params;
   const posts = getPostsByTag(tag);

   if (posts.length === 0) notFound();

   return (
      <div className="mx-auto max-w-3xl px-6 py-16">
         <Link
            href="/tags"
            className="text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
         >
            ← All tags
         </Link>

         <h1 className="mt-4 text-3xl font-semibold tracking-tight">#{tag}</h1>
         <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            {posts.length} {posts.length === 1 ? "post" : "posts"} tagged with{" "}
            <span className="font-medium">{tag}</span>.
         </p>

         <ul className="mt-10 flex flex-col gap-8">
            {posts.map(post => (
               <li key={post.slug} className="flex flex-col gap-3">
                  <Link href={`/posts/${post.slug}`} className="group flex flex-col gap-2">
                     <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {formatDate(post.date)} · {post.readingTime} min read
                     </span>
                     <h2 className="text-xl font-semibold tracking-tight group-hover:underline">
                        {post.title}
                     </h2>
                     <p className="text-zinc-600 dark:text-zinc-400">{post.summary}</p>
                  </Link>
                  <TagList tags={post.tags} />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TagPage;
