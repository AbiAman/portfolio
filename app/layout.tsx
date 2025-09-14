import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./NavBar/ResponsiveNav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amani Portfolio",
  description: "My portfolio to show my works",
  icons: {
    icon: "/favicon.ico", // ✅ correct
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
