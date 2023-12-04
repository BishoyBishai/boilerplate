import type { Metadata } from "next";
import { Exo_2, Handlee } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

/**
 * Adding google fonts and give each variable name to attach it into tailwind config
 *   fontFamily: {
 *      [font name as a tailwind class]: ["var(--font_Variable_name)"],
 *    }
 */
const exo = Exo_2({ variable: "--exo_2", subsets: ["latin"] });

const handlee = Handlee({
  subsets: ["latin"],
  variable: "--handlee",
  weight: "400",
});

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
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          exo.variable, // attached the google fonts to all application
          handlee.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
