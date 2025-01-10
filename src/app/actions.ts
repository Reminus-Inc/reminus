"use server";

import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const formSchema = z.object({
  company: z.string().min(1, { message: "会社名を入力してください" }),
  name: z.string().min(1, { message: "お名前またはSNSのIDを入力してください" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
  content: z.string().min(1, { message: "お問い合わせ内容を入力してください" }),
});

export type ActionState = {
  message: string;
  errors?: string[];
  status: "idle" | "success" | "error";
};

export async function submitInquiry(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  try {
    console.log("server!");
    const validatedFields = formSchema.parse(Object.fromEntries(formData));

    const inquiry = await prisma.inquiry.create({
      data: validatedFields,
    });

    console.log("inquiry successfully added", inquiry);

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
    console.error("Error", error);
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
