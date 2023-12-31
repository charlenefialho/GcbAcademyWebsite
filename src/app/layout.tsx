import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
