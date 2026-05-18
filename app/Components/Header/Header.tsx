import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => (
   <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
         <Link href="/" className="text-lg font-semibold tracking-tight">
            Blog With Next.js
         </Link>

         <nav className="flex items-center gap-6 text-sm">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/posts">Posts</NavLink>
            <NavLink href="/about">About</NavLink>
         </nav>
      </div>
   </header>
);

export default Header;
