"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = {
   children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => (
   <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
   </NextThemesProvider>
);

export default ThemeProvider;
