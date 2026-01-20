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

type FormValues = {
  company: string;
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
};

type DocumentFormProps = {
  documentType: DocumentType;
  beforeThanks?: (formValues: FormValues) => void;
};

export const DownloadForm = ({
  documentType,
  beforeThanks,
}: DocumentFormProps) => {
  return (
    <HookDownloadForm documentType={documentType} beforeThanks={beforeThanks} />
  );
};

export const HookDownloadForm = ({
  documentType,
  beforeThanks,
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
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
  });

  const trackFormStartOnce = (value: string) => {
    if (!hasStartedForm && value.length > 0) {
      trackFormStart("download");
      setHasStartedForm(true);
    }
  };

  const handleFormAction = (formData: FormData) => {
    setTriedServerAction(true);

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
  const lastnameError = useMemo(
    () => state.errors?.find((error) => error.includes("姓")),
    [state.errors]
  );
  const firstnameError = useMemo(
    () => state.errors?.find((error) => error.includes("名")),
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
      !lastnameError &&
      !firstnameError &&
      !emailError &&
      !phoneError &&
      state.errors != null &&
      state.errors.length >= 1
    ) {
      return state.errors[0];
    }
  }, [state.errors, companyError, lastnameError, firstnameError, emailError, phoneError]);

  return (
    <form action={handleFormAction} className="w-full">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="company" className="text-sm text-gray-800">
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
          />
          {companyError && (
            <p className="text-xs text-red-500">{companyError}</p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-1">
            <Label htmlFor="lastname" className="text-sm text-gray-800">
              姓
            </Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="山田"
              required
              autoComplete="family-name"
              value={formValues.lastname}
              onChange={(e) => {
                const value = e.target.value;
                trackFormStartOnce(value);
                setFormValues((prev) => ({ ...prev, lastname: value }));
              }}
              className="border-gray-200 transition-colors focus:border-gray-400"
            />
            {lastnameError && <p className="text-xs text-red-500">{lastnameError}</p>}
          </div>
          <div className="flex-1 space-y-1">
            <Label htmlFor="firstname" className="text-sm text-gray-800">
              名
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="太郎"
              required
              autoComplete="given-name"
              value={formValues.firstname}
              onChange={(e) => {
                const value = e.target.value;
                trackFormStartOnce(value);
                setFormValues((prev) => ({ ...prev, firstname: value }));
              }}
              className="border-gray-200 transition-colors focus:border-gray-400"
            />
            {firstnameError && <p className="text-xs text-red-500">{firstnameError}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="email" className="text-sm text-gray-800">
            メールアドレス
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
          />
          {emailError && <p className="text-xs text-red-500">{emailError}</p>}
        </div>

        <div className="space-y-1">
          <Label htmlFor="phone" className="text-sm text-gray-800">
            電話番号
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="03-1234-5678"
            required
            autoComplete="tel"
            value={formValues.phone}
            onChange={(e) => {
              const value = e.target.value;
              trackFormStartOnce(value);
              setFormValues((prev) => ({ ...prev, phone: value }));
            }}
          />
          {phoneError && <p className="text-xs text-red-500">{phoneError}</p>}
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <PrimaryButton
          type="submit"
          disabled={pending}
          variant="filled"
          size="medium"
          fullWidth
        >
          {pending ? "送信中..." : "資料をダウンロードする"}
        </PrimaryButton>

        {otherError && (
          <p className="text-center text-sm text-red-500">{otherError}</p>
        )}

        <p className="text-center text-xs leading-5 text-gray-500 lg:text-left">
          資料請求いただくことで、当社の
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center underline transition-colors hover:text-gray-700"
          >
            プライバシーポリシー
          </a>
          に同意したものとみなします。
        </p>
      </div>
    </form>
  );
};
