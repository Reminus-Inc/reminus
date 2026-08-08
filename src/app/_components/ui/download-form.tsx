"use client";

import {
  requestDocument,
  type DocumentRequestActionState,
} from "@/app/actions";
import { type DocumentType } from "@/app/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackFormStart } from "@/lib/analytics";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useMemo, useState } from "react";
import { PrimaryButton } from "./primary-button";
import { getIsDevMode } from "@/lib/get-is-dev-mode";
import { getHubSpotContext } from "@/lib/hubspot-tracking";
import { splitFullName } from "@/lib/split-name";

const RequiredBadge = () => (
  <span className="rounded bg-[#F36775] px-1 py-0.5 text-[10px] font-bold leading-[14px] text-white">
    必須
  </span>
);

type FormValues = {
  company: string;
  name: string;
  email: string;
  phone: string;
};

type DocumentFormProps = {
  documentType: DocumentType;
  beforeThanks?: (formValues: FormValues) => void;
  formId: string;
  // プライバシーポリシーの同意文をどこに置くか。既定は入力欄の直下 (従来どおり)。
  // "below-button" にすると送信ボタンの下に回す。
  privacyNotice?: "above-button" | "below-button";
};

export const DownloadForm = ({
  documentType,
  beforeThanks,
  formId,
  privacyNotice,
}: DocumentFormProps) => {
  return (
    <HookDownloadForm
      documentType={documentType}
      beforeThanks={beforeThanks}
      formId={formId}
      privacyNotice={privacyNotice}
    />
  );
};

