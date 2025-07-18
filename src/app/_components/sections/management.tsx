import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Twitter } from "lucide-react";
import { DownloadButton } from "../ui/download-button";

export function Management() {
  return (
    <section id="management" className="w-full py-24 md:py-36 bg-white">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-20">
            経営陣紹介
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-24 items-start">
            <div className="mx-auto md:mx-0 max-w-[160px] md:max-w-none">
              <div className="w-full aspect-square md:w-[240px] md:h-[240px] rounded-full bg-white shadow-sm border-4 border-gray-300 overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Founder icon"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-medium mb-3 tracking-tighter">
                  sumiren
                </h3>
                <p className="text-gray-600 text-lg md:text-xl">創業者</p>
              </div>
              <div className="prose prose-gray max-w-none text-left">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  株式会社ヘンリーで SaaS
                  の急成長を牽引し、ソフトウェアエンジニア／EM／SRE
                  と立場を変えながら技術と組織をリード。
                  その後、セールステックSaaSスタートアップ immedio
                  でCTOとして技術から経営を推進。加えて、2社の社外CTOと3社の技術顧問経験を持つ。経営レイヤから専門的な支援まで広く行い、資金調達にも貢献。2025
                  年、株式会社Reminusを創業し、スタートアップの成長を加速する事業を展開している。
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-left text-base md:text-lg">
                  コンテンツ発信
                </h4>
                <ul className="space-y-2 text-gray-600 list-none pl-0 text-sm md:text-base text-left">
                  <li className="relative pl-4">
                    <span className="absolute left-0">・</span>
                    <Link
                      href="https://offers-jp.connpass.com/event/342445/"
                      className="text-blue-600 hover:text-blue-800 decoration-blue-300 hover:decoration-blue-500 underline underline-offset-4 decoration-[0.5px] hover:decoration-[1px] transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OpenTelemetryって本当に必要？今知っておくべきオブザーバビリティとは
                    </Link>{" "}
                    登壇
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0">・</span>
                    <Link
                      href="https://findy.connpass.com/event/306714/"
                      className="text-blue-600 hover:text-blue-800 decoration-blue-300 hover:decoration-blue-500 underline underline-offset-4 decoration-[0.5px] hover:decoration-[1px] transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      フロントエンドの技術選定 ~2023を振り返る~
                    </Link>{" "}
                    登壇
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0">・</span>
                    <Link
                      href="https://gihyo.jp/magazine/SD/archive/2025/202501"
                      className="text-blue-600 hover:text-blue-800 decoration-blue-300 hover:decoration-blue-500 underline underline-offset-4 decoration-[0.5px] hover:decoration-[1px] transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Software Design 2025年1月号 Web APIテストの意義
                    </Link>{" "}
                    寄稿
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0">・</span>
                    <Link
                      href="https://dev.henry.jp/entry/henry-observability-maturity"
                      className="text-blue-600 hover:text-blue-800 decoration-blue-300 hover:decoration-blue-500 underline underline-offset-4 decoration-[0.5px] hover:decoration-[1px] transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ヘンリーのオブザーバビリティ成熟度を考える
                    </Link>{" "}
                    執筆
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0">・</span>
                    <Link
                      href="https://zenn.dev/sumiren/articles/8156bab8c95fcf"
                      className="text-blue-600 hover:text-blue-800 decoration-blue-300 hover:decoration-blue-500 underline underline-offset-4 decoration-[0.5px] hover:decoration-[1px] transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Next.jsのPPR +
                      StreamingがVercelで実行されるときの全体像を掴む
                    </Link>{" "}
                    執筆
                  </li>
                </ul>
                <div className="flex items-center gap-6 pt-2">
                  <Link
                    href="https://zenn.dev/sumiren"
                    className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Zenn
                  </Link>
                  <Link
                    href="https://twitter.com/sumiren_t"
                    className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 mr-2" />X
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                CTOパートナーサービスの詳細資料をご用意しています
              </p>
              <div className="flex justify-center">
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
