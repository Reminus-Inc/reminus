import { ContactForm } from "@/app/_components/contact/form";

export function Contact() {
  return (
    <section
      className="bg-gradient-to-b from-white via-neutral-50 to-neutral-100 pt-16 md:pt-24  pb-36 w-full mx-auto"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-12">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">お問い合わせ</h1>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
