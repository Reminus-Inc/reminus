import Image from "next/image";
import { DownloadButton } from "../ui/download-button";
import { cn } from "@/lib/utils";

type CtaProps = {
  className: string;
};
export function Cta({ className }: CtaProps) {
  return (
    <section
      className={cn("bg-gradient-to-b from-[50%] to-[50%] py-10 font-sans content-auto", className)}
    >
      <div className="mx-auto w-[90%] max-w-[90%] xl:w-fit">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 from-60% to-emerald-600 p-8 py-12 sm:p-10 sm:py-16 lg:p-16 lg:py-20">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
            <div className="flex-shrink-0">
              <div className="flex justify-center md:block">
                <Image
                  src="/document-example.png"
                  alt="Reminus CTO パートナー概要資料"
                  width={1326}
                  height={842}
                  className="w-[90%] max-w-[442px] md:w-full md:max-w-[280px] lg:max-w-[360px] xl:max-w-[442px]"
                />
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold leading-[1.5] tracking-wide text-white sm:text-3xl sm:leading-[1.5] lg:text-4xl lg:leading-[1.5]">
                技術から、
                <br />
                経営とプロダクトを加速させませんか？
              </p>
              <p className="mt-4 text-sm leading-[1.75] tracking-wide text-white sm:text-base sm:leading-[1.75]">
                Reminus CTOパートナー概要資料です。
                <br />
                サービスの背景、提供内容、事例などをまとめています。
              </p>

              <DownloadButton
                fullWidth
                variant="filled"
                color="white"
                className="mt-10 md:max-w-[300px]"
                asLink={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
