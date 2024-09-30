import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const drukFamily = localFont({
  src: "./fonts/DrukFamily-Bold.woff",
  variable: "--font-druk-family",
  weight: "100 900",
})
const ttNormsPro = localFont({
  src: "./fonts/TTNormsPro-Medium.woff",
  variable: "--tt-norms-pro",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "TVOE",
  description: "Test web app with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${drukFamily.variable} ${ttNormsPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
