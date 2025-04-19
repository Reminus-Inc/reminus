"use client";

import { startTransition, useActionState, useRef } from "react";
import { submitInquiry } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Clock3Icon, ClockIcon } from "lucide-react";

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
                連絡用メールアドレス
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
                お問い合わせ内容
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
            <p className="md:text-lg flex justify-center items-center md:justify-start text-muted-foreground">
            <ClockIcon
              size={18}
              className="flex-none fill-none stroke-current text-muted-foreground"
            />
            <span className="ml-1 ">30分で<strong>技術課題</strong>を特定します。</span>
            </p>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-neutral-800 transition-colors py-6 my-4 text-base"
              disabled={pending}
            >
              {pending ? "送信中..." : "30分無料相談を申し込む"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
