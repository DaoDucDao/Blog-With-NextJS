"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SunIcon = () => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
   >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
   </svg>
);

const MoonIcon = () => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
   >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
   </svg>
);

const ThemeToggle = () => {
   const { resolvedTheme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return <div className="h-8 w-8" />;

   const isDark = resolvedTheme === "dark";
   const nextTheme = isDark ? "light" : "dark";

   return (
      <button
         type="button"
         onClick={() => setTheme(nextTheme)}
         aria-label={`Switch to ${nextTheme} mode`}
         className="inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
      >
         {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
   );
};

export default ThemeToggle;
