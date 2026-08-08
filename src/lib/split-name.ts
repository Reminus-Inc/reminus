// 氏名 1 フィールド (「お名前」) を HubSpot の lastname / firstname に振り分ける唯一の実装。
// サーバーアクション (actions.ts) と HubSpot 送信 (hubspot.ts) の両方から参照する。
// ここを二重に持つとルールが片方だけ変わって挙動がズレるので、必ずこの関数を使うこと。
//
// 分割するのは「日本語 かつ 区切りスペースあり」のときだけ。
// ローマ字は "Ren Ota" (名→姓) と "Ota Ren" (姓→名) の両方があり得て機械的に判別できないため、
// 全体を lastname に入れる。firstname は空になり得るが HubSpot 側は受け付ける。
const JAPANESE = /[぀-ゟ゠-ヿ一-鿿]/;

export function splitFullName(fullName: string): {
  lastname: string;
  firstname: string;
} {
  const normalized = fullName.trim().replace(/　/g, " ");
  const sep = normalized.indexOf(" ");

  if (sep === -1 || !JAPANESE.test(normalized)) {
    return { lastname: normalized, firstname: "" };
  }

  return {
    lastname: normalized.slice(0, sep),
    firstname: normalized.slice(sep + 1).trim(),
  };
}
