import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avery Chen | Product Designer & Frontend Engineer",
  description:
    "Modern portfolio showcasing product design, engineering, and strategy work with a premium, corporate aesthetic.",
  keywords: ["portfolio", "product designer", "frontend engineer", "ux", "ui"],
  openGraph: {
    title: "Avery Chen | Product Designer & Frontend Engineer",
    description:
      "Modern portfolio showcasing product design, engineering, and strategy work.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
