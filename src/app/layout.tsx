import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto CV Builder",
  description: "Create professional resumes in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
