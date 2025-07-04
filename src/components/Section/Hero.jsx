"use client";

import useIsClient from "@/hooks/useIsClient";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import UzbekistanMap from "../About/UzbekistanMap";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [selectedRegionSoato, setSelectedRegionSoato] = useState(null);
  const { data, isLoading, error } = useFetchData("regions", "/regions");
  const isClient = useIsClient();
  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedRegionSoato(data[0].region.soato);
    }
  }, [data]);
  if (!isClient) return null;
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  const selectedInfo = data?.find(
    (item) => item.region.soato === selectedRegionSoato
  );
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
          <UzbekistanMap
            selectedRegionItem={selectedRegionSoato}
            onRegionSelect={setSelectedRegionSoato}
          />
        </div>

        {/* Info block */}
        <>
          {selectedInfo ?
            (<div className="flex-1 min-w-[300px] bg-transparent p-5 md:p-6 rounded-xl text-[18px] leading-relaxed text-gray-800 dark:text-gray-200">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedInfo?.region?.name}
              </h2>
              <p className="mt-2">
                {t("chief")}:{" "}
                <span className="underline font-medium">
                  {selectedInfo?.fullname}
                </span>
              </p>
              <p className="mt-2">
                {t("admission_days")}:{" "}
                <span className="font-medium">{selectedInfo?.admission_days}</span>
              </p>
              <p className="mt-2">
                {t("address")}: <span className="font-medium">{selectedInfo?.address}</span>
              </p>
              <p className="mt-2">
                {t("phone")}: <span className="font-medium">{selectedInfo?.phone}</span>
              </p>
              <p className="mt-2">
                {t("fax")}: <span className="font-medium">{selectedInfo?.fax}</span>
              </p>
              <p className="mt-2">
                {t("email")}: <span className="font-medium">{selectedInfo?.email}</span>
              </p>
            </div>)
            :
            (
              <div className="flex-1 min-w-[300px] bg-transparent p-5 md:p-6 rounded-xl text-[18px] leading-relaxed text-gray-800 dark:text-gray-200">
                <p className="text-center text-gray-600 dark:text-gray-400 py-4">
                  {t("not_found")}
                </p>
              </div>
            )
          }
        </>
      </div>
    </div>
  );
};

export default Hero;
