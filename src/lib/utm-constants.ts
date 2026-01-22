/**
 * UTMパラメータのキー定義
 */
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_adgroup",
  "utm_adset",
  "utm_id"
] as const;

export type UTMKey = typeof UTM_KEYS[number];

export type UTMParameters = {
  [K in UTMKey]?: string;
};
