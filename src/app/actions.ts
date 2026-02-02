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
import { cookies } from "next/headers";
import { UTM_KEYS, type UTMParameters } from "@/lib/utm-constants";

const prisma = new PrismaClient();

// CookieからUTMパラメータを取得
async function getUTMFromCookies(): Promise<UTMParameters> {
  const cookieStore = await cookies();
  const utmParams: UTMParameters = {};

  for (const key of UTM_KEYS) {
    const value = cookieStore.get(key)?.value;
    if (value) {
      utmParams[key] = value;
    }
  }

  return utmParams;
}

// 共通のリード受付処理
async function acceptLead({
  leadData,
  slackNotificationType,
  slackBlocks,
  dbSaveFunction,
  isDevMode,
  formType = "contact",
  trackingContext,
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
  trackingContext?: {
    hutk?: string;
    pageUri?: string;
    pageName?: string;
  };
}) {
  console.log("📋 acceptLead 開始:", {
    leadData,
    formType,
    trackingContext,
    isDevMode
  });

  const utmParams = await getUTMFromCookies();
  console.log("📊 UTMパラメータ:", utmParams);

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
  const hubspotPromise = submitToHubSpotForm(leadData, isDevMode, formType, trackingContext, utmParams).catch(
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
}).superRefine((data, ctx) => {
  const domain = data.email.split('@')[1]?.toLowerCase();

  // 使い捨てメールドメインは完全にブロック
  if (disposableEmailDomains.includes(domain)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "エラーが発生しました",
      path: ['email'],
    });
    return;
  }

  // 個人メールドメインの場合、会社名に許可キーワードが含まれているかチェック
  if (personalEmailDomains.includes(domain)) {
    const companyLower = data.company.toLowerCase();
    const hasAllowedKeyword = allowedKeywords.some(keyword => companyLower.includes(keyword));

    if (!hasAllowedKeyword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "メールアドレス: 個人の方はお問い合わせからご連絡ください",
        path: ['email'],
      });
    }
  }
});

// 一般的な個人メールドメイン（条件付きで許可）
const personalEmailDomains = [
  'gmail.com',
  'yahoo.co.jp',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'msn.com',
  'docomo.ne.jp',
  'ezweb.ne.jp',
  'softbank.ne.jp',
  'i.softbank.jp',
  'nifty.com',
  'ocn.ne.jp',
  'biglobe.ne.jp',
  'so-net.ne.jp',
  'plala.or.jp',
  'asahi-net.or.jp',
  'wakwak.com',
  'dion.ne.jp',
  'auone-net.jp',
  'bbiq.jp',
  'jcom.ne.jp',
  'jcom.home.ne.jp',
  'itscom.jp',
  'eonet.ne.jp',
  'commufa.jp',
  'megaegg.ne.jp',
  'pikara.ne.jp',
  'bbexcite.jp',
  't-com.ne.jp',
  'ucom.ne.jp',
  'tnc.ne.jp',
  'synapse.ne.jp',
  'enjoy.ne.jp',
  'interlink.or.jp',
  'tigersnet.com',
  'sannet.ne.jp',
  'vectant.ne.jp',
  'hi-ho.ne.jp',
];

// 許可するキーワード（個人メール用）
const allowedKeywords = [
  '開業',
  '創業',
  '起業',
  '登記',
  '準備',
];

