"use client";

import { SecondaryButton } from "@/app/_components/ui/secondary-button";
import { trackCTAClick, trackSpirPageView } from "@/lib/analytics";
import Link from "next/link";

export const SchedulingButton = () => {
  return (
    <SecondaryButton asChild>
      <Link
        href="https://meetings.immedio.io/date_select?uk=8ze2jVpsiNsxvR2jIEnM#calendar"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackCTAClick("spir");
          trackSpirPageView();
        }}
      >
        直接日程調整する
      </Link>
    </SecondaryButton>
  );
};
