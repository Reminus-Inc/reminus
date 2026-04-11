import type { Article } from "./types";
import { article as saasAiSurvival } from "./content/saas-ai-survival";

// 新しい順
export const articles: Article[] = [saasAiSurvival].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
