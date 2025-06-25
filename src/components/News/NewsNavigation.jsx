"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import arrowUp from '../../../public/icons/arrow-up.svg';
import arrowUpBlack from '../../../public/icons/arrow-up-black.svg';

const subLinks = [
  { title: "Yangiliklar",     href: "/news/institute-news" },
  { title: "Fotoreportaj",    href: "/news/photo-report"   },
  { title: "Videoreportaj",   href: "/news/video-report"   },
];

export default function SubNavigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-4 w-full max-w-xs transition-colors">
      {subLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-between px-4 py-3 mb-2 rounded-lg text-[16px] font-medium transition-colors ${
              isActive
                ? "bg-[#0d3d0d] text-white"
                : "text-black hover:bg-gray-100 dark:text-white dark:hover:bg-[#2a2a2a]"
            }`}
          >
            {link.title}
            <Image
              src={isActive ? arrowUp : arrowUpBlack}
              alt="arrow up"
              height={14}
              width={14}
            />
          </Link>
        );
      })}
    </div>
  );
}