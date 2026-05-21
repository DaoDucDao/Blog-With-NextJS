import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "About",
   description: "About this blog and the person behind it.",
};

const AboutPage = () => (
   <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>

      <div className="mt-8 flex flex-col gap-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
         <p>
            Hi — I&apos;m Dao. I&apos;m a frontend developer learning the Next.js App
            Router by building this blog over one week.
         </p>

         <p>
            The site is open about its construction: each post explains something I
            learned while building it. If you spot something wrong or have a better
            way, I&apos;d love to hear it.
         </p>

         <p>
            You can{" "}
            <Link
               href="/contact"
               className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
               send me a note
            </Link>{" "}
            or subscribe via{" "}
            <Link
               href="/feed.xml"
               className="text-zinc-950 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
               RSS
            </Link>
            .
         </p>
      </div>
   </div>
);

export default AboutPage;
