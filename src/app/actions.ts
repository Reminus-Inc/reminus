"use server";

import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { hubspotService } from "@/lib/hubspot";

const prisma = new PrismaClient();

const formSchema = z.object({
  company: z
    .string()
    .min(1, { message: "会社名を入力してください" })
    .max(100, { message: "会社名は100文字以内で入力してください" }),
  name: z
    .string()
    .min(1, { message: "お名前またはSNSのIDを入力してください" })
    .max(50, { message: "お名前は50文字以内で入力してください" }),
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
  name: z
    .string()
    .min(1, { message: "お名前を入力してください" })
    .max(50, { message: "お名前は50文字以内で入力してください" }),
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
  downloadUrl?: string;
  redirect?: string;
};

export async function submitInquiry(
  _: InquiryActionState,
  formData: FormData,
): Promise<InquiryActionState> {
  try {
    const validatedFields = formSchema.parse(Object.fromEntries(formData));

    await prisma.inquiry.create({
      data: {
        ...validatedFields,
        content: validatedFields.content || "",
      },
    });

    // HubSpotにコンタクトを作成
    await hubspotService.createInquiryContact({
      email: validatedFields.email,
      name: validatedFields.name,
      company: validatedFields.company,
      content: validatedFields.content,
    });

    // Slack通知を送信
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blocks: [
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
                text: `*お名前:*\n${validatedFields.name || "未入力"}`,
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
      }),
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
): Promise<DocumentRequestActionState> {
  try {
    const validatedFields = documentRequestSchema.parse(
      Object.fromEntries(formData),
    );

    await prisma.documentRequest.create({
      data: validatedFields,
    });

    // HubSpotにコンタクトを作成
    await hubspotService.createDocumentRequestContact({
      email: validatedFields.email,
      name: validatedFields.name,
      company: validatedFields.company,
      phone: validatedFields.phone,
    });

    const params = new URLSearchParams({
      email: validatedFields.email,
      name: validatedFields.name,
      company: validatedFields.company,
    });

    const latestFile = "reminus_ctopartner_intro_v1.0.2.pdf";

    console.log('資料請求受信完了:', {
      ...validatedFields,
      timestamp: new Date().toISOString(),
      environment: process.env.APP_ENVIRONMENT || 'production'
    });

    if (process.env.SLACK_WEBHOOK_URL && process.env.APP_ENVIRONMENT !== 'development') {
      console.log('Slack通知を送信します');
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "📄 資料請求がありました",
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
                  text: `*お名前:*\n${validatedFields.name}`,
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
        }),
      });
    }

    return {
      message: "資料請求ありがとうございます。",
      status: "success",
      downloadUrl: latestFile ? `/documents/${latestFile}` : undefined,
      redirect: `/download-thanks?${params.toString()}`,
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
