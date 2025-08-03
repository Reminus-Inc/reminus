import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-bold text-gray-800 text-center tracking-wide",
  {
    variants: {
      level: {
        // lg  ~ xl: leading-[1.5]
        // 2xl ~   : leading-[1.45]
        h2: "text-2xl leading-[1.45] sm:text-3xl sm:leading-[1.45] md:text-4xl md:leading-[1.45]",
        h3: "text-xl  leading-[1.5]   sm:text-2xl sm:leading-[1.45]",
        h4: "text-lg  leading-[1.5]   sm:text-xl  sm:leading-[1.5]",
      },
    },
  }
);

interface HeadingProps extends VariantProps<typeof headingVariants> {
  tag?: "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
}
export function Heading({
  tag,
  level,
  className = "",
  children,
}: HeadingProps) {
  const HeadingTag = tag ?? level ?? "h2";
  return (
    <HeadingTag className={cn(headingVariants({ level }), className)}>
      {children}
    </HeadingTag>
  );
}
