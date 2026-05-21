"use server";

import type { ContactState } from "./types";

const submitContact = async (
   _prevState: ContactState,
   formData: FormData,
): Promise<ContactState> => {
   const name = String(formData.get("name") ?? "").trim();
   const email = String(formData.get("email") ?? "").trim();
   const message = String(formData.get("message") ?? "").trim();

   if (!name || !email || !message)
      return { status: "error", message: "Please fill in all fields." };

   if (!email.includes("@"))
      return { status: "error", message: "Please enter a valid email." };

   console.log("[contact] submission:", { name, email, message });

   return {
      status: "success",
      message: "Thanks! Your message was received.",
   };
};

export { submitContact };
