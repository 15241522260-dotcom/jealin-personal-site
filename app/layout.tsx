import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/hero-meadow-watercolor.png`;

  return {
    title: "Jealin 赵佳琳 — AI 产品经理",
    description: "Jealin 赵佳琳的水粉花野 AI 产品作品集：从用户问题、产品形态和信息架构，到 RAG、Agent 与安全交付。",
    openGraph: {
      title: "Jealin 赵佳琳 — AI 产品经理",
      description: "让 AI 不只会回答，还会完成任务。",
      type: "website",
      images: [{ url: socialImage, width: 1792, height: 1024, alt: "Jealin 赵佳琳 AI Product Manager" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jealin 赵佳琳 — AI 产品经理",
      description: "让 AI 不只会回答，还会完成任务。",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
