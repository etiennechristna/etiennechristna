import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { getTranslations } from "next-intl/server";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Christna Etienne";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  const photoBuffer = await readFile(
    join(process.cwd(), "public/assets/christna-photo.png")
  );
  const photoSrc = `data:image/png;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0b1220",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: 24,
            overflow: "hidden",
            display: "flex",
            flexShrink: 0,
            border: "4px solid #4fd1d9",
          }}
        >
          <img
            src={photoSrc}
            width={300}
            height={300}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#4fd1d9",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Christna.
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            Christna Etienne
          </div>
          <div
            style={{
              display: "flex",
              color: "#a3adbe",
              fontSize: 30,
              fontWeight: 500,
              marginTop: 16,
            }}
          >
            {t("titleLine2")}
          </div>
          <div
            style={{
              display: "flex",
              color: "#4fd1d9",
              fontSize: 22,
              fontWeight: 600,
              marginTop: 32,
            }}
          >
            etiennechristna.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
