import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
   title: "Contact",
   description: "Send me a message.",
};

const ContactPage = () => (
   <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
         Have a question or want to say hi? Drop a message below.
      </p>

      <div className="mt-10">
         <ContactForm />
      </div>
   </div>
);

export default ContactPage;
