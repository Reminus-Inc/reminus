import { XMLParser } from "fast-xml-parser";

const RSS_URL = "https://note.reminus.co.jp/rss";

type NoteItemRaw = {
    title: string;
    "media:thumbnail": string;
    pubDate: string;
    link: string;
}

type NoteArticle = {
  title: string;
  url: string;
  publishDateLabel: string; // 例: 2025/08/27
  imageUrl: string;
};

export const fetchNoteArticleList = async (): Promise<NoteArticle[]> => {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) {
      return [];
    }
    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: true,
      processEntities: true,
    });
    const data = parser.parse(xml);
    const channel = data?.rss?.channel;
    const itemListRaw: NoteItemRaw[] = Array.isArray(channel?.item)
      ? channel.item
      : channel?.item != null
        ? [channel.item]
        : [];
    return itemListRaw
      .slice(0, 3) // 最新 3 件
      .map((item) => {
        return {
          title: item.title,
          url: item.link,
          publishDateLabel: toDateLabel(item.pubDate),
          imageUrl: item["media:thumbnail"],
        };
      });
  } catch {
    return [];
  }
};

const toDateLabel = (dateLike: string): string => {
  const d = new Date(dateLike);
  return Number.isNaN(d.getTime())
    ? ""
    : new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(d);
};
