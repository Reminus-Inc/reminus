"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 pb-4 pt-16">
      <div className="container mx-auto space-y-16 px-6">
        <Table>
          <TableRow>
            <TableLabel>会社名</TableLabel>
            <TableValue>株式会社Reminus</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>設立 (登記)</TableLabel>
            <TableValue>2025年3月</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>所在地</TableLabel>
            <TableValue>
              〒150-0002
              <br />
              東京都 渋谷区渋谷2-19-15 宮益坂ビルディング609
            </TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>法人番号</TableLabel>
            <TableValue>6011001168225</TableValue>
          </TableRow>
          <TableRow>
            <TableLabel>代表者</TableLabel>
            <TableValue>太田&emsp;蓮</TableValue>
          </TableRow>
        </Table>

        <p className="text-center text-gray-600">
          <small>
            &copy; 2025 Reminus.（レミナス）&nbsp;
            <br className="sm:hidden" />
            All rights reserved.
          </small>
        </p>
      </div>
    </footer>
  );
};

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto table text-sm tracking-wider text-gray-600">
      {children}
    </div>
  );
};

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 py-3.5 sm:flex-row">{children}</div>
  );
};

const TableLabel = ({ children }: { children: React.ReactNode }) => {
  return <p className="w-[120] font-semibold">{children}</p>;
};

const TableValue = ({ children }: { children: React.ReactNode }) => {
  return <p>{children}</p>;
};
