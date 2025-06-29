import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactToastProvider from "./providers/react-toast-provider";

// next fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// next fonts
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//meta data
export const metadata: Metadata = {
  title: "Shopora",
  description: "Shopora",
  generator: "Next.js",
  creator: "EUL3",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactToastProvider>
          {children}
        </ReactToastProvider>
      </body>
    </html>
  );
}
