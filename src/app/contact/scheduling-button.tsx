"use client";

import {
  PrimaryButton,
  PrimaryButtonProps,
} from "@/app/_components/ui/primary-button";
import { trackCTAClick, trackSpirPageView } from "@/lib/analytics";
import Link from "next/link";

const DEFAULT_LABEL = "直接日程調整する";

type SchedulingButtonProps = PrimaryButtonProps & {
  label?: string;
};
export const SchedulingButton = ({
  label = DEFAULT_LABEL,
  ...props
}: SchedulingButtonProps) => {
  return (
    <PrimaryButton asChild {...props}>
      <Link
        href="https://meetings.immedio.io/date_select?uk=8ze2jVpsiNsxvR2jIEnM#calendar"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackCTAClick("spir");
          trackSpirPageView();
        }}
      >
        {label}
      </Link>
    </PrimaryButton>
  );
};
