"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import CardFooter from "../CardFooter";

export default function MinistersResolutions() {
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / O’zbekiston Respublikasi Vazirlar Maxkamasining qarorlari
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
            <Image
              src={eye}
              alt="eye"
              height={20}
              width={20}
              className="dark:invert dark:brightness-0"
            />
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            O’zbekiston Respublikasi Vazirlar Maxkamasining qarorlari
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
              {[...Array(7)].map((_, i) => (
                <tr key={i}>
                  <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-bl-lg shadow-sm">
                    SHNK 12341244
                  </td>
                  <td className="px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm">
                    Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                  </td>
                  <td className="text-center px-6 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 rounded-br-lg shadow-sm">
                    <Link href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Ochish <span className="text-xs">(UZ/RU)</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <CardFooter/>
      </div>
    </div>
  );
}
