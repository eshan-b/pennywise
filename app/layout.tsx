// Globals
import "./globals.css";

// Providers
import { UIProvider } from "@/providers/ui-provider";

// Components
import NavbarComponent from "@/components/navbar";

// Font
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pennywise",
  description: "Join the circus of riches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UIProvider>
        <body className={montserrat.className}>
          <NavbarComponent />
          {children}
        </body>
      </UIProvider>
    </html>
  );
}
