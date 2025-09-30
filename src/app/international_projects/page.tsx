"use client"

import Image from "next/image";
import greenBanner from "../../../public/images/green_banner.svg";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function InternationalProjects() {
  const data: { value: number; label: string,href:string }[] = [
    { value: 1, label: "ecological_classification",href:"/international_projects/ecological_classification" },
    { value: 2, label: "forest_inventory",href:"" },
  ];
  const {t}=useTranslation()
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[50vh] -z-0">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-24">
          {data?.length
            ? data?.map((item) => (
                <Link
                  href={item.href}
                  key={item.value}
                  className="cursor-pointer bg-white dark:bg-[#2a2a2a] rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
                >
                  <div className="flex items-center gap-3 p-5 dark:bg-[#2a2a2a]">
                    <h3 className="text-green-900 dark:text-green-400 text-xl font-semibold">
                      {t(item.label)}
                    </h3>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
      ;
    </div>
  );
}
