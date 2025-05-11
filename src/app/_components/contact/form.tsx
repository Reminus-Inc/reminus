"use client";

import { startTransition, useActionState, useRef, useState } from "react";
import { submitInquiry, InquiryActionState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon } from "lucide-react";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, {
    status: "idle",
    message: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "お問い合わせ完了",
        description: state.message,
      });
      ref.current?.reset();
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
            // Google Analyticsイベント送信
            window.gtag?.("event", "form_submit", {
              event_category: "conversion",
              event_label: "contact_form",
            });
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
                className="min-h-[150px] border-gray-200 focus:border-gray-400 transition-colors resize-none"
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
                <ClockIcon size={18} className="mr-2 h-4 w-4" />
                {pending ? "送信中..." : "30分無料相談を申し込む"}
              </Button>

              <div className="flex items-center justify-center my-2">
                <div className="h-px bg-gray-200 flex-grow"></div>
                <span className="px-4 text-gray-500 text-sm font-medium">
                  または
                </span>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>

              <a
                href="https://app.spirinc.com/t/ehgkmSL6AUg30aq0DgLj8/as/bVHSfFLfKjuZwsK17EPxq/confirm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
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
                  Spirで直接日程調整する
                </Button>
              </a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
