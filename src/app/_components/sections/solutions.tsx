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
        <span className="text-gray-900">課題を解決に導く</span>
        <span className="whitespace-nowrap">
          <span className="relative -bottom-1 mx-1 text-5xl font-bold text-emerald-500 sm:text-6xl">
            3
          </span>
          <span className="text-gray-900">つの柱</span>
        </span>
      </MainHeading>

      <div className="mb-16 flex flex-col justify-center gap-6 lg:flex-row lg:gap-10">
        <SolutionCard
          icon={Settings}
          title="技術戦略"
          subtitle="経営判断を最短で下す"
          description="事業目標から逆算し最適な技術を選定し、開発計画を可視化。何をいつ作るかが明確になり、経営判断が加速します。"
        />
        <SolutionCard
          icon={Users}
          title="エンジニア採用"
          subtitle="入社後の定着率を向上"
          description="CTO経験者が戦略設計から面接同席まで伴走。候補者の納得感を高め、貴社にフィットする人材の定着率を最大化します。"
        />
        <SolutionCard
          icon={Building2}
          title="組織デザイン"
          subtitle="属人化ゼロでリリースが安定"
          description="組織体制と職能を設計し、マネジメント施策を仕組み化。属人化を防ぎ、継続成長できる開発チームを実現します。"
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
