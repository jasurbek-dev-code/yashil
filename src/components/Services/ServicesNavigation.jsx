"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import arrowUp from '../../../public/icons/arrow-up.svg';
import arrowUpBlack from '../../../public/icons/arrow-up-black.svg';

const subLinks = [
  {
    title: "O‘rmon fondi yerlarini xatlovdan o‘tkazish",
    href: "/services/forest-fund",
    subItems: [
      {
        title: "O’rmon tuzish ishlari",
        href: "/services/forest-fund",
      },
      {
        title: "Suv xavfsizligi va yaylovlarni loyihalash",
        href: "/services/forest-fund/water",
      },
    ],
  },
  { title: "Kartografik geoaxborot tizimini ishlab chiqish", href: "/services/cartographic-geoinformation" },
  { title: "Geodeziya, topografiya va marksheyderlik ishlari", href: "/services/geodesy-topography-mine" },
  { title: "Loyiha qidiruv ishlari", href: "/services/project-exploration-works" },
  { title: "Arxitektura va dizaynerlik xizmatlari", href: "/services/architectural-design" },
  { title: "Ilmiy metodologik xizmatlar", href: "/services/scientific-and-methodological" },
  { title: "Mualliflik nazorati", href: "/services/author-supervision" },
  { title: "Loyiha smeta xujjatlarini ishlab chiqish", href: "/services/project-cost-estimate" },
];

export default function SubNavigation() {
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-4 w-full max-w-xs transition-colors">
      {subLinks.map((link) => {
        const isActive = pathname === link.href || (link.subItems?.some((sub) => pathname === sub.href));
        const isParentOpen = pathname.startsWith(link.href);

        return (
          <div key={link.href} className="mb-2">
            <Link
              href={link.href}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-[16px] font-medium transition-colors ${
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

            {/* Subitems - faqat asosiy sahifada bo‘lsak yoki sub-item sahifasida bo‘lsak ko‘rsatiladi */}
            {link.subItems && isParentOpen && (
              <div className="ml-4 mt-2">
                {link.subItems.map((sub) => {
                  const isSubActive = pathname === sub.href;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        isSubActive
                          ? "bg-white font-bold text-green-900"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#2a2a2a]"
                      }`}
                    >
                      {sub.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
