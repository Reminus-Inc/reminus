"use client";

import { motion } from "motion/react";
import React from "react";

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

interface ServiceItemProps {
  title: string;
  description: string;
  startPlans: string[];
}

function ServiceRangeItem({ title, description, startPlans }: ServiceItemProps) {
  const allPlans = ["Starter", "Early", "Growth"];
  const planIndices = startPlans.map(plan => allPlans.indexOf(plan));
  const minIndex = Math.min(...planIndices);
  
  const barWidthClasses = [
    "w-1/3", // Starterから
    "w-2/3", // Earlyから
    "w-full", // Growthのみ
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center mb-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="ml-6 h-2 bg-gray-200 rounded-full flex-grow">
          <div 
            className={`h-full bg-blue-600 rounded-full ${barWidthClasses[minIndex]}`}
          ></div>
        </div>
      </div>
      <p className="text-gray-600 ml-0">{description}</p>
    </div>
  );
}

export function CTOPartnerServiceRange() {
  const services = [
    {
      title: "技術戦略の策定",
      description: "事業戦略に沿った技術選定と長期ロードマップの策定",
      startPlans: ["Starter", "Early", "Growth"]
    },
    {
      title: "採用戦略と体制構築",
      description: "採用要件の定義からプロセス構築、面接支援まで",
      startPlans: ["Starter", "Early", "Growth"]
    },
    {
      title: "組織設計とマネジメント",
      description: "チーム構成と職能定義、開発プロセスの設計",
      startPlans: ["Early", "Growth"]
    },
    {
      title: "エンジニアリング施策の統括",
      description: "技術施策の管理とエンジニアリング品質の向上",
      startPlans: ["Early", "Growth"]
    },
    {
      title: "スケールに対応した組織運営",
      description: "拡大するチームのマネジメントと技術的負債の管理",
      startPlans: ["Growth"]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">サービス提供範囲</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          スタートアップの成長フェーズに合わせて、必要なサポート範囲を柔軟に提供します。
          プランによって対応範囲が異なり、成長に合わせたスケーラブルなサポートが可能です。
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-between text-sm font-medium">
            <span>Starterプラン</span>
            <span>Earlyプラン</span>
            <span>Growthプラン</span>
          </div>
          
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceRangeItem {...service} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
