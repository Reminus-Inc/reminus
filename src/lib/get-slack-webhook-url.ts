import "server-only";
import { headers } from "next/headers";

export const getSlackWebhookUrl = async (): Promise<string | undefined> => {
  if (process.env.APP_ENVIRONMENT === "development") {
    return;
  }

  const headersList = await headers();
  const referer = headersList.get("referer");
  const includeDevParam =
    referer != null ? new URL(referer).searchParams.has("dev") : false;

  if (includeDevParam && process.env.SLACK_WEBHOOK_URL_DEV) {
    return process.env.SLACK_WEBHOOK_URL_DEV;
  }
  return process.env.SLACK_WEBHOOK_URL;
};
