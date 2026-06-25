import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Истоки успеха — поддержка и профориентация для школьников",
    template: "%s · Истоки успеха",
  },
  description:
    "Онлайн-платформа психологической поддержки и профориентации для школьников 9–11 классов: истории успеха, помощь специалистов, сообщества и мероприятия.",
  keywords: [
    "школьники",
    "психологическая поддержка",
    "профориентация",
    "истории успеха",
    "ЕГЭ",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="flex min-h-dvh flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
