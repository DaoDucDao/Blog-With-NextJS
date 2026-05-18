import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Not Found",
   description: "The page you're looking for doesn't exist.",
};

const NotFound = () => (
   <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
         404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
         The page you&apos;re looking for doesn&apos;t exist. Maybe it was renamed, maybe
         the link is wrong, or maybe it was never written.
      </p>

      <div className="flex flex-col gap-2 text-sm">
         <Link
            href="/"
            className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
         >
            ← Back to home
         </Link>
         <Link
            href="/posts"
            className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
         >
            See all posts
         </Link>
      </div>
   </div>
);

export default NotFound;
