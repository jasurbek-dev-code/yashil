"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import arrowUp from '../../../public/icons/arrow-up.svg'
import arrowUpBlack from '../../../public/icons/arrow-up-black.svg'


const subLinks = [
  { title: "O’zbekiston Respublikasi qonunlari", href: "/docs/laws" },
  { title: "O’zbekiston Respublikasi Prezidentining farmonlari", href: "/docs/decrees" },
  { title: "O’zbekiston Respublikasi Prezidentining qarorlari", href: "/docs/resolutions" },
  { title: "O’zbekiston Respublikasi Vazirlar Maxkamasining qarorlari", href: "/docs/ministers-resolutions" },
  { title: "Loyiha institutining guvoxnoma va litsensiyasi", href: "/docs/certificate-and-license" },
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