"use client";

import { useState } from 'react';
import Link from 'next/link';
import PhotoReportCard from './PhotoReportCard';
import CardFooter from '../CardFooter';
import { useFetchData } from '@/hooks/useFetchData';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert';
import { useTranslation } from 'react-i18next';

const PhotoReport = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useFetchData(['photos', i18n.language], '/gallery/photos');
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const paginatedData = data?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">
        
        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">{t("home")}</Link> / {t("photo_report")}
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">{t("photo_report")}</h1>
        </div>

        {/* Cards */}
        <div className="relative px-6 my-3">
          <div className="px-4 lg:px-0 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedData.map((item, index) => (
                <PhotoReportCard key={index} imageSrc={item?.file?.src} />
              ))}
            </div>

            {/* Pagination */}
            {data?.length > itemsPerPage && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setPage(p => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50 dark:bg-gray-700 dark:text-white"
                >
                  {t("prev")}
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`px-3 py-1 rounded-md ${
                      page === i + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50 dark:bg-gray-700 dark:text-white"
                >
                  {t("next")}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <CardFooter />
      </div>
    </div>
  );
};

export default PhotoReport;
