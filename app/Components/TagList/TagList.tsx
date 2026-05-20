import Link from "next/link";

type TagListProps = {
   tags: string[];
};

const TagList = ({ tags }: TagListProps) => {
   if (tags.length === 0) return null;

   return (
      <ul className="flex flex-wrap gap-2">
         {tags.map(tag => (
            <li key={tag}>
               <Link
                  href={`/tags/${tag}`}
                  className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
               >
                  {tag}
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default TagList;
