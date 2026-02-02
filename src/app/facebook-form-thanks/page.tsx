import { Metadata } from "next";
import Image from "next/image";
import { BackToTopLink } from "@/app/download-thanks/back-to-top-link";
import { SchedulingButton } from "@/app/(root)/contact/scheduling-button";
import { Heading } from "@/app/_components/ui/heading";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "資料請求完了 | Reminus",
  description: "資料請求ありがとうございます。",
  robots: {
    index: false,
  },
};

export default function FacebookFormThanksPage() {
  return (
    <main className="flex items-center justify-center bg-white px-6 pb-16 pt-8 font-sans">
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-emerald-100 sm:h-[120px] sm:w-[120px]">
            <div className="relative h-12 w-12 sm:h-[68px] sm:w-[68px]">
              <Image
                src="/mailbox.png"
                alt="メール"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <Heading tag="h1" level="h2" className="text-center">
            資料のご請求<br className="md:hidden"/>ありがとうございます！
          </Heading>
        </div>

        <p className="text-lg font-bold tracking-wide text-center text-gray-500 sm:text-xl">
          メールにて資料をお送りしました。
        </p>

        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="relative inline-block">
                <MessageCircle className="h-6 w-6 text-emerald-600 absolute -left-8 top-1/2 -translate-y-1/2 -scale-x-100" />
                <p className="text-lg font-bold text-gray-800 sm:text-xl leading-relaxed">
                  技術にお困りでしょうか？
                </p>
              </div>
              <p className="text-base text-gray-600">
                ぜひ無料相談もご利用ください！
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[360px]">
                <SchedulingButton
                  label="無料相談を予約する"
                  href="https://meetings.immedio.io/date_select?uk=9PXoeyCuNGNuMliOuzZO#calendar"
                  fullWidth
                  size="default"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <BackToTopLink />
        </div>
      </div>

      <div id="immedio-config" data-pagetype="thanks" />
    </main>
  );
}
