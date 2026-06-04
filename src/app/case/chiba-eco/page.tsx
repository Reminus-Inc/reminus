import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Fragment } from "react";

import { ArticleCta } from "@/app/blog/_components/article-cta";

// ─── メタ ───────────────────────────────────────────────────────────────
// LP の特集カード (case-studies.tsx) もこの META を import して使う。
// タグ/サムネ/会社情報は二重管理しない。
export const META = {
  slug: "chiba-eco",
  title:
    "構想から半年で農地法SaaSを立ち上げへ。「事業会社 × 外部CTO」によるSaaS経営体制",
  description:
    "千葉エコ・エネルギー様が、SaaS経験者の採用やITコンサルではなく、外部CTO(CTO代行)という第3の選択肢を選んだ理由。半年でMVPを立ち上げ、外注先・3社体制を機能させた軌跡を伺いました。",
  publishedAt: "2026-05-30T00:00:00.000Z",
  publishedAtLabel: "2026/05/30",
  thumbnail: "/case/chiba-eco/hero.jpg",
  thumbnailAlt: "千葉エコ・エネルギー株式会社 萩原領氏のインタビューカット",
  companyName: "千葉エコ・エネルギー株式会社",
  companyUrl: "https://www.chiba-eco.co.jp/",
  logoPath: "/logos/chiba-eco.webp",
  logoWidth: 300,
  logoHeight: 40,
  logoClassName: "w-[110px]",
  chips: ["新規プロダクト立ち上げ", "売上高数億円", "業界特化SaaS"],
};

const CHALLENGES = [
  "SaaS 開発のノウハウ・リソースが社内になく、技術での実装方針が決められない",
  "経営に必要な「技術的な判断材料」が手元になく、採用も判断しきれない",
  "外注先の選定・管理ノウハウもなく、品質と進行のリスクを抱えていた",
];
const RESULTS = [
  "構想だけだった状態から半年で農地法SaaSのβ版をリリース",
  "「何を作らないか」まで含めた要件定義で、事業ステージに沿った絞り込みに成功",
  "外注先 × 自社 × 外部CTO の3社体制で、品質トラブルなく開発を完遂",
];

const LEAD: string[] = [
  "千葉大学発のスタートアップ、千葉エコ・エネルギー株式会社。創業以来、農地の上で農作物と再生可能エネルギーを同時に生み出す「営農型太陽光発電」を手がけている。加えて、農地法に関する煩雑な行政手続きをSaaSでDX化する、初めて本格的な自社プロダクト開発も進めている。",
  "しかし、当初は悩みもあった。事業の中身は分かる。何を解きたいかも分かる。ただ、それを「技術でどう実装するか」は、社内だけでは判断しきれなかった。SaaS経験者の採用も、ITコンサルティングも検討した。そのうえで、同社が選んだのは、外部CTOという第3の選択肢だった。",
  "構想だけだった状態から半年。同社は農地法SaaSのプロダクトを立ち上げ、その先へと駒を進めている。その背景と、半年間の軌跡を、同社の萩原領氏に伺った。",
];

const PULL_QUOTE =
  "「ビジネスジャッジは10年以上やってきました。そこが不足しているという認識はなかった。欲しかったのは、テクニカルな部分でこちら側目線で一緒に見てくれる存在だったんです」";

// ─── 本文 (Q&A 形式の構造化データ) ───────────────────────────────────────
// 1セクション = タイトル + 写真 + Q&A の配列。
// a[] は HTML 文字列を許容 (一部 <strong> を効かせるため)。
type QA = { q: string; a: string[] };
type Section = {
  title: string;
  image: { src: string; alt: string };
  qa: QA[];
};

