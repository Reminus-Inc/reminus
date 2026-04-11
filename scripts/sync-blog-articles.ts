/**
 * noteからブログ記事を取得し、src/app/blog/_articles/ に保存する。
 * 画像はpublic/blog/{slug}/ にダウンロードし、HTML内のsrcをローカルパスに書き換える。
 *
 * 実行:
 *   # 1記事: noteKeyとURLスラッグを指定
 *   pnpm sync:blog:run <noteKey> <slug>
 *
 *   # 全件: RSSから取得して、既存の _articles/*.ts に noteKey 一致するものを更新
 *   pnpm sync:blog:run
 *
 * ⚠ 通常は `pnpm sync:blog` (Claude Code 起動) から呼ばれる想定。
 *    sync 後の CTA 差し替え等の手順は CLAUDE.md の「ブログ記事の同期」を参照。
 */
import { XMLParser } from "fast-xml-parser";
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const RSS_URL = "https://note.reminus.co.jp/rss";
const NOTE_API = (key: string) => `https://note.com/api/v3/notes/${key}`;

const ARTICLES_ROOT = path.join(process.cwd(), "src/app/blog/_articles");
const ARTICLES_DIR = path.join(ARTICLES_ROOT, "content");
const INDEX_FILE = path.join(ARTICLES_ROOT, "index.ts");
const PUBLIC_BLOG_DIR = path.join(process.cwd(), "public/blog");

type RssItem = {
  title: string;
  link: string;
  pubDate: string;
  "media:thumbnail": string;
};

type NoteApiResponse = {
  data: {
    key: string;
    name: string;
    body: string;
    description: string;
    publish_at: string;
    eyecatch: string | null;
  };
};

async function fetchRssItems(): Promise<RssItem[]> {
  const res = await fetch(RSS_URL);
  if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status}`);
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: true, processEntities: true });
  const data = parser.parse(xml);
  const items = data?.rss?.channel?.item;
  return Array.isArray(items) ? items : items ? [items] : [];
}

function extractNoteKey(url: string): string {
  // https://note.reminus.co.jp/n/nXXXXXX → nXXXXXX
  const match = url.match(/\/n\/([a-zA-Z0-9]+)/);
  if (!match) throw new Error(`Cannot extract note key from ${url}`);
  return match[1];
}

async function fetchNoteApi(key: string): Promise<NoteApiResponse["data"]> {
  const res = await fetch(NOTE_API(key), {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch note ${key}: ${res.status}`);
  const json = (await res.json()) as NoteApiResponse;
  return json.data;
}

async function downloadImage(url: string, destDir: string): Promise<string> {
  await mkdir(destDir, { recursive: true });
  const urlObj = new URL(url);
  const basename = path.basename(urlObj.pathname);
  const destPath = path.join(destDir, basename);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buf);
  return basename;
}

async function processBody(body: string, slug: string): Promise<string> {
  const imgDir = path.join(PUBLIC_BLOG_DIR, slug);
  const imgUrlRegex = /<img[^>]+src="([^"]+)"/g;
  const imageUrls = new Set<string>();
  let m: RegExpExecArray | null;
  while ((m = imgUrlRegex.exec(body)) !== null) {
    imageUrls.add(m[1]);
  }

  let processedBody = body;
  for (const imgUrl of imageUrls) {
    try {
      const basename = await downloadImage(imgUrl, imgDir);
      const localPath = `/blog/${slug}/${basename}`;
      processedBody = processedBody.split(imgUrl).join(localPath);
      console.log(`  ✓ image: ${basename}`);
    } catch (e) {
      console.warn(`  ✗ image failed: ${imgUrl}`, e);
    }
  }
  return processedBody;
}

function escapeTemplateString(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function toDateISO(dateLike: string): string {
  const d = new Date(dateLike);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString();
}

function toDateLabel(dateLike: string): string {
  const d = new Date(dateLike);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

async function syncArticle(
  noteKey: string,
  slug: string,
  thumbnail: string
): Promise<void> {
  console.log(`\n📄 ${noteKey} → ${slug}`);
  const data = await fetchNoteApi(noteKey);

  // サムネイルをDL
  let thumbnailPath = "";
  if (thumbnail) {
    try {
      const imgDir = path.join(PUBLIC_BLOG_DIR, slug);
      const basename = await downloadImage(thumbnail, imgDir);
      thumbnailPath = `/blog/${slug}/${basename}`;
      console.log(`  ✓ thumbnail: ${basename}`);
    } catch (e) {
      console.warn(`  ✗ thumbnail failed: ${thumbnail}`, e);
      thumbnailPath = thumbnail;
    }
  }

  // 本文内の画像DL + パス置換
  const processedBody = await processBody(data.body, slug);

  const fileContent = `// 自動生成ファイル (scripts/sync-blog-articles.ts)
import type { Article } from "./types";

export const article: Article = {
  slug: ${JSON.stringify(slug)},
  noteKey: ${JSON.stringify(noteKey)},
  title: ${JSON.stringify(data.name)},
  description: ${JSON.stringify(data.description || "")},
  publishedAt: ${JSON.stringify(toDateISO(data.publish_at))},
  publishedAtLabel: ${JSON.stringify(toDateLabel(data.publish_at))},
  thumbnail: ${JSON.stringify(thumbnailPath)},
  contentHtml: \`${escapeTemplateString(processedBody)}\`,
};
`;

  await mkdir(ARTICLES_DIR, { recursive: true });
  const destFile = path.join(ARTICLES_DIR, `${slug}.ts`);
  await writeFile(destFile, fileContent);
  console.log(`  ✓ saved: ${destFile}`);
}

/** 既存の _articles/*.ts から noteKey → slug マッピングを構築 */
async function readExistingMap(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  try {
    const files = await readdir(ARTICLES_DIR);
    for (const file of files) {
      if (!file.endsWith(".ts") || file === "types.ts" || file === "index.ts") {
        continue;
      }
      const content = await readFile(path.join(ARTICLES_DIR, file), "utf-8");
      const noteKeyMatch = content.match(/noteKey:\s*"([^"]+)"/);
      const slugMatch = content.match(/slug:\s*"([^"]+)"/);
      if (noteKeyMatch && slugMatch) {
        map.set(noteKeyMatch[1], slugMatch[1]);
      }
    }
  } catch {
    // ignore
  }
  return map;
}

async function main() {
  const [arg1, arg2] = process.argv.slice(2);

  // 引数形式: <noteKey> <slug>
  if (arg1 && arg2) {
    const rssItems = await fetchRssItems();
    const rssItem = rssItems.find((item) => item.link.includes(arg1));
    const thumbnail = rssItem?.["media:thumbnail"] || "";
    await syncArticle(arg1, arg2, thumbnail);
    console.log(`\n✅ Done`);
    return;
  }

  // 引数なし: RSS全件を、既存ファイルの noteKey→slug マッピングに従って更新
  const existingMap = await readExistingMap();
  const rssItems = await fetchRssItems();
  console.log(`📡 RSS: ${rssItems.length} items / 既存: ${existingMap.size} 件`);

  let synced = 0;
  for (const item of rssItems) {
    const noteKey = extractNoteKey(item.link);
    const slug = existingMap.get(noteKey);
    if (!slug) {
      console.log(`  ⏭  ${noteKey} (未登録。<noteKey> <slug> で個別に登録してください)`);
      continue;
    }
    await syncArticle(noteKey, slug, item["media:thumbnail"]);
    synced += 1;
  }

  console.log(`\n✅ Done: ${synced} article(s)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
