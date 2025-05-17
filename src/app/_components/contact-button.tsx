"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ContactButtonProps {
  isHeader?: boolean;
  aggressive?: boolean;
  variant?: "outline" | "round";
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export function ContactButton({ 
  isHeader = false, 
  aggressive = false, 
  variant = "outline",
  iconPosition = "right",
  className = "",
  children
}: ContactButtonProps) {
  const buttonClasses = variant === "round" 
    ? `inline-flex items-center justify-center rounded-full text-base ${className}`
    : `text-base ${isHeader ? "h-10 sm:w-36" : "h-16 sm:w-48"} ${className}`;

  return (
    <Button
      variant={variant === "round" ? "outline" : "outline"}
      className={buttonClasses}
      asChild
    >
      <a
        href="#contact"
        className={`flex items-center gap-3`}
        onClick={() => {
          window.gtag?.("event", "contact_link_click", {
            event_category: "engagement",
            event_label: "contact_link_click",
          });
        }}
      >
        {iconPosition === "left" && <ArrowRight className={isHeader ? "h-4 w-4" : "h-5 w-5"} />}
        
        {aggressive ? (
          <span className="block leading-tight">
            {children || <>無料相談を<br className="hidden sm:block" />予約する</>}
          </span>
        ) : (
          <>お問い合わせ</>
        )}
        
        {iconPosition === "right" && <ArrowRight className={isHeader ? "h-4 w-4" : "h-5 w-5"} />}
      </a>
    </Button>
  );
}