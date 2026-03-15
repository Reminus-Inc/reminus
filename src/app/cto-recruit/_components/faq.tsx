"use client";

import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";
import { useState } from "react";

const faqs = [
  {
    question: "CTO代行と何が違うのですか？",
    answer:
      "CTO代行は、CTOが不在の企業に対してCTOの役割を代行するサービスです。CTO採用支援は、CTOを採用したい企業に対して、CTO代行で培った知見を活かして採用活動を支援するサービスです。もちろん、CTO採用が完了するまでの間、CTO代行を並行してご利用いただくことも可能です。",
  },
  {
    question: "どのフェーズの企業が対象ですか？",
    answer:
      "主にシード〜シリーズBのスタートアップを中心に支援しています。特にSaaS企業での知見が豊富ですが、業種を問わず「CTOやエンジニアマネージャーを採用したい」という企業であればご相談いただけます。",
  },
  {
    question: "料金体系を教えてください。",
    answer:
      "支援範囲（企画のみ/企画+実行）やご要望に応じて個別にお見積もりしています。まずは無料相談で貴社の状況をお聞かせいただき、最適なプランをご提案します。",
  },
  {
    question: "最低契約期間はありますか？",
    answer:
      "CTO採用は一般的に3〜6ヶ月程度の期間を要するため、3ヶ月からのご契約を推奨しています。ただし、短期間のスポット支援（求人設計のみ、面接設計のみなど）も対応可能です。",
  },
  {
    question: "自社に採用担当がいなくても大丈夫ですか？",
    answer:
      "はい、採用担当が不在でも問題ありません。Reminusが採用チームの一員として、戦略設計から実行まで一貫して伴走します。経営者やVPoEの方と直接連携しながら採用活動を進めることも多いです。",
  },
  {
    question: "どのような媒体を使いますか？",
    answer:
      "CTO・エンジニアマネージャークラスの採用に実績のある媒体を中心に、貴社のフェーズや求める人材像に合わせて最適な媒体を選定します。ダイレクトスカウト型の媒体や、リファラル採用の仕組みづくりまで幅広くご提案可能です。",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-solid border-gray-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-lg">
          {question}
        </span>
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-solid border-gray-200 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-6" : "max-h-0",
        )}
      >
        <p className="text-sm !leading-[1.9] tracking-wide text-gray-600 sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq({ className }: { className?: string }) {
  return (
    <section
      id="faq"
      className={cn("content-auto py-16 font-sans sm:py-24 md:py-32", className)}
    >
      <div className="mx-auto w-[82%] max-w-[800px] md:w-[86%]">
        <SectionHeader
          label="よくあるご質問"
          headingClassName="text-xl sm:text-2xl md:text-3xl xl:text-4xl !leading-[1.8]"
          align="center"
        >
          FAQ
        </SectionHeader>

        <div className="mt-12 border-t border-solid border-gray-200">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
