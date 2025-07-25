"use client";

import Link from "next/link";
import CardFooter from "../CardFooter";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";
import { useTranslation } from "react-i18next";

export default function DocsDetails({ id }) {
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useFetchData(["categories", i18n.language], `/documents/?category=${id}`);

  if (isLoading) return <Loading />; 
  if (error) return <ErrorAlert />;

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/docs" className="hover:underline">{t("documents")}</Link> / {data?.results?.[0]?.category?.name || null}
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {data?.results?.[0]?.category?.name || null}
          </h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-4 my-5">
          <table className="min-w-full text-sm text-black-700 dark:text-gray-200">
            <thead>
              <tr>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tl-lg">
                  {t("code")}
                </th>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600">
                  {t("name")}
                </th>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                  {t("file")}
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.results?.length
                ? data?.results?.map((item, i) => (
                    <tr key={i}>
                      <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-bl-lg shadow-sm">
                        {item?.shifr}
                      </td>
                      <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                        {item?.title}
                      </td>
                      <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-br-lg shadow-sm">
                        <button
                          onClick={() => window.open(item?.file, "_blank")}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {t("open")}
                        </button>
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
  );
} 