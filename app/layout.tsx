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
  metadataBase: new URL("https://gofurov-academy.com"),
  title: "Gofurov Academy — Kelajak kasbini bugun boshlang",
  description: "Amaliyot, mentorlik va natijaga yo‘naltirilgan zamonaviy IT va dizayn kurslari.",
  openGraph: {
    title: "Gofurov Academy — Kelajak kasbini bugun boshlang",
    description: "Amaliy IT va dizayn kurslari, mentorlik va real natija.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gofurov Academy" }],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gofurov Academy",
    description: "Kelajak kasbini bugun boshlang.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
