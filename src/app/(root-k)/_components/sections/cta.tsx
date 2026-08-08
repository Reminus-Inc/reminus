"use client";

import Image from "next/image";
import { DownloadButton } from "../ui/download-button";
import { Heading } from "../ui/heading";
import { cn } from "@/lib/utils";

type CtaProps = {
 className: string;
};
export function Cta({ className }: CtaProps) {
  return (
    <section className={cn("bg-gradient-to-b py-10 from-[50%] to-[50%]", className)}>
      <div className="container mx-auto px-4">
        <div className="rounded-lg bg-emerald-500 p-8 sm:p-10 md:p-16 lg:px-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
            <div className="order-2 flex-shrink-0 lg:order-1">
              <div className="flex justify-center md:block">
                <Image
                  src="/document-example.png"
                  alt="Reminus CTO パートナー概要資料"
                  width={1326}
                  height={842}
                  className="w-full max-w-[442px]"
                />
              </div>
            </div>

            <div className="order-1 flex flex-col gap-8 text-white lg:order-2">
              <div className="space-y-3">
                <Heading level="h2" className="text-start text-white">
                  技術から、
                  <br />
                  経営とプロダクトを加速させませんか？
                </Heading>
                <p className="text-sm leading-[1.65] tracking-wide lg:text-base lg:leading-[1.65]">
                  Reminus CTOパートナー概要資料です。
                  <br />
                  課題整理シート、料金プラン、事例などをまとめています。
                </p>
              </div>

              <DownloadButton
                fullWidth
                variant="filled"
                color="white"
                className="md:max-w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
