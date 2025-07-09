"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import arrowDown from "../../../public/icons/arrow-down.svg";

export default function Navigation() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="hidden md:block bg-[#0d3d0d] dark:bg-gray-900 w-full px-4">
      <nav className="max-w-[1200px] mx-auto flex flex-wrap justify-between py-2 gap-4 font-sans">

        {/* Yashil loyiha */}
        <div
          className="relative z-[11]"
          onMouseEnter={() => setHoveredItem("about")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-white dark:text-gray-100 text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition ${pathname.startsWith("/about") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}
          >
            {t("green_project")}
            <Image src={arrowDown} alt="arrow" width={14} height={14} />
          </div>

          {hoveredItem === "about" && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-[1]">
              <Link href="/about/overview" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("about_institute")}</Link>
              <Link href="/about/departments" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("departments")}</Link>
              <Link href="/about/structure" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("structure")}</Link>
              <Link href="/about/leadership" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("leadership")}</Link>
              <Link href="/about/center-apparat" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("central_apparatus")}</Link>
              <Link href="/about/suborganizations" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("branches")}</Link>
              <Link href="/about/vacancies" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("vacancies")}</Link>
            </div>
          )}
        </div>

        <Link href="/services" className={`text-white dark:text-gray-100 text-[18px] font-medium px-3 py-2 rounded-md transition ${pathname.startsWith("/services") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}>
          {t("services")}
        </Link>

        {/* News */}
        <div
          className="relative z-[1]"
          onMouseEnter={() => setHoveredItem("news")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div
            className={`text-white dark:text-gray-100 text-[18px] font-medium cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-md transition ${pathname.startsWith("/news") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}
          >
            {t("press_service")}
            <Image src={arrowDown} alt="arrow" width={14} height={14} />
          </div>
          {hoveredItem === "news" && (
            <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-[1]">
              <Link href="/news/institute-news" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("institute_news")}</Link>
              <Link href="/news/photo-report" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("photo_report")}</Link>
              <Link href="/news/video-report" className="block px-4 py-2 text-[#8DC63F] hover:bg-gray-100 dark:hover:bg-gray-700">{t("video_report")}</Link>
            </div>
          )}
        </div>

        <Link href="/public-services" className={`text-white dark:text-gray-100 text-[18px] font-medium px-3 py-2 rounded-md transition ${pathname.startsWith("/public-services") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}>
          {t("gov_services")}
        </Link>

        <Link href="/docs" className={`text-white dark:text-gray-100 text-[18px] font-medium px-3 py-2 rounded-md transition ${pathname.startsWith("/docs") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}>
          {t("legal_documents")}
        </Link>
        <Link href="/info" className={`text-white dark:text-gray-100 text-[18px] font-medium px-3 py-2 rounded-md transition ${pathname.startsWith("/info") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}>
          {t("info_systems")}
        </Link>

        <Link href="/contact" className={`text-white dark:text-gray-100 text-[18px] font-medium px-3 py-2 rounded-md transition ${pathname.startsWith("/contact") ? "bg-white/10 dark:bg-white/20" : "hover:bg-white/10 dark:hover:bg-white/20"}`}>
          {t("contact")}
        </Link>
      </nav>
    </div>
  );
}
