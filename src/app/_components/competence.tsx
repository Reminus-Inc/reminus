"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, ArrowUpRight } from "lucide-react";

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
                提供サービスが多すぎると
                <br className="md:hidden" />
                お思いでしょうか？
              </h2>
              <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-4xl">
                「こんなに多くのサービスを十分な専門性で提供できるのか」と疑問をお持ちかもしれません。しかし、私たちは急成長中のスタートアップで組織とSaaSプロダクトの成長を実現してきたソフトウェアエンジニアです。こうしたハイレベルなスタートアップ環境の特性が、私たちの提供サービスの基盤となっています。
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
                    高い水準で複数の役割をこなす
                    <br className="sm:hidden" />
                    "能力密度"の高さ
                  </h3>
                  <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                    ハイレベルなSaaSスタートアップでは、少人数で複数の専門領域を同時に担うのが日常です。エンジニアリングにおいても幅広いスキルが求められ、さらにビジネスへの理解やソフトスキルも必要とされる環境で、一人のエンジニアが高い水準で複数の役割をこなす「能力密度の高さ」が当たり前となっています。
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
                    急成長中のSaaSスタートアップでは、事業成長を最優先に据え、課題を特定し、それを解決するために目標を立てて行動する文化が根づいています。手段にとらわれず、本当に事業成長に必要な施策をトップダウンで考え抜く結果、一人ひとりが自然と幅広い領域で多様な取り組みを行うことになるのです。
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
              横断領域に特化して
              <br className="sm:hidden" />
              深さと幅広さを両立
            </h3>
            <div className="space-y-6 text-base md:text-lg text-neutral-300 leading-relaxed">
              <p>
                加えて、Reminusのサービスラインナップは単なる「できることの羅列」ではありません。私たちは「洗練されたSaaSエンジニアリングを事業に実装する」という理念のもと、あらゆるエンジニアリング組織に不可欠な横断的機能に特化して提供することで、深さと幅広さを両立しています。各領域は、技術誌への寄稿やイベント登壇が可能なほど十分な専門性と実績を有するものに厳選しており、貴社の事業に不足しているエッセンスを補い、エンジニアリングの質を引き上げることに特化しています。
              </p>
            </div>
            <div className="space-y-6 text-base md:text-lg text-neutral-300 leading-relaxed">
              <p>
                どのようなフェーズの企業様でもお気軽にご相談ください。
                創業期であれば、コア人材の不在を補って全方位的にエンジニアリングを強化し、事業の成長を加速させます。成長中のスタートアップや成熟企業には優秀な人材が揃っているかもしれませんが、私たちは横断的なエンジニアリング機能に特化しているため、1つや2つ不足している部分を押し上げるお手伝いができるかもしれません。
                貴社とご一緒し、共に事業を成長させていけることを楽しみにしています。
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-white/20 hover:border-white/40 transition-colors bg-white/10 hover:bg-white/20 mt-4"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <span className="text-sm sm:text-base text-white">
                    お問い合わせ
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
