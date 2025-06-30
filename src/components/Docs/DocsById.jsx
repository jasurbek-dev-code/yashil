"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import CardFooter from "../CardFooter";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";

export default function DocsDatails({ id }) {
  const { data, isLoading, error } = useFetchData('categories', `/documents/?category=${id}`);
  console.log(data?.results);

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      {/* Radiusli container */}
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/docs" className="hover:underline">Docs</Link> / O’zbekiston Respublikasi qonunlari
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
            <Image
              src={eye}
              alt="eye"
              height={20}
              width={20}
              className="dark:invert dark:brightness-0 dark:contrast-100"
            />
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            O’zbekiston Respublikasi qonunlari
          </h1>
        </div>

        {/* Jadval */}
        <div className="overflow-x-auto px-4 my-5">
          <table className="min-w-full text-sm text-black-700 dark:text-gray-200">
            <thead>
              <tr>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tl-lg">
                  Shifr
                </th>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600">
                  Nomi
                </th>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded-tr-lg">
                  Fayl
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.results?.length ? data.results.map((item, i) => (
                <tr key={i}>
                  <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-bl-lg shadow-sm">
                    {item.shifr}
                  </td>
                  <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                    {item.title}
                  </td>
                  <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-br-lg shadow-sm">
                    <button
                      onClick={() => window.open(item.file, '_blank')}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Ochish 
                    </button>
                  </td>
                </tr>
              )) : null}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <CardFooter />
      </div>
    </div>
  );
}

