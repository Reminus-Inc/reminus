"use client";

import { AnimatePresence, motion, MotionProps } from "framer-motion";
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
  );
};
