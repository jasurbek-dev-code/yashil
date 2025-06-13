"use client";

import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className={`w-full`}>
      <header className="flex flex-wrap justify-around items-center py-5 px-5 bg-transparent">
        <div className="flex items-center mb-2 md:mb-0">
          <Link href={"/"}>
            <Image width={20} height={20} src="/icons/logo.svg" alt="Logo" className="w-16 h-16 mr-3" />
          </Link>
          <h1 className="text-white text-sm md:text-base font-sans leading-tight">
            YASHIL LOYIHA
            <br />
            LOYIHALASH INSTITUTI
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-1.5 text-white text-lg">
            <Image src="/icons/call.svg" alt="Gerb" width={20} height={20} />
            +998 (71) 256-86-53
          </div>

          <div className="relative w-16">
            <select className="w-full px-1.5 py-1 text-sm h-10 border-2 border-white rounded-md text-white bg-transparent appearance-none focus:outline-none cursor-pointer hover:border-green-900">
              <option className="text-black bg-white" value="uz">O'zb</option>
              <option className="text-black bg-white" value="ru">RU</option>
              <option className="text-black bg-white" value="en">EN</option>
            </select>
            <img
              src="/icons/arrow-down.svg"
              alt="arrow"
              className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>


          <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-md text-white hover:border-green-900 cursor-pointer transition-colors">
            <Image src="/icons/search-normal.svg" alt="Ser" width={20} height={20} />
          </div>

          <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-md text-white hover:border-green-900 cursor-pointer transition-colors">
            <Image src="/icons/eye.svg" alt="eye" width={20} height={20} />
          </div>
        </div>
      </header>
    </div>
  );
}