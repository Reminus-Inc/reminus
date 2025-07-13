import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Reminus",
  description: "Reminus株式会社のプライバシーポリシー",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-16 pb-36">
        <div className="space-y-12">
          <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter">プライバシーポリシー</h1>
          </header>

          <Card className="border shadow-md">
            <CardContent className="p-8 sm:p-12 space-y-8">
              {/* 1. 個人情報の定義 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">1. 個人情報の定義</h2>
                <p className="text-gray-700 leading-relaxed">
                  本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、
                  メールアドレスその他の記述等により特定の個人を識別できるもの
                  （他の情報と容易に照合することで識別できるものを含む）をいいます。
                  また、Cookie、IPアドレス、端末識別子等のオンライン識別子も、他の情報と組み合わせることで個人を識別し得るものとして取り扱う場合があります。
                </p>
              </section>

              {/* 2. 個人情報の収集方法 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">2. 個人情報の収集方法</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、以下の方法により個人情報を収集することがあります。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>お問い合わせ・資料請求フォームへの入力</li>
                  <li>メールでのご連絡</li>
                  <li>名刺交換等による取得</li>
                  <li>契約書その他書面</li>
                  <li>ウェブサイト利用状況（Cookie・広告ID 等）</li>
                </ul>
              </section>

              {/* 3. 個人情報の利用目的 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">3. 個人情報の利用目的</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、取得した個人情報を以下の目的で利用します。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>当社サービスの提供・運営および関連業務</li>
                  <li>お問い合わせへの回答、サポート対応</li>
                  <li>契約の締結・履行、アフターサービスの提供</li>
                  <li>サービス内容の向上のための調査・分析</li>
                  <li>電話・メール・SNS 等による営業活動、ニュースレター・イベント案内</li>
                  <li>法令または行政機関の要請に基づく対応</li>
                </ul>
              </section>

              {/* 4. 個人情報の第三者提供・委託 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">4. 個人情報の第三者提供および委託</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社は、次の場合を除き、個人情報を第三者に提供しません。
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>ご本人の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人命・身体・財産の保護が必要で同意取得が困難な場合</li>
                  <li>公衆衛生の向上・児童健全育成の推進で同意取得が困難な場合</li>
                  <li>国・地方公共団体等の法定業務に協力する必要がある場合</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  また、MAツール・CRM・クラウド基盤等の利用に際し、外部業者へ個人情報取扱い業務を委託することがあります。
                </p>
              </section>

              {/* 5. 個人情報の開示・訂正・削除 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">5. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-700 leading-relaxed">
                  開示、訂正、削除、利用停止等をご希望の場合は、
                  <a
                    href="https://www.reminus.co.jp/contact"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    当社お問い合わせフォーム
                  </a>
                  よりお申し出ください。
                </p>
              </section>

              {/* 6. Cookie 等 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">6. クッキー（Cookie）および広告ID等について</h2>
                <p className="text-gray-700 leading-relaxed">
                  当社ウェブサイトでは、ユーザー体験向上・アクセス解析・広告配信のために Cookie や類似技術を使用します。
                  これにより取得した情報は、Google LLC、X Corp. 等の第三者サービスに提供される場合があります。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cookie の受け取り可否はブラウザ設定から変更できますが、一部機能がご利用いただけなくなる場合があります。
                </p>
              </section>

              {/* 7. 個人情報保護管理者 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">7. 個人情報保護管理者</h2>
                <p className="text-gray-700 leading-relaxed">
                  株式会社Reminus 個人情報保護管理者 太田 蓮
                </p>
              </section>

              {/* 8. プライバシーポリシーの変更 */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">8. プライバシーポリシーの変更</h2>
                <p className="text-gray-700 leading-relaxed">
                  本ポリシーは、法令の改正や当社方針の変更により改訂することがあります。
                  改訂後のポリシーは、本ウェブサイトに掲載した時点から適用されます。
                </p>
              </section>

              {/* 改訂日・社名 */}
              <section className="text-right mt-8">
                <p className="text-gray-600">
                  制定日: 2025年7月13日<br />
                  株式会社Reminus
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
