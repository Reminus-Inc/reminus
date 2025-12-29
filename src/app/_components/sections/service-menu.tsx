import Image from "next/image";
import { SectionHeader } from "../ui/section-header";

export function ServiceMenu() {
  return (
    <div className="mx-auto w-[82%] max-w-[1200px] bg-white py-24 sm:py-32 md:w-[86%]">
      <SectionHeader
        label="提供メニュー"
        headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
      >
        <span className="highlight-underline text-emerald-500">
          CTO不在の課題をフルカバー。
        </span>
        <br />
        事業状況を踏まえて最適な進め方をご提案します。
      </SectionHeader>

      <div className="mt-16 flex justify-center">
        <Image
          src="/service-menu-vertical.svg"
          alt="提供メニュー表"
          width={391}
          height={1086}
          className="max-w-[] md:hidden"
        />
        <Image
          src="/service-menu.svg"
          alt="提供メニュー表"
          width={753}
          height={440}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
