import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "CIE | 강원대학교",
  description: "Create Intelligence Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />

        <main >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}