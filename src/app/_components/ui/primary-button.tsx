"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

const primaryButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-center font-bold tracking-wider transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "",
        outlined: "",
      },
      color: {
        primary: "",
        white: "",
      },
      size: {
        small: "py-3 px-6 text-sm",
        default: "py-4 px-12 text-lg",
      },
      shadow: {
        true: "shadow-[0_0_20px_color-mix(in_hsl,var(--primary)_50%,transparent)]",
      },
    },
    compoundVariants: [
      // filled × primary
      {
        variant: "filled",
        color: "primary",
        class: "bg-primary text-primary-foreground hover:bg-primary-hover",
      },
      // outlined × primary
      {
        variant: "outlined",
        color: "primary",
        class: [
          "bg-transparent",
          "text-primary",
          "ring-inset ring-1 ring-primary",
          "hover:ring-primary-hover hover:text-primary-hover",
        ].join(" "),
      },
      // filled × white
      {
        variant: "filled",
        color: "white",
        class:
          "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
      },
      // outlined × white
      {
        variant: "outlined",
        color: "white",
        class: [
          "bg-transparent",
          "text-primary-foreground",
          "ring-inset ring-1 ring-primary-foreground",
          "hover:ring-primary-foreground/80",
        ].join(" "),
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "default",
      shadow: false,
    },
  }
);
export interface PrimaryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export const PrimaryButton = ({
  variant,
  color,
  size,
  shadow,
  asChild = false,
  className,
  children,
  ...props
}: PrimaryButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        primaryButtonVariants({ variant, color, size, shadow }),
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
