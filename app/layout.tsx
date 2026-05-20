import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ThemeProvider from "./Components/Theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3500"),
  title: {
    default: "Blog With Next.js",
    template: "%s · Blog With Next.js",
  },
  description: "A personal blog built while learning the Next.js App Router.",
  openGraph: {
    title: "Blog With Next.js",
    description: "A personal blog built while learning the Next.js App Router.",
    type: "website",
    siteName: "Blog With Next.js",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog With Next.js",
    description: "A personal blog built while learning the Next.js App Router.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
         </ThemeProvider>
      </body>
    </html>
  );
}
