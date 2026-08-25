import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Provider from "@/context/provider";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";

// ১. Body-র জন্য মডার্ন ফন্ট
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ২. Heading & Branding-এর জন্য Stylish Display ফন্ট
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "TripMate - Personal Travel Planner",
  description: "Plan your travel itineraries and track costs effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${jakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning={true} className="min-h-full flex flex-col bg-black font-sans">
        <Provider>
          <Navbar />
          <main className="bg-black flex-1">
            {children}
          </main>
          <Footer />
            <ToastContainer/>
        </Provider>
      </body>
    </html>
  );
}