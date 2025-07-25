"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export type PrimaryButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: "filled" | "outlined";
};
export const PrimaryButton = ({
  variant = "filled",
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  const variants = cva(
    // TODO: h-auto は button のスタイル調整したタイミングで削除
    "block h-auto w-full rounded-full py-5 text-center text-lg font-semibold tracking-wider transition-colors duration-300",
    {
      variants: {
        variant: {
          filled: "bg-primary text-primary-foreground hover:bg-primary-hover",
          outlined:
            "border-primary border text-primary bg-transparent hover:bg-transparent hover:text-primary-hover hover:border-primary-hover",
        },
      },
    }
  );
  return (
    <Button className={cn(variants({ variant, className }))} {...props}>
      {children}
    </Button>
  );
};
