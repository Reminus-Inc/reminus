import "server-only";

export const getSlackWebhookUrl = async (
  isDevMode: boolean = false
): Promise<string | undefined> => {
  console.log("test isDevMode", isDevMode);
  if (process.env.APP_ENVIRONMENT === "development") {
    return;
  }
  if (isDevMode && process.env.SLACK_WEBHOOK_URL_DEV) {
    return process.env.SLACK_WEBHOOK_URL_DEV;
  }
  return process.env.SLACK_WEBHOOK_URL;
};
