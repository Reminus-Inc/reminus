import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva("px-6 container mx-auto", {
  variants: {
    fullWidth: {
      none: "",
      all: "max-w-none",
      sm: "sm:max-w-none",
      md: "md:max-w-none",
      lg: "lg:max-w-none",
      xl: "xl:max-w-none",
    },
  },
  defaultVariants: {
    fullWidth: "none",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  className?: string;
  id?: string;
  children: React.ReactNode;
}
export function Section({
  fullWidth,
  className = "",
  id,
  children,
}: SectionProps) {
  return (
    <section className={cn("py-20 md:py-24", className)} id={id}>
      <div className={cn(sectionVariants({ fullWidth }))}>{children}</div>
    </section>
  );
}
