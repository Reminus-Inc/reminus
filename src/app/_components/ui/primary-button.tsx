"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const PrimaryButton = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Button
      // TODO: h-auto は button のスタイル調整したタイミングで削除
      className={cn(
        "block h-auto w-full rounded-full border border-emerald-500 bg-emerald-500 py-4 text-center text-lg font-semibold tracking-wide text-white transition hover:bg-emerald-600",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
