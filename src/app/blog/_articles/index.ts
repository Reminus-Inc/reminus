import type { Article } from "./types";
import { article as claudeCoworkProductivity } from "./content/claude-cowork-productivity";
import { article as ctoBuildsManagementToolWithClaudeCode } from "./content/cto-builds-management-tool-with-claude-code";
import { article as earlyStageCtoHiring } from "./content/early-stage-cto-hiring";
import { article as founderEngineerCommunication } from "./content/founder-engineer-communication";
import { article as mvpVsMaximum } from "./content/mvp-vs-maximum";
import { article as saasAiSurvival } from "./content/saas-ai-survival";
import { article as saasBeyondTechCompanies } from "./content/saas-beyond-tech-companies";
import { article as whyFractionalCtoForStartups } from "./content/why-fractional-cto-for-startups";

// 新しい順
export const articles: Article[] = [claudeCoworkProductivity, ctoBuildsManagementToolWithClaudeCode, earlyStageCtoHiring, founderEngineerCommunication, mvpVsMaximum, saasAiSurvival, saasBeyondTechCompanies, whyFractionalCtoForStartups].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
