import Image from "next/image";

export function CompanyOverview() {
  return (
    <section className="w-full py-24 md:py-36 bg-gray-50">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Image
                src="/reminus/logo.svg"
                alt="Reminus"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start border-b border-gray-100 pb-6">
                  <dt className="text-sm md:text-base font-medium text-gray-900">会社名</dt>
                  <dd className="text-sm md:text-base text-gray-700">株式会社Reminus</dd>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start border-b border-gray-100 pb-6">
                  <dt className="text-sm md:text-base font-medium text-gray-900">設立（登記）</dt>
                  <dd className="text-sm md:text-base text-gray-700">2025年3月</dd>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start border-b border-gray-100 pb-6">
                  <dt className="text-sm md:text-base font-medium text-gray-900">所在地</dt>
                  <dd className="text-sm md:text-base text-gray-700">
                    〒150-0002<br />
                    東京都 渋谷区渋谷2-19-15 宮益坂ビルディング609
                  </dd>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start border-b border-gray-100 pb-6">
                  <dt className="text-sm md:text-base font-medium text-gray-900">法人番号</dt>
                  <dd className="text-sm md:text-base text-gray-700">6011001168225</dd>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start">
                  <dt className="text-sm md:text-base font-medium text-gray-900">代表者名</dt>
                  <dd className="text-sm md:text-base text-gray-700">太田　蓮</dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
