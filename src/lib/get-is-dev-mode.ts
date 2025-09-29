"use client";

let isDevMode: boolean | null = null;
export const getIsDevMode = (): boolean => {
  if (isDevMode == null) {
    isDevMode = computeIsDevMode();
  }
  return isDevMode;
};

const computeIsDevMode = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === "development") {
      return true;
    }
    const url = new URL(window.location.href);
    if (url.searchParams.has("dev")) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
