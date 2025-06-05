// "use client";

// import HeaderTop from "./headerTop";
// import Navigation from "./navigation";
// import Section from "./section";

// export default function Header() {
//   return (
//     <div
//       className="bg-cover bg-center min-h-[100vh] w-full"
//       style={{ backgroundImage: 'url("/images/home.png")' }}
//     >
//       <HeaderTop />
//       <Navigation />
//       <Section />
//     </div>
//   );
// }

"use client";

import HeaderTop from "./TopHeader";
import Navigation from "./Navigation";
import HeadSection from "./HeadSection";

export default function Header() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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

      {/* Overlay (optional, for better text contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10">
        <HeaderTop />
        <Navigation />
        <HeadSection />
      </div>
    </div>
  );
}