import Link from "next/link";

const Header = () => (
   <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
         <Link href="/" className="text-lg font-semibold tracking-tight">
            Blog With Next.js
         </Link>

         <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
            <Link href="/" className="hover:text-zinc-950 dark:hover:text-white">
               Home
            </Link>
            <Link href="/posts" className="hover:text-zinc-950 dark:hover:text-white">
               Posts
            </Link>
            <Link href="/about" className="hover:text-zinc-950 dark:hover:text-white">
               About
            </Link>
         </nav>
      </div>
   </header>
);

export default Header;
