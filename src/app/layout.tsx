import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import StyledComponentsRegistry from './lib/registry';

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
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        
      </body>
    </html>
  )
}
