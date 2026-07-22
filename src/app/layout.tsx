import type { Metadata } from "next";
import { Inter, Archivo, Archivo_Black } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zayd Kassimi — Software Engineer",
  description:
    "Software engineer and full-stack developer building modern, scalable web experiences.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "portfolio",
    "développeur web",
    "full-stack",
    "Next.js",
    "React",
    "Zayd Kassimi",
  ],
  authors: [{ name: "Zayd Kassimi" }],
  openGraph: {
    title: "Zayd Kassimi — Software Engineer",
    description:
      "Software engineer and full-stack developer building modern, scalable web experiences.",
    url: "https://zaydkassimi.me",
    siteName: "Zayd Kassimi",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zayd Kassimi — Software Engineer",
    description:
      "Software engineer and full-stack developer building modern, scalable web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${archivo.variable} ${archivoBlack.variable} h-full`}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased grain-bg">
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
