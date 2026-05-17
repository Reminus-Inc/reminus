---
name: sync-notion-blog
description: Notion ページから reminus サイトのブログ記事 (src/app/blog/_articles/content/<slug>.ts) を生成するスキル。Notion MCP で本文を取り、画像を public/blog/<slug>/ に DL、index.ts への登録と型チェックまで一貫してやる。引数は <notion-url> <slug>。note 同期 (pnpm sync:blog) とは別経路で、Notion 上の下書きから直接ブログ化したい時に使う。
---

# sync-notion-blog

Notion ページから reminus ブログ記事 (`src/app/blog/_articles/content/<slug>.ts`) を生成するスキル。

`/sync-notion-blog <notion-url> <slug>` で起動。引数が無ければ対話で聞く。

- `notion-url`: Notion 記事の URL (`https://www.notion.so/...`)
- `slug`: `/blog/<slug>/` として配信される英語スラッグ (例: `saas-startup-pitfalls-5`)

## 前提知識

- 記事データは `src/app/blog/_articles/content/<slug>.ts` で 1 ファイル 1 記事
- 型定義は `src/app/blog/_articles/types.ts`
- 一覧登録は `src/app/blog/_articles/index.ts`
- 表示は `src/app/blog/[slug]/page.tsx`。本文は `prose` クラスでスタイリング、末尾には `<ArticleCta />` が自動付与される
- 画像は `public/blog/<slug>/` 配下に配置 (`thumbnail.png` + 本文画像)
- スタイル参考: `_articles/content/mvp-vs-maximum.ts`、`_articles/content/saas-startup-pitfalls-5.ts` (このスキルで生成された初代)

## 手順

### 1. Notion 取得

`mcp__claude_ai_Notion__notion-fetch` に URL を渡す。失敗 (権限不足など) したらユーザーに代替手段を確認。

### 2. 画像 DL (S3 署名 URL は 1 時間で失効するので fetch 直後に必ず実行)

本文中の `![](https://prod-files-secure.s3.us-west-2.amazonaws.com/...)` を全て抽出する。ファイル名は記事の文脈に合わせて命名 (例: 「落とし穴N」記事なら `pitfall-N.png`、汎用なら `figure-N.png`)。

`/tmp/dl-<slug>-imgs.mjs` を生成して `node` で実行:

```js
import { writeFile } from "node:fs/promises";
const base = "/Users/<...>/reminus/public/blog/<slug>";
const urls = { "<filename>": "<full-url>", ... };
for (const [f, u] of Object.entries(urls)) {
  const r = await fetch(u);
  if (!r.ok) { console.error(`failed ${f}: ${r.status}`); continue; }
  await writeFile(`${base}/${f}`, Buffer.from(await r.arrayBuffer()));
  console.log(`saved ${f}`);
}
```

実行後、`/tmp/dl-<slug>-imgs.mjs` を削除。

**注意**: curl で長大な URL を Bash 経由で渡すとパーミッション拒否されやすいので、Node スクリプト方式が安全。

### 3. Markdown → contentHtml 変換

既存 `_articles/content/*.ts` の `contentHtml` を参考にスタイルを合わせる (note 同期スクリプトが吐く HTML と同等を目指すが、`name=""` / `id=""` のような Notion UUID 属性は付けなくて良い)。

主要変換ルール:

| Notion | HTML |
|---|---|
| `## H2` | `<h2>H2</h2>` |
| `### H3` | `<h3>H3</h3>` |
| `**bold**` | `<strong>bold</strong>` |
| `- item` リスト | `<ul><li>item</li></ul>` |
| `1. item` リスト | `<ol><li>item</li></ol>` |
| `<table header-row="true">...` | `<table><thead><tr><th>...</th></tr></thead><tbody>...</tbody></table>` |
| `> 💡 **Title**\n\ttext` callout | `<figure><blockquote><p>💡 <strong>Title</strong><br>text</p></blockquote><figcaption></figcaption></figure>` |
| `---` 区切り線 | 削除 (prose の h2 ボーダーで十分区切られる) |
| `<br>` | そのまま |
| 改行で区切られた段落 | `<p>...</p>` で囲む |

