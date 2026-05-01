"use client";

const SESSION_STORAGE_KEY = "devMode";

export const getIsDevMode = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT === "development") {
      return true;
    }
    const url = new URL(window.location.href);
    if (url.searchParams.has("dev")) {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "1");
      return true;
    }
    if (sessionStorage.getItem(SESSION_STORAGE_KEY) === "1") {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
