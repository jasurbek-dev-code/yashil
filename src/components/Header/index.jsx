"use client";

import { usePathname } from "next/navigation";
import HeaderTop from "./TopHeader";
import Navigation from "./Navigation";
import HeadSection from "./HeadSection";
import TopNavbar from "./TopNavbar";

export default function Header() {
  const pathname = usePathname();
  const specialRoutes = ['/services', '/docs', '/vacancies', "/news", "/contact", "/about"];
  const isSpecial = specialRoutes.some(route => pathname.startsWith(route));

  return (
    <div
      className={`relative w-full ${isSpecial ? "" : "min-h-screen"}`}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 dark:bg-black/60 z-0 transition-colors" />

      {/* Content */}
      <div className="relative z-10">
        {isSpecial ? (
          <TopNavbar />
        ) : (
          <>
            <HeaderTop />
            <Navigation />
            <HeadSection />
          </>
        )}
      </div>
    </div>
  );
}
