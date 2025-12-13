import "server-only";
import {
  SLACK_NOTIFICATION_TYPE,
  type SlackNotificationType,
} from "@/app/constants";

export const getSlackWebhookUrl = async (
  isDevMode: boolean = false,
  type: SlackNotificationType = SLACK_NOTIFICATION_TYPE.CONTACT
): Promise<string | undefined> => {
  if (process.env.APP_ENVIRONMENT === "development") {
    return;
  }
  if (isDevMode && process.env.SLACK_WEBHOOK_URL_DEV) {
    return process.env.SLACK_WEBHOOK_URL_DEV;
  }
  if (
    type === SLACK_NOTIFICATION_TYPE.DOWNLOAD &&
    process.env.SLACK_WEBHOOK_URL_DOWNLOAD
  ) {
    return process.env.SLACK_WEBHOOK_URL_DOWNLOAD;
  }
  return process.env.SLACK_WEBHOOK_URL;
};
