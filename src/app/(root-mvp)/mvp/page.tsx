import type { Metadata } from "next";
import MvpA from "@/app/(root-mvp-a)/mvp/a/page";

// /mvp は LP のホーム = 抽選の入口。本番では middleware が variant (/mvp/a) へ
// リダイレクトするのでここは描画されず、A/B を止めている開発環境でだけ表示される。
// (root)/bot と同じく variant の page コンポーネントをそのまま描画する
// (metadata は引き継がれないのでこちらで持つ)。
// variant を増やしたら、この import 先を主要 variant に合わせて差し替えること。
export const metadata: Metadata = {
  // 広告流入用の LP。variant 側と同じくホームもインデックスから外す。
  robots: { index: false, follow: false },
};

export default function MvpHome() {
  return <MvpA />;
}
