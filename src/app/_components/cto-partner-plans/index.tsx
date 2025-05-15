"use client";

import { motion } from "motion/react";

interface MotionDivProps {
  children?: React.ReactNode;
  className?: string;
  initial?: any;
  whileInView?: any;
  transition?: any;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  className,
  ...props
}) => {
  return children ? (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  ) : (
    <motion.div className={className} {...props} />
  );
};
import React from "react";

interface PlanProps {
  title: string;
  description: string;
  features: string[];
}

function PlanCard({ title, description, features }: PlanProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mt-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CTOPartnerPlans() {
  const plans = [
    {
      title: "Starterプラン",
      description: "創業期のスタートアップに最適。MVPローンチに向けた技術支援と採用準備をサポート。",
      features: [
        "週1回の定期相談",
        "技術選定と方向性のアドバイス",
        "採用戦略の相談とアドバイス",
        "Slackでの日常的な質問対応"
      ]
    },
    {
      title: "Earlyプラン",
      description: "シード期〜アーリーステージのスタートアップ向け。技術戦略と組織構築を包括的に支援。",
      features: [
        "技術戦略の立案と実行支援",
        "エンジニア採用プロセス構築",
        "組織体制と職能設計",
        "週次定例とSlackサポート"
      ]
    },
    {
      title: "Growthプラン",
      description: "グロース期のスタートアップ向け。拡大する組織と技術課題に対応し、スケールを支援。",
      features: [
        "技術施策の運用と進捗管理",
        "採用活動全体のマネジメント",
        "組織マネジメントの高度化",
        "週次定例と日常的な伴走"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">CTOパートナープラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PlanCard {...plan} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
