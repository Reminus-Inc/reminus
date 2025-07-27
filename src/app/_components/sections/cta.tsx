"use client";

import { ContactButton } from "../ui/contact-button";

export function Cta() {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          技術から、
          <br className="md:hidden" />
          経営とプロダクトを
          <br className="lg:hidden" />
          加速しませんか？
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-xl">
          非エンジニア創業者様のSaaSスタートアップを技術面からサポートします。
          <br className="hidden md:block" />
          まずは無料相談からお気軽にどうぞ。
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <ContactButton aggressive variant="outlined" color="white" />
        </div>
      </div>
    </section>
  );
}
