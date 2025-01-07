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
    "トップレベルのSaaSエンジニアリングの洞察を、事業に実装する";
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
    <>
    <p className="relative text-lg md:text-xl text-neutral-600 h-20 flex items-center justify-center leading-loose">
        {text}
    </p>
    
    </>

  );
};
