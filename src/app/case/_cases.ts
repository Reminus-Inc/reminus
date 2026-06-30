// ─── 事例 (詳細ページあり) のメタデータ一元管理 ─────────────────────────────
// 各事例の META をここに集約し、詳細ページ (page.tsx)・LP の特集カード
// (case-studies.tsx)・詳細ページ下部の「あなたにおすすめの事例」
// (_related-cases.tsx) がすべてここから読む。タグ/サムネ/会社情報の二重管理を避ける。
// 新しい事例を追加したら META を定義して featuredCases に並べるだけ。

export type CaseMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  publishedAtLabel: string;
  thumbnail: string;
  thumbnailAlt: string;
  ogImage: string;
  companyName: string;
  companyUrl: string;
  logoPath: string;
  logoWidth: number;
  logoHeight: number;
  // ロゴ高さはカード側 (h-11) で固定し事例間で揃える。これは例外的な
  // 微調整用の任意オーバーライド (通常は未指定でよい)。
  logoClassName?: string;
  chips: string[];
  // サムネの object-position 調整 (人物の頭が見切れる場合など)。
  // 未指定なら中央クロップ。例: "object-[50%_18%]" で上寄せ (下側をトリム)。
  thumbnailFocusClassName?: string;
};

export const chibaEcoMeta: CaseMeta = {
  slug: "chiba-eco",
  title:
    "構想から半年で農地法SaaSを立ち上げへ。「事業会社 × 外部CTO」によるSaaS経営体制",
  description:
    "千葉エコ・エネルギー様が、SaaS経験者の採用やITコンサルではなく、外部CTO(CTO代行)という第3の選択肢を選んだ理由。半年でMVPを立ち上げ、外注先・3社体制を機能させた軌跡を伺いました。",
  publishedAt: "2026-05-30T00:00:00.000Z",
  publishedAtLabel: "2026/05/30",
  thumbnail: "/case/chiba-eco/hero.jpg",
  thumbnailAlt: "千葉エコ・エネルギー株式会社 萩原領氏のインタビューカット",
  ogImage: "/case/chiba-eco/og.jpg",
  companyName: "千葉エコ・エネルギー株式会社",
  companyUrl: "https://www.chiba-eco.co.jp/",
  logoPath: "/logos/chiba-eco.webp",
  logoWidth: 460,
  logoHeight: 190,
  chips: ["新規プロダクト立ち上げ", "売上高数億円", "業界特化SaaS"],
};

export const xnextMeta: CaseMeta = {
  slug: "xnext",
  title:
    "福利厚生サービスの急拡大構想に開発の見通しを確立。投資判断から開発実行まで最適化を推し進め、事業加速に手応え",
  description:
    "ECを中心とした福利厚生「社割NEXT」を展開する株式会社xNEXT様が、CTO代行を選んだ理由。トライアル2ヶ月で開発ロードマップと投資計画の見通しを確立し、開発現場の実行改善まで進めた軌跡を伺いました。",
  publishedAt: "2026-06-18T00:00:00.000Z",
  publishedAtLabel: "2026/06/18",
  thumbnail: "/case/xnext/hero.jpg",
  thumbnailAlt: "株式会社xNEXT 粟田氏のインタビューカット",
  ogImage: "/case/xnext/og.jpg",
  companyName: "株式会社xNEXT",
  companyUrl: "https://company.xnext.co.jp/service/",
  logoPath: "/logos/xnext.svg",
  logoWidth: 304,
  logoHeight: 111,
  chips: ["福利厚生×EC", "開発ロードマップ策定", "開発速度・品質向上"],
  // 集合写真で頭が上端ぎりぎり。上寄せして下側をトリムする。
  thumbnailFocusClassName: "object-[50%_18%]",
};

// 表示順 (新しい事例は基本この配列に並べる)
export const featuredCases: CaseMeta[] = [chibaEcoMeta, xnextMeta];
