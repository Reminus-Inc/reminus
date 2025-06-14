"use client";

import type React from "react";

import { startTransition, useActionState, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon, Download, X } from "lucide-react";
import { requestDocument } from "@/app/actions";
import { useEffect } from "react";
import {
  trackCTAClick,
  trackFormStart,
  trackGenerateLead,
} from "@/lib/analytics";

export interface DownloadButtonProps {
  className?: string;
  variant?: "default" | "primary" | "outline" | "round";
  size?: "default" | "small" | "large";
  children?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function DownloadButton({
  className = "",
  variant = "default",
  size = "default",
  children,
  iconPosition = "right",
}: DownloadButtonProps) {
  const [state, formAction, pending] = useActionState(requestDocument, {
    status: "idle",
    message: "",
  });
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    name: "",
    company: "",
  });
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Reset form values on success
    if (state.status === "success") {
      setFormValues({
        email: "",
        phone: "",
        name: "",
        company: "",
      });
      setHasStartedForm(false);
      
      // Lead完了イベント送信
      trackGenerateLead("download");
    }
  }, [state]);

  // Generate button classes based on variant and size
  const getButtonClasses = () => {
    let buttonClasses = "text-white ";

    // Variant styles
    switch (variant) {
      case "primary":
        buttonClasses += "bg-emerald-600 hover:bg-emerald-700 ";
        break;
      case "outline":
        buttonClasses +=
          "bg-transparent border border-black text-black hover:bg-gray-100 ";
        break;
      case "round":
        buttonClasses += "bg-black hover:bg-gray-800 rounded-full ";
        break;
      default:
        buttonClasses += "bg-black hover:bg-gray-800 ";
    }

    // Size styles
    switch (size) {
      case "small":
        buttonClasses += "h-10 text-sm ";
        break;
      case "large":
        buttonClasses += "h-16 text-base ";
        break;
      default:
        buttonClasses += "h-16 text-base ";
    }

    // Width for non-round variants
    if (variant !== "round") {
      buttonClasses += "sm:w-48 ";
    }

    return buttonClasses + className;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={getButtonClasses()}
          disabled={pending}
          onClick={() => {
            trackCTAClick("download");
          }}
        >
          <span className="flex items-center gap-3">
            {iconPosition === "left" && !pending && (
              <Download className="h-4 w-4" />
            )}
            {pending ? "送信中..." : children || "資料ダウンロード"}
            {iconPosition === "right" && !pending && (
              <Download className="h-4 w-4" />
            )}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] p-0 border-0 shadow-xl max-w-[95vw] max-h-[90svh] sm:max-h-[80svh] overflow-y-auto">
        <DialogTitle className="sr-only">資料ダウンロードフォーム</DialogTitle>
        <div className="relative bg-white rounded-lg overflow-visible">
          <DialogClose className="fixed right-4 top-4 z-50 rounded-sm opacity-70 bg-white/80 p-1 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {state.status !== "success" ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-emerald-50 p-6 md:p-8 space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    資料ダウンロード
                  </h2>
                  <p className="text-gray-700 text-sm">
                    非エンジニア創業者向け{" "}
                    <span className="text-emerald-600 font-medium">
                      CTOパートナー
                    </span>
                    <br />
                    サービス紹介資料を30秒で無料ダウンロード
                  </p>
                </div>

                <div className="space-y-3 md:space-y-6 mt-4 md:mt-6">
                  {/* Desktop version - show all 3 items */}
                  <div className="hidden md:flex items-start space-x-4">
                    <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        スタートアップの課題と解決策
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        CTOパートナーが非エンジニア創業者の課題をどのように解決するか
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:items-start md:space-x-4">
                    <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                      <svg
                        className="h-4 md:h-5 w-4 md:w-5 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div className="md:flex-1">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        プラン比較と料金体系
                      </h4>
                      <p className="hidden md:block text-sm text-gray-600 mt-1">
                        各プランの具体的なサービス内容と料金体系をご確認いただけます
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 md:items-start md:space-x-4">
                    <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                      <svg
                        className="h-4 md:h-5 w-4 md:w-5 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div className="md:flex-1">
                      <h4 className="font-medium text-gray-900 text-sm md:text-base">
                        成功事例の紹介
                      </h4>
                      <p className="hidden md:block text-sm text-gray-600 mt-1">
                        実際のクライアントの成功事例と具体的な成果をご紹介
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：フォーム */}
              <div className="p-6 md:p-8">
                <form
                  ref={formRef}
                  action={(formData) => {
                    // Save current form values
                    const formDataObject = Object.fromEntries(
                      formData.entries(),
                    );
                    setFormValues({
                      email: (formDataObject.email as string) || "",
                      phone: (formDataObject.phone as string) || "",
                      name: (formDataObject.name as string) || "",
                      company: (formDataObject.company as string) || "",
                    });

                    startTransition(() => {
                      formAction(formData);
                    });
                  }}
                  className="space-y-3 sm:space-y-5"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-900 font-medium text-sm"
                    >
                      メールアドレス <span className="text-emerald-600">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                      value={formValues.email}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      onFocus={() => {
                        if (!hasStartedForm) {
                          trackFormStart("download");
                          setHasStartedForm(true);
                        }
                      }}
                      className="border-gray-200 focus:border-emerald-600 focus:ring-emerald-600 h-10 sm:h-12 text-base"
                    />
                    {state.errors?.find((error) =>
                      error.includes("メールアドレス"),
                    ) && (
                      <p className="text-red-500 text-xs mt-1">
                        {state.errors?.find((error) =>
                          error.includes("メールアドレス"),
                        )}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-900 font-medium text-sm"
                    >
                      電話番号 <span className="text-emerald-600">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="03-1234-5678"
                      required
                      value={formValues.phone}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-emerald-600 focus:ring-emerald-600 h-10 sm:h-12 text-base"
                    />
                    {state.errors?.find((error) =>
                      error.includes("電話番号"),
                    ) && (
                      <p className="text-red-500 text-xs mt-1">
                        {state.errors?.find((error) =>
                          error.includes("電話番号"),
                        )}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-gray-900 font-medium text-sm"
                    >
                      お名前 <span className="text-emerald-600">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="山田 太郎"
                      required
                      value={formValues.name}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-emerald-600 focus:ring-emerald-600 h-10 sm:h-12 text-base"
                    />
                    {state.errors?.find((error) =>
                      error.includes("お名前"),
                    ) && (
                      <p className="text-red-500 text-xs mt-1">
                        {state.errors?.find((error) =>
                          error.includes("お名前"),
                        )}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-gray-900 font-medium text-sm"
                    >
                      会社名 <span className="text-emerald-600">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="株式会社Reminus"
                      required
                      value={formValues.company}
                      onChange={(e) =>
                        setFormValues((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                      className="border-gray-200 focus:border-emerald-600 focus:ring-emerald-600 h-10 sm:h-12 text-base"
                    />
                    {state.errors?.find((error) =>
                      error.includes("会社名"),
                    ) && (
                      <p className="text-red-500 text-xs mt-1">
                        {state.errors?.find((error) =>
                          error.includes("会社名"),
                        )}
                      </p>
                    )}
                  </div>
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium h-10 sm:h-12 text-base"
                      disabled={pending}
                    >
                      {pending ? "送信中..." : "資料をダウンロード"}
                    </Button>
                  </div>
                  {state.status === "error" && !state.errors?.length && (
                    <p className="text-red-500 text-sm text-center">
                      {state.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 text-left pt-2">
                    ご入力いただいた情報は、関連する情報提供のみに使用いたします。
                  </p>
                </form>
                {/* Extra padding for mobile keyboard */}
                <div className="h-20 sm:h-0" />
              </div>
            </div>
          ) : (
            <div className="py-12 md:py-16 px-6 md:px-8 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">送信完了</h3>
              <p className="text-center text-gray-600">
                {state.message && (
                  <>
                    {state.message}
                    <br />
                  </>
                )}
                資料ダウンロードの準備ができました。
              </p>
              {state.downloadUrl && (
                <Button
                  className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={pending}
                  onClick={() => {
                    // 別タブでPDFを開く（元のページは維持）
                    window.open(state.downloadUrl!, "_blank", "noopener,noreferrer");
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  資料を開く
                </Button>
              )}
              {state.status === "success" && (
                <div id="immedio-config" data-pageType='thanks' />
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
