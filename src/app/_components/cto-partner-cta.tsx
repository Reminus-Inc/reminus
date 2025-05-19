"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DownloadButton } from "./download-button";
import { ContactButton } from "./contact-button";

export function CtoPartnerCta() {
  return (
    <section className="py-20 bg-emerald-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">技術から、経営とプロダクトを<br className="lg:hidden" />加速しませんか？</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          非エンジニア創業者様のSaaSスタートアップを技術面からサポートします。<br className="hidden md:block" />まずは無料相談からお気軽にどうぞ。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <DownloadButton
            variant="round"
            className="inline-flex items-center justify-center bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-full text-base"
            iconPosition="right"
          >
            サービス資料をダウンロード
          </DownloadButton> */}
          {/* <Link
            href="#contact"
            className="inline-flex items-center justify-center border border-white text-white hover:bg-emerald-700 font-medium py-3 px-6 rounded-full text-base"
          >
            無料相談を予約する <ArrowRight className="ml-2 h-5 w-5" />
          </Link> */}
            <ContactButton
              variant="round"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-medium px-10 py-10 text-base"
              aggressive
              iconPosition="right"
            >
              無料相談を予約する
          </ContactButton>
        </div>
      </div>
    </section>
  );
}