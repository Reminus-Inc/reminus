"use server";

import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import {
  DOCUMENT_TYPE_MAP,
  SLACK_NOTIFICATION_TYPE,
  type DocumentType,
} from "./constants";
import { getSlackWebhookUrl } from "@/lib/get-slack-webhook-url";
import { submitToHubSpotForm } from "@/lib/hubspot";

const prisma = new PrismaClient();

// 共通のリード受付処理
async function acceptLead({
  leadData,
  slackNotificationType,
  slackBlocks,
  dbSaveFunction,
  isDevMode,
  formType = "contact",
}: {
  leadData: {
    company: string;
    lastname?: string;
    firstname?: string;
    name?: string;
    email: string;
    phone?: string;
    content?: string;
    isDownloadRequest?: boolean;
  };
  slackNotificationType: typeof SLACK_NOTIFICATION_TYPE[keyof typeof SLACK_NOTIFICATION_TYPE];
  slackBlocks: any[];
  dbSaveFunction: () => Promise<any>;
  isDevMode: boolean;
  formType?: "contact" | "download";
}) {
  // Slack通知を送信（最優先）
  const slackWebhookUrl = await getSlackWebhookUrl(
    isDevMode,
    slackNotificationType
  );

  let slackPromise: Promise<any> = Promise.resolve(null);
  if (slackWebhookUrl != null) {
    console.log("📨 Slack通知を送信します");
    slackPromise = fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blocks: slackBlocks }),
    }).catch((error) => {
      console.error("Slack通知エラー:", error);
      return null;
    });
  }

  // HubSpotフォーム送信
  const hubspotPromise = submitToHubSpotForm(leadData, isDevMode, formType).catch(
    (error) => {
      console.error("HubSpot通知エラー:", error);
      return null;
    }
  );

  // DB保存を開始（バックグラウンドで実行）
  dbSaveFunction()
    .then(() => {
      console.log("DB保存完了（バックグラウンド）");
    })
    .catch((error) => {
      console.error("DB保存エラー（バックグラウンド）:", error);
    });

  // HubSpotかSlackのどちらかが完了したらレスポンスを返す
  await Promise.race([hubspotPromise, slackPromise]);
}

