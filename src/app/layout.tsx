import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";

import Nav from "./components/nav"; // Adjust path if you're using /src/components
import Footer from "./components/footer"; // Adjust path if you're using /src/components

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirill Ayzenberg ",
  description: "Kirill Ayzenberg Mortgage Lender",
  metadataBase: new URL("https://kirillayzenberg.com"), // <— your HTTPS root
  // optional: defaults for all pages (can be overridden per page)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${raleway.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

