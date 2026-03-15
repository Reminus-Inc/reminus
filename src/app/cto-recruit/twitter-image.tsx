import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "CTO採用支援 | 株式会社Reminus";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f8fffe 0%, #ecfdf5 30%, #d1fae5 70%, #a7f3d0 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景の装飾パターン */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.06)",
            display: "flex",
          }}
        />

        {/* メインコンテンツ */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
          }}
        >
          {/* ラベル */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16, 185, 129, 0.12)",
              padding: "8px 24px",
              borderRadius: "100px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#059669",
              letterSpacing: "0.05em",
            }}
          >
            累計6社以上のCTO代行実績から生まれた採用支援
          </div>

          {/* メインキャッチ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                color: "#1f2937",
                letterSpacing: "-0.01em",
                display: "flex",
              }}
            >
              CTO採用のすべてを、
            </div>
            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                display: "flex",
              }}
            >
              <span style={{ color: "#10b981" }}>CTOの知見</span>
              <span style={{ color: "#1f2937" }}>で伴走。</span>
            </div>
          </div>

          {/* 4フェーズバー */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            {["母集団形成", "面談", "面接", "オファー"].map(
              (phase, index) => (
                <div
                  key={phase}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 28px",
                      borderRadius: "8px",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "white",
                      background:
                        index === 0
                          ? "#3b82f6"
                          : index === 1
                            ? "#60a5fa"
                            : index === 2
                              ? "#93c5fd"
                              : "#bfdbfe",
                    }}
                  >
                    {phase}
                  </div>
                  {index < 3 && (
                    <div
                      style={{
                        fontSize: "24px",
                        color: "#9ca3af",
                        display: "flex",
                      }}
                    >
                      →
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* サブコピー */}
          <div
            style={{
              fontSize: "18px",
              color: "#6b7280",
              marginTop: "12px",
              display: "flex",
            }}
          >
            媒体選定からスカウト・面接設計・オファーまで、一気通貫で支援します。
          </div>
        </div>

        {/* ブランドバー（下部） */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "56px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 48px",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 800,
              color: "#1f2937",
              letterSpacing: "0.03em",
              display: "flex",
            }}
          >
            Reminus
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#9ca3af",
              display: "flex",
            }}
          >
            www.reminus.co.jp/cto-recruit
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
