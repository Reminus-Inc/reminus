"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const fullText =
    "一流SaaSスタートアップ経験者が、ソフトウェアエンジニアリングを全方位で支援する";
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#fafafa] to-white" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-[#fafafa] via-white to-[#fafafa] opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative space-y-4">
                <h1 className="relative text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-black">
                  Reminus
                </h1>
                <p className="relative text-lg md:text-xl text-neutral-600 h-20 flex items-center justify-center">
                  <AnimatePresence>
                    {text.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: -1 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <Button
              asChild
              size="lg"
              className="group overflow-hidden bg-black hover:bg-neutral-800 transition-colors"
            >
              <a href="#contact" className="flex items-center gap-2">
                <span>お問い合わせ</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="overflow-hidden group border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50 transition-colors"
            >
              <a href="#services" className="flex items-center">
                <span>サービス詳細</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
