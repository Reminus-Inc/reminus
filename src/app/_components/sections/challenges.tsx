import React from "react";
import { AlertTriangle } from "lucide-react";
import { Section } from "../ui/section";
import { MainHeading } from "../ui/main-heading";

const challenges = [
  {
    title: "技術判断を任せられる相手がいない",
    description:
      "ビジネスに集中したいのに、技術面の意思決定を相談できるメンバーが不在。事業計画の実現性に不安を抱えていませんか？",
  },
  {
    title: "良い人材の見極め・育成が手探り",
    description:
      "必要なスキルセットが定まらず、候補者の適性判断や入社後オンボーディングまで手探り。結果としてチームのパフォーマンスが向上しない。",
  },
  {
    title: "キーマン退職で開発が止まる不安",
    description:
      "特定のエンジニアに技術や知識が集中して「もし辞めたら…」と不安。属人化を防ぎ、仕組みで開発を回す体制が急務です。",
  },
];

export const Challenges = () => {
  return (
    <Section fullWidth="lg" className="bg-gray-50">
      <MainHeading>こんな課題はありませんか？</MainHeading>
      <div className="flex flex-col justify-center gap-6 lg:flex-row">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            title={challenge.title}
            description={challenge.description}
          />
        ))}
      </div>
    </Section>
  );
};

type ChallengeCardProps = {
  title: string;
  description: string;
};
const ChallengeCard = ({ title, description }: ChallengeCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-7 lg:w-[420px]">
      <div className="mb-2.5 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500" />
        <h3 className="text-base font-bold tracking-wide text-gray-800 sm:text-lg md:text-xl">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
};
