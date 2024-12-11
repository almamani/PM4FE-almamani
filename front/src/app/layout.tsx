import type { Metadata } from "next";
import { Agdasima } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Contexts from "@/context/context";

const agdasima = Agdasima({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CompuShop",
  description: "Sale of technology products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Contexts>
      <html lang="en" className={agdasima.className}>
        <body>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </Contexts>
  );
}