export const HookDownloadForm = ({
  documentType,
  beforeThanks,
  formId,
  privacyNotice = "above-button",
}: DocumentFormProps) => {
  const router = useRouter();

  const isDevMode = getIsDevMode();
  const getRequestDocument = (
    prev: DocumentRequestActionState,
    formData: FormData
  ) => requestDocument(prev, formData, documentType, isDevMode);

  const [state, formAction, pending] = useActionState(getRequestDocument, {
    status: "idle",
    message: "",
  });
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [triedServerAction, setTriedServerAction] = useState(false);
  const [formValues, setFormValues] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
  });

  const trackFormStartOnce = (value: string) => {
    if (!hasStartedForm && value.length > 0) {
      trackFormStart("download");
      setHasStartedForm(true);
    }
  };

  // 入力欄は 1 つ (「お名前」) だが、HubSpot に渡す形は lastname / firstname。
  // 分割ルールはサーバーと同じ splitFullName を使う。
  const splitName = splitFullName(formValues.name);

  const handleFormAction = (formData: FormData) => {
    setTriedServerAction(true);

    // 「お名前」欄は name 属性を持たないので FormData に載らない。分割できない入力
    // (スペース無し・ローマ字) でも必須チェックを通せるよう、生の値をここで足す。
    formData.append("name", formValues.name);

    // HubSpotトラッキング情報を追加
    const hubspotContext = getHubSpotContext();
    formData.append('hutk', hubspotContext.hutk);
    formData.append('pageUri', hubspotContext.pageUri);
    formData.append('pageName', hubspotContext.pageName);

    return formAction(formData);
  };

  useEffect(() => {
    // thanksで戻るボタンおしたときにstateが残っててまたredirectするバグがあるのでtriedServerActionのuseStateが必要
    if (triedServerAction && state.status === "success" && state.redirect) {
      beforeThanks?.(formValues);
      router.push(state.redirect);
      setTriedServerAction(false);
    }
  }, [triedServerAction, state.status, state.redirect, router, beforeThanks, formValues]);

  const companyError = useMemo(
    () => state.errors?.find((error) => error.includes("会社名")),
    [state.errors]
  );
  const nameError = useMemo(
    () => state.errors?.find((error) => error.includes("お名前")),
    [state.errors]
  );
  const emailError = useMemo(
    () => state.errors?.find((error) => error.includes("メールアドレス") || error.includes("個人の方")),
    [state.errors]
  );
  const phoneError = useMemo(
    () => state.errors?.find((error) => error.includes("電話番号")),
    [state.errors]
  );
  const otherError: string | undefined = useMemo(() => {
    if (
      !companyError &&
      !emailError &&
      !phoneError &&
      state.errors != null &&
      state.errors.length >= 1
    ) {
      return state.errors[0];
    }
  }, [state.errors, companyError, nameError, emailError, phoneError]);

  return (
    <form id={formId} action={handleFormAction} className="w-full">
      <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="fullname"
              className="flex items-center gap-2 text-sm font-semibold text-gray-800"
            >
              <RequiredBadge />お名前
            </Label>
            {/* HubSpot のトラッキングスクリプトは「非HubSpotフォーム」として DOM の入力欄を
                そのまま拾い、name="name" のような氏名 1 フィールドを firstname に丸ごと
                載せてしまう (サーバーから送った正しい firstname が上書きされる)。
                そのため入力欄自体は name 属性を持たせず送信対象から外し、HubSpot に見える形は
                従来どおり lastname / firstname (下の hidden) に揃える。
                サーバーへ渡す生の「お名前」は handleFormAction で FormData に足す。 */}
            <Input
              id="fullname"
              placeholder="山田 太郎"
              required
              autoComplete="name"
              value={formValues.name}
              onChange={(e) => {
                const value = e.target.value;
                trackFormStartOnce(value);
                setFormValues((prev) => ({ ...prev, name: value }));
              }}
              className="h-12 border-gray-200 px-3 py-0 transition-colors focus:border-gray-400"
            />
            <input type="hidden" name="lastname" value={splitName.lastname} />
            <input type="hidden" name="firstname" value={splitName.firstname} />
            {nameError && <p className="text-xs text-red-500">{nameError}</p>}
          </div>
        <div className="space-y-2">
          <Label
            htmlFor="company"
            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
          >
            <RequiredBadge />
            会社名
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="株式会社Reminus"
            required
            autoComplete="organization"
            value={formValues.company}
            onChange={(e) => {
              const value = e.target.value;
              trackFormStartOnce(value);
              setFormValues((prev) => ({ ...prev, company: value }));
            }}
            className="h-12 px-3 py-0"
          />
          {companyError && (
            <p className="text-xs text-red-500">{companyError}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
          >
            <RequiredBadge />
            担当者メールアドレス
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="reminus@example.com"
            required
            autoComplete="email"
            value={formValues.email}
            onChange={(e) => {
              const value = e.target.value;
              trackFormStartOnce(value);
              setFormValues((prev) => ({ ...prev, email: value }));
            }}
            className="h-12 px-3 py-0"
          />
          {emailError && <p className="text-xs text-red-500">{emailError}</p>}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
          >
            <RequiredBadge />
            担当者電話番号
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="090-0000-0000"
            required
            autoComplete="tel"
            value={formValues.phone}
            onChange={(e) => {
              const value = e.target.value;
              trackFormStartOnce(value);
              setFormValues((prev) => ({ ...prev, phone: value }));
            }}
            className="h-12 px-3 py-0"
          />
          {phoneError && <p className="text-xs text-red-500">{phoneError}</p>}
        </div>
        {privacyNotice === "above-button" && <PrivacyNotice />}
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex justify-center">
          <PrimaryButton
            type="submit"
            disabled={pending}
            variant="filled"
            size="medium"
          >
            {pending ? "送信中..." : "資料をダウンロードする"}
          </PrimaryButton>
        </div>

        {privacyNotice === "below-button" && <PrivacyNotice />}

        {otherError && (
          <p className="text-center text-sm text-red-500">{otherError}</p>
        )}
      </div>
    </form>
  );
};

const PrivacyNotice = () => (
  <p className="text-left text-xs leading-5 text-gray-500">
    このフォームから送信いただくことで、当社の
    <a
      href="/privacy-policy"
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition-colors hover:text-gray-700"
    >
      プライバシーポリシー
    </a>
    に同意したものとみなします。
  </p>
);
