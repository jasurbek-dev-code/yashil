"use client";

import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import CardFooter from "../CardFooter";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useTranslation } from "react-i18next";

export default function NewsById({ id }) {
  const { t , i18n} = useTranslation();
  const { data, isLoading, error } = useFetchData(['postsbyid', i18n.language], `/posts/${id}`);


  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/news/institute-news" className="hover:underline">{t("news")}</Link> / {data?.title}
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">
            {data?.title}
          </h1>
        </div>

        {/* Rasm */}
        <div className="overflow-x-auto px-4 my-5 flex justify-center">
          <Zoom>
            <Image
              src={data?.photo}
              width={100}
              height={100}
              alt="overview"
              className="w-full h-auto"
            />
          </Zoom>
        </div>

        {/* Matn */}
        <div
          className="overflow-x-auto px-4 my-5 font-sans text-gray-800 dark:text-gray-200 leading-7"
          dangerouslySetInnerHTML={{ __html: data?.body }}
        />

        {/* Footer */}
        <CardFooter />
      </div>
    </div>
  );
}