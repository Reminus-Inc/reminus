// LP (ランディングページ) の定義。1 LP = ホーム 1 つ + 0 個以上の variant。
// ここが唯一の源で、middleware の振り分け・cookie 名・ヘッダーのホームリンクは
// すべてこの定義から導出される。LP を増やすときは LPS にエントリを 1 つ足す
// (加えて middleware の config.matcher にも literal で追記が必要。Next.js の静的解析の
//  都合でここから生成できないため。漏れは assertMatcherCoversLps が開発時に警告する)。

type VariantDef = {
  readonly id: string;
  // 表示パス。ここが実際に配信される URL で、直アクセスの入口も兼ねる。
  // LP の home と同じパスにはしないこと。home は「まだ variant が決まっていない状態」を
  // 表す抽選の入口で、そこに variant を割り当てると抽選を通らず素通りしてしまう。
  readonly path: string;
  // 新規訪問者の抽選対象かどうか。false でも直アクセス時の表示と cookie による
  // スティッキーは維持される (成果の低い variant の退避先)。
  readonly lottery: boolean;
  // 資料DL の遷移先。省略時は LP の downloadPath、それも無ければ DEFAULT_DOWNLOAD_PATH。
  // ヘッダーのボタンも記事内 CTA もここを引くので、片方だけ対応が漏れることがない。
  readonly downloadPath?: string;
};

type LpDef = {
  readonly id: string;
  readonly home: string;
  // LP 全体の資料DL 遷移先 (variant 側の指定があればそちらが優先)。
  readonly downloadPath?: string;
  // クローラ向けに home を rewrite する先。UA がボットのとき URL を home のまま
  // このパスの中身を見せる。variant ルートへ直接 rewrite すると variant 側の
  // noindex metadata が home に巻き込まれるため、noindex を持たない専用ページを指す。
  readonly botPath?: string;
  readonly variants: readonly VariantDef[];
};

// variant の path は LP ごとに命名規則が違うため規則導出せず明示する。
// 抽選対象を単一にすると全員そのバリアントに固定 (テスト停止)。variant を持つ LP は
// 最低 1 つ lottery: true にすること。
export const LPS = [
  {
    id: "top",
    home: "/",
    botPath: "/bot",
    variants: [
      // c と f は HubSpot 埋め込みの専用 DL ページを使う
      { id: "c", path: "/c", lottery: true, downloadPath: "/c/download" },
      { id: "d", path: "/d", lottery: true },
      { id: "e", path: "/e", lottery: false },
      { id: "f", path: "/f", lottery: false, downloadPath: "/c/download" },
      { id: "g", path: "/g", lottery: true, downloadPath: "/c/download" },
      // h は g の FirstView 違い (箇条書き→サブコピー / SP でもヒーロー画像)
      { id: "h", path: "/h", lottery: true, downloadPath: "/c/download" },
      // i は h のヒーロー画像違い (写真: 猫とラップトップ)
      { id: "i", path: "/i", lottery: true, downloadPath: "/c/download" },
      // j は i のヒーロー写真違い (人物写真 + 角丸のグラデ面)。
      // 資料DL は HubSpot 埋め込みではない通常の /download を使う。
      { id: "j", path: "/j", lottery: true },
    ],
  },
  {
    id: "startup",
    home: "/startup",
    variants: [],
  },
] as const satisfies readonly LpDef[];

export type Lp = (typeof LPS)[number];
export type LpId = Lp["id"];
export type Variant = (typeof LPS)[0]["variants"][number]["id"];

// LP ごとの variant を保存する cookie 名。id から導出するので定義には持たせない。
// top → "ab-test-top" となり既存 cookie と一致するため移行不要。
// 注意: id は cookie 名を決めるので load-bearing。リネームすると既存訪問者の variant が
// 読めなくなり、全員が再抽選される (進行中テストのサンプルが割れる)。
export const variantCookie = (lp: string) => `ab-test-${lp}`;

// 最後にいた LP を保存する cookie。LP 横断の情報なので 1 本だけ。
// /blog や /case のように LP に属さない共通ページが、どの LP 文脈のヘッダーを出すかの判定に使う。
export const LP_COOKIE = "lp";

export const findLp = (id: string | undefined): Lp | undefined =>
  LPS.find((lp) => lp.id === id);

export const botPathOf = (lp: LpDef): string | undefined => lp.botPath;

// pathname から「どの LP のどの variant か」を解決する。variant が undefined なら LP のホーム
// (variant を持たない LP、または top の "/" への素のアクセス = これから抽選する状態)。
export function resolveLpPath(
  pathname: string
): { lp: Lp; variant?: VariantDef } | undefined {
  for (const lp of LPS) {
    const variant = lp.variants.find((v) => v.path === pathname);
    if (variant) return { lp, variant };
    if (pathname === lp.home) return { lp };
  }
}

// 新規訪問者の抽選プール。lottery: true の variant のみが対象。
export const lotteryPool = (lp: LpDef): readonly VariantDef[] =>
  lp.variants.filter((v) => v.lottery);

// cookie に入っている variant がその LP で今も有効か (= 直アクセス表示とスティッキーの対象か)。
// 抽選から外れた variant も有効なので lottery は見ない。
export const findVariant = (
  lp: LpDef,
  variantId: string | undefined
): VariantDef | undefined => lp.variants.find((v) => v.id === variantId);

// LP + variant からホーム (ロゴやアンカーリンクの起点) のパスを導出する。
// variant が決まっていればその表示パス (top の c なら /c) を返すので、ここへのリンクは
// middleware のリダイレクトも再抽選も経由せず、そのままスティッキーな variant に着地する。
// variant が無ければ LP のホームで、top の場合はそこで初めて抽選が走る。
export function lpHomePath(lpId?: string, variantId?: string): string {
  const lp = findLp(lpId) ?? LPS[0];
  return findVariant(lp, variantId)?.path ?? lp.home;
}

const DEFAULT_DOWNLOAD_PATH = "/download";

// 資料DL の遷移先を LP × variant から導出する。ヘッダーのボタンも記事内 CTA もここを通すので、
// 「ヘッダーは /c/download なのに CTA は /download」といった不一致が起きない。
export function lpDownloadPath(lpId?: string, variantId?: string): string {
  const lp: LpDef = findLp(lpId) ?? LPS[0];
  return (
    findVariant(lp, variantId)?.downloadPath ??
    lp.downloadPath ??
    DEFAULT_DOWNLOAD_PATH
  );
}

// middleware の config.matcher が網羅すべきパス一覧。matcher 自体は Next.js が
// ビルド時に静的解析するため literal で書く必要があり、この配列から生成できない。
// 代わりに開発時に突き合わせて漏れを警告する。
export const ALL_LP_PATHS: readonly string[] = LPS.flatMap((lp) => [
  lp.home,
  ...lp.variants.map((v) => v.path),
]);

export function assertMatcherCoversLps(matcher: readonly string[]): void {
  const missing = ALL_LP_PATHS.filter((path) => !matcher.includes(path));
  if (missing.length > 0) {
    console.warn(
      `[lp] middleware の config.matcher に不足しているパス: ${missing.join(", ")}. ` +
        `LPS に追加した LP / variant は matcher にも literal で書く必要があります。`
    );
  }
}
