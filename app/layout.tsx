import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import ThemeProvider from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={`${inter.className} antialiased container relative h-full flex flex-col justify-between py-8`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainNav />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
