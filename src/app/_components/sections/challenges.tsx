import React from "react";
import { AlertTriangle } from "lucide-react";
import { Section } from "../ui/section";
import { MainHeading } from "../ui/main-heading";

const challenges = [
  {
    title: "経営に技術がわかるメンバがいない",
    description:
      "経営状況を踏まえて技術の意思決定を相談したり、優先度をつけられるメンバが不在。事業計画の実現性に不安を抱えていませんか？",
  },
  {
    title: "採用の見極め・訴求が手探り",
    description:
      "必要なスキルセットや採用媒体が定まらず、面接しても判断ができない。ようやくオファーしても断られるといった懸念はありませんか？",
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
