import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jealin Zhao — Personal Field Notes",
  description: "Jealin Zhao 的个人工作档案：正在探索的方向、完成的作品与持续更新的思考。",
  openGraph: {
    title: "Jealin Zhao — Personal Field Notes",
    description: "把零散的想法，做成可以被使用的东西。",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jealin Zhao — Personal Field Notes",
    description: "把零散的想法，做成可以被使用的东西。",
  },
};

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
