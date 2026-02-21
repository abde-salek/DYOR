import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DYOR — Real Estate Services",
  description: "Premium real estate services: buy, sell, rent, manage, and invest with confidence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
