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
    <main className="theme-cto-team">
      <div className="bg-gray-800 pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-16 lg:pt-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-20 lg:flex-row lg:gap-10">
            <div>
              <p className="text-center text-sm font-semibold tracking-wide text-orange-400 sm:text-base lg:text-left">
                エンジニア紹介で失敗したくないあなたへ
              </p>

              <h1 className="mt-3 text-center text-2xl font-bold leading-[1.5] tracking-wide text-white sm:text-4xl sm:leading-[1.4] md:text-[2.6rem] md:leading-[1.35] lg:text-left">
                CTOが率いる開発チームで
                <br />
                <span className="text-orange-400">事業の立ち上げリスク</span>
                をゼロにする。
              </h1>

              <p className="mt-10 text-center text-base leading-relaxed tracking-wide text-gray-200 lg:text-left">
                もう、エンジニアのミスマッチやマネジメントの悩みに時間を浪費するのはやめませんか？
              </p>

              <ul className="mx-auto mt-5 table space-y-2 text-lg font-semibold text-white sm:space-y-4 sm:text-xl lg:block">
                <li className="flex items-center gap-3 tracking-wide">
                  <SquareCheckBig className="h-6 w-6 text-orange-400" />
                  CTO丸ごとパッケージで管理コストゼロ
                </li>
                <li className="flex items-center gap-3 tracking-wide">
                  <Zap className="h-6 w-6 text-orange-400" />
                  プロダクトの立ち上げを劇的に加速
                </li>
                <li className="flex items-center gap-3 tracking-wide">
                  <ThumbsUp className="h-6 w-6 text-orange-400" />
                  高品質なユーザー体験を共に実現
                </li>
              </ul>

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
        <H2>こんなことでお困りではありませんか？</H2>
        <div className="flex justify-center">
          <ul className="grid max-w-4xl gap-x-8 gap-y-4 md:grid-cols-2 md:gap-y-6">
            {[
              "紹介されたエンジニアとのミスマッチが不安",
              "技術的な意思決定ができる人がいない",
              "開発の進捗がブラックボックス化している",
              "品質が低く、バグや手戻りが多い",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-500" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <H2>
          なぜ「エンジニア紹介」ではなく
          <br />
          「CTO付きチーム」が選ばれるのか？
        </H2>
        <div className="space-y-12">
          <p className="text-center text-lg leading-relaxed text-gray-800">
            スタートアップの成功を左右するのは、事業立ち上げのスピードです。
            <br />
            CTO付きエンジニアチームなら、今すぐプロダクト開発にフルフォーカス可能です。
          </p>
          <div className="grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-12">
            <Card className="border-2 border-gray-200">
              <CardHeader className="py-8 text-center">
                <CardTitle className="text-xl tracking-wide text-gray-600 sm:text-2xl">
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    <div className="rounded-full bg-gray-100 p-3">
                      <User
                        className="h-6 w-6 text-gray-400"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span>一般的なエンジニア紹介</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="mx-auto table text-gray-600">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5">
                    <X className="h-5 w-5 text-red-500" />
                    <p>必要な人数分だけ採用活動が必要</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500" />
                    <p>ミスマッチが起きると、採用費も時間も無駄に</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500" />
                    <p>経営者に技術選定やマネジメントの能力が必要</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500" />
                    <p>
                      プロダクト開発が中心で、
                      <br className="hidden md:block" />
                      事業全体への視野や主体性が期待しづらい
                    </p>
                  </li>
                </ul>
                <div className="mt-6 px-6 sm:mt-12">
                  <img
                    src="/single-developer.svg"
                    alt=""
                    className="mx-auto w-full max-w-[280px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 bg-orange-50/50">
              <CardHeader className="py-8 text-center">
                <CardTitle className="text-xl tracking-wide text-orange-500 sm:text-2xl">
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
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
              <CardContent className="mx-auto table text-gray-800">
                <ul className="space-y-3 font-semibold">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-orange-500" />
                    <p>チーム一式で、管理コストゼロ</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-orange-500" />
                    <p>採用コストゼロ。実績ある体制で即座に開発を始動</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-orange-500" />
                    <p>最適な技術戦略とマネジメントを全てお任せ</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-orange-500" />
                    <p>事業成長を見据えて伴走するエンジニアチーム</p>
                  </li>
                </ul>
                <div className="mt-10 px-6 sm:mt-16">
                  <img
                    src="/cto-team.svg"
                    alt=""
                    className="mx-auto w-full max-w-[340px]"
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
    </main>
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
