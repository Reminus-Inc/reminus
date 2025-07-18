"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";

export interface ContactButtonProps {
  isHeader?: boolean;
  aggressive?: boolean;
  variant?: "outline" | "round";
  iconPosition?: "left" | "right";
  size?: "default" | "small";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function ContactButton({ 
  isHeader = false, 
  aggressive = false, 
  variant = "outline",
  iconPosition = "right",
  size = "default",
  className = "",
  onClick,
  children
}: ContactButtonProps) {


  const getButtonClasses = () => {
    let buttonClasses = variant === "round" 
    ? `inline-flex items-center justify-center rounded-full text-base `
    : `text-base ${isHeader ? "h-10 sm:w-36" : "h-16 sm:w-48"} `;
    switch (size) {
      case "small":
        buttonClasses += "h-10 text-sm ";
        break;
      default:
        buttonClasses += "h-16 text-base ";
    }
    return buttonClasses + className;
  };

  return (
    <Button
      variant={variant === "round" ? "outline" : "outline"}
      className={getButtonClasses()}
      asChild
    >
      <Link
        href="/contact"
        className={`flex items-center gap-3`}
        onClick={() => {
          trackCTAClick("contact");
          onClick?.();
        }}
      >
        {iconPosition === "left" && <Calendar className={isHeader ? "h-4 w-4" : "h-5 w-5"} />}
        
        {aggressive ? (
          <span className="block leading-tight">
            {children || <>無料相談を<br className="hidden sm:block" />予約する</>}
          </span>
        ) : (
          <>お問い合わせ</>
        )}
        
        {iconPosition === "right" && <Calendar className={isHeader ? "h-4 w-4" : "h-5 w-5"} />}
      </Link>
    </Button>
  );
}
