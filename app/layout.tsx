import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClassLedger - A Simple Academic System for Teacher-Led Coaching Institutes",
  description: "Built for offline classes. Ready for hybrid growth. Run your institute professionally without losing the personal touch that makes your teaching effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

