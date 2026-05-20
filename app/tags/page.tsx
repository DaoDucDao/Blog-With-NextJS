import Link from "next/link";
import type { Metadata } from "next";
import { getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
   title: "Tags",
   description: "Browse posts by tag.",
};

const TagsPage = () => {
   const tags = getAllTags();

   return (
      <div className="mx-auto max-w-3xl px-6 py-16">
         <h1 className="text-3xl font-semibold tracking-tight">Tags</h1>
         <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Browse posts by tag. Each tag links to a page with every post that uses it.
         </p>

         {tags.length === 0 ? (
            <p className="mt-8 text-zinc-500 dark:text-zinc-400">No tags yet.</p>
         ) : (
            <ul className="mt-10 flex flex-wrap gap-3">
               {tags.map(({ tag, count }) => (
                  <li key={tag}>
                     <Link
                        href={`/tags/${tag}`}
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                     >
                        <span>{tag}</span>
                        <span className="rounded-full bg-zinc-300/70 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300">
                           {count}
                        </span>
                     </Link>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default TagsPage;
