// AB テストの振り分け対象 variant。
// 単一にすると全員そのバリアントに固定（テスト停止）、複数あれば等確率で割り振る。
// 先頭 (VARIANTS[0]) はクローラ向けの正規コンテンツとして / (= /bot へ rewrite) で配信される。
// middleware (振り分け) と /bot (クローラ向け配信) の両方から参照するためここに切り出している。
export const VARIANTS = ["c", "d", "e"] as const;

export type Variant = (typeof VARIANTS)[number];
