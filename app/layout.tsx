import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WEB 203 | Öğrenme alanı",
    template: "%s | WEB 203",
  },
  description: "Web geliştirme derslerini keşfet ve uygulayarak öğren.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
