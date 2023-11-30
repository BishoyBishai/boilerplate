import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const exo = Exo_2({ subsets: ["latin"], variable: "--font-exo" });

export const metadata: Metadata = {
  title: "Boilerplate Application",
  description:
    "It's about collecting all tools I used in react/next.js application in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(exo.className)}>{children}</body>
    </html>
  );
}