**Notion 由来の Markdown 崩れを正規化する** (頻出パターン):

- `2****つの` → `<strong>2つの</strong>` (`**` がずれて記号がそのまま出ている)
- `2**つの価値を同時に取れる活動**` → `<strong>2つの価値を同時に取れる活動</strong>`
- `指示の粒度を\*\*Why...\*\*に絞ります` → `<strong>Why...</strong>に絞ります` (バックスラッシュエスケープ含む)
- 文末の `。` 抜け → 補う

**不要要素**:

- `<empty-block/>` → 削除
- `📷 [画像挿入：...]` のような Notion 上の**未挿入プレースホルダ**は本物の画像ではない。ユーザーに「あとで画像が来る? 削除する?」を必ず確認

### 4. 末尾 CTA の剥がし

`<ArticleCta />` が page.tsx 側で資料DL/お問い合わせボタンを自動表示するので、本文末尾の重複 CTA は剥がす。

剥がすもの:
- `**[サービス資料をDL]**` / `[資料ダウンロード]` のようなボタン段落
- 「下記より資料をご覧ください」「こちらからお問い合わせください」のような直後リンクを指したオーファン文 (リンクと一緒に削除)
- `<p><br></p>` の末尾空段落

残すもの:
- 「Reminusは...提供しています」のような**自己紹介テキスト** (記事末尾の文脈づくりとして有用)
- インラインで自然な文脈に溶けている参考リンク

判定は機械的にやらない。記事ごとに揺れる。迷ったらユーザーに確認。

### 5. description 下書き

本文冒頭〜「この記事のポイント」あたりから 1-2 文、120-160 文字程度で要約を作る。ユーザーに見せて確認してもらう。

### 6. ファイル生成

`src/app/blog/_articles/content/<slug>.ts` を Write:

```ts
// Notion から手動取り込み (note 同期スクリプトは未使用)
import type { Article } from "../types";

export const article: Article = {
  slug: "<slug>",
  noteKey: "", // Notion 経由なので空文字
  title: "<記事タイトル>",
  description: "<下書きした description>",
  publishedAt: "<YYYY-MM-DD>T00:00:00.000Z", // デフォルトは今日
  publishedAtLabel: "<YYYY/MM/DD>",
  thumbnail: "/blog/<slug>/thumbnail.png",
  contentHtml: `<p>...</p>...`,
};
```

`src/app/blog/_articles/index.ts` に import 行と articles 配列への追加を Edit (アルファベット順で読みやすい位置に挿入。実際の表示順は配列内 sort で `publishedAt` 降順)。

### 7. サムネ確認

`public/blog/<slug>/thumbnail.png` が無ければユーザーに依頼。

### 8. 型チェック

`pnpm tsc --noEmit`

### 9. 完了報告

- 作ったファイル / 配置した画像をリスト
- 残作業 (サムネ未配置、落としきれなかった画像プレースホルダ等) を明示
- dev server で `/blog/<slug>/` 目視するか確認

## CLAUDE.md (note 同期) との関係

note 同期 (`pnpm sync:blog`) と本スキルは別経路:

- note 同期: note の RSS を読んで `_articles/content/<slug>.ts` を上書き生成。`noteKey` をキーに再同期される
- 本スキル: Notion から **noteKey なし**で直接生成。再同期はされない (Notion 側で更新されたら本スキルを再実行する)

`noteKey: ""` の記事は `pnpm sync:blog` の全件再同期から自動的にスキップされる。

## 注意

- S3 署名 URL は 1 時間で失効。fetch から DL までは間を空けない
- 失効した場合は再度 `notion-fetch` で URL を取り直す (毎回新しい署名で返ってくる)
- Notion MCP の `text` フィールドは Notion 拡張 Markdown。`name="uuid"` / `id="uuid"` のような Notion ブロック ID は新規記事には付与しない (注釈なしで読みやすい HTML を出す)
- 巨大な S3 URL は Bash の curl で permission denied されやすいので、必ず Node スクリプト経由で DL する
