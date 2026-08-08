import "server-only";
import { UTM_KEYS, type UTMParameters } from "@/lib/utm-constants";
import { splitFullName } from "@/lib/split-name";

type HubSpotContactData = {
  company: string;
  lastname?: string;
  firstname?: string;
  name?: string;
  email: string;
  phone?: string;
  content?: string;
  isDownloadRequest?: boolean;
};

export const submitToHubSpotForm = async (
  data: HubSpotContactData,
  isDevMode: boolean = false,
  formType: "contact" | "download" = "contact",
  trackingContext?: {
    hutk?: string;
    pageUri?: string;
    pageName?: string;
  },
  utmParams?: UTMParameters,
  service?: string,
  abTestVariant?: string
): Promise<void> => {
  const formGuid = formType === "contact" 
    ? process.env.HUBSPOT_CONTACT_GUID 
    : process.env.HUBSPOT_FORM_GUID;

  if (
    // process.env.APP_ENVIRONMENT === "development" ||
    !process.env.HUBSPOT_PORTAL_ID ||
    !formGuid
  ) {
    console.log("HubSpot form submission skipped:", {
      isDevMode,
      environment: process.env.APP_ENVIRONMENT,
      hasPortalId: !!process.env.HUBSPOT_PORTAL_ID,
      hasFormGuid: !!formGuid,
      formType,
    });
    return;
  }

  try {
    // Form API用のフィールドデータを準備
    const fields = [
      {
        name: "email",
        value: data.email,
      },
      {
        name: "company",
        value: data.company,
      },
    ];

    // HubSpot のコンタクトは lastname / firstname しか持てないので、「お名前」1 つで
    // 受けたケースもここで必ずどちらかに載せる。分割ルールは splitFullName に集約。
    const { lastname, firstname } =
      data.lastname?.trim() && data.firstname?.trim()
        ? { lastname: data.lastname.trim(), firstname: data.firstname.trim() }
        : splitFullName(data.lastname?.trim() || data.name || "");

    if (lastname) {
      fields.push({ name: "lastname", value: lastname });
      // firstname は空文字でも送る (未設定のまま残さないため)
      fields.push({ name: "firstname", value: firstname });
    }

    if (data.phone) {
      fields.push({
        name: "phone",
        value: data.phone,
      });
    }

    if (data.content) {
      fields.push({
        name: "message",
        value: data.content,
      });
    }

    // CV種類を追加（サービス名があれば付与）
    const cvBase = formType === "contact" ? "お問い合わせ" : "資料請求";
    const cvValue = service ? `${cvBase}（${service}）` : cvBase;
    fields.push({
      name: "cvshurui",
      value: cvValue,
    });

    // お問い合わせ内容を追加（問い合わせフォームの場合のみ）
    if (formType === "contact" && data.content) {
      fields.push({
        name: "otoiawasenaiyou",
        value: data.content,
      });
    }

    // ABテストバリアントを追加
    if (abTestVariant) {
      fields.push({
        name: "ab_test_variant",
        value: abTestVariant,
      });
    }

    // UTMパラメータを追加
    if (utmParams) {
      for (const key of UTM_KEYS) {
        const value = utmParams[key];
        if (value) {
          fields.push({
            name: key,
            value: value,
          });
        }
      }
    }

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields,
          context: {
            // トラッキング情報を送信
            ...(trackingContext?.hutk && { hutk: trackingContext.hutk }),
            ...(trackingContext?.pageUri && { pageUri: trackingContext.pageUri }),
            ...(trackingContext?.pageName && { pageName: trackingContext.pageName }),
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HubSpot Form API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    console.log("HubSpot form submitted successfully:", data.email);
    console.log("送信されたUTMパラメータ:", utmParams);
  } catch (error) {
    console.error("Failed to submit HubSpot form:", error);
    // HubSpotエラーはユーザーに影響を与えないようにする
  }
};

// この関数は現在使用していませんが、下位互換性のために残しています
export const createHubSpotContact = async (
  data: HubSpotContactData,
  isDevMode: boolean = false,
  trackingContext?: {
    hutk?: string;
    pageUri?: string;
    pageName?: string;
  },
  utmParams?: UTMParameters
): Promise<void> => {
  // Form APIを使用するようにリダイレクト
  const formType = data.isDownloadRequest ? "download" : "contact";
  return submitToHubSpotForm(data, isDevMode, formType, trackingContext, utmParams);
};
