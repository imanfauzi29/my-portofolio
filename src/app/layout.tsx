import type { Metadata } from "next";
import { Kanit, Orbitron } from "next/font/google";
import "./globals.css";
import StarParticles from "@/components/particles/StarParticles";
import LenisWrapper from "@/components/layout/LenisWrapper";
import CustomCursor from "@/components/ui/CustomCursor";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Website - Iman Fauzi M",
  description: "Portofolio Website - Iman Fauzi M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${kanit.variable} ${orbitron.variable} antialiased`}>
        <LenisWrapper>{children}</LenisWrapper>
        <div className="absolute left-0 top-0 w-full h-full -z-[1] flex">
          <StarParticles />
        </div>
        <div className="w-full fixed -z-[1] bottom-0 h-1/2 self-end bg-gradient-to-b from-0% from-transparent to-purple-400/20 " />
        <CustomCursor />
      </body>
    </html>
  );
}
