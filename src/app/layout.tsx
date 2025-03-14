import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationSection from "@/components/NavigationSection";
import FooterSection from "@/components/FooterSection";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Golf Nvidia",
  description:
    "From scenic fairways to challenging greens, discover our premier golf courses designed for every level of golfer. Play where champions train. Golf Nvidia Has you covered",
  openGraph: {
    images: [
      {
        url: "",
        height: 800,
        width: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationSection />
        {children}
        <Toaster />
        <FooterSection />
      </body>
    </html>
  );
}
