"use client";

import { submitInquiry, type InquiryActionState } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { Chip } from "@/components/ui/chip";
import { trackFormStart, trackGenerateLead } from "@/lib/analytics";
import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { PrimaryButton, PrimaryButtonProps } from "./primary-button";
import { getIsDevMode } from "@/lib/get-is-dev-mode";
import { getHubSpotContext } from "@/lib/hubspot-tracking";

type ContactFormProps = {
  showContent?: boolean;
  showChip?: boolean;
  buttonProps?: PrimaryButtonProps;
};
export const ContactForm = ({
  showContent = true,
  showChip = true,
  buttonProps,
}: ContactFormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  const devMode = getIsDevMode();
  const getSubmitInquiry = (prev: InquiryActionState, formData: FormData) =>
    submitInquiry(prev, formData, devMode);

  const [state, formAction, pending] = useActionState(getSubmitInquiry, {
    status: "idle",
    message: "",
  });
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "お問い合わせ完了",
        description: state.message,
      });

      // フォームデータを取得してコンバージョントラッキング
      const formData = new FormData(ref.current!);
      const conversionData = {
        email: formData.get("email") as string,
        firstname: formData.get("firstname") as string,
        lastname: formData.get("lastname") as string,
        company: formData.get("company") as string,
      };

      // Lead完了イベント送信（コンバージョンデータ付き）
      trackGenerateLead("contact", conversionData);

      ref.current?.reset();
      setHasStartedForm(false);
    } else if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "エラー",
        description: state.errors?.[0] || state.message,
      });
    }
  }, [state, toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // HubSpotトラッキング情報を追加
    const hubspotContext = getHubSpotContext();
    formData.append('hutk', hubspotContext.hutk);
    formData.append('pageUri', hubspotContext.pageUri);
    formData.append('pageName', hubspotContext.pageName);

    startTransition(() => {
      formAction(formData);
    });
  };

  const trackFormStartOnce = (value: string) => {
    if (!hasStartedForm && value.length > 0) {
      trackFormStart("contact");
      setHasStartedForm(true);
    }
  };

  return (
    <form id="contact-form" ref={ref} onSubmit={handleSubmit} className="w-full space-y-7">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="company" className="text-sm text-gray-800">
              会社名
            </Label>
            {showChip && <Chip color="red">必須</Chip>}
          </div>
          <Input
            id="company"
            name="company"
            placeholder="株式会社Reminus"
            required
            autoComplete="organization"
            onChange={(e) => {
              trackFormStartOnce(e.target.value);
            }}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="lastname" className="text-sm text-gray-800">
                姓
              </Label>
              {showChip && <Chip color="red">必須</Chip>}
            </div>
            <Input
              id="lastname"
              name="lastname"
              placeholder="山田"
              required
              autoComplete="family-name"
              className="border-gray-200 transition-colors focus:border-gray-400"
              onChange={(e) => {
                trackFormStartOnce(e.target.value);
              }}
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="firstname" className="text-sm text-gray-800">
                名
              </Label>
              {showChip && <Chip color="red">必須</Chip>}
            </div>
            <Input
              id="firstname"
              name="firstname"
              placeholder="太郎"
              required
              autoComplete="given-name"
              className="border-gray-200 transition-colors focus:border-gray-400"
              onChange={(e) => {
                trackFormStartOnce(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="email" className="text-sm text-gray-800">
              メールアドレス
            </Label>
            {showChip && <Chip color="red">必須</Chip>}
          </div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="reminus@example.com"
            required
            autoComplete="email"
            onChange={(e) => {
              trackFormStartOnce(e.target.value);
            }}
          />
        </div>


        {showContent && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="content" className="text-sm text-gray-800">
                お問い合わせ内容
              </Label>
              {showChip && <Chip>任意</Chip>}
            </div>
            <Textarea
              id="content"
              name="content"
              placeholder="ご自由にご記入ください。"
              onChange={(e) => {
                trackFormStartOnce(e.target.value);
              }}
            />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <PrimaryButton
          type="submit"
          disabled={pending}
          variant="filled"
          size="medium"
          fullWidth
          {...buttonProps}
        >
          {pending ? "送信中..." : "送信する"}
        </PrimaryButton>

        <p className="text-center text-xs leading-5 text-gray-500">
          お問い合わせいただくことで、当社の
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
