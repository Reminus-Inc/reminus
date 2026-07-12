"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { trackFormStart } from "@/lib/analytics";
import { getIsDevMode } from "@/lib/get-is-dev-mode";
import { notifyDownloadLead } from "@/app/actions";
import { DOCUMENT_TYPE, type DocumentType } from "@/app/constants";

// HubSpot forms v2 の埋め込み。
// - form_start: 描画された入力欄に直接 input リスナを張り、最初の入力で一度だけ GA へ送る
// - generate_lead: /download-thanks 側で発火するのでここでは焚かない
// - Slack: HubSpot 送信とは別に既存サーバー処理 (notifyDownloadLead) をブラウザから叩く
// 現行の HubSpot 埋め込みは同一オリジンの iframe (hs-form-iframe) 内にフォームを描画するため、
// 入力欄の走査・値取得は iframe の contentDocument を対象にする（旧来の非iframe描画にも fallback）。
type HubSpotFormsCreate = (options: {
  portalId: string;
  formId: string;
  target: string;
  onFormReady?: () => void;
  onFormSubmit?: () => void;
  onFormSubmitted?: () => void;
}) => void;

declare global {
  interface Window {
    hbspt?: { forms: { create: HubSpotFormsCreate } };
  }
}

type LeadValues = {
  company: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
};

const TARGET_ID = "hubspot-download-form-target";

// フォームの走査対象を返す。iframe 描画なら同一オリジンの contentDocument、
// 非iframe描画なら target 要素そのもの。
const getFormRoot = (): ParentNode | null => {
  const target = document.getElementById(TARGET_ID);
  if (!target) return null;
  const iframe = target.querySelector<HTMLIFrameElement>("iframe.hs-form-iframe");
  if (iframe) {
    try {
      const doc = iframe.contentDocument ?? iframe.contentWindow?.document ?? null;
      if (doc) return doc;
    } catch {
      // クロスオリジンで到達不可（通常は同一オリジンなのでここには来ない）
      console.error("クロスオリジンで到達不可（通常は同一オリジンなのでここには来ない）")
    }
  }
  return target;
};

export const HubSpotDownloadForm = ({
  portalId,
  formId,
  documentType = DOCUMENT_TYPE.CTO_PARTNER,
}: {
  portalId: string;
  formId: string;
  documentType?: DocumentType;
}) => {
  const router = useRouter();
  const createdRef = useRef(false);
  const startedRef = useRef(false);
  const leadRef = useRef<LeadValues>({
    company: "",
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
  });
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded || createdRef.current || !window.hbspt || !portalId || !formId) {
      return;
    }
    createdRef.current = true;

    window.hbspt.forms.create({
      portalId,
      formId,
      target: `#${TARGET_ID}`,
      onFormReady: () => {
        // form_start(GA) を最初の入力で一度だけ焚く。iframe 内 DOM が onFormReady 直後に
        // 間に合わないことがあるので、入力欄が現れるまで数回だけリトライし、root に input の
        // 委譲リスナを1つ貼る（後から現れた項目もバブリングで拾える）。
        let tries = 0;
        const bind = () => {
          const root = getFormRoot();
          if (root && root.querySelector("input, textarea, select")) {
            root.addEventListener("input", (e) => {
              if (startedRef.current) return;
              // 隠しフィールド(HubSpot が値をセットする場合がある)は form_start 対象外。
              // input は iframe(別realm)由来なので instanceof は使わず type を直接見る。
              const el = e.target as HTMLInputElement | null;
              if (el?.type === "hidden") return;
              startedRef.current = true;
              trackFormStart("download");
            });
            return;
          }
          if (tries++ < 20) setTimeout(bind, 100);
        };
        bind();
      },
      onFormSubmit: () => {
        // 送信直前に入力値を退避（送信後は取得できないため）
        const root = getFormRoot();
        if (!root) return;
        const read = (name: string) =>
          (root.querySelector<HTMLInputElement>(`[name="${name}"]`)?.value ?? "").trim();
        leadRef.current = {
          company: read("company"),
          lastname: read("lastname"),
          firstname: read("firstname"),
          email: read("email"),
          phone: read("phone"),
        };
      },
      onFormSubmitted: () => {
        const lead = leadRef.current;
        // 既存サーバー処理を流用して Slack 通知（HubSpot 送信とは別経路・fire-and-forget）
        void notifyDownloadLead(lead, documentType, getIsDevMode());
        // generate_lead は /download-thanks 側で発火する
        const params = new URLSearchParams({
          email: lead.email,
          name: `${lead.lastname} ${lead.firstname}`.trim(),
          company: lead.company,
          documentType,
        });
        router.push(`/download-thanks?${params.toString()}`);
      },
    });
  }, [scriptLoaded, portalId, formId, documentType, router]);

  return (
    <div className="w-full">
      <Script
        src="https://js.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      {/* フォームは v2.js ロード後に非同期で iframe 注入されるため、
          描画後の高さ(現行フォーム実測482px)を先に確保して縦の CLS を防ぐ。
          フォームの項目数を増減したらこの値も調整すること。 */}
      <div id={TARGET_ID} className="min-h-[482px]" />
    </div>
  );
};
