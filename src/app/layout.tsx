import Providers from "@/providers/main-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "900", "500", "600", "700", "200"],
} as const);

export const metadata: Metadata = {
  title: "Ali Osman Delişmen - Software Developer",
  description:
    "Ali Osman Delişmen has been working on software development in Istanbul since 2019. While developing his frontend skills with open source projects, he continues to increase his expertise in DevOps in his free time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
      {process.env.NODE_ENV === "production" && (
        <Script
          defer
          src="https://us.umami.is/script.js"
          data-website-id="03e7ed8c-698f-4b74-b4cb-e4f7c61921f5"
        ></Script>
      )}
    </html>
  );
}
