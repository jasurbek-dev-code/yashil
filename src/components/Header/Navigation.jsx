"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import arrowDown from '../../../public/icons/arrow-down.svg'
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#0d3d0d] w-full px-4">
      <nav className="max-w-[1200px] mx-auto flex flex-wrap justify-between py-2 gap-4 font-sans">
        <div
          className="relative z-[9999]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/about") ? "bg-white/10" : "hover:bg-white/10"
              }`}
          >
            Yashil loyiha{" "}
            <span className="text-[22px] ml-1">
              <Image src={arrowDown} alt="arrow down" height={14} width={14} />
            </span>
          </div>
          {isHovered && (
            <div className="absolute top-full left-0 mt-0 w-48 transition duration-300 bg-white shadow-lg rounded-md py-2 z-[999]">
              <Link href="/about/overview" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Institut haqida
              </Link>
              <Link href="/about/departments" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Bo’limlar
              </Link>
              <Link href="/about/structure" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Tashkiliy tuzilma
              </Link>
              <Link href="/about/leadership" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Rahbariyat
              </Link>
              <Link href="/about/center-apparat" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Markaziy apparat
              </Link>
              <Link href="/about/suborganizations" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Hududiy filiallar
              </Link>
              <Link href="/about/vacancies" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 text-[16px]">
                Bo’sh ish o’rinlari
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/services"
          className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/services") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          Xizmatlar
        </Link>

        <Link
          href="/documents"
          className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/documents") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          Normativ hujjatlar
        </Link>

        <Link
          href="/vacancies"
          className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/vacancies") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          Bo‘sh ish o‘rinlari
        </Link>

        <Link
          href="/news"
          className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/news") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          Yangiliklar
        </Link>

        <Link
          href="/standards"
          className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/standards") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          E’lonlar
        </Link>

        <Link
          href="/contact"
          className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${pathname.startsWith("/contact") ? "bg-white/10" : "hover:bg-white/10"
            }`}
        >
          Bog‘lanish
        </Link>
      </nav>
    </div>
  );
}