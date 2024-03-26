import {  Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400", "500", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RICK",
  description: "-The memecoin killer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
