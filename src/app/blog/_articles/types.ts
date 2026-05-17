export type Article = {
  /** URLに使うスラッグ。 */
  slug: string;
  /** note側の記事キー（同期時にnote記事と紐付けるため保持）。 */
  noteKey: string;
  title: string;
  description: string;
  publishedAt: string;
  publishedAtLabel: string;
  thumbnail: string;
  contentHtml: string;
  /** 関連記事に出したい slug を明示する場合に指定。未指定なら公開日順の新しい3件にフォールバック。 */
  relatedSlugs?: string[];
};
