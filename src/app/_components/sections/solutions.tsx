"use client";

import { Settings, Users, Building2, LucideIcon } from "lucide-react";
import { SectionHeader } from "../ui/section-header";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: Settings,
    category: "技術戦略",
    title: "経営に技術視点を補う",
    description: [
      "経営戦略を踏まえ、過不足ない技術選定やロードマップを立案。",
      "経営の目線で技術を説明し、優先度付けを可能にします。",
    ],
  },
  {
    icon: Users,
    category: "エンジニア採用",
    title: "候補者の見極めと訴求を両立",
    description: [
      "採用媒体の選定や求人作成から、スカウト文設計、訴求まで伴走。",
      "候補者を見極めた上で「入社したい！」を引き出します。",
    ],
  },
  {
    icon: Building2,
    category: "開発組織",
    title: "開発スピードと学習サイクルを最大化",
    description: [
      "事業計画に基づいて組織体制を設計。",
      "高速な市場投入サイクルにより、経営に学習を蓄積し、PMFへの前進を実現します。",
    ],
  },
];

export function Solutions() {
  return (
    <div className="mx-auto w-[82%] max-w-[1200px] bg-white py-24 sm:py-32 md:w-[86%]">
      <SectionHeader
        label="3つのエンジニアリング要素を補完"
        headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
      >
        <span className="highlight-underline text-emerald-500">
          技術戦略・採用・組織設計をワンストップで統合
        </span>
        し、
        <br className="hidden lg:inline" />
        非エンジニア経営者が抱える技術の不安を解消します。
      </SectionHeader>

      <div className="mt-16 flex flex-col">
        {solutions.map((solution, index) => (
          <SolutionItem
            key={index}
            icon={solution.icon}
            category={solution.category}
            title={solution.title}
            description={solution.description}
            isLast={index === solutions.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

type SolutionItemProps = {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string[];
  isLast: boolean;
};
const SolutionItem = ({
  icon: Icon,
  category,
  title,
  description,
  isLast,
}: SolutionItemProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 sm:flex-row sm:gap-12 md:pl-10",
        !isLast && "dashed-border-bottom mb-8 pb-8 md:mb-10 md:pb-10"
      )}
    >
      <div className="hidden flex-shrink-0 sm:block">
        <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-emerald-50">
          <Icon className="h-16 w-16 text-emerald-500" strokeWidth={2} />
        </div>
      </div>

      <div>
        <span className="font-bold tracking-wider text-emerald-500">
          {category}
        </span>
        <h3 className="mt-0.5 text-[22px] font-bold tracking-wide text-gray-800 sm:text-2xl md:mt-1 md:text-3xl">
          {title}
        </h3>
        <div className="mt-2 space-y-1 text-gray-700 md:text-lg">
          <ul className="mt-4 space-y-1.5 pl-2 md:pl-3">
            {description.map((point, i) => (
              <li key={i} className="flex items-baseline gap-3">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-200 sm:h-3 sm:w-3" />
                <p className="text-sm !leading-[1.7] text-gray-800 sm:text-base">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
