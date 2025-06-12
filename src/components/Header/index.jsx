"use client";

import HeaderTop from "./TopHeader";
import Navigation from "./Navigation";
import HeadSection from "./HeadSection";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      <div className="relative z-10">
        <HeaderTop />
        <Navigation />
        {pathname.length > 1 ? null : <HeadSection />}
      </div>
    </div>
  );
}