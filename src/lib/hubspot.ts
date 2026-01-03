import "server-only";

type HubSpotContactData = {
  company: string;
  name: string;
  email: string;
  phone?: string;
  isDownloadRequest?: boolean;
};

export const createHubSpotContact = async (
  data: HubSpotContactData,
  isDevMode: boolean = false
): Promise<void> => {
  if (
    process.env.APP_ENVIRONMENT === "development" ||
    isDevMode ||
    !process.env.HUBSPOT_ACCESS_TOKEN
  ) {
    console.log("HubSpot contact creation skipped:", {
      isDevMode,
      environment: process.env.APP_ENVIRONMENT,
      hasToken: !!process.env.HUBSPOT_ACCESS_TOKEN,
    });
    return;
  }

  try {
    const nameParts = data.name.split(" ");
    const properties: Record<string, string> = {
      email: data.email,
      firstname: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "",
      lastname: nameParts.length > 1 ? nameParts[0] : data.name,
      company: data.company,
    };

    if (data.phone) {
      properties.phone = data.phone;
    }

    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      // 既存の連絡先の場合はエラーとしない
      if (errorData.category === "CONFLICT") {
        console.log("HubSpot contact already exists:", data.email);
        return;
      }
      throw new Error(`HubSpot API error: ${response.status}`);
    }

    console.log("HubSpot contact created successfully:", data.email);
  } catch (error) {
    console.error("Failed to create HubSpot contact:", error);
    // HubSpotエラーはユーザーに影響を与えないようにする
  }
};
