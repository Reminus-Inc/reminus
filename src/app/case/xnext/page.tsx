import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { ArticleCta } from "@/app/blog/_components/article-cta";
import { RelatedCases } from "../_related-cases";
import { xnextMeta as META } from "../_cases";

const CHALLENGES = [
  "将来構想はあるが、どれぐらいの期間とコストで実現できるのか、投資判断の根拠になる見通しがなかった",
  "開発会社への依頼方法が正しいかがわからず、発注や開発効率を改善する方法がなかった",
  "社内にエンジニアや大規模開発の経験者がおらず、技術について「本当にこれが適切なのか」を判断できなかった",
];
const RESULTS = [
  "わずか2ヶ月で将来構想をコスト・期間・体制まで見通せ、リスクを把握した上で投資判断を下せるようになった",
  "プロダクト投資の予測精度が上がり、「ここで人を増やす」といった短期の意思決定も合理的に下せるようになった",
  "開発をプロセスとして形にしたことで進捗や問題が定量的に見え、実行が安定して改善を回す下地を整えられた",
];

const LEAD: string[] = [
  "ECを中心とした福利厚生サービス「社割NEXT」を企業向けに展開する、株式会社xNEXT。メーカーで行き場を失っていた商品を、従業員が日常使いの食品・日用品として驚くほど安く買える――そんな新しい福利厚生のかたちを掲げ、創業2期目ながら、引き合いが自然と集まる手応えをつかんでいる。",
  "事業は伸びている。大きなビジョンもある。ただ、パートナー企業とともにプロダクトを作り上げてきたものの、技術に関して「本当にこれが適切なのか」を自信を持って判断できる体制が社内になかった。",
  "同社が選んだのはCTO代行だった。複数の相談先を比較した決め手は、「やるべきこと」「やるべきではないこと」を現状を鑑みてフラットに述べてくれる姿勢だったという。",
  "トライアルの2ヶ月で開発ロードマップと投資計画の見通しを確立し、現在は開発現場の実行改善へとフェーズを進めている。その軌跡を、同社経営層の粟田氏に伺った。",
];

// ─── 本文 (Q&A 形式の構造化データ) ───────────────────────────────────────
// 1セクション = タイトル + (任意) 写真 + Q&A の配列。
// a[] は HTML 文字列を許容 (一部 <strong> を効かせるため)。
type QA = { q: string; a: string[] };
type Section = {
  title: string;
  image?: { src: string; alt: string };
  qa: QA[];
};

