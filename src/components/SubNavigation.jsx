"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import arrowUp from '../../public/icons/arrow-up.svg'
import arrowUpBlack from '../../public/icons/arrow-up-black.svg'


const subLinks = [
  { title: "Intitut haqida", href: "/about/overview" },
  { title: "Bo’lim tarkibi", href: "/about/departments" },
  { title: "Tashkiliy tuzilma", href: "/about/structure" },
  { title: "Rahbariyat", href: "/about/leadership" },
  { title: "Markaziy apparat", href: "/about/center-apparat" },
  { title: "Hududiy filiallar", href: "/about/suborganizations" },
  { title: "Bo’sh ish o’rinlari", href: "/about/vacancies" },
];

export default function SubNavigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-xl p-4 w-full max-w-xs">
      {subLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-between px-4 py-3 mb-2 rounded-lg text-[16px] font-medium transition ${isActive
              ? "bg-[#0d3d0d] text-white"
              : "text-black hover:bg-gray-100"
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