import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center rounded-full text-xs font-bold tracking-wider px-3 py-1",
  {
    variants: {
      color: {
        default: "text-gray-600 bg-gray-100",
        red: "text-red-500 bg-red-100",
        orange: "text-orange-500 bg-orange-100",
        blue: "text-blue-500 bg-blue-100",
        green: "text-green-600 bg-green-100",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof chipVariants> {}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, color, children, ...props }, ref) => {
    return (
      <div
        className={cn(chipVariants({ color }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
