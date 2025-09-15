"use client";
import { SelectFilter } from "@/components/Fiters/select-filter";
import greenBanner from "../../../../public/images/green_banner.svg";

import CardFooter from "@/components/CardFooter";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetchData } from "@/hooks/useFetchData";
import { regions } from "@/constants/regions";
import InputFilter from "@/components/Fiters/input-filter";
import { useRouter } from "next/navigation";
import Pagination from "@/components/Pagination/pagination";

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
  created_at: string;
  documents: Document[];
}

export default function EgologicalClassification() {
  const { t, i18n } = useTranslation();
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
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
  const { data, isLoading, error } = useFetchData(
    ["categories", i18n.language],
    `projects?${query}`
  );
  const { data: initialDirections } = useFetchData(
    ["categories", i18n.language],
    `projects/directions/`
  );
  const { data: initialSectors } = useFetchData(
    ["categories", i18n.language],
    `projects/sectors?region=${filters.sector__region}`
  );
  const directions =
    initialDirections?.map((item: { id: number; name: string }) => ({
      id: item.id,
      value: item.id,
      label: item.name,
    })) ?? [];
  const sectors =
    initialSectors?.map((item: { id: number; name: string }) => ({
      id: item.id,
      value: item.id,
      label: item.name,
    })) ?? [];
  const results: ProjectData[] = data?.results ?? [];
  const router = useRouter();
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const cuttedData = results
    ? results.slice(startIndex, endIndex)
    : [];

  return (
    <div className="relative w-full pl-4 pr-4 -z-0 py-16">
      <div className="w-full flex items-center justify-center gap-10">
        <SelectFilter
          data={regions}
          queryKey="sector__region"
          placeholder="Region"
          label="Region"
          onChange={(key, value) =>
            setFilters((prev) => ({ ...prev, [key]: value }))
          }
        />
        <SelectFilter
          data={sectors}
          queryKey="sector"
          label="Sector"
          placeholder="Sector"
          onChange={(key, value) =>
            setFilters((prev) => ({ ...prev, [key]: value }))
          }
        />
        <SelectFilter
          data={directions}
          queryKey="direction"
          label="Project direction"
          placeholder="Project direction"
          onChange={(key, value) =>
            setFilters((prev) => ({ ...prev, [key]: value }))
          }
        />
        <InputFilter
          label="Year"
          placeholder="Year"
          onChange={(key, value) =>
            setFilters((prev) => ({ ...prev, [key]: value }))
          }
          queryKey="year"
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
                    {t("forestry_name")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("project_direction")}
                  </th>
                  <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                    {t("Documents")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cuttedData?.length
                  ? cuttedData?.map((item, i) => (
                      <tr key={i}>
                        <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-bl-lg shadow-sm">
                          {(currentPage - 1) * pageSize + i + 1}
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

                        <th
                          onClick={() =>
                            router.push(
                              `/international_projects/ecological_classification/docs/${item.id}`
                            )
                          }
                          className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm cursor-pointer hover:underline text-blue-600"
                        >
                          Files
                        </th>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>

          <CardFooter />
        </div>
      </div>
      <Pagination
        paginationPages={results.length}
        currentPage={currentPage}
        pageSize={pageSize}
        changePage={(pageNumber: number | string) =>
          typeof pageNumber === "number" && setCurrentPage(pageNumber)
        }
      />
    </div>
  );
}
