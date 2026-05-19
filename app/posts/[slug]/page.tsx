import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";
import type { Metadata } from "next";
import type { Pluggable } from "unified";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

const rehypePlugins: Pluggable[] = [
   [rehypePrettyCode, { theme: "github-dark", keepBackground: false }],
];

const mdxOptions = {
   mdxOptions: { rehypePlugins },
};

export const dynamicParams = false;

export const generateStaticParams = async () =>
   getAllPosts().map(post => ({ slug: post.slug }));

type Props = {
   params: Promise<{ slug: string }>;
};

const formatDate = (iso: string) =>
   new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
   });

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
   const { slug } = await params;
   const post = getPostBySlug(slug);

   if (!post) return {};

   return {
      title: post.title,
      description: post.summary,
      openGraph: {
         title: post.title,
         description: post.summary,
         type: "article",
         publishedTime: post.date,
         tags: post.tags,
         url: `/posts/${post.slug}`,
      },
      twitter: {
         card: "summary_large_image",
         title: post.title,
         description: post.summary,
      },
   };
};

const PostPage = async ({ params }: Props) => {
   const { slug } = await params;
   const post = getPostBySlug(slug);

   if (!post) notFound();

   return (
      <article className="mx-auto max-w-3xl px-6 py-16">
         <header className="flex flex-col gap-3">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
               {formatDate(post.date)}
            </span>
            <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">{post.summary}</p>
         </header>

         <div className="prose prose-zinc dark:prose-invert max-w-none mt-12 prose-headings:tracking-tight prose-a:underline prose-a:underline-offset-4">
            <MDXRemote source={post.content} options={mdxOptions} />
         </div>

         <div className="mt-16">
            <Link
               href="/posts"
               className="text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
               ← All posts
            </Link>
         </div>
      </article>
   );
};

export default PostPage;
