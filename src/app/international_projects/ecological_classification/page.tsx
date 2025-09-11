"use client";
import { SelectFilter } from "@/components/Fiters/select-filter";
import greenBanner from "../../../../public/images/green_banner.svg";

import CardFooter from "@/components/CardFooter";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetchData } from "@/hooks/useFetchData";
import { regions } from "@/constants/regions";

interface Document {
  id: number;
  file: string;
  uploaded_at: string; // ISO datetime
}

interface Direction {
  id: number;
  name: string;
}

interface Sector {
  id: number;
  name: string;
  region: string;
}

interface ProjectData {
  id: number;
  name: string;
  year: number;
  direction: Direction;
  sector: Sector;
  created_at: string; // ISO datetime
  documents: Document[];
}
interface selectFilterData {
  direction: string;
  sector: string;
  sector_region: string;
}

export default function EgologicalClassification() {
  const { t, i18n } = useTranslation();

  const [filters, setFilters] = useState<{
    year: number | null;
    direction: number | null;
    sector: number | null;
    sector__region: string;
  }>({
    year: null,
    direction: null,
    sector: null,
    sector__region: "",
  });
  const query = useMemo(
    () =>
      new URLSearchParams(
        Object.entries(filters).reduce((acc, [key, value]) => {
          if (value !== null && value !== "") {
            acc[key] = value.toString();
          }
          return acc;
        }, {} as Record<string, string>)
      ).toString(),
    [filters]
  );
  console.log( Object.entries(filters) );
  const { data, isLoading, error } = useFetchData(
    ["categories", i18n.language],
    `projects?${query}`
  );

  const results: ProjectData[] = data?.results ?? [];
  return (
    <div className="relative w-full pl-4 pr-4 -z-0 py-16">
      <div className="w-full flex items-center justify-center">
        <SelectFilter
          data={regions}
          queryKey="sector__region"
          label="Region"
          onChange={(key, value) =>
            setFilters((prev) => ({ ...prev, [key]: value }))
          }
        />
      </div>
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />
      <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0 mt-10 mb-10">
        <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto px-4 my-5">
            <table className="min-w-full text-sm text-black-700 dark:text-gray-200">
              <thead>
                <tr>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tl-lg">
                    {t("number")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600">
                    {t("name")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("year")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("region")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("foresty_name")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("project_direction")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("details")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {results?.length
                  ? results?.map((item, i) => (
                      <tr key={i}>
                        <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-bl-lg shadow-sm">
                          {item?.id}
                        </td>
                        <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                          {item?.name}
                        </td>
                        <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                          {item?.year}
                        </td>
                        <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                          {item?.sector.region}
                        </td>
                        <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                          {item?.sector.name}
                        </td>
                        <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                          {item?.direction.name}
                        </td>
                        <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                          Files
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <CardFooter />
        </div>
      </div>
    </div>
  );
}
