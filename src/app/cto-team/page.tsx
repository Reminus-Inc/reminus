import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Check,
  SquareCheckBig,
  ThumbsUp,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { SchedulingButton } from "@/app/contact/scheduling-button";

import { Management } from "@/app/_components/sections/management";
import { ContactForm } from "@/app/_components/ui/contact-form";
import { ClientLogos } from "../_components/sections/client-logos";
import { CompanyOverview } from "../_components/sections/company-overview";

export const metadata = {
  title: "CTO付きエンジニアチーム | Reminus",
  description:
    "エンジニア紹介で失敗したくないあなたへ。Reminusの「CTO付きエンジニアチーム」が、技術戦略から実装・マネジメントまで丸ごと伴走します。",
};

export default function CTOTeamPage() {
  return (
    <>
      <div className="bg-gray-800 pb-16 pt-4 md:pb-20 lg:pb-16 lg:pt-0">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-20 lg:flex-row lg:gap-10">
            <div className="lg:pt-6">
              <p className="text-center text-sm font-semibold tracking-wide text-orange-400 sm:text-base lg:text-left">
                エンジニア紹介で
                <span className="whitespace-nowrap">
                  失敗したくないあなたへ
                </span>
              </p>

              <h1 className="mt-2 text-center text-3xl font-bold leading-[1.4] tracking-wide text-white sm:text-4xl sm:leading-[1.4] md:text-[2.6rem] md:leading-[1.35] lg:text-left">
                CTOが率いる
                <span className="whitespace-nowrap">開発チームで</span>
                <br />
                <span className="text-orange-400">事業の立ち上げリスク</span>
                をゼロにする。
              </h1>

              <div className="mt-4 sm:hidden">
                <img
                  src="/cto-team/hero.svg"
                  alt=""
                  className="mx-auto w-[80%] max-w-[400px] sm:hidden"
                />
              </div>

              <p className="mt-10 text-center text-sm leading-[1.8] tracking-wide text-gray-200 sm:text-base sm:leading-relaxed lg:text-left">
                もう、エンジニアのミスマッチやマネジメントの悩みに時間を浪費するのはやめませんか？
              </p>

              <div className="-mx-2 sm:mx-0">
                <ul className="mx-auto mt-5 table space-y-2 text-base font-semibold text-white sm:space-y-4 sm:text-xl lg:block">
                  <li className="flex items-center gap-3 tracking-wide">
                    <Zap className="h-6 w-6 text-orange-400" />
                    プロダクトの立ち上げを劇的に加速
                  </li>
                  <li className="flex items-center gap-3 tracking-wide">
                    <SquareCheckBig className="h-6 w-6 text-orange-400" />
                    CTO丸ごとパッケージで管理コストゼロ
                  </li>
                  <li className="flex items-center gap-3 tracking-wide">
                    <ThumbsUp className="h-6 w-6 text-orange-400" />
                    高品質なユーザー体験を共に実現
                  </li>
                </ul>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <div className="w-full max-w-[440px]">
                  <SchedulingButton label="今すぐ日程調整" />
                </div>
              </div>
            </div>

            <div className="hidden w-full justify-center sm:flex lg:max-w-[460px]">
              <Card>
                <CardContent className="p-6">
                  <h2 className="mb-4 text-lg font-semibold text-gray-800">
                    どのような内容でもお気軽にご相談ください！
                  </h2>
                  <ContactForm
                    showContent={false}
                    showChip={false}
                    buttonProps={{
                      variant: "outlined",
                      className: "py-2.5",
                    }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <H2>
          こんなことで
          <span className="whitespace-nowrap">お困りではありませんか？</span>
        </H2>
        <div className="flex justify-center">
          <ul className="grid max-w-4xl gap-x-8 gap-y-4 md:grid-cols-2 md:gap-y-6">
            {[
              "紹介されたエンジニアとのミスマッチが不安",
              "技術的な意思決定ができる人がいない",
              "開発の進捗がブラックボックス化している",
              "品質が低く、バグや手戻りが多い",
            ].map((item) => (
              <li key={item}>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red-500" />
                  <span className="text-base sm:text-lg">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <H2>
          なぜ「エンジニア紹介」ではなく
          <span className="text-orange-500">「CTO付きチーム」</span>
          が選ばれるのか？
        </H2>
        <div className="space-y-12">
          <p className="text-center text-sm leading-relaxed text-gray-800 sm:text-lg sm:leading-relaxed">
            スタートアップの成功を左右するのは、
            <span className="whitespace-nowrap">事業立ち上げのスピード</span>
            です。
            <br />
            CTO付きエンジニアチームなら採用の不安の悩みゼロ。今日からプロダクトに集中できます。
          </p>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-12">
            <Card className="border-2 border-gray-200">
              <CardHeader className="px-4 pb-5 pt-5 text-center sm:pb-4 sm:pt-8">
                <CardTitle className="text-lg tracking-wide text-gray-600 sm:text-2xl">
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                    <div className="-ml-3 rounded-full bg-gray-100 p-3">
                      <User
                        className="h-6 w-6 text-gray-400"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span>一般的なエンジニア紹介</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="mx-auto table text-sm text-gray-600 sm:text-base">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div>
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <p>必要な人数分だけ採用活動が必要</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <p>ミスマッチで採用費も時間も無駄に</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <p>マネジメントしないと指示待ちに</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <p>事業やGo-to-Marketの目線がない</p>
                  </li>
                </ul>
                <div className="mt-8 sm:mt-12">
                  <img
                    src="/cto-team/single-developer.svg"
                    alt=""
                    className="mx-auto w-[70%] max-w-[280px] sm:w-full"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 bg-orange-50/50">
              <CardHeader className="px-4 pb-5 pt-5 text-center sm:pb-4 sm:pt-8">
                <CardTitle className="text-lg tracking-wide text-orange-500 sm:text-2xl">
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                    <div className="rounded-full bg-orange-100 p-3">
                      <Users
                        className="h-6 w-6 text-orange-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span>ReminusのCTO付きチーム</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="mx-auto table px-4 text-sm text-gray-800 sm:text-base">
                <ul className="space-y-3 font-semibold">
                  <li className="flex items-center gap-3">
                    <div>
                      <Check className="h-5 w-5 text-orange-500" />
                    </div>
                    <p>チーム一式で、管理コストゼロ</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <Check className="h-5 w-5 text-orange-500" />
                    </div>
                    <p>採用コストゼロ。実績ある体制で即立ち上げ</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <Check className="h-5 w-5 text-orange-500" />
                    </div>
                    <p>最技術とマネジメントを全てお任せ</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <div>
                      <Check className="h-5 w-5 text-orange-500" />
                    </div>
                    <p>事業成長に向けて伴走する開発チーム</p>
                  </li>
                </ul>
                <div className="mt-10 sm:mt-11">
                  <img
                    src="/cto-team/cto-team.svg"
                    alt=""
                    className="mx-auto w-[80%] max-w-[344px] sm:w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <ClientLogos />
      </Section>

      <Section className="bg-gray-800">
        <H2 className="text-white">
          開発で失敗するリスク、今すぐゼロにしませんか？
        </H2>
        <div className="mx-auto max-w-[600px] space-y-8">
          <SchedulingButton />
          <p className="text-center tracking-wider text-white">または、</p>
          <div>
            <Card>
              <CardContent className="space-y-5 p-5 sm:p-7">
                <p className="font-semibold leading-relaxed tracking-wider text-gray-800">
                  どのような内容でもお気軽にご相談ください！
                </p>
                <ContactForm
                  buttonProps={{
                    variant: "outlined",
                    className: "py-3",
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Management />
      <CompanyOverview />
    </>
  );
}

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto space-y-10 px-6 md:space-y-16">
        {children}
      </div>
    </section>
  );
};

const H2 = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-center text-2xl font-semibold leading-[1.4] text-gray-800 sm:text-3xl sm:leading-[1.4] md:text-4xl md:leading-[1.4]",
        className
      )}
    >
      {children}
    </h2>
  );
};
