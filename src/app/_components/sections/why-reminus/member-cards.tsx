"use client";

import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

export type MemberCardData = {
  label: string;
  title: string;
  career: string[];
  strengths: string[];
};

type MemberCardsProps = {
  members: MemberCardData[];
};
export const MemberCards = ({ members }: MemberCardsProps) => {
  return (
    <>
      <div className="sm:hidden">
        <Carousel
          items={members.map((member, i) => (
            <MemberCard key={i} {...member} />
          ))}
          itemClassName="px-2"
        />
      </div>

      <div className="relative hidden flex-wrap justify-center gap-6 sm:flex lg:gap-7">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-7">
          {members.slice(0, 2).map((member, i) => (
            <MemberCard key={i} {...member} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-7">
          {members.slice(2, 4).map((member, i) => (
            <MemberCard key={i} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

const MemberCard = ({ label, title, career, strengths }: MemberCardData) => {
  return (
    <div className="mx-auto flex h-full w-full flex-col rounded-lg border border-solid border-gray-300 p-4 pb-5 sm:h-auto sm:w-auto sm:max-w-[326px] sm:pb-6">
      <div>
        <div className="flex justify-center">
          <Image src="/member-icon.svg" width={90} height={90} alt="" />
        </div>

        <span className="relative mt-2 inline-block rounded-[2px] bg-gray-400 px-2 text-[11px] tracking-wider text-white after:absolute after:left-1/2 after:top-full after:-ml-1 after:skew-x-[20deg] after:border-[4px] after:border-transparent after:border-t-gray-400 after:content-['']">
          {label}
        </span>
        <h3 className="mt-1 text-base font-bold !leading-[1.5] tracking-wider text-gray-800 sm:text-lg">
          {title}
        </h3>
      </div>

      <div className="mt-3 space-y-1.5">
        <span className="inline-block rounded-sm bg-emerald-500 px-2 py-0.5 text-xs !leading-[1.6] tracking-widest text-white sm:text-[12px]">
          経歴
        </span>
        <ul className="relative space-y-1 pl-1 before:absolute before:left-[7px] before:top-[0.5em] before:h-[calc(100%-1em)] before:w-[1] before:bg-emerald-200 before:content-[''] sm:before:left-[8px]">
          {career.map((item, i) => (
            <li
              key={i}
              className="flex items-baseline text-xs !leading-[1.5] tracking-wide text-gray-800 before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-emerald-200 before:content-[''] sm:text-[13px] sm:before:h-[9px] sm:before:w-[9px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 space-y-1.5">
        <span className="inline-block rounded-sm bg-emerald-500 px-2 py-0.5 text-xs !leading-[1.6] tracking-widest text-white sm:text-[12px]">
          強み
        </span>
        <ul className="space-y-1 pl-1">
          {strengths.map((item, i) => (
            <li
              key={i}
              className="flex items-baseline text-xs !leading-[1.5] tracking-wide text-gray-800 before:mr-2 before:inline-block before:h-[7px] before:w-[7px] before:rounded-full before:bg-emerald-200 before:content-[''] sm:text-[13px] sm:before:h-[9px] sm:before:w-[9px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
