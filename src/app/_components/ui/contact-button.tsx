"use client";

import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";

import { PrimaryButton, PrimaryButtonProps } from "./primary-button";

export interface ContactButtonProps extends PrimaryButtonProps {
  isHeader?: boolean;
  aggressive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
export function ContactButton({
  isHeader = false,
  aggressive = false,
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
        {aggressive ? (
          <span>
            {children || (
              <>
                無料相談を<span className="whitespace-nowrap">予約する</span>
              </>
            )}
          </span>
        ) : (
          <>お問い合わせ</>
        )}
      </Link>
    </PrimaryButton>
  );
}
