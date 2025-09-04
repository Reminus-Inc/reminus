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
