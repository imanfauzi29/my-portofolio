import type { Metadata } from "next"
import { Kanit, Orbitron } from "next/font/google"
import "./globals.css"
import StarParticles from "@/components/particles/StarParticles"
import LenisWrapper from "@/components/layout/LenisWrapper"
import CustomCursor from "@/components/ui/CustomCursor"
import tailwindTheme from "tailwindcss/defaultTheme"

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
})

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portofolio Website - Iman Fauzi M",
  description: "Portofolio Website - Iman Fauzi M",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} ${orbitron.variable} bg-black antialiased`}
        data-color="dark"
      >
        <LenisWrapper>{children}</LenisWrapper>
        <div className="absolute top-0 left-0 -z-[1] flex h-full w-full">
          <StarParticles id="tsParticle2" />
        </div>
        <div className="fixed bottom-0 -z-[1] h-1/2 w-full self-end bg-gradient-to-b from-transparent from-0% to-purple-400/20" />
        {tailwindTheme.screens.lg ? <CustomCursor /> : null}
      </body>
    </html>
  )
}
