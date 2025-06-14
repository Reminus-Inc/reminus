"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, ArrowUpRight } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";

export function Competence() {
  return (
    <section className="bg-gradient-to-b from-neutral-800 to-black py-24 md:py-36">
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header and Reasons*/}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
                幅広いサービスの理由
              </h2>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-4xl">
                「こんなに多くのサービスを本当に提供できるのか」と疑問をお持ちかもしれません。私たちがスタートアップの急成長中を実現してきたソフトウェアエンジニアであることが、幅広いサービス提供を可能としています。
              </p>
            </motion.div>

            {/* Reasons */}
            <div className="space-y-12 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <Users className="w-8 h-8 text-white shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    高いレベルで複数の役割をこなす環境
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    ハイレベルなSaaSスタートアップでは、複数の専門領域を同時に担うのが日常です。エンジニアリングに関してもビジネス理解に関しても、一人ひとりが高いレベルで複数の役割をこなす「能力密度の高さ」が当たり前となっています。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <Lightbulb className="w-8 h-8 text-white shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    事業成長のためなら
                    <br className="sm:hidden" />
                    手段に囚われない文化
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    急成長中のSaaSスタートアップでは、手段にとらわれず、本当に事業成長に必要な施策をトップダウンで考え抜く結果、一人ひとりが自然と幅広い領域に取り組む文化が根付いています。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              エンジニアリングの共通課題に特化
            </h3>
            <div className="space-y-6 text-base md:text-lg text-neutral-300 leading-relaxed">
              <p>
                また、Reminusはあらゆるエンジニアリング組織がぶつかる横断領域の課題に特化してサービスを提供しています。貴社に不足しているエッセンスを補い、エンジニアリングの質を引き上げることに特化しています。
              </p>
            </div>
            <div className="space-y-6 text-base md:text-lg text-neutral-300 leading-relaxed">
              <p>
                どのようなフェーズの企業様でもお気軽にご相談ください。
                創業期であれば、CTO代行による貴社の経営戦略を踏まえた技術戦略推進など、経営レイヤからご支援できます。コア人材が揃っている企業様には、専門技術領域に特化したご支援を行い、さらなる飛躍を手伝いできます。
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-white/20 hover:border-white/40 transition-colors bg-white/10 hover:bg-white/20 mt-4 text-lg py-7 px-8"
              >
                <Link href="/contact" className="flex items-center gap-3" onClick={() => trackCTAClick("contact")}>
                  <span className="text-white">
                    お問い合わせ
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
