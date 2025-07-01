"use client";

import useIsClient from "@/hooks/useIsClient";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <div className="relative py-[60px] px-5 overflow-hidden bg-white dark:bg-[#0f1a0f] transition-colors">
      {/* Background image */}
      <Image
        src="/images/banner.svg"
        alt="Banner Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-10 px-4 lg:px-0 items-start relative z-10">
        <h2 className="w-full text-[30px] text-left text-gray-800 dark:text-gray-100 font-bold">
          {t("regional_departments")}
        </h2>

        {/* Map image */}
        <div className="flex-1 min-w-[300px]">
          <Image
            src="/images/karta.svg"
            alt={t("uzbekistan_map")}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Info block */}
        <div className="flex-1 min-w-[300px] bg-transparent p-5 md:p-6 rounded-xl text-[18px] leading-relaxed text-gray-800 dark:text-gray-200">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {t("navoiy_region")}
          </h2>

          <p className="mt-2">
            {t("manager")}:&nbsp;
            <span className="underline font-medium dark:text-white">
              {t("manager_name")}
            </span>
          </p>
          <p className="mt-2">
            {t("reception_days")}:&nbsp;
            <span className="font-medium dark:text-white">{t("reception_schedule")}</span>
          </p>
          <p className="mt-2">
            {t("address")}:&nbsp;
            <span className="font-medium dark:text-white">{t("address_value")}</span>
          </p>
          <p className="mt-2">
            {t("phone")}:&nbsp;
            <span className="font-medium dark:text-white">36–224–36–51</span>
          </p>
          <p className="mt-2">
            {t("fax")}:&nbsp;
            <span className="font-medium dark:text-white">36–224–36–51</span>
          </p>
          <p className="mt-2">
            Email:&nbsp;
            <span className="font-medium dark:text-white">mt.matbuot@inbox.uz</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
