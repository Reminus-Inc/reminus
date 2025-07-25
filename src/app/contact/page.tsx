import { ContactForm } from "@/app/_components/ui/contact-form";
import { Metadata } from "next";
import { SchedulingButton } from "./scheduling-button";

export const metadata: Metadata = {
  title: "お問い合わせ | Reminus",
  description: "Reminusへのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <main className="py-14">
      <h1 className="mb-12 text-center text-3xl font-bold">お問い合わせ</h1>

      <div className="mx-auto max-w-[600] space-y-6 px-5">
        <SchedulingButton />
        <p className="text-center tracking-wider text-gray-500">または</p>
        <ContactForm />
      </div>
    </main>
  );
}
