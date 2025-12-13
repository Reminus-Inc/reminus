export const DOCUMENT_TYPE = {
  CTO_PARTNER: "cto_partner",
  CTO_UNIT: "cto_unit",
} as const;
export const DOCUMENT_TYPE_MAP = {
  [DOCUMENT_TYPE.CTO_PARTNER]: "CTOパートナー",
  [DOCUMENT_TYPE.CTO_UNIT]: "CTOユニット",
} as const;
export type DocumentType = (typeof DOCUMENT_TYPE)[keyof typeof DOCUMENT_TYPE];
export const DOCUMENT_URL_MAP = {
  [DOCUMENT_TYPE.CTO_PARTNER]:
    "https://box.reminus.co.jp/p/reminus/reminus-ctopartner-intro",
  [DOCUMENT_TYPE.CTO_UNIT]:
    "https://box.reminus.co.jp/p/reminus/reminus-ctounit-intro",
} as const;

export const SLACK_NOTIFICATION_TYPE = {
  CONTACT: "contact",
  DOWNLOAD: "download",
} as const;

export type SlackNotificationType =
  (typeof SLACK_NOTIFICATION_TYPE)[keyof typeof SLACK_NOTIFICATION_TYPE];
