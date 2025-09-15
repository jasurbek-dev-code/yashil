"use client";

import { useMemo, useState } from "react";
import NewsCard from "./NewsCard";
import Link from "next/link";
import CardFooter from "../CardFooter";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useTranslation } from "react-i18next";
import Pagination from "../Pagination/pagination";

const NewsCards = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useFetchData(
    ["posts", i18n.language],
    "/posts"
  );
  const [pageSize, setPageSize] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const cuttedData = data ? data.slice(startIndex, endIndex) : [];
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">
              {t("home")}
            </Link>{" "}
            / {t("latest_news")}
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">
            {t("latest_news")}
          </h1>
        </div>

        <div className="relative bg-cover bg-center bg-no-repeat px-6 my-3">
          <div className="px-4 lg:px-0 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cuttedData?.map((item, index) => (
                <NewsCard
                  key={index}
                  id={item?.id}
                  imageSrc={item?.photo?.src}
                  description={item?.category?.name}
                  title={item?.title}
                  views={item?.views}
                />
              ))}
            </div>
          </div>
        </div>
        <Pagination
          paginationPages={data.length}
          currentPage={currentPage}
          pageSize={pageSize}
          changePage={(pageNumber) =>
            typeof pageNumber === "number" && setCurrentPage(pageNumber)
          }
        />
        <CardFooter />
      </div>
    </div>
  );
};

export default NewsCards;
