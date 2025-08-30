import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "block w-full rounded border border-input bg-transparent px-4 py-3 text-base text-gray-800 transition-colors placeholder:leading-relaxed placeholder:text-gray-400 focus-visible:border-indigo-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
