import { DownloadForm } from "@/app/_components/ui/download-form";
import Image from "next/image";
import { Heading } from "@/app/_components/ui/heading";

export default function DownloadPage() {
  return (
    <main className="bg-white pb-16 pt-8">
      <div className="container mx-auto flex flex-col justify-center gap-14 px-6 lg:flex-row lg:gap-20">
        <div className="space-y-6">
          <Heading level="h2" tag="h1">
            サービス紹介資料
          </Heading>

          <div className="rounded bg-gray-50 p-4">
            <div className="rounded-sm">

            </div>
          </div>

          <div className="space-y-3">
            <Heading tag="h3" level="h3">
              この資料で分かること
            </Heading>

            <ul className="list-disc space-y-1.5 pl-5 font-bold text-gray-600">
              <li>スタートアップの課題と解決策</li>
              <li>プラン比較と料金体系</li>
              <li>成功事例の紹介</li>
            </ul>
          </div>
        </div>

        <div className="flex h-fit justify-center rounded-lg border border-gray-300 px-7 py-6 lg:max-w-[400px]">
          <DownloadForm />
        </div>
      </div>
    </main>
  );
}
