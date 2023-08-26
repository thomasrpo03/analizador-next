import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

const font = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analizador Léxico",
  description: "Analizador Léxico - Compilador",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
