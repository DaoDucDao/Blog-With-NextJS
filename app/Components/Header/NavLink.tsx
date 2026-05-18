"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
   href: string;
   children: React.ReactNode;
};

const isPathActive = (pathname: string, href: string) => {
   if (href === "/") return pathname === "/";
   return pathname === href || pathname.startsWith(`${href}/`);
};

const NavLink = ({ href, children }: NavLinkProps) => {
   const pathname = usePathname();

   const active = isPathActive(pathname, href);
   const className = active
      ? "font-medium text-zinc-950 dark:text-white"
      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white";

   return (
      <Link href={href} className={className}>
         {children}
      </Link>
   );
};

export default NavLink;
