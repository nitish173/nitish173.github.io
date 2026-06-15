import { ImageResponse } from "next/og";

// Browser-tab favicon. Kept small + bold so the "H" stays legible at 16px.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background:
            "linear-gradient(135deg, #5c33cc 0%, #ca2f8c 55%, #ea4884 100%)",
          // subtle top-left highlight for a touch of depth
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.35)",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "white",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 23,
            lineHeight: 1,
            letterSpacing: -1,
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size }
  );
}
