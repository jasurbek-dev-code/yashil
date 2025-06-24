"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import arrowDown from "../../../public/icons/arrow-down.svg";

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-[#0d3d0d] w-full px-4">
      <nav className="max-w-[1200px] mx-auto flex flex-wrap justify-between py-2 gap-4 font-sans">
        {/* Yashil loyiha */}
        <div
          className="relative z-[9999]"
          onMouseEnter={() => setHoveredItem("about")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition ${pathname.startsWith("/about") ? "bg-white/10" : "hover:bg-white/10"
              }`}
          >
            Yashil loyiha
            <Image src={arrowDown} alt="arrow" width={14} height={14} />
          </div>

          {hoveredItem === "about" && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-[999]">
              <Link href="/about/overview" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Institut haqida</Link>
              <Link href="/about/departments" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Bo‘limlar</Link>
              <Link href="/about/structure" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Tashkiliy tuzilma</Link>
              <Link href="/about/leadership" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Rahbariyat</Link>
              <Link href="/about/center-apparat" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Markaziy apparat</Link>
              <Link href="/about/suborganizations" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Hududiy filiallar</Link>
              <Link href="/about/vacancies" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Bo‘sh ish o‘rinlari</Link>
            </div>
          )}
        </div>

        {/* Xizmatlar */}
        <div
          className="relative z-[9999]"
          onMouseEnter={() => setHoveredItem("services")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition ${pathname.startsWith("/services") ? "bg-white/10" : "hover:bg-white/10"
              }`}
          >
            Xizmatlar
            <Image src={arrowDown} alt="arrow" width={14} height={14} />
          </div>
          {hoveredItem === "services" && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-[999]">
              <Link href="/services/forest-fund" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">O‘rmon fondi yerlarini xatlovdan o‘tkazish</Link>
              <Link href="/services/cartographic-geoinformation" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Kartografik geoaxborot tizimini ishlab chiqish</Link>
              <Link href="/services/geodesy-topography-mine" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Geodeziya, topografiya va marksheyderlik ishlari</Link>
              <Link href="/services/project-exploration-works" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Loyiha qidiruv ishlari</Link>
              <Link href="/services/architectural-design" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Arxitektura va dizaynerlik xizmatlari</Link>
              <Link href="/services/scientific-and-methodological" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Ilmiy metodologik xizmatlar</Link>
              <Link href="/services/author-supervision" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Mualliflik nazorati</Link>
              <Link href="/services/project-cost-estimate" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Loyiha smeta xujjatlarini ishlab chiqish</Link>
            </div>
          )}
        </div>

        {/* Axborot xizmati */}
        <div
          className="relative z-[9999]"
          onMouseEnter={() => setHoveredItem("news")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition ${pathname.startsWith("/news") ? "bg-white/10" : "hover:bg-white/10"
              }`}
          >
            Axborot xizmati
            <Image src={arrowDown} alt="arrow" width={14} height={14} />
          </div>
          {hoveredItem === "news" && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-[999]">
              <Link href="/news/institute-news" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Institut yangiliklari</Link>
              <Link href="/news/photo-report" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Fotoreportaj</Link>
              <Link href="/news/video-report" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Videoreportaj</Link>
            </div>
          )}
        </div>

        {/* Davlat Xizmatlari */}
        <Link href="https://e-auksion.uz/home" target="_blank">
          <div
            className="relative z-[9999]"
          >
            <div
              className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition hover:bg-white/10`}
            >
              Davlat xizmatlari
              <Image src={arrowDown} alt="arrow" width={14} height={14} />
            </div>
          </div>
        </Link>

        {/* Normativ hujjatlar */}
        <div
          className="relative z-[9999]"
          onMouseEnter={() => setHoveredItem("docs")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition ${pathname.startsWith("/docs") ? "bg-white/10" : "hover:bg-white/10"
              }`}
          >
            Normativ hujjatlar
            <Image src={arrowDown} alt="arrow" width={14} height={14} />
          </div>
          {hoveredItem === "docs" && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-[999]">
              <Link href="/docs/laws" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">O’zbekiston Respublikasi qonunlari</Link>
              <Link href="/docs/decrees" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">O’zbekiston Respublikasi Prezidentining farmonlari</Link>
              <Link href="/docs/resolutions" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">O’zbekiston Respublikasi Prezidentining qarorlari</Link>
              <Link href="/docs/ministers-resolutions" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">O’zbekiston Respublikasi Vazirlar Maxkamasining qarorlari</Link>
              <Link href="/docs/certificate-and-license" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100">Loyiha institutining guvoxnoma va litsensiyasi</Link>
            </div>
          )}
        </div>

        {/*Axborot tizimlar */}
        <Link href="https://e-auksion.uz/home" target="_blank">
          <div
            className="relative z-[9999]"
          >
            <div
              className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition hover:bg-white/10`}
            >
              Axborot tizimlar
              <Image src={arrowDown} alt="arrow" width={14} height={14} />
            </div>
          </div>
        </Link>

        <Link
          href="/contact"
          className={`text-white text-[18px] font-medium px-3 py-2 rounded-md transition ${pathname.startsWith("/contact") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          Bog‘lanish
        </Link>
      </nav>
    </div>
  );
}