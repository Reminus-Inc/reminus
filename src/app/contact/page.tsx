import { ContactForm } from "@/app/_components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { SchedulingButton } from "./scheduling-button";

export const metadata: Metadata = {
  title: "お問い合わせ | Reminus",
  description: "Reminusへのお問い合わせはこちらから。",
  robots: {
    index: false,
  },
};

export default function ContactPage() {
  return (
    <main className="pb-24 pt-12">
      <h1 className="mb-12 text-center text-3xl font-bold">お問い合わせ</h1>

      <div className="mx-auto max-w-[600px] space-y-8 px-5">
        <SchedulingButton variant="outlined" />
        <p className="text-center tracking-wider text-gray-600">または、</p>
        <div>
          <Card>
            <CardContent className="space-y-5 p-7">
              <p className="font-semibold leading-relaxed tracking-wider text-gray-800">
                どのような内容でもお気軽にご相談ください！
              </p>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
