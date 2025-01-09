"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, ArrowUpRight, Check } from "lucide-react";

export function Competence() {
  return (
    <section className="relative bg-[#111] min-h-screen py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black opacity-50" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              提供サービスが多すぎると
              <br className="hidden sm:inline" />
              お思いでしょうか？
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
            「こんなに多くのサービスを十分な専門性で提供できるのか」と思われるかもしれません。しかし、私たちは急成長中のスタートアップで組織とSaaSプロダクトの成長を実現してきたソフトウェアエンジニア集団です。こうしたハイレベルなスタートアップ環境には、次のような特性があり、それが私たちの提供サービスの基盤となっています。
                        </p>
          </motion.div>

          {/* Reasons */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <Users className="w-8 h-8 text-white shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                高い水準で複数の役割をこなす"能力密度"の高さ
                </h3>
                <p className="text-neutral-300 leading-relaxed">
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
                <h3 className="text-2xl font-semibold text-white">
                  事業成長のためなら手段に囚われず行動する文化
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                急成長中のSaaSスタートアップでは、事業成長を最優先に据え、課題を特定し、それを解決するために目標を立てて行動する文化が根づいています。手段にとらわれず、本当に事業成長に必要な施策をトップダウンで考え抜く結果、一人ひとりが自然と幅広い領域で多様な取り組みを行うことになるのです。
                </p>
              </div>
            </motion.div>
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              幅広さこそがReminusの強み（作成中）
            </h3>
            <div className="space-y-6 text-neutral-300 leading-relaxed hidden">
              <p>
              こうしたスタートアップの特性の中で高いレベルの専門性を身につけたエンジニアが集まっているからこそ、Reminusでは幅広いサービス提供が可能です。さらに、役割間の境界を低くし、無駄なコミュニケーションコストやボールがこぼれるリスクを最小化することで、意思決定と実行がスムーズに進みます。これが、私たちの提供するサービスの強みです。
              </p>
              <p>
              Reminusは、「トップレベルのSaaSエンジニアリングの洞察を、事業に実装する」という理念のもと、幅広さと深さを兼ね備えた包括的なソリューションを提供しています。単なる「できることの羅列」ではなく、プロダクトエンジニアリングに必要な機能を有機的に組み合わせ、貴社の課題を最短距離で解決する支援を行います。
              </p>
            </div>

            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
              一つの領域はもちろん、複数の領域にまたがるご依頼にも柔軟に対応いたします。たとえ1つのサービスだけでも、隣接する領域を見据えながら、深く専門性を発揮するのが私たちの特徴です。シード期であれば、コア人材が担うべき領域を補強し、成長を加速させるサポートを。成長中のスタートアップであれば、必要な領域を横断的に支援することで、貴社の不足を補い、事業成長に貢献します。まずはお気軽にご相談ください。私たちは、貴社のチームに加わり、共に事業を成長させていけることを楽しみにしています。
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="group border-white/20 hover:border-white/40 text-white"
              >
                <span>お問い合わせ</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
