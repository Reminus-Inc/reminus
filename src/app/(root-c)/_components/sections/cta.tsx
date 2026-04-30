import Image from "next/image";
import { DownloadButton } from "@/app/_components/ui/download-button";
import { cn } from "@/lib/utils";

type CtaProps = {
  className: string;
};
export function Cta({ className }: CtaProps) {
  return (
    <section
      className={cn(
        "content-auto bg-gradient-to-b from-[50%] to-[50%] py-10 font-sans",
        className
      )}
    >
      <div className="mx-auto w-[90%] xl:w-fit">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 from-60% to-emerald-600 px-8 py-10 sm:px-10 sm:py-16 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
          <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:gap-16">
            <div className="flex justify-center lg:block lg:flex-shrink-0">
              <Image
                src="/document-1.png"
                alt="Reminus CTO パートナー概要資料"
                width={1326}
                height={842}
                className="w-full max-w-[300px] rounded-sm sm:max-w-[360px] md:max-w-[400px] lg:max-w-[320px] xl:max-w-[420px]"
              />
            </div>

            <div className="flex justify-center">
              <div>
                <p className="text-2xl font-bold !leading-[1.5] tracking-wider text-white md:text-3xl xl:text-4xl">
                  技術から、
                  <br />
                  経営とプロダクトを加速させませんか？
                </p>

                <p className="mt-4 text-sm !leading-[1.75] tracking-wide text-white md:text-base">
                  Reminus CTO代行概要資料です。
                  <br />
                  サービスの背景、提供内容、事例などをまとめています。
                </p>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <DownloadButton
                    variant="filled"
                    color="white"
                    className="text-sm md:max-w-[300px]"
                    href="/download"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
