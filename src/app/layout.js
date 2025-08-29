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
import Head from "next/head";
import MarqueeBanner from "./MarqueeBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


<Head>
  <link rel="alternate" href="https://yashilloyiha.uz" hreflang="uz" />
  <link rel="alternate" href="https://yashilloyiha.uz" hreflang="ru" />
  <link rel="alternate" href="https://yashilloyiha.uz" hreflang="en" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Yashil Loyiha",
        url: "https://yashilloyiha.uz",
        logo: "https://yashilloyiha.uz/icons/logo.png",
        sameAs: [
          "https://t.me/yashilloyiha",
          "https://facebook.com/yashilloyiha"
        ],
        description:
          "Ekologik loyihalash instituti. Sustainable design and construction institute.",
      }),
    }}
  />
</Head>;

export const metadata = {
  title: {
    default: "Yashilloyiha",
    template: "%s | Yashilloyiha",
  },
  description:
    "Yashil Loyiha instituti – ekologik va barqaror rivojlanishga ixtisoslashgan loyiha tashkiloti. Institut проектирования устойчивых решений в Узбекистане. Sustainable environmental design institute in Uzbekistan.",
  keywords: [
    // O'zbekcha
    "yashil loyiha",
    "yashilloyiha",
    "yashil loyiha instituti",
    "ekologik loyiha",
    "barqaror rivojlanish",
    "loyihalash instituti",
    // Ruscha
    "зелёный проект",
    "институт проектирования",
    "экологический проект Узбекистан",
    "устойчивое развитие",
    "институт экологии",
    // Inglizcha
    "green project",
    "green project Uzbekistan",
    "green construction",
    "sustainable development",
    "environmental design institute",
    "green architecture",
  ],
  metadataBase: new URL("https://yashilloyiha.uz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yashil Loyiha – Green Project Institute Uzbekistan",
    description:
      "Yashil Loyiha instituti – ekologik va barqaror rivojlanishga ixtisoslashgan loyiha tashkiloti. Green project and sustainable construction institute in Uzbekistan. Институт зелёного проектирования в Узбекистане.",
    url: "https://yashilloyiha.uz",
    siteName: "Yashil Loyiha",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Yashil Loyiha rasmi",
      },
    ],
    type: "website",
    locale: "uz_UZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashil Loyiha – Green Project Institute Uzbekistan",
    description:
      "Ecological and sustainable design institute. Институт зелёного проектирования и устойчивых решений.",
    images: ["/images/og-default.jpg"],
    creator: "@yashilloyiha",
  },
  icons: {
    icon: "/icons/logo.png",
    shortcut: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
  robots: {
    index: true,
    follow: true,
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
          <MarqueeBanner/>
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
