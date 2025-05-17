"use client";

import { motion, MotionProps } from "motion/react";
interface MotionDivProps extends MotionProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
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
  const splitIndex = fullText.indexOf("を");
  const part1 = fullText.slice(0, splitIndex + 1);
  const part2 = fullText.slice(splitIndex + 1);

  return (
    <>
      <p className="relative text-xl md:text-2xl text-neutral-600 h-20 flex items-center justify-center leading-loose">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {part1}
          <br className="md:hidden" />
          {part2}
        </motion.span>
      </p>
    </>
  );
};
