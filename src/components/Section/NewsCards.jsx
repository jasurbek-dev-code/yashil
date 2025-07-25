"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import NewsCard from './NewsCard';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert';
import { useFetchData } from '@/hooks/useFetchData';
import { useTranslation } from 'react-i18next';

const NewsCards = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useFetchData(['posts', i18n.language], '/posts');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  const news = data?.results || [];
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const paginatedData = news.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 dark:bg-[#121212]">
      <div className="py-14 px-4 lg:px-0 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[30px] font-bold text-gray-800 dark:text-white">
            {t("latest_news")}
          </h2>
          <button
            onClick={() => router.push('/news/institute-news')}
            className="text-sm text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition"
          >
            {t("see_all")}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedData?.map((item, index) => (
            <NewsCard
              key={index}
              imageSrc={item.photo.src}
              description={item.category.name}
              title={item.title}
            />
          ))}
        </div>

        {/* Pagination */}
        {news.length > itemsPerPage && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md border text-sm ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "border-gray-300 text-gray-700 dark:text-white dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCards;
