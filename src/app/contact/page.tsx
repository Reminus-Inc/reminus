import { ContactForm } from "@/app/_components/contact/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Reminus",
  description: "Reminusへのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl pt-16 pb-36">
        <div className="space-y-12">
          <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter">お問い合わせ</h1>
          </header>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}