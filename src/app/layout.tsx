import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { Leftbar } from "@/components/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobcom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="main-wrapper flex justify-center items-center ">
            <div className="main-container flex max-lg:w-[100vw] w-[90vw]">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
