import { cn } from "@/lib/utils";
import { ContactButton } from "@/app/_components/ui/contact-button";

export function MidCta({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "content-auto py-10 font-sans sm:py-14",
        className,
      )}
    >
      <div className="mx-auto flex w-[82%] max-w-[1200px] flex-col items-center gap-5 rounded-xl border border-solid border-emerald-100 bg-emerald-50/60 px-6 py-8 sm:flex-row sm:justify-between sm:gap-8 sm:px-10 sm:py-10 md:w-[86%]">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-xl">
            まずは貴社の採用課題を
            <br className="hidden sm:inline" />
            お聞かせください。
          </p>
          <p className="mt-1 text-sm tracking-wide text-gray-600">
            30分の無料相談で、最適な採用戦略をご提案します。
          </p>
        </div>
        <ContactButton className="w-full max-w-[280px] shrink-0 text-sm sm:w-auto">
          無料相談を予約する
        </ContactButton>
      </div>
    </section>
  );
}
