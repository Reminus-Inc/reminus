"use client";

import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
interface MotionDivProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
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
export const Subtitle = () => {
  const fullText = "洗練されたSaaSエンジニアリングを事業に実装する";
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  useEffect(() => {
    const splitIndex = fullText.indexOf("を"); // 「を」で分割するインデックスを取得
    const part1 = fullText.slice(0, splitIndex + 1); // 「を」を含めた前半部分
    const part2 = fullText.slice(splitIndex + 1); // 「を」以降の後半部分

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        if (currentIndex <= part1.length) {
          setText1(part1.slice(0, currentIndex)); // text1 をアニメーション
        } else {
          setText2(part2.slice(0, currentIndex - part1.length)); // text2 をアニメーション
        }
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="relative text-lg md:text-xl text-neutral-600 h-20 flex items-center justify-center leading-loose">
        {text1}
        <br className="md:hidden" />
        {text2}
      </p>
    </>
  );
};
