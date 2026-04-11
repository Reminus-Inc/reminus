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
};
