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
