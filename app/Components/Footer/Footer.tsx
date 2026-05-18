const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <footer className="border-t border-black/10 dark:border-white/10">
         <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400">
            <span>© {year} Blog With Next.js</span>
            <span>Built with Next.js</span>
         </div>
      </footer>
   );
};

export default Footer;