const SECTIONS: Section[] = [
  {
    title:
      "「事業はやるしかない、でも開発をどう進めるか」着手前に抱えていた不安",
    image: {
      src: "/case/chiba-eco/section-1.jpg",
      alt: "オフィスでインタビューに応える萩原氏",
    },
    qa: [
      {
        q: "着手前、御社が抱えていた課題を教えてください",
        a: [
          "私たちは農地の上で野菜と電気を作る「営農型太陽光発電」というビジネスをやらせていただいています。その中で、農地法という国の許認可手続きが必要になってくる。そこをDXで乗り越えて、簡易化していくことを目指しました。",
          "ただ、実際にやろうとすると、社内には開発経験者がいない。加えて昨今、AIを含めて技術の進歩が早い中で、なかなかキャッチアップも難しいと感じました。",
        ],
      },
      {
        q: "一番不安だったのはどんなことでしたか",
        a: [
          "一番は、社内に経験者がいないことです。SaaS経験のある方を採用しても、いきなりどこまで任せればいいのかが分からない。経営判断をするための技術的な「材料」が、自分たちの手元にない状態だったんです。",
          "そういう中でも、事業をやらない選択肢はありませんでした。私たち自身が現場でユーザーペインを感じていたので、「作らない」という選択肢はなかったんです。",
        ],
      },
    ],
  },
  {
    title: "採用でもITコンサルでもなく、外部CTO（CTO代行）を選んだ理由",
    image: {
      src: "/case/chiba-eco/section-2.jpg",
      alt: "千葉エコ・エネルギーのオフィスでの一枚",
    },
    qa: [
      {
        q: "採用や、ほかの選択肢も検討されたと伺いました",
        a: [
          "もちろん採用も検討しました。ただ、スピード感とコストの面でハードルがあったんです。SaaS経験のある方を採用しても、いきなりどこまでその方に判断を委ねればいいのかが、自分たちには分からない。",
          "ITコンサルティングも、他社含めていくつか拝見しました。ただ、私たちが欲しかったのはITコンサルというよりは、テクニカルな部分でこちら側の目線で一緒に見てくれるパートナーだったんです。",
        ],
      },
      {
        q: "「経営判断」と「技術判断」を分けて考えていたんですね",
        a: [
          "そうですね。ビジネスジャッジという意味では10年以上やっていますので、そこは不足しているという認識はなかったんです。本当にテクニカルなところで、自分たちがどう判断すればいいか、またはその材料を出してくれるかというところを担ってほしかった。",
          "その意味で、Reminusは「CTO」と明確に区切られていた。そこが、ほかのコンサルティングサービスとの大きな違いでした。",
        ],
      },
      {
        q: "体制としては、CTOが外部にいるイメージか、チームの中にいるイメージか、どちらを期待していましたか",
        a: [
          "もともと「外部CTO」というサービスでしたので、そこにこだわりはなかったです。1人がしっかり情報を集約して判断材料を出してくれるのであれば、外か中かの違いはあまり関係ないと思っていました。",
          "担当者が上長に聞いてくる、みたいな進め方だと、どうしてもスピード感が出ない。透明性を持ってワンチームで動けるような体制と、その柔軟性が大事でした。",
        ],
      },
      {
        q: "最終的にReminusを選んだ決め手は",
        a: [
          "「CTOというサービスのコンセプト」ですね。テクニカルな判断の材料を、こちら側の目線で出してくれる。そして、契約の柔軟性も大きかったです。いきなり本契約ではなく、まずトライアルから始められた。経営者としては、判断材料を集めるための「ワンステップ」を踏める形でご相談できたのが、ありがたかったですね。",
        ],
      },
    ],
  },
  {
    title: "進め方が見えなかったところから、「何を作らないか」まで描けるように",
    image: {
      src: "/case/chiba-eco/section-3.jpg",
      alt: "ミーティングで議論する萩原氏",
    },
    qa: [
      {
        q: "支援が始まった頃、印象に残っているのはどんなことですか",
        a: [
          "GitHubやAWSといったサービスの名前は知っていました。学生時代にホームページを作っていたので、レンタルサーバーやドメインのような基礎的な知識はある。",
          "ただ、いまの時代にSaaSを作るとなったとき、何をチョイスすればいいのか、まったく分からなかった。まずモックをどう作るか、初期に最低限何を用意するか。要件定義をするにしても、技術的に何ができて何ができないかが分からないと、判断もできない。",
          "そういうところを一つひとつ、議論しながら整理できたのが、本当にありがたかったです。",
        ],
      },
      {
        q: "構想からプロダクトの形へ展開していく中で、「どの機能を入れるか／入れないか」の判断はどう進みましたか",
        a: [
          "最初はやりたいことがたくさんあった。ただ、全体像としてゴールはありつつも、ある種のPoCとして「まず何ができればいいか」を要件定義の中で絞り込んでいった。結果的に、その絞り込みができたから、その先の事業スピードにもつながっていったと感じています。",
          "社内だけだと、どうしても「やりたいから入れたい」が勝ってしまうんです。そこを技術の視点から、経営の立場に寄り添うかたちで「これは後でいい」「これは今やる意味が薄い」と提案してもらえたのは、構想を健全に絞り込む上で本当に効きました。",
        ],
      },
      {
        q: "振り返って、Reminusが具体的にどの領域でサポートしたか、印象的なものを教えてください",
        a: [
          "一つは技術選定です。各種クラウドサービスをどう連携させるか、他にどんな選択肢があるのかを、事業の状況に合わせて整理してくれました。",
          "二つ目は、プロダクト開発の進め方や立ち上げ方。何から手をつければ最短で形になるかを、画面モックの作り方や、初期開発の手順など具体的なステップとして示してもらえました。",
          "三つ目は要件定義。農地法の業務理解をしながら、「技術的にここまでできる、ここから先は別フェーズ」という線引きをすることで、何を入れて何を入れないかの判断材料を一緒に作ってくれた。",
          "そしてもう一つが、外注パートナーとの協働設計です。要件をどう伝えればいいか、検収の進め方をどう組めばいいか。外注を初めて利用する企業にとっては、自社だけでは本当に分からない領域でした。",
        ],
      },
    ],
  },
  {
    title:
      "開発会社含めて3社で築けた体制、社内で触って確信した「これは楽だ」",
    image: {
      src: "/case/chiba-eco/section-4.jpg",
      alt: "対話する萩原氏",
    },
    qa: [
      {
        q: "開発自体は外注されていますね",
        a: [
          "はい。その委託先への要件定義の伝え方や、プロジェクト管理の進め方についても、外部CTOサービスに本当にサポートしてもらいました。",
          "開発会社様と開発を進めるなかで、「何を聞けばいいのか」「どういう資料を求めればいいのか」が、初めての会社にとっては分からないんです。進捗の説明そのものは分かっても、発注者として適切に管理する観点での問いかけが、自分たちには手札としてなかった。そこを伴走してもらえたのは、心強かったですね。",
        ],
      },
      {
        q: "振り返ってみて、開発品質はいかがでしたか",
        a: [
          "Reminusの伴走があったおかげで発注者として責任を果たすことができ、加えて、開発会社様も真摯にご対応くださったため、大きなトラブルなく開発が進んだと感じます。",
          "また、一般論としてパートナーによっては品質や進行にばらつきが生まれることも起こり得ますし、発注者側が無理難題を言ってしまうこともあると思います。外部CTOという第三者の目があったからこそ、良い役割分担で体制を組むことができ、リスクが顕在化せずに済んだ面もあるはずです。",
        ],
      },
      {
        q: "外部CTOが第三者として入る構造自体に価値があるということでしょうか",
        a: [
          'はい、安心材料としても価値を感じていました。有事の際に即座に動ける伴走者としてそばに居てくれる点で、<strong>「保険として安心を買える」</strong>というのは、投資判断の上でも非常に重要でした。蓋を開けてみたら開発が全然進んでいなかったとなると、時間も資金も一気に手戻りが発生してしまう。',
          "社内の従業員や部下ではない、第三者としての忖度のない視点で、発注者と外注先をきちんと見てもらえる。その姿勢があったことが、何よりありがたかったです。",
        ],
      },
      {
        q: "ベータ版が完成して、社内で実際に使ってみての手応えはいかがでしたか",
        a: [
          "私たちは、おそらく日本でいちばんこの許認可手続きを扱っている会社なんです。なので、社内の実務担当者が触ったときに「これは楽だ」と言ってくれたこと。それが本当に大きかった。プロダクト価値を確信できた瞬間だったと思います。",
          "自分が感じていたユーザーペインが、少なくとも社内の実務担当者から共感をもらえた。これから営農型太陽光が普及していく中で、この悩みを抱える人は将来確実に増えます。年間1,000件以上ある申請業務が、今後何十倍にもなっていくと言われている領域なので、そこに対して確信が持てたのは何より大きな手応えでした。",
        ],
      },
      {
        q: "社内のドッグフーディングで価値を確認できたのは、プロダクト開発として理想形ですね",
        a: [
          "そうですね。「売れればOK」という形ではなく、プロダクト自体の価値を社内で確認できた上で、外に出していけるというのは、自分たちにとっても大きな自信になっています。",
        ],
      },
    ],
  },
  {
    title: "同じ立場の経営者へ。「いきなり採用」の前に、相談というワンステップを",
    image: {
      src: "/case/chiba-eco/section-5.jpg",
      alt: "穏やかに語る萩原氏",
    },
    qa: [
      {
        q: "同じような状況の経営者にアドバイスするとしたら、何を伝えますか",
        a: [
          "いきなり採用、というのは結構ハードルが高いんです。とはいえ、技術領域の判断材料が、漠然と1人で考えていても集まらない。採用と、1人で悩んでいる段階の間に、ぜひReminusさんのような外部パートナーをワンステップとして挟むのがいいと思います。その上で、どこまでテクニカルな人材が社内に必要かを判断する。",
          "技術の進歩が非常に早い中で、若くして活躍されている方 ― まさにReminusさんのようなサービスに相談するのは、非常にスピーディーな解決策になり得ます。",
        ],
      },
      {
        q: "「経営目線でITを相談できる先」としてサービスの価値をどう感じましたか",
        a: [
          "経営コンサルタントは世の中にたくさんいますが、ITがいまや切っても切り離せない時代になっている中で、経営目線でITを一緒に考えてくれる相談先は、なかなか見つかりにくい。",
          "しかも、ITは日進月歩なので、もともとその領域でサービスを立ち上げている方に、シームレスに相談できるというのは、すごく価値があると感じています。",
        ],
      },
      {
        q: "Reminusはどのような会社、どのような経営者におすすめできますか",
        a: [
          "新規領域としてSaaSプロダクト開発やDXに取り組んでいきたい ― ただ、社内にCTOのような人材がいない、というケースが一番フィットすると思います。",
          "これからの時代、どんな新規事業をやるにしてもITは切り離せない。そのITとの向き合い方を、まさに外部CTOと相談しながら設計していくのがいい。「外部CTOで十分なのか、内製化が必要なのか」を判断するための、最初のワンステップとして相談するのが、私自身の成功体験から言っても本当におすすめできる進め方です。",
        ],
      },
      { q: "ありがとうございました。", a: [] },
    ],
  },
];

