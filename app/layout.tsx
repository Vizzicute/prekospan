import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import AuthProvider from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prekos Pan African Cuisine",
  description: "Get all kinds of african dish here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.className} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
