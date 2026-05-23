import HomeC from "@/app/(root-c)/c/page";

// クローラ向けトップ。middleware が UA を見て / をここに rewrite する (URL は / のまま)。
// c の page コンポーネントだけを描画し metadata は引き継がないので、c 側の
// `robots: { index: false }` は効かず、/ はインデックス対象として残る。
// 配信 variant を変えたらこの import 先を差し替えること。
export default function BotPage() {
  return <HomeC />;
}
