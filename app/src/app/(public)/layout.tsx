import { Inter } from "next/font/google";

import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={`${inter.variable} grid min-h-screen grid-rows-[1fr_auto] antialiased`}
    >
      {children}
      <Footer />
      <script
        defer
        data-domain="languagestory.app"
        src="https://plausible.io/js/script.js"
      />
    </body>
  );
}
