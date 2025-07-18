"use client";

import { startTransition, useActionState, useRef, useState } from "react";
import { submitInquiry } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import {
  trackCTAClick,
  trackFormStart,
  trackGenerateLead,
  trackSpirPageView,
} from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, {
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
        name: formData.get("name") as string,
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

  const ref = useRef<HTMLFormElement>(null);

  return (
    <Card className="border shadow-md">
      <CardContent className="p-6 sm:p-8">
        <form
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            startTransition(() => {
              formAction(formData);
            });
          }}
          className="space-y-8 md:space-y-12"
        >
          <div className="space-y-6 md:space-y-10">
            <Tabs defaultValue="company" className="w-full">
              <TabsList className="mb-2 bg-gray-100/80">
                <TabsTrigger
                  value="company"
                  className="data-[state=active]:bg-white"
                >
                  会社名
                </TabsTrigger>
                <TabsTrigger
                  value="individual"
                  className="data-[state=active]:bg-white"
                >
                  個人事業主
                </TabsTrigger>
              </TabsList>
              <TabsContent value="company">
                <Input
                  name="company"
                  placeholder="株式会社Reminus"
                  required
                  onFocus={() => {
                    if (!hasStartedForm) {
                      trackFormStart("contact");
                      setHasStartedForm(true);
                    }
                  }}
                  className="border-gray-200 focus:border-gray-400 transition-colors"
                />
              </TabsContent>
              <TabsContent value="individual">
                <Input
                  name="company"
                  placeholder="屋号等"
                  defaultValue="個人"
                  className="border-gray-200 focus:border-gray-400 transition-colors"
                />
              </TabsContent>
            </Tabs>

            <Tabs defaultValue="name" className="w-full">
              <TabsList className="mb-2 bg-gray-100/80">
                <TabsTrigger
                  value="name"
                  className="data-[state=active]:bg-white"
                >
                  お名前
                </TabsTrigger>
                <TabsTrigger
                  value="sns"
                  className="data-[state=active]:bg-white"
                >
                  SNSのID
                </TabsTrigger>
              </TabsList>
              <TabsContent value="name">
                <Input
                  name="name"
                  placeholder="山田太郎"
                  required
                  className="border-gray-200 focus:border-gray-400 transition-colors"
                />
              </TabsContent>
              <TabsContent value="sns">
                <Input
                  name="name"
                  placeholder="X: @reminus_pr"
                  required
                  className="border-gray-200 focus:border-gray-400 transition-colors"
                />
              </TabsContent>
            </Tabs>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                メールアドレス
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="reminus@example.com"
                required
                className="border-gray-200 focus:border-gray-400 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content" className="text-sm font-medium">
                お問い合わせ内容（任意）
              </Label>
              <Textarea
                id="content"
                name="content"
                placeholder="「〇〇に興味を持った」 「〇〇で見た」など、自由にご記入ください。"
                required
                className="min-h-[60px] border-gray-200 focus:border-gray-400 transition-colors resize-none"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 my-4">
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-neutral-800 transition-colors py-6 text-base"
                disabled={pending}
              >
                {pending ? "送信中..." : "送信する"}
              </Button>

              <div className="flex items-center justify-center my-2">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <span className="px-4 text-gray-500 text-sm font-medium">
                  または
                </span>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>

              <a
                href="https://meetings.immedio.io/date_select?uk=8ze2jVpsiNsxvR2jIEnM#calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => {
                  trackCTAClick("spir");
                  trackSpirPageView();
                }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50 transition-colors py-6 text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  直接日程調整する
                </Button>
              </a>
            </div>

            <p className="text-xs text-gray-500 text-center">
              お問い合わせいただくことで、当社の
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700 transition-colors"
              >
                プライバシーポリシー
              </a>
              に同意したものとみなします。
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
