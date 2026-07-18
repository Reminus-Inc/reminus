// 資料内容リスト等で使う塗りつぶしの丸チェックアイコン。
// 色は className の text-* で指定する (currentColor)。
export const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m5 8.5-5.3 5.3c-.1.1-.4.2-.7.2s-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3 4.5-4.5c.4-.4 1-.4 1.4 0s.5 1 .1 1.4" />
  </svg>
);
