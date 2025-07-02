import { Geist, Geist_Mono } from "next/font/google";
import "react-medium-image-zoom/dist/styles.css";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopBtn";
import ProgressBar from "./ProgressBar";
import '../i18n.js';
import ReactQueryProvider from "./ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yashil Loyiha",
  description: "yashil loyiha loyihalash instituti",
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <ScrollToTop />
          <ScrollToTopButton />
          <ProgressBar />
          <Header />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
