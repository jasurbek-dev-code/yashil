"use client";

import Image from "next/image";
import SocialBtns from "./SocialBtns";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HeadSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-transparent px-5 py-[60px] text-center text-white dark:text-gray-100 max-w-[1920px] mx-auto relative">
      <SocialBtns />

      <h1 className="text-[28px] font-bold my-20 uppercase leading-snug">
        {t("institute_title_line1")} <br /> {t("institute_title_line2")}
      </h1>

      <Link
        href="/about/overview"
        className="bg-[#0d3d0d] dark:bg-gray-900 text-white border-none px-8 py-[12px] text-[16px] rounded-md cursor-pointer mt-[30px] mb-[10px] hover:bg-[#0d3d0d] dark:hover:bg-green-800 transition"
      >
        {t("read_more")}
      </Link>

      <div className="my-20 flex justify-center flex-wrap gap-5">
        {/* Card 1 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image src="/icons/gerb.svg" alt="Gerb" width={30} height={30} />
          <span>{t("uzbekistan_2030")}</span>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image
            src="/icons/nxol.svg"
            alt="Yashil makon"
            width={30}
            height={30}
          />
          <span>{t("green_space_project")}</span>
        </div>

        {/* Card 3 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image
            src="/icons/therd.svg"
            alt="Loyihalar"
            width={30}
            height={30}
          />
          <span>{t("projects")}</span>
        </div>
        {/* Card 4 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image
            src="/icons/therd.svg"
            alt="Xalqaro loyihalar"
            width={30}
            height={30}
          />
          <span>{t("international_projects")}</span>
        </div>
      </div>
    </div>
  );
}
