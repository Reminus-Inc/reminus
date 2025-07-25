"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SecondaryButton = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Button
      // TODO: h-auto hover:bg-transparent は button のスタイル調整したタイミングで削除
      className={cn(
        "block h-auto w-full rounded-full border border-emerald-500 bg-transparent py-4 text-center text-lg font-semibold tracking-wide text-emerald-500 transition hover:border-emerald-600 hover:bg-transparent hover:text-emerald-600",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
