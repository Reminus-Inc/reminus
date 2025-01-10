import { ContactForm } from "@/app/_components/contact/form";

export function Contact() {
  return (
    <section
      className="bg-gradient-to-b from-white via-neutral-50 to-neutral-100 py-24 md:py-36 w-full mx-auto"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-12">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">お問い合わせ</h1>
          <p className="mt-6 md:text-lg text-muted-foreground">
            ご発注にいたらなくても構いませんので、
            <br className="md:hidden" /> お気軽にご相談ください。
          </p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
