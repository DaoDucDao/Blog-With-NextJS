import Link from "next/link";

const Home = () => (
   <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="flex flex-col gap-6">
         <h1 className="text-4xl font-semibold tracking-tight">
            Hello, I&apos;m learning Next.js.
         </h1>
         <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is a small blog I&apos;m building over one week to explore the App
            Router, MDX content, and static generation.
         </p>
         <Link
            href="/posts"
            className="self-start text-base font-medium text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
         >
            Read the posts →
         </Link>
      </section>
   </div>
);

export default Home;
