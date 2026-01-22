import "server-only";
import { UTM_KEYS, type UTMParameters } from "@/lib/utm-constants";

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
  utmParams?: UTMParameters
): Promise<void> => {
  if (
    // process.env.APP_ENVIRONMENT === "development" ||
    !process.env.HUBSPOT_PORTAL_ID ||
    !process.env.HUBSPOT_FORM_GUID
  ) {
    console.log("HubSpot form submission skipped:", {
      isDevMode,
      environment: process.env.APP_ENVIRONMENT,
      hasPortalId: !!process.env.HUBSPOT_PORTAL_ID,
      hasFormGuid: !!process.env.HUBSPOT_FORM_GUID,
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

    // 姓名が分離されている場合
    if (data.lastname && data.firstname) {
      fields.push(
        {
          name: "lastname",
          value: data.lastname,
        },
        {
          name: "firstname",
          value: data.firstname,
        }
      );
    } else if (data.name) {
      // 名前が1つのフィールドの場合（下位互換性のため）
      const nameParts = data.name.split(" ");
      fields.push(
        {
          name: "lastname",
          value: nameParts.length > 1 ? nameParts[0] : data.name,
        },
        {
          name: "firstname",
          value: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "",
        }
      );
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

    // CV種類を追加
    fields.push({
      name: "cvshurui",
      value: formType === "contact" ? "お問い合わせ" : "資料請求",
    });

    // お問い合わせ内容を追加（問い合わせフォームの場合のみ）
    if (formType === "contact" && data.content) {
      fields.push({
        name: "otoiawasenaiyou",
        value: data.content,
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
      `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_GUID}`,
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
