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
  const socialImage = `${protocol}://${host}/og-jealin.png`;

  return {
    title: "Jealin Zhao — AI 产品经理",
    description: "Jealin Zhao 的 AI 产品作品集：RAG、Multi-Agent、Tool Calling 与可验证的 AI 产品系统。",
    openGraph: {
      title: "Jealin Zhao — AI 产品经理",
      description: "让 AI 不只会回答，还会完成任务。",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Jealin Zhao AI Product Manager" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jealin Zhao — AI 产品经理",
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
