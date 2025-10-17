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

type FormValues = {
  company: string;
  name: string;
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

  useEffect(() => {
    if (state.status === "success" && state.redirect) {
      beforeThanks?.(formValues);
      router.push(state.redirect);
    }
  }, [state.status, state.redirect, router, beforeThanks, formValues]);

  const companyError = useMemo(
    () => state.errors?.find((error) => error.includes("会社名")),
    [state.errors]
  );
  const nameError = useMemo(
    () => state.errors?.find((error) => error.includes("お名前")),
    [state.errors]
  );
  const emailError = useMemo(
    () => state.errors?.find((error) => error.includes("メールアドレス")),
    [state.errors]
  );
  const phoneError = useMemo(
    () => state.errors?.find((error) => error.includes("電話番号")),
    [state.errors]
  );
  const otherError: string | undefined = useMemo(() => {
    if (
      !companyError &&
      !nameError &&
      !emailError &&
      !phoneError &&
      state.errors != null &&
      state.errors.length >= 1
    ) {
      return state.errors[0];
    }
  }, [state.errors, companyError, nameError, emailError, phoneError]);

  return (
    <form action={formAction} className="w-full">
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

        <div className="space-y-1">
          <Label htmlFor="name" className="text-sm text-gray-800">
            お名前
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="山田太郎"
            required
            value={formValues.name}
            onChange={(e) => {
              const value = e.target.value;
              trackFormStartOnce(value);
              setFormValues((prev) => ({ ...prev, name: value }));
            }}
            className="border-gray-200 transition-colors focus:border-gray-400"
          />
          {nameError && <p className="text-xs text-red-500">{nameError}</p>}
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

      <div className="mt-10 space-y-3">
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
