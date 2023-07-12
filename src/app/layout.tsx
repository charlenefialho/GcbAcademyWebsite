import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { Header } from "./components/Header/Header";

const poppins = Poppins({
  weight: ['400','500','700'],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry><Header/>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