// ─── メタデータ ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `${META.title} | Reminus 導入事例`,
  description: META.description,
  alternates: { canonical: "/case/chiba-eco/" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "/case/chiba-eco/",
    images: [META.thumbnail],
    type: "article",
    publishedTime: META.publishedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: [META.thumbnail],
  },
};

export default function ChibaEcoCasePage() {
  const baseUrl = "https://www.reminus.co.jp";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: META.title,
      description: META.description,
      image: `${baseUrl}${META.thumbnail}`,
      datePublished: META.publishedAt,
      dateModified: META.publishedAt,
      author: { "@type": "Organization", name: "株式会社Reminus", url: baseUrl },
      publisher: { "@type": "Organization", name: "株式会社Reminus", url: baseUrl },
      mainEntityOfPage: `${baseUrl}/case/chiba-eco/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: META.title, item: `${baseUrl}/case/chiba-eco/` },
      ],
    },
  ];

  return (
    <div className="bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーロー (パンくず → タイトル → 会社情報 → 写真) */}
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-[-80px] hidden h-[420px] w-[420px] opacity-[0.18] md:block"
          style={{
            backgroundImage:
              "radial-gradient(rgb(16 185 129) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="mx-auto w-[88%] max-w-[820px] pt-6 md:pt-9">
          <nav className="text-xs text-gray-400 md:text-sm">
            <Link href="/" className="hover:text-emerald-600">ホーム</Link>
            <span className="mx-1.5">/</span>
            {/* 一覧ページが無いので leaf 内で「導入事例：」をプレフィックス */}
            <span className="text-gray-500">導入事例：{META.companyName}</span>
          </nav>

          <h1 className="mt-9 text-[22px] font-bold !leading-[1.5] tracking-wider text-gray-800 md:mt-12 md:text-[28px] md:!leading-[1.55]">
            {META.title}
          </h1>

          <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex items-start gap-5 md:shrink-0 md:gap-7">
              <Image
                src={META.logoPath}
                alt={META.companyName}
                width={META.logoWidth}
                height={META.logoHeight}
                sizes="160px"
                className="h-auto w-[120px] object-contain"
              />
              <div className="flex flex-col gap-1.5">
                <p className="text-[11px] font-bold tracking-[0.18em] text-gray-400">
                  COMPANY
                </p>
                <p
                  className="text-base font-bold tracking-wider text-gray-800 md:whitespace-nowrap md:text-lg"
                  data-nosnippet
                >
                  {META.companyName}
                </p>
                <a
                  href={META.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide text-emerald-600 underline-offset-4 hover:underline md:text-sm"
                >
                  {META.companyUrl.replace(/^https?:\/\//, "")}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              {META.chips.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium tracking-wider text-gray-700"
                >
                  #{label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 w-[88%] max-w-[820px] pb-16 md:mt-14 md:pb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 md:aspect-[2/1]">
            <Image
              src={META.thumbnail}
              alt={META.thumbnailAlt}
              fill
              priority
              sizes="(min-width: 820px) 820px, 88vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 課題 / 効果 サマリ — 2枚のカードに分けて縦に並べる。
          各カード: icon + 灰/水色 label 帯 + dot bullets。 */}
      <div className="mx-auto mt-12 w-[88%] max-w-[820px] space-y-5 md:mt-16">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2.5 bg-gray-100/80 px-5 py-3 md:px-6">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-rose-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h2 className="text-sm font-bold tracking-wider text-gray-900 md:text-base">
              抱えていた課題
            </h2>
          </div>
          <ul className="space-y-2 px-5 py-5 text-sm !leading-[1.75] tracking-wide text-gray-800 md:px-6">
            {CHALLENGES.map((text, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden className="text-gray-400">
                  ・
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2.5 bg-sky-50 px-5 py-3 md:px-6">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2 className="text-sm font-bold tracking-wider text-gray-900 md:text-base">
              導入効果
            </h2>
          </div>
          <ul className="space-y-2 px-5 py-5 text-sm !leading-[1.75] tracking-wide text-gray-800 md:px-6">
            {RESULTS.map((text, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden className="text-gray-400">
                  ・
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* リード本文 + プルクオート */}
      <article className="mx-auto mt-16 w-[88%] max-w-[820px] md:mt-24">
        <div className="space-y-5 text-sm !leading-[2] tracking-wide text-gray-700 md:space-y-6 md:text-[15px]">
          {LEAD.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <figure className="mt-10 md:mt-12">
          <div className="flex gap-4 border-l-2 border-emerald-400 bg-emerald-50/40 py-4 pl-6 pr-5 md:gap-5 md:pl-8 md:pr-7">
            <Quote className="mt-1 h-5 w-5 shrink-0 text-emerald-500" strokeWidth={2} />
            <p className="text-sm !leading-[2] tracking-wide text-gray-700 md:text-[15px]">
              {PULL_QUOTE}
            </p>
          </div>
        </figure>

        {/* 本文セクション群 (IVRy 風: h2 左に emerald のバー、horizontal line なし) */}
        {SECTIONS.map((s, idx) => (
          <section key={idx} className="mt-20 md:mt-28">
            <h2 className="border-l-[5px] border-emerald-500 pl-5 text-[22px] font-bold !leading-[1.5] tracking-wider text-gray-800 md:pl-6 md:text-[30px] md:!leading-[1.5]">
              {s.title}
            </h2>

            <figure className="mt-8 md:mt-10">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(min-width: 820px) 820px, 88vw"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="mt-8 md:mt-10">
              {s.qa.map((item, i) => (
                <Fragment key={i}>
                  <p
                    className={[
                      i > 0 ? "mt-12" : "",
                      "text-base font-bold tracking-wider text-gray-800 !leading-[1.85] md:text-[17px]",
                    ].join(" ")}
                  >
                    ― {item.q}
                  </p>
                  {item.a.length > 0 && (
                    <div className="mt-4 space-y-4 md:mt-5 md:space-y-5">
                      {item.a.map((html, j) => (
                        <p
                          key={j}
                          className="text-sm tracking-wide text-gray-700 !leading-[2] md:text-[15px] [&_strong]:text-gray-800"
                          // eslint-disable-next-line react/no-danger -- 自社で組んだHTML (一部段落の <strong> 強調用)
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      ))}
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </section>
        ))}
      </article>

      {/* 本文と CTA の間に追加マージン (ArticleCta 側は他で使い回されているので
          ここの wrapper で間隔を取る) */}
      <div className="mt-16 md:mt-24">
        <ArticleCta />
      </div>

      <div className="pb-24 md:pb-32" />
    </div>
  );
}
