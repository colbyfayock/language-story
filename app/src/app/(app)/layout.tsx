import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
    <body className={`${inter.variable} antialiased`}>
      <Toaster position="bottom-center" />
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  );
}
