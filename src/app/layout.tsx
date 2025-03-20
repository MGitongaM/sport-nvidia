import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationSection from "@/components/NavigationSection";
import FooterSection from "@/components/FooterSection";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "sonner";
import { sanityFetch } from "@/sanity/lib/live";
import { OPENGRAPHIMAGE_QUERY } from "@/sanity/lib/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: OPENGRAPHIMAGE_QUERY,
  });
  const imageUrl = data?.[0].featuredOpenGraphImage?.asset?.url ?? "";
  return {
    title: "Nakuru Athletic Club",
    description:
      "Nakuru Athletic Club (N.A.C) stands as a symbol of tradition and a cornerstone for sports excellence, fostering talent, and creating a vibrant hub for sports enthusiasts",
    openGraph: {
      images: [
        {
          url: imageUrl,
          height: 800,
          width: 1200,
        },
      ],
    },
  };
}

// export const metadata: Metadata = {
//   title: "Nakuru Athletic Club",
//   description:
//     "Nakuru Athletic Club (N.A.C) stands as a symbol of tradition and a cornerstone for sports excellence, fostering talent, and creating a vibrant hub for sports enthusiasts",
//   openGraph: {
//     images: [
//       {
//         url: "",
//         height: 800,
//         width: 1200,
//       },
//     ],
//   },
// };

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
