"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../hooks/useTheme";
import LanguageSelect from "./LanguageSelect";


export default function TopHeader() {
  const { toggleTheme } = useTheme();

  return (
    <div className="w-full px-5">
      <header className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center py-5 bg-transparent">
        {/* Chap tomondagi logo va matn */}
        <div className="flex items-center mb-2 md:mb-0">
          <Link href="/">
            <Image
              width={20}
              height={20}
              src="/icons/logo.svg"
              alt="Logo"
              className="w-16 h-16 mr-3"
            />
          </Link>
          <h1 className="text-white dark:text-gray-100 text-sm md:text-base font-sans leading-tight">
            YASHILLOYIHA
            <br />
            LOYIHALASH INSTITUTI
          </h1>
        </div>

        {/* O‘ng tomondagi aloqa va tugmalar */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Telefon raqam */}
          <div className="inline-flex items-center gap-1.5 text-white dark:text-gray-100 text-lg">
            <Image src="/icons/call.svg" alt="call" width={20} height={20} />
            +998 (71) 256-86-53
          </div>
          {/* Til tanlash */}
          <LanguageSelect/>
          <div
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border-2 border-white dark:border-gray-400 rounded-md text-white dark:text-gray-100 hover:border-green-900 cursor-pointer transition-colors"
            title="Temani almashtirish"
          >
            <Image src="/icons/eye.svg" alt="eye" width={20} height={20} />
          </div>
        </div>
      </header>
    </div>
  );
}
