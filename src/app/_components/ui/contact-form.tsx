"use client";

import { submitInquiry } from "@/app/actions";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { Chip } from "@/components/ui/chip";
import { trackFormStart, trackGenerateLead } from "@/lib/analytics";
import { Smile } from "lucide-react";
import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { PrimaryButton } from "./primary-button";

export function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <Card>
      <CardContent className="p-7">
        <form ref={ref} onSubmit={handleSubmit} className="space-y-7">
          <div className="space-y-5">
            <p className="flex items-center gap-1 font-semibold tracking-wider text-gray-800">
              どのような内容でもお気軽にご相談ください
              <Smile className="text-emerald-500" />
            </p>

            <div className="space-y-2">
              <Tabs defaultValue="company">
                <div className="flex items-center gap-2">
                  <TabsList>
                    <TabsTrigger value="company">会社名</TabsTrigger>
                    <TabsTrigger value="individual">個人事業主</TabsTrigger>
                  </TabsList>
                  <Chip color="red">必須</Chip>
                </div>
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
                  />
                </TabsContent>
                <TabsContent value="individual">
                  <Input
                    name="company"
                    placeholder="屋号等"
                    defaultValue="個人"
                  />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-2">
              <Tabs defaultValue="name">
                <div className="flex items-center gap-2">
                  <TabsList>
                    <TabsTrigger value="name">お名前</TabsTrigger>
                    <TabsTrigger value="sns">SNSのID</TabsTrigger>
                  </TabsList>
                  <Chip color="red">必須</Chip>
                </div>
                <TabsContent value="name">
                  <Input
                    name="name"
                    placeholder="山田太郎"
                    required
                    className="border-gray-200 transition-colors focus:border-gray-400"
                  />
                </TabsContent>
                <TabsContent value="sns">
                  <Input
                    name="name"
                    placeholder="X: @reminus_pr"
                    required
                    className="border-gray-200 transition-colors focus:border-gray-400"
                  />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="email" className="text-sm">
                  メールアドレス
                </Label>
                <Chip color="red">必須</Chip>
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="reminus@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="content" className="text-sm">
                  お問い合わせ内容
                </Label>
                <Chip>任意</Chip>
              </div>
              <Textarea
                id="content"
                name="content"
                placeholder="「〇〇に興味を持った」 「〇〇で見た」など、自由にご記入ください。"
              />
            </div>
          </div>

          <div className="space-y-4">
            <PrimaryButton type="submit" disabled={pending}>
              {pending ? "送信中..." : "送信する"}
            </PrimaryButton>

            <p className="text-center text-xs text-gray-500">
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
      </CardContent>
    </Card>
  );
}
