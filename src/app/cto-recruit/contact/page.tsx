import { ContactForm } from "@/app/_components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { SchedulingButton } from "@/app/(root)/contact/scheduling-button";
import { Heading } from "@/app/_components/ui/heading";

export const metadata: Metadata = {
  title: "CTO採用支援 お問い合わせ | 株式会社Reminus（レミナス）",
  description:
    "CTO採用支援に関するお問い合わせはこちらから。CTO代行で培った知見を活かした採用支援について、まずは無料でご相談ください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CtoRecruitContactPage() {
  return (
    <main className="pb-24 pt-12 font-sans">
      <Heading level="h2" tag="h1" className="mb-12 text-center">
        CTO採用について無料相談する
      </Heading>

      <div className="mx-auto max-w-[600px] space-y-8 px-5">
        <SchedulingButton variant="outlined" density="relaxed" fullWidth />
        <p className="text-center tracking-wider text-gray-600">または、</p>
        <div>
          <Card>
            <CardContent className="space-y-5 p-7">
              <ContactForm service="CTO採用" />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
