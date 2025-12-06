import { ContactForm } from "@/app/_components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { SchedulingButton } from "./scheduling-button";
import { Heading } from "@/app/_components/ui/heading";

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
      <Heading level="h2" tag="h1" className="mb-12 text-center">
        無料相談を予約する
      </Heading>

      <div className="mx-auto max-w-[600px] space-y-8 px-5">
        <SchedulingButton variant="outlined" density="relaxed" fullWidth />
        <p className="text-center tracking-wider text-gray-600">または、</p>
        <div>
          <Card>
            <CardContent className="space-y-5 p-7">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
