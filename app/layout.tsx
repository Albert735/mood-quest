import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import { LightRays } from "@/components/ui/light-rays";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noctra - Music for Every Vibe",
  description: "Find the perfect music based on your current mood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black text-white relative`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {/* Main Content */}
          <main className="flex-1 px-6 md:px-12 lg:px-20 py-10">
            {children}
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
