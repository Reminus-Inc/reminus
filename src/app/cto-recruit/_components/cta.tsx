import { cn } from "@/lib/utils";
import { ContactButton } from "@/app/_components/ui/contact-button";

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

            <ContactButton
              variant="filled"
              color="white"
              className="max-w-[300px] text-sm"
            >
              無料相談を予約する
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
