"use client";

import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";

import { PrimaryButton, PrimaryButtonProps } from "./primary-button";

export interface ContactButtonProps extends PrimaryButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}
export function ContactButton({
  onClick,
  children,
  ...props
}: ContactButtonProps) {
  return (
    <PrimaryButton variant="outlined" asChild {...props}>
      <Link
        href="/contact"
        className={`flex items-center gap-3`}
        onClick={() => {
          trackCTAClick("contact");
          onClick?.();
        }}
      >
        <span>
          {children || "お問い合わせ"}
        </span>
      </Link>
    </PrimaryButton>
  );
}
