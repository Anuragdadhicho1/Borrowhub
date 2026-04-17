import type { Metadata } from "next";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "BorrowHub | Own Less. Live More. Borrow Smart.",
  description:
    "Rent everyday items from trusted neighbors. Save money, reduce waste, and earn by sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[color:var(--color-background)] font-sans text-[color:var(--color-text-dark)]">
        <SiteNavbar />
        <div className="pb-20 md:pb-0">{children}</div>
        <SiteFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}