const formSchema = z.object({
  company: z
    .string()
    .min(1, { message: "会社名を入力してください" })
    .max(100, { message: "会社名は100文字以内で入力してください" }),
  lastname: z
    .string()
    .min(1, { message: "姓を入力してください" })
    .max(50, { message: "姓は50文字以内で入力してください" }),
  firstname: z
    .string()
    .min(1, { message: "名を入力してください" })
    .max(50, { message: "名は50文字以内で入力してください" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" })
    .max(255, { message: "メールアドレスは255文字以内で入力してください" }),
  content: z
    .string()
    .max(5000, { message: "お問い合わせ内容は5000文字以内で入力してください" })
    .optional(),
});

const documentRequestSchema = z.object({
  company: z
    .string()
    .min(1, { message: "会社名を入力してください" })
    .max(100, { message: "会社名は100文字以内で入力してください" }),
  lastname: z
    .string()
    .min(1, { message: "姓を入力してください" })
    .max(50, { message: "姓は50文字以内で入力してください" }),
  firstname: z
    .string()
    .min(1, { message: "名を入力してください" })
    .max(50, { message: "名は50文字以内で入力してください" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" })
    .max(255, { message: "メールアドレスは255文字以内で入力してください" }),
  phone: z
    .string()
    .min(1, { message: "電話番号を入力してください" })
    .max(20, { message: "電話番号は20文字以内で入力してください" })
    .regex(/^[0-9\-]+$/, {
      message: "電話番号は数字とハイフンのみ使用できます",
    }),
});

export type InquiryActionState = {
  message: string;
  errors?: string[];
  status: "idle" | "success" | "error";
};

export type DocumentRequestActionState = {
  message: string;
  errors?: string[];
  status: "idle" | "success" | "error";
  redirect?: string;
};

export async function submitInquiry(
  _: InquiryActionState,
  formData: FormData,
  isDevMode: boolean
): Promise<InquiryActionState> {
  try {
    const validatedFields = formSchema.parse(Object.fromEntries(formData));

    await acceptLead({
      leadData: {
        company: validatedFields.company,
        lastname: validatedFields.lastname,
        firstname: validatedFields.firstname,
        email: validatedFields.email,
        content: validatedFields.content,
      },
      slackNotificationType: SLACK_NOTIFICATION_TYPE.CONTACT,
      slackBlocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎉 新規お問い合わせ",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*会社名:*\n${validatedFields.company}`,
            },
            {
              type: "mrkdwn",
              text: `*お名前:*\n${validatedFields.lastname} ${validatedFields.firstname}`,
            },
            {
              type: "mrkdwn",
              text: `*メール:*\n${validatedFields.email}`,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*お問い合わせ内容:*\n${validatedFields.content}`,
          },
        },
      ],
      dbSaveFunction: () => prisma.inquiry.create({
        data: {
          company: validatedFields.company,
          name: `${validatedFields.lastname} ${validatedFields.firstname}`,
          email: validatedFields.email,
          content: validatedFields.content || "",
        },
      }),
      isDevMode,
    });

    return {
      message:
        "お問い合わせありがとうございます。\r\nメールにてご連絡させていただきます。",
      status: "success",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: "エラーが発生しました",
        errors: error.errors.map((e) => e.message),
        status: "error",
      };
    }
    return {
      message: "エラーが発生しました",
      errors: ["予期せぬエラーが発生しました"],
      status: "error",
    };
  }
}

export async function requestDocument(
  _: DocumentRequestActionState,
  formData: FormData,
  documentType: DocumentType,
  isDevMode: boolean
): Promise<DocumentRequestActionState> {
  const startTime = performance.now();
  console.log("🔄 資料請求処理開始:", new Date().toISOString());

  try {
    const validationStart = performance.now();
    const validatedFields = documentRequestSchema.parse(
      Object.fromEntries(formData)
    );
    const validationEnd = performance.now();
    console.log(
      `✅ バリデーション完了: ${(validationEnd - validationStart).toFixed(2)}ms`
    );

    const params = new URLSearchParams({
      email: validatedFields.email,
      name: `${validatedFields.lastname} ${validatedFields.firstname}`,
      company: validatedFields.company,
      documentType: documentType,
    });

    await acceptLead({
      leadData: {
        company: validatedFields.company,
        lastname: validatedFields.lastname,
        firstname: validatedFields.firstname,
        email: validatedFields.email,
        phone: validatedFields.phone,
        isDownloadRequest: true,
      },
      slackNotificationType: SLACK_NOTIFICATION_TYPE.DOWNLOAD,
      formType: "download",
      slackBlocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `📄 ${DOCUMENT_TYPE_MAP[documentType]}の資料請求がありました`,
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*会社名:*\n${validatedFields.company}`,
            },
            {
              type: "mrkdwn",
              text: `*お名前:*\n${validatedFields.lastname} ${validatedFields.firstname}`,
            },
            {
              type: "mrkdwn",
              text: `*メール:*\n${validatedFields.email}`,
            },
            {
              type: "mrkdwn",
              text: `*電話番号:*\n${validatedFields.phone}`,
            },
          ],
        },
      ],
      dbSaveFunction: () => prisma.documentRequest.create({
        data: {
          company: validatedFields.company,
          name: `${validatedFields.lastname} ${validatedFields.firstname}`,
          email: validatedFields.email,
          phone: validatedFields.phone,
        },
      }),
      isDevMode,
    });

    const endTime = performance.now();
    const totalTime = endTime - startTime;
    console.log(`🎉 資料請求処理完了: 合計${totalTime.toFixed(2)}ms（通知待ち）`);

    return {
      message: "資料請求ありがとうございます。",
      status: "success",
      redirect: `/download-thanks?${params.toString()}`,
    };
  } catch (error) {
    const errorTime = performance.now();
    const totalTime = errorTime - startTime;
    console.log(`❌ 資料請求処理エラー: ${totalTime.toFixed(2)}ms`, error);

    if (error instanceof z.ZodError) {
      return {
        message: "エラーが発生しました",
        errors: error.errors.map((e) => e.message),
        status: "error",
      };
    }
    return {
      message: "エラーが発生しました",
      errors: ["予期せぬエラーが発生しました"],
      status: "error",
    };
  }
}
