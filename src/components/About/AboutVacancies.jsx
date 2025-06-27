"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import CardFooter from "../CardFooter";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";

export default function Vacancies() {
  const { data, isLoading, error } = useFetchData('vacancy', '/about/vacancy');

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      {/* Radiusli container */}
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-[20px] shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / Bo’sh ish o‘rinlari
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
            <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0" />
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">Bo’sh ish o‘rinlari</h1>
        </div>

        {/* Jadval */}
        <div className="overflow-x-auto px-4 pb-6">
          <table className="min-w-full text-sm text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#1a1a1a]">
                <th className="px-4 py-4 border border-gray-300 dark:border-gray-600 font-bold text-center">№</th>
                <th className="px-4 py-4 border border-gray-300 dark:border-gray-600 font-bold text-center">Vakant lavozimlar</th>
                <th className="px-4 py-4 border border-gray-300 dark:border-gray-600 font-bold text-center">Talab qilinadigan ma’lumot</th>
                <th className="px-4 py-4 border border-gray-300 dark:border-gray-600 font-bold text-center">Bo’sh ish o‘rinlari soni</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 border border-gray-300 dark:border-gray-600 text-center">{item.id}</td>
                  <td className="px-4 py-4 border border-gray-300 dark:border-gray-600">{item.name}</td>
                  <td className="px-4 py-4 border border-gray-300 dark:border-gray-600 text-center">{item.education}</td>
                  <td className="px-4 py-4 border border-gray-300 dark:border-gray-600 text-center">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <CardFooter />
      </div>
    </div>
  );
}
