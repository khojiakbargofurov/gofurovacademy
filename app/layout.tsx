import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gofurovacademy.vercel.app"),
  title: {
    default: "Gofurov Academy — Kelajak kasbini bugun boshlang",
    template: "%s | Gofurov Academy",
  },
  description: "Amaliyot, mentorlik va natijaga yo‘naltirilgan zamonaviy IT va dizayn kurslari.",
  keywords: ["IT kurslari", "Frontend kursi", "Python kursi", "Grafik dizayn", "Gofurov Academy"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Gofurov Academy",
              url: "https://gofurovacademy.vercel.app",
              logo: "https://gofurovacademy.vercel.app/favicon.svg",
              description: "Amaliy IT va dizayn kurslari, mentorlik va real loyihalar.",
              areaServed: "UZ",
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
