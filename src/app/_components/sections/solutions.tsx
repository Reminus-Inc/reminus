"use client";

import { MainHeading } from "../ui/main-heading";
import { Settings, Users, Building2, LucideIcon } from "lucide-react";
import { ContactButton } from "../ui/contact-button";
import { DownloadButton } from "../ui/download-button";
import { Heading } from "../ui/heading";
import { Section } from "../ui/section";

export function Solutions() {
  return (
    <Section className="bg-white" fullWidth="lg">
      <MainHeading subtitle="技術戦略・採用・組織設計をワンストップで統合し、非エンジニア経営者が抱える技術の不安を解消します。">
        <span className="relative -bottom-1 mx-1 text-5xl font-bold sm:text-6xl">
          3
        </span>
        <span className="text-gray-800">
          つの
          <span className="relative inline-block">
            <span className="relative z-[2] text-emerald-500">
              エンジニアリング要素
            </span>
            <span className="z-[1] absolute bottom-[6px] left-0 right-0 h-[10px] sm:h-[14px] bg-yellow-200" />
          </span>
          を補完
        </span>
      </MainHeading>

      <div className="mb-16 flex flex-col justify-center gap-6 lg:flex-row lg:gap-10">
        <SolutionCard
          icon={Settings}
          title="技術戦略"
          subtitle="経営に技術視点を補う"
          description="経営戦略を踏まえ、過不足ない技術選定やロードマップを立案。経営の目線で技術を説明し、優先度付けを可能にします。"
        />
        <SolutionCard
          icon={Users}
          title="エンジニア採用"
          subtitle="候補者の見極めと訴求を両立"
          description="採用媒体の選定や求人作成から、スカウト文設計、訴求まで伴走。候補者を見極めた上で「入社したい！」を引き出します。"
        />
        <SolutionCard
          icon={Building2}
          title="開発組織"
          subtitle="開発スピードと学習サイクルを最大化"
          description="事業計画に基づいて組織体制を設計。高速な市場投入サイクルにより、経営に学習を蓄積し、PMFへの前進を実現します。"
        />
      </div>

      <div className="text-center">
        <Heading tag="h3" level="h4" className="mb-6">
          お気軽にご相談ください！
        </Heading>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <DownloadButton />
          <ContactButton />
        </div>
      </div>
    </Section>
  );
}

type SolutionCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
};
const SolutionCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
}: SolutionCardProps) => {
  return (
    <div className="relative rounded-lg border-2 border-emerald-400 bg-white p-10 pt-7 lg:max-w-[390px]">
      <div className="mb-4 flex items-center gap-4 lg:-ml-3 lg:mb-5 lg:justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <Icon className="h-6 w-6 text-emerald-500" />
        </div>
        <h3 className="text-[1.4rem] font-bold tracking-wider text-emerald-500">
          {title}
        </h3>
      </div>

      <div className="space-y-1.5">
        <h4 className="text-lg font-bold leading-7 text-gray-800">
          {subtitle}
        </h4>
        <p className="leading-7 text-gray-800">{description}</p>
      </div>
    </div>
  );
};
