"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import CardFooter from "../CardFooter";
import ErrorAlert from "../ErrorAlert";
import Loading from "../Loading";
import { useFetchData } from "@/hooks/useFetchData";

export default function ServiceById({ id }) {
  const { data, isLoading, error } = useFetchData('services', `/services/${id}`);
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">

      {/* Breadcrumb */}
      <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
        <div>
          <Link href="/services" className="hover:underline">Services</Link> / {data.title}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
          <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0" />
          <p>326</p>
        </div>
      </div>

      {/* Sarlavha */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
        <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">
           {data.title}
        </h1>
      </div>

      {/* Kontent */}
      <div className="p-5 mx-auto text-gray-800 dark:text-gray-200 leading-relaxed text-[15px] whitespace-pre-line">
        <p className="mb-4">
           {data.body}
        </p>
      </div>

      {/* Footer */}
      <CardFooter />
    </div>
  );
}
