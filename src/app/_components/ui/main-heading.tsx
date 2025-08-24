import React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";

type MainHeadingProps = {
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};
export function MainHeading({
  subtitle,
  className = "",
  children,
}: MainHeadingProps) {
  return (
    <div className={cn("mb-12 space-y-7 text-center md:mb-16", className)}>
      <Heading level="h2">{children}</Heading>
      {subtitle && (
        <p className="text-center text-base leading-7 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
