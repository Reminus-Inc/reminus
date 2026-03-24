import { cn } from "@/lib/utils";
import { ContactButton } from "@/app/_components/ui/contact-button";
import { DownloadButton } from "@/app/_components/ui/download-button";

const trustStats = [
  { value: "最大80%", label: "採用工数削減" },
  { value: "6社以上", label: "CTO代行実績" },
  { value: "全4工程", label: "企画〜オファー対応" },
];

export function CtoRecruitCta({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "content-auto bg-gradient-to-b from-[50%] to-[50%] py-10 font-sans",
        className,
      )}
    >
      <div className="mx-auto w-[90%] xl:w-fit">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 from-60% to-emerald-600 px-8 py-10 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold !leading-[1.5] tracking-wider text-white md:text-3xl xl:text-4xl">
                CTO採用、<br className="block sm:hidden" />
                一人で悩んでいませんか？
              </p>

              <p className="mt-4 text-sm !leading-[1.75] tracking-wide text-white/90 md:text-base">
                CTOの仕事を知り尽くしたReminusが、
                <br className="hidden sm:inline" />
                貴社のCTO採用を成功に導きます。
                <br />
                まずはお気軽にご相談ください。
              </p>
            </div>

            {/* Trust stats */}
            <div className="flex items-center gap-3 sm:gap-6">
              {trustStats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3 sm:gap-6">
                  {i > 0 && (
                    <div className="h-8 w-px bg-white/30" />
                  )}
                  <div className="text-center">
                    <p className="text-sm font-bold leading-tight text-white sm:text-lg">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] tracking-wide text-white/70 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <DownloadButton
                href="/cto-recruit/download"
                variant="filled"
                color="white"
                className="w-full max-w-[280px] shrink-0 text-sm sm:w-auto"
              />
              <ContactButton
                href="/cto-recruit/contact"
                variant="outlined"
                color="white"
                className="w-full max-w-[280px] shrink-0 text-sm sm:w-auto"
              >
                無料相談を予約する
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