// 使い捨てメールドメインのリスト（完全にブロック）
const disposableEmailDomains = [
  // 有名な使い捨てメールサービス
  '10minutemail.com',
  '10minutemail.net',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamail.biz',
  'guerrillamail.de',
  'guerrillamailblock.com',
  'sharklasers.com',
  'spam4.me',
  'grr.la',
  'guerrillamail.info',
  'pokemail.net',
  'mailinator.com',
  'mailinator.net',
  'mailinator2.com',
  'mailinator2.net',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'cool.fr.nf',
  'jetable.fr.nf',
  'nospam.ze.tc',
  'nomail.xl.cx',
  'mega.zik.dj',
  'speed.1s.fr',
  'courriel.fr.nf',
  'moncourrier.fr.nf',
  'monemail.fr.nf',
  'monmail.fr.nf',
  'tempmail.com',
  'temp-mail.org',
  'temp-mail.io',
  'temp-mail.de',
  'throwawaymail.com',
  'trashmail.com',
  'trash-mail.com',
  'trashmails.com',
  'trashmail.net',
  'trashmail.de',
  'trashmail.ws',
  'trash-mail.at',
  'trashmail.org',
  'trash-me.com',
  'mytrashmail.com',
  'mt2009.com',
  'thankyou2010.com',
  'trash2009.com',
  'mt2014.com',
  'trashymail.com',
  'trashymail.net',
  'mailnesia.com',
  'tmail.com',
  'tmails.net',
  'tmpmail.org',
  'tmpmail.net',
  'moakt.com',
  'dispostable.com',
  'mintemail.com',
  'emailondeck.com',
  '10mail.org',
  '20mail.it',
  'disposableaddress.com',
  'dropmail.me',
  'fakemail.fr',
  'fakeinbox.com',
  'emailfake.com',
  'emailtemporanea.net',
  'fakemailgenerator.com',
  'mailcatch.com',
  'maildrop.cc',
  'mailnull.com',
  'mailseal.de',
  'mailzilla.com',
  'mailzilla.org',
  'no-spam.ws',
  'noclickemail.com',
  'privacy.net',
  'privatdemail.net',
  'proxymail.eu',
  'rcpt.at',
  'rejectmail.com',
  'emailtemporar.ro',
  'spambox.us',
  'spamfree24.org',
  'spamgourmet.com',
  'supergreatmail.com',
  'teleworm.us',
  'throam.com',
  'tilien.com',
  'tmpbox.net',
  'todaymail.com',
  'trashcanmail.com',
  'getnada.com',
  'inboxbear.com',
  'getairmail.com',
  'zetmail.com',
  'tempail.com',
  '33mail.com',
  'disposableinbox.com',
  'hidemail.de',
  'quickinbox.com',
  'receivesmscode.com',
  'imgof.com',
  'imgol.com',
  'emailna.co',
  'emailna.life',
  'tempinbox.com',
  'tempinbox.co',
  'emkei.cf',
  'emkei.ga',
  'emkei.gq',
  'emkei.ml',
  'emkei.tk',
  'inboxkitten.com',
  'anonaddy.me',
  'clrmail.com',
  'dropmail.me',
  'tempmailaddress.com',
  'tempemail.net',
  'tempmailer.com',
  'mohmal.com',
  'mohmal.tech',
  'mohmal.xyz',
  'emailhackerapp.com',
  'gmailvn.net',
  'emlpro.com',
  'emltmp.com',
  'sharklasers.com',
  'grr.la',
  'guerrillamail.info',
  'pokemail.net',
  'spam4.me',
  // 日本の使い捨てメールサービス
  'sute.jp',
  'suteru.jp',
  '0-mail.com',
  'svk.jp',
  'dekamerumo.biz',
  'ahk.jp',
  'livedoor.com', // livedoorメールは捨てメアドとして使われることが多い
  'meruado.uk', // メルアド.uk - 日本の捨てメアドサービス
  // 追加の日本系捨てメアドドメイン
  'appmailuk', 'momoi.uk', 'boxfi.uk', 'uma3be', 'one-ml.com',
  'dea-21olympic.com', 'cazlv.com', '1xp.fr', 'cpc.cx', '0cd.cn',
  'prc.cx', 'b7s.ru', 'ab34.fr', 'e3b.org', 'new.ovh', 'ves.ink',
  'q0.us.to', 'zx81.ovh', 'wishy.fr', 'bmn.ch.ma', 'iya.fr.nf',
  'sdj.fr.nf', 'afw.fr.nf', 'mail34.fr', 'mynes.com', 'dao.pp.ua',
  'nori24.tv', 'lerch.ovh', 'breizh.im', 'six25.biz', 'art.fr.cr',
  'red.fr.cr', 'ywzmb.top', 'nyndt.top', 'isep.fr.nf', 'noreply.fr',
  'pliz.fr.nf', 'noyp.fr.nf', 'zouz.fr.nf', 'hunnur.com', 'wxcv.fr.nf',
  'zorg.fr.nf', 'imap.fr.nf', 'redi.fr.nf', 'dlvr.us.to', 'y.iotf.net',
  'zinc.fr.nf', 'ym.cypi.fr', 'yop.too.li', 'dmts.fr.nf', 'binich.com',
  'wzofit.com', 'jmail.fr.nf', 'zimel.fr.cr', 'yaloo.fr.nf', 'jinva.fr.nf',
  'ag.prout.be', 'ba.prout.be', 'es.prout.be', 'us.prout.be', 'ealea.fr.nf',
  'nomes.fr.nf', 'yop.kd2.org', 'my10minutemail.com', 'trashmail.fr',
  'trashmail.se', 'gomio.biz', 'f5.si', 'macr2.com', 'ruru.be',
  'neko2.net', 'fuwamofu.com', 'merry.pink', 'cream.pink', 'choco.la',
  'ichigo.me', 'via.tokyo.jp', 'eay.jp', 'usako.net', 'mofu.be',
  'prin.be', 'kkmail.be', 'niseko.be', 'sendapp.uk', 'instmail.uk',
  'nekosan.uk', 'instaddr.win', 'instaddr.uk', 'quicksend.ch',
  'instaddr.ch', 'uma3.be', 'mbox.re', 'honeys.be', 'heisei.be',
  'moimoi.re', 'mirai.re', 'magim.be', 'fuwari.be', 'nagi.be',
  'kagi.be', 'tapi.re', 'simaenaga.com', 'sofia.re', 'hotsoup.be',
  'nekochan.fr', 'fanclub.pm', 'okinawa.li', 'stayhome.li', 'owleyes.ch',
  'nezumi.be', 'fukurou.ch', 'digdig.org', 'mama3.org', 'hamham.uk',
  'cocoro.uk', 'exdonuts.com', 'na-cat.com', 'xmailer.be', 'ccmail.uk',
  'nyasan.com', 'sendnow.win', 'eripo.net', 'goatmail.uk', 'catgroup.uk',
  'shchiba.uk', 'bangban.uk', 'onlyapp.net', 'haren.uk', 'tatsu.uk',
  'proton.me', 'protonmail.com', 'mxscout.com', 'm.kuku.lu',
  // Hide My Email系サービス（絶対NG）
  // Apple Hide My Email
  'privaterelay.appleid.com',
  // DuckDuckGo Email Protection
  'duck.com',
  // Mozilla Firefox Relay
  'relay.firefox.com',
  'mozmail.com',
  // Proton Pass hide-my-email
  'passmail.net',
  // SimpleLogin (Proton傘下)
  'simplelogin.com',
  'simplelogin.fr',
  'slmail.me',
  'slmails.com',
  'aleeas.com',
  '8alias.com',
  '8shield.net',
  'dralias.com',
  'silomails.com',
  // Addy.io (旧 AnonAddy)
  'anonaddy.com',
  'addy.io',
  // その他のHide My Email系サービス
  'blur.com',
  'emailnator.com',
  'forwardemail.net',
  'simpleaddress.net',
  'mailmask.me',
  'scr.im',
  'spamex.com',
  'sneakemail.com',
  'getdefend.com',
];

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
}).superRefine((data, ctx) => {
  const domain = data.email.split('@')[1]?.toLowerCase();

  // 使い捨てメールドメインは完全にブロック
  if (disposableEmailDomains.includes(domain)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "エラーが発生しました。お問い合わせからご連絡ください",
      path: ['email'],
    });
    return;
  }

  // 個人メールドメインの場合、会社名に許可キーワードが含まれているかチェック
  if (personalEmailDomains.includes(domain)) {
    const companyLower = data.company.toLowerCase();
    const hasAllowedKeyword = allowedKeywords.some(keyword => companyLower.includes(keyword));

    if (!hasAllowedKeyword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "個人の方はお問い合わせからご連絡ください",
        path: ['email'],
      });
    }
  }
});

export type InquiryActionState = {
  message: string;
  errors?: string[];
  fieldErrors?: { [key: string]: string };
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
  console.log("📝 submitInquiry 開始");

  try {
    const validatedFields = formSchema.parse(Object.fromEntries(formData));

    // HubSpotトラッキング情報を取得
    const trackingContext = {
      hutk: formData.get('hutk') as string,
      pageUri: formData.get('pageUri') as string,
      pageName: formData.get('pageName') as string,
    };

    console.log("📝 submitInquiry - トラッキング情報:", trackingContext);

    await acceptLead({
      leadData: {
        company: validatedFields.company,
        lastname: validatedFields.lastname,
        firstname: validatedFields.firstname,
        email: validatedFields.email,
        content: validatedFields.content,
      },
      slackNotificationType: SLACK_NOTIFICATION_TYPE.CONTACT,
      trackingContext,
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

    // HubSpotトラッキング情報を取得
    const trackingContext = {
      hutk: formData.get('hutk') as string,
      pageUri: formData.get('pageUri') as string,
      pageName: formData.get('pageName') as string,
    };

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
      trackingContext,
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
