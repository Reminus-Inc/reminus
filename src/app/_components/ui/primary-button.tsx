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
        small: "px-6 text-xs font-medium tracking-wide",
        medium: "px-8 text-base",
        default: "px-12 text-lg",
      },
      density: {
        default: "",
        relaxed: "",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      // size * density
      {
        size: "small",
        density: "default",
        class: "py-3",
      },
      {
        size: "small",
        density: "relaxed",
        class: "py-4",
      },
      {
        size: "medium",
        density: "default",
        class: "py-3.5",
      },
      {
        size: "medium",
        density: "relaxed",
        class: "py-4.5",
      },
      {
        size: "default",
        density: "default",
        class: "py-4",
      },
      {
        size: "default",
        density: "relaxed",
        class: "py-5",
      },
      // variant * color
      {
        variant: "filled",
        color: "primary",
        class: "bg-primary text-primary-foreground hover:bg-primary-hover",
      },
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
      {
        variant: "filled",
        color: "white",
        class: [
          "bg-white text-emerald-500",
          "hover:bg-white/95 hover:text-emerald-600",
        ],
      },
      {
        variant: "outlined",
        color: "white",
        class: [
          "bg-transparent",
          "text-white",
          "ring-inset ring-1 ring-white",
          "hover:bg-white hover:text-primary",
        ].join(" "),
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "default",
      color: "primary",
      density: "default",
      fullWidth: false,
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
  density,
  fullWidth,
  asChild = false,
  className,
  children,
  ...props
}: PrimaryButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        primaryButtonVariants({
          variant,
          color,
          size,
          fullWidth,
          density,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
