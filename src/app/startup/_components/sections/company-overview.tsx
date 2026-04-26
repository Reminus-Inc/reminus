export const CompanyOverview = () => {
  return (
    <div className="bg-gray-50 pb-8 pt-24" data-nosnippet>
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <h2 className="text-center text-xl font-bold tracking-widest text-gray-800 md:text-2xl">
          会社概要
        </h2>

        <div className="mx-auto mt-10 max-w-[600px]">
          <Row label="社名">株式会社Reminus</Row>
          <Row label="設立 (登記)">2025年3月</Row>
          <Row label="所在地">
            〒150-0002
            <br />
            東京都 渋谷区渋谷2-19-15 宮益坂ビルディング609
          </Row>
          <Row label="法人番号">6011001168225</Row>
          <Row label="代表者" isLast>
            太田&emsp;蓮
          </Row>
        </div>
      </div>
    </div>
  );
};

const Row = ({
  label,
  children,
  isLast = false,
}: {
  label: string;
  children: React.ReactNode;
  isLast?: boolean;
}) => {
  return (
    <div
      className={`flex flex-row text-xs tracking-wider sm:text-sm ${!isLast ? "border-b border-gray-200/70" : ""}`}
    >
      <div className="relative w-[108px] p-5 font-semibold text-gray-800 sm:w-[120px]">
        {label}
        <div className="absolute bottom-5 right-0 top-5 w-px bg-gray-200/70" />
      </div>
      <div className="w-full flex-1 p-5 text-gray-700">{children}</div>
    </div>
  );
};
