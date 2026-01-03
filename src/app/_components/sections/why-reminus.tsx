import Image from "next/image";
import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";

const MEMBERS_DATA = [
  {
    title: "経営層から技術特化の者まで、\n多様なメンバーが揃う。",
    image: "/member-1.svg",
    width: 376,
    height: 285,
  },
  {
    title: "SaaSを主戦場にした\n“プロダクト特化型”チーム。",
    image: "/member-2.svg",
    width: 364,
    height: 285,
  },
  {
    title: "BtoBに圧倒的強み。\n再現性をもって事業成長を実現。",
    image: "/member-3.svg",
    width: 332,
    height: 285,
  },
  {
    title: "混沌のシード〜アーリーを\n牽引してきた精鋭揃い。",
    image: "/member-4.svg",
    width: 411,
    height: 287,
  },
  {
    title: "YoY300%の成長速度を\nくぐり抜けてきたメンバー多数。",
    image: "/member-5.svg",
    width: 337,
    height: 273,
  },
];

export function WhyReminus({ className }: { className?: string }) {   
  return (
    <section id="why-reminus" className={cn("py-24 sm:py-32", className)}>
      <div className="mx-auto w-[82%] max-w-[1200px] md:w-[86%]">
        <SectionHeader
          label="選ばれる理由"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
        >
          <span className="highlight-underline text-emerald-500">
            BtoB SaaS スタートアップに特化。
          </span>
          <br />
          経営視点を持ったメンバーが伴走支援します。
        </SectionHeader>

        <div className="mt-16">
          <div className="flex w-full flex-col items-center">
            <div className="space-y-12 sm:space-y-16 md:flex md:flex-wrap md:justify-center md:gap-x-12 md:gap-y-14 md:space-y-0 lg:gap-x-16 xl:gap-x-12">
              {MEMBERS_DATA.map((member, i) => (
                <MemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type MemberCardProps = {
  title: string;
  image: string;
  width: number;
  height: number;
};

function MemberCard({ title, image, width }: MemberCardProps) {
  return (
    <div className="md:w-[calc(50%-48px)] lg:w-auto">
      <h3 className="whitespace-pre-wrap text-lg font-bold !leading-[1.7] tracking-wider text-gray-800 lg:text-[22px]">
        {title}
      </h3>

      <div className="mt-6">
        <div
          className="hidden overflow-hidden lg:block"
          style={{ width: width }}
        >
          <Image
            src={image}
            width={411}
            height={287}
            alt=""
            className="hidden w-[411px] max-w-[411px] lg:block"
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={image}
            width={411}
            height={287}
            alt=""
            className="block lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
