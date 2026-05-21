"use client";

import { useActionState } from "react";
import { submitContact } from "./actions";
import type { ContactState } from "./types";

const initialState: ContactState = { status: "idle" };

const inputClass =
   "rounded-md border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800";

const ContactForm = () => {
   const [state, formAction, isPending] = useActionState(submitContact, initialState);

   return (
      <form action={formAction} className="flex flex-col gap-4">
         <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Name</span>
            <input type="text" name="name" required className={inputClass} />
         </label>

         <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Email</span>
            <input type="email" name="email" required className={inputClass} />
         </label>

         <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Message</span>
            <textarea
               name="message"
               rows={5}
               required
               className={`${inputClass} resize-y`}
            />
         </label>

         <button
            type="submit"
            disabled={isPending}
            className="self-start rounded-md bg-zinc-950 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
         >
            {isPending ? "Sending…" : "Send message"}
         </button>

         {state.status === "success" && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
               {state.message}
            </p>
         )}

         {state.status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">{state.message}</p>
         )}
      </form>
   );
};

export default ContactForm;
