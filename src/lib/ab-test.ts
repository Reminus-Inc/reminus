// 各 variant の定義。lottery: true が新規訪問者の抽選対象。false にすると抽選から外れるが、
// 直アクセス時の表示と cookie によるスティッキーは維持される (成果の低い variant の退避先)。
// 抽選対象を単一にすると全員そのバリアントに固定（テスト停止）。最低 1 つは lottery: true にすること。
// 先頭 (VARIANTS[0]) はクローラ向けの正規コンテンツとして / (= /bot へ rewrite) で配信される。
// middleware (振り分け) と /bot (クローラ向け配信) の両方から参照するためここに切り出している。
const VARIANT_CONFIG = [
  { id: "c", lottery: true },
  { id: "d", lottery: true },
  { id: "e", lottery: false },
  { id: "f", lottery: false },
] as const;

// ページとして有効な variant 一覧 (直アクセス時の表示判定・既存 cookie の有効判定用)
export const VARIANTS = VARIANT_CONFIG.map((v) => v.id);

// 新規訪問者の抽選プール
export const LOTTERY_POOL = VARIANT_CONFIG.filter((v) => v.lottery).map(
  (v) => v.id
);

export type Variant = (typeof VARIANT_CONFIG)[number]["id"];