const SECTIONS: Section[] = [
  {
    title:
      "将来構想はある。「どれぐらい期間とコストを費やせば実現できるか」が見えなかった",
    image: {
      src: "/case/xnext/section-1.jpg",
      alt: "インタビューに応える粟田氏",
    },
    qa: [
      {
        q: "まず、御社の事業について教えてください",
        a: [
          "我々がやっているのは、社割NEXTという、ECを中心とした福利厚生のサービスです。もともと代表が在庫業界にいて、様々なメーカー様と取引がありました。作りすぎてしまったり、パッケージリニューアルで売りにくくなったり――まだまだ使えるし食べられるものが、一般流通ではないところで流通しているんです。それを従業員の方が普通に安く買えたら嬉しいよね、というところでスタートしたのが社割NEXTです。",
        ],
      },
      {
        q: "御社が抱えていた技術の課題を教えてください",
        a: [
          "社内の純粋なメンバーは4人です。エンジニアはいませんし、大規模なプロダクト開発に本格的に携わった経験のあるメンバーもいません。それでも、デザイン会社さん、開発会社さんにパートナーとして事業に入っていただいて、プロダクトを開発してリリースするところまではできていたんです。",
          "次は事業をスケールさせていくフェーズであり、投資をしてトップラインを作っていかないといけない。その先には大きな将来構想もあります。それが本当にどれぐらいの期間で、どれぐらいコストをかければ実現できるのかの判断が、社内で自信を持ってできない状況でした。",
        ],
      },
      {
        q: "開発会社さんへの信頼はありつつ、判断する側の課題だったということでしょうか",
        a: [
          "そうですね。計画の見通しに加えて、実務面に関しても懸念がありました。我々からのオーダーが、経験がないまま結構なボリュームをガサッと振ってしまっている部分があった。仕事の依頼の仕方が合っているのかな、というところも含めて、経験がある人に入ってもらって発注者側から改善していく方がいいだろうな、と。より良い開発体制を作っていかないといけない、という課題感がありました。",
        ],
      },
    ],
  },
  {
    title:
      "「できます」だけではなく、「難しい」まで正直に言ってくれるCTO代行を選んだ",
    image: {
      src: "/case/xnext/section-2.jpg",
      alt: "オフィスで語る粟田氏",
    },
    qa: [
      {
        q: "Reminus以外にもパートナーを検討されていたと伺いました",
        a: [
          "他からご紹介いただいた会社さんもあったのですが、お話しした感じ、単純な技術目線だけではなくてビジネス視点も含めてサポートいただけそうだなというところと、割とフラットな視点で、盛らずにリアルな見立てを話してくれるだろうな、という目線の一致があって、ご依頼させていただきました。",
        ],
      },
      {
        q: "CTO代行への期待の中心はどこにあったのでしょうか",
        a: [
          "開発チームとしては、やっぱり「できます」と言いたくなるところがあると思うんです。もちろん意気込みは大変ありがたいです。ただ、見えていない部分も多い中で根拠を持っておくことが経営判断として必要だなと。第三者として、これが本当に妥当なのか、本当はどれぐらいかかるのかを肌感覚でリアルに知りたかった。代表が投資判断をするための目線としても、必要だったというところですね。",
        ],
      },
      {
        q: "他の相談先との比較で、決め手になったのは",
        a: [
          "できるところはできる、難しいところは難しいと正直におっしゃっていただけて、「こうするにはこういうものが必要です」というところまで正直に言っていただけることですね。",
          "他の会社さんにもお話はしたんですが、「経歴があるからいけます」みたいな感じのところも多くて。それはそれで気持ちのいい答えではあるんですけど、本当に正しい情報なのか、判断に使える適切な情報なのか、というところが難しかった。僕らが欲していたのは、本当に必要なリアルな見積り感と、できていないことはできていないとちゃんと言ってもらえること。そこの信頼が決め手になりました。",
        ],
      },
    ],
  },
  {
    title: "構想の実現に必要な「コスト・期間・体制」が、すべて見える状態に",
    qa: [
      {
        q: "協働が始まり、当初の期待とのズレはありましたか",
        a: [
          "期待していたことと大きくズレた、ということはなかったですね。僕らとしては、まずスケジュールとコストをクリアにしたかった。検討内容が広すぎて、最初から詳細まで詰め切るのは無理だと分かっていたので、ある程度の粒度感で進めてもらいました。その中で、「これぐらい本当はかかるし、裏側にリスクもあるんだよ」というのを――僕らがエンジニアじゃないので見えていない部分も含めて、リスクごと把握できた。会社として共通認識を持てたのは、一つ大きい前進だったと思います。",
        ],
      },
      {
        q: "Reminusの計画の進め方で印象に残っていることはありますか",
        a: [
          "第三者目線で開発アイテムを1つずつ工数や期間、リスクを出していただいたことで、正確に見積もれるようになったのは、印象に残っています。",
          "非エンジニアからすると、簡単にできちゃいそうに見えるものが結構多いんですよね。過去には、甘い見積でリリースを先行してお客さんに案内してしまって失敗したこともありました。",
          "どうしても「いけるんじゃないか」という希望をもとにスケジュールを組んでしまいがちです。でも想定外のことが起きたりするので、理想が100だとすると、実際は80で進んだらいい方なのだと思います。そこがクリアな状況になったのはすごく大きいです。",
          "スタートアップはリソースが限られていて、人もお金も時間も取捨選択しないといけない。そこで僕らだけの意見ではなく、PLまで踏み込んで勘案した上で、技術とビジネス両方の視点から「これが合理的」と言ってもらえたのは、今後の判断をする上で役立ちました。",
        ],
      },
      {
        q: "経営にはどのような影響がありましたか",
        a: [
          "第三者目線として「これぐらいのコストがかかりそうですよ」というのをいただいたことで、スケジュールが組みやすくなったのはすごくありますね。現実目線がないと、やっぱり理想を追いかけてしまうので。全部がストレッチ目標前提でスケジュールが組まれていくと崩れてしまう。スケジュールは中間ぐらいでリアルに引いておいて、目標として前倒ししよう、という形にできるようになった。",
          "それと、会社全体として「そういうものだよね」という共通認識を持てたことが大きいです。一方はいけると思っていて、一方はいけないと思っていたら、いけるかいけないかの議論で時間がかかってしまう。「このスケジュールで進めても、これだけ構想が実現できる」と全体から逆算できるようになったことで、意思決定が速くなったと感じます。",
        ],
      },
    ],
  },
  {
    title:
      "開発と経営が一体になり、短期も長期も、迷いなく事業を伸ばしていける",
    image: {
      src: "/case/xnext/section-3.jpg",
      alt: "今後の展望を話す粟田氏",
    },
    qa: [
      {
        q: "計画を策定した今、振り返って何が一番変わりましたか",
        a: [
          "スタートアップは先に投資をしてトップラインを作る順番になります。どの順番で何に投資するか、という時に一番大きいのがプロダクト関連の人件費で、事業への影響も一番大きい。そこの予測精度が上がったのは、投資判断や事業計画において、すごく大事だったなと振り返って感じます。",
          "今までは「これぐらいできるだろう」でやってみたらできたりできなかったり、ボラティリティが非常に大きかった。それが「これぐらいに収まる」「これにはもう少しリソースがいる」と見えたことで、ここで人を増やそう、という判断が合理的に下せる。",
          "見通しがなくても進めたとは思いますが、その場合は見えないリスクを抱えたまま前進することになる。リスクを把握しながら迷いなく進められるのは、すごく大きい違いです。",
        ],
      },
      {
        q: "5月からは開発現場の実行もご一緒しています。現場の変化は感じますか",
        a: [
          "以前は大きな目標に向かって勢いでなんとか乗り越えていく、という進め方で、どうしても安定しなかったり、当初のスケジュールとズレることが多かった。3ヶ月のような大きな単位で「結果的に間に合ったか」しか分かっていませんでした。",
          "それを開発プロセスとして形にしたことで、進捗や問題が定量的に把握でき、毎週振り返って改善が回るようになりました。また、レビューなどもプロセスの仕組みとして整理したことで、品質と効率の両方が上がってきています。",
          "基準が曖昧なままだと、つい人を急かす言い方になってしまう。でも定量的に見えていれば、事象に対して、人と切り離して改善に取り組める。チームの一人ひとりが納得感を持って、自発的に進められる状況じゃないとパフォーマンスは出ないので、そこは大きいです。",
        ],
      },
      {
        q: "改めて、いま手応えを一番感じるのはどんな瞬間ですか",
        a: [
          "着実に変わっていっているなと実感できる瞬間ですね。計画でスケジュールやコストがクリアになって共通認識を持てたことも、開発体制を強くするステップが順番に進んでいることも、一つずつ形になってきている。",
          "ある程度の規模感のチームで実行した経験があって、再現性高くできる人がチームにいないとできないことだと思うので、CTO代行にそこを担ってもらえているのはありがたいです。今後はAIが力を発揮できる開発基盤や仕様の整備にも取り組み、さらに伸びるはずだと思っています。",
        ],
      },
    ],
  },
  {
    title:
      "同じ立場の経営者へ。「開発で困っている課題感があるなら、一回相談してみた方がいい」",
    image: {
      src: "/case/xnext/section-4.jpg",
      alt: "穏やかに語る粟田氏",
    },
    qa: [
      {
        q: "同じように「構想はあるが開発の見通しが立たない」経営者に、アドバイスはありますか",
        a: [
          "開発で困っている課題感があるんだったら、一回相談してみた方がいいんじゃないですか、ということですね。僕らの場合、本当に社内に知見がなかったので。創業メンバーや代表がエンジニア出身だったり、開発経験豊富なPMがいたりすればまた違うと思いますが、違う畑の人からすると、分からない部分が多いと思うんですよね。",
        ],
      },
      {
        q: "「Reminus CTO代行」は、どのような会社・経営者におすすめできますか",
        a: [
          "技術判断に絶対的な自信を持てるなら、わざわざ相談しなくてもいいと思います。ただ、そこに迷いや不安が一定あるんであれば、経験がある人たちにチームに入ってもらうのがいいと思います。",
          "また、社内にそういう担当の人がいたとしても、第三者のフラットな視点を入れるという意味で、一定期間入ってもらうのは価値があると思います。",
        ],
      },
      {
        q: "最後に、将来構想の見通しがたった今、今後の展望を教えてください",
        a: [
          "福利厚生の業界は、昔から大手のサービス会社がマーケットの大きな部分を占めていて、導入する側も上場企業など余裕のある会社が中心でした。中小企業や小規模の会社では、そもそも意識に上がっていなかった。人材や人事労務など激しい競争で磨き合っている市場に比べ、福利厚生はまだまだ改善の余地があるマーケットです。",
          "一方で、世の中の流れとして、より働きやすい環境づくりが求められる中で、福利厚生を提供する意味や価値も、求められてきていると感じます。当社が新しい福利厚生のあり方をプロダクトとして世の中に作っていき、より働きやすい世の中を実現していきたいと思っています。",
          "福利厚生はBtoBtoCで、企業の担当者が従業員に伝えてくれるという、純粋なECにはない強いチャネルがあります。そこをどこまで活かせるかと、まずは一回買ってみたくなるプロダクトを作る。そしてアプリも含めて改善を続けて、たくさんの方に使ってもらって、たくさんの方に価値を届けられるといいですね。開発には道筋が立ったので、あとは自信を持って前に進めていくだけだと思っています。",
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
  alternates: { canonical: "/case/xnext/" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "/case/xnext/",
    images: [META.ogImage],
    type: "article",
    publishedTime: META.publishedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: [META.ogImage],
  },
};

export default function XnextCasePage() {
  const baseUrl = "https://www.reminus.co.jp";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: META.title,
      description: META.description,
      image: `${baseUrl}${META.ogImage}`,
      datePublished: META.publishedAt,
      dateModified: META.publishedAt,
      author: { "@type": "Organization", name: "株式会社Reminus", url: baseUrl },
      publisher: { "@type": "Organization", name: "株式会社Reminus", url: baseUrl },
      mainEntityOfPage: `${baseUrl}/case/xnext/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: META.title, item: `${baseUrl}/case/xnext/` },
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
                <p
                  className="text-base font-bold tracking-wider text-gray-800 md:whitespace-nowrap md:text-lg"
                  data-nosnippet
                >
                  {META.companyName}
                </p>
                {META.companyUrl && (
                  <a
                    href={META.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wide text-emerald-600 underline-offset-4 hover:underline md:text-sm"
                  >
                    {META.companyUrl.replace(/^https?:\/\//, "")}
                  </a>
                )}
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

        <div className="mx-auto mt-10 w-[88%] max-w-[820px] pb-10 md:mt-14 md:pb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 md:aspect-[2/1]">
            <Image
              src={META.thumbnail}
              alt={META.thumbnailAlt}
              fill
              priority
              sizes="(min-width: 820px) 820px, 88vw"
              className={`object-cover ${META.thumbnailFocusClassName ?? ""}`}
            />
          </div>
        </div>
      </div>

      {/* リード本文 + プルクオート */}
      <article className="mx-auto mt-8 w-[88%] max-w-[820px] md:mt-10">
        <div className="space-y-5 text-sm !leading-[2] tracking-wide text-gray-700 md:space-y-6 md:text-[15px]">
          {LEAD.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 課題 / 効果 サマリ — リードの下に配置 */}
        <div className="mt-14 space-y-5 md:mt-20">
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

        {/* 本文セクション群 (IVRy 風: h2 左に emerald のバー、horizontal line なし) */}
        {SECTIONS.map((s, idx) => (
          <section key={idx} className="mt-20 md:mt-28">
            <h2 className="border-l-[5px] border-emerald-500 pl-5 text-[22px] font-bold !leading-[1.5] tracking-wider text-gray-800 md:pl-6 md:text-[30px] md:!leading-[1.5]">
              {s.title}
            </h2>

            {s.image && (
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
            )}

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

      <div className="mt-20 md:mt-28">
        <RelatedCases currentSlug={META.slug} />
      </div>

      <div className="pb-24 md:pb-32" />
    </div>
  );
}
