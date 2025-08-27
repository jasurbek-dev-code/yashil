"use client";

import Link from "next/link";
import CardFooter from "../CardFooter";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";
import UzbekistanMap from "./UzbekistanMap";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutSubOrganizations() {
  const { t , i18n} = useTranslation();
  const { data, isLoading, error } = useFetchData(["regions", i18n.language], "/regions");
  const [selectedRegionSoato, setSelectedRegionSoato] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedRegionSoato(data[0]?.region.soato);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  const selectedInfo = data?.find(
    (item) => item.region?.soato === selectedRegionSoato
  );

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-[20px] shadow-xl max-w-[1200px] mx-auto overflow-hidden">
        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">
              {t("home")}
            </Link>{" "}
            / {t("regional_branches")}
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">
            {t("regional_branches")}
          </h1>
        </div>

        {/* SVG Map */}
        <div className="w-full px-6 pb-4 flex justify-center">
          <UzbekistanMap
            selectedRegionItem={selectedRegionSoato}
            onRegionSelect={setSelectedRegionSoato}
          />
        </div>

        {/* Info Block */}
        <div className="px-6 pb-10">
          {selectedInfo ? (
            <div className="rounded-xl text-[18px] leading-relaxed text-gray-800 dark:text-gray-200 bg-[#F7F7F7] dark:bg-[#1a1a1a] p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white mt-3">
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
                {t("email")}: <span className="font-medium">{selectedInfo?.email}</span>
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 py-4">
              {t("not_found")}
            </p>
          )}
        </div>

        <CardFooter />
      </div>
    </div>
  );
}