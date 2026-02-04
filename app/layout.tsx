import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navneet Sharma | Data & Cloud Engineer",
  description:
    "Data and cloud engineer specializing in scalable data platforms, AWS modernization, and pipeline automation.",
  keywords: [
    "portfolio",
    "data engineer",
    "cloud engineer",
    "AWS",
    "ETL",
    "DBT"
  ],
  openGraph: {
    title: "Navneet Sharma | Data & Cloud Engineer",
    description:
      "Data and cloud engineer specializing in scalable data platforms, AWS modernization, and pipeline automation.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
