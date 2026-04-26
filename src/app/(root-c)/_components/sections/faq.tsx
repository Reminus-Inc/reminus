"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/app/_components/ui/section-header";

type FaqEntry = {
  question: string;
  answer: string;
};

const faqs: FaqEntry[] = [
  {
    question: "CTOの人材紹介ですか？どのような契約ですか？",
    answer:
      "人材紹介ではなく、Reminusとしてサービス提供に責任を持つ体制となります。したがって契約形態も、貴社と当社の間の業務委託契約となります。",
  },
  {
    question: "CTO代行と顧問・アドバイザーの違いは何ですか？",
    answer:
      "一般的な顧問・アドバイザーは「壁打ち時間」の提供が中心です。Reminus CTO代行は、貴社内にCTOがいるかのように、意思決定から実行までチームに入り込んで推進します。ミーティングやSlackでやりとりをしながら週単位など短いスパンでサイクルを回します。",
  },
  {
    question: "どんなフェーズや規模の企業が対象ですか？",
    answer:
      "主にアーリーフェーズの事業が対象です。シード〜シリーズBのスタートアップや、上場企業様・オーナー企業の新規事業（ARR10億以下）にご利用いただいています。CTO不在の創業期、内製化への転換、正社員CTO採用を控えた繋ぎ期間など、状況に応じて最適な関わり方をご提案します。",
  },
  {
    question: "開発会社ですか？",
    answer:
      "開発会社ではありません。ReminusのCTO代行は内製支援を重視しており、成果を出すことはもちろん、ノウハウをお客様社内に溜めることも大事にしております。ご要望次第では、CTO代行とは別途、開発領域を担う場合もありますが、あくまで貴社チームの一員として事業に向き合います。",
  },
  {
    question: "開発を外注している場合も支援してもらえますか？",
    answer:
      "はい、外注先の管理や監修、外注先の選定、発注者側の改善なども対応実績がございます。貴社プロダクトが前に進むよう、体制に関わりなく、目的に向かって伴走させていただきます。",
  },
  {
    question: "コードも書いてもらえますか？",
    answer:
      "はい、一部コードを書くことがございます。当社CTO代行は少ない稼働で最大の成果を出す価格設計となっております。立ち上げの際には、CTO代行が採用や人員調達も支援しながら、手も動かす方式です。ARR1億以上などすでに規模がある場合には、技術判断や設計に注力することが多いです。",
  },
  {
    question: "料金体系と契約期間を教えてください。",
    answer:
      "稼働量や支援範囲に応じた月額の料金体系で、貴社の課題に合わせてご提案いたします。2ヶ月のトライアル契約からご利用いただけて、成果を確かめたうえで半年の本契約に移行いただきます。正社員CTOの採用と比べて、固定費やミスマッチのリスクを抑えてご利用いただけます。詳細は資料にてご確認ください。",
  },
  {
    question: "長期的にはCTOや1人目エンジニアを採用したいです。",
    answer:
      "ReminusではCTOや1人目エンジニアの採用も支援範囲となっています。求人作成や媒体選定、書類スクリーニング、場合によっては面談同席も行います。技術か採用かという二者択一ではなく、その時々の優先度に応じてリソース配分を変えながら提案と実行推進をいたします。",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-solid bg-white transition-all duration-200",
        isOpen
          ? "border-emerald-200 shadow-[0_18px_40px_-24px_rgba(16,185,129,0.35)]"
          : "border-gray-200 shadow-[0_4px_12px_-8px_rgba(0,0,0,0.08)] hover:border-emerald-100 hover:shadow-[0_10px_24px_-16px_rgba(16,185,129,0.2)]",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 px-4 py-5 text-left sm:gap-5 sm:px-7 sm:py-6"
      >
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold tracking-wide text-emerald-600 sm:h-11 sm:w-11 sm:text-base"
        >
          Q
        </span>
        <span className="flex-1 text-[15px] font-bold !leading-[1.6] tracking-wide text-gray-800 sm:text-base md:text-lg">
          {question}
        </span>
        <span
          aria-hidden
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-solid transition-all duration-300 sm:h-9 sm:w-9",
            isOpen
              ? "rotate-45 border-emerald-500 bg-emerald-500 text-white"
              : "border-gray-200 text-gray-400",
          )}
        >
          <Plus className="h-4 w-4" strokeWidth={2.2} />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-4 border-t border-dashed border-gray-200 sm:mx-7" />
          <div className="flex items-start gap-3 px-4 pb-6 pt-5 sm:gap-5 sm:px-7 sm:pb-7 sm:pt-6">
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold tracking-wide text-white sm:h-11 sm:w-11 sm:text-base"
            >
              A
            </span>
            <p className="flex-1 text-sm !leading-[1.9] tracking-wide text-gray-700 sm:text-[15px] md:text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className={cn(
        "content-auto overflow-hidden py-24 font-sans sm:py-32",
        className,
      )}
    >
      <div className="relative mx-auto w-[86%] max-w-[880px] md:w-[86%]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-18%] hidden h-[340px] w-[340px] rounded-full bg-emerald-100/50 blur-3xl md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-10%] left-[-20%] hidden h-[300px] w-[300px] rounded-full bg-amber-50/70 blur-3xl md:block"
        />

        <div className="relative">
          <SectionHeader
            label="FAQ"
            align="center"
            headingClassName="text-3xl sm:text-[40px] !leading-[1.7]"
          >
            よくあるご質問
          </SectionHeader>

          <p className="mt-6 text-left text-sm !leading-[1.8] tracking-wide text-gray-800 sm:text-center sm:text-base md:text-lg">
            サービスの内容・契約の進め方まで、
            <br className="hidden md:block" />
            いただくことの多いご質問をまとめました。
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:mt-16 sm:gap-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
