"use client";

import Image from "next/image";
import Link from "next/link";
import greenBanner from "../../../public/images/green_banner.svg";
import eye from "../../../public/icons/eye-little.svg";
import telegram from "../../../public/icons/telegram-little.png";
import instagram from "../../../public/icons/instagram-little.png";
import facebook from "../../../public/icons/facebook-little.png";

export default function Vacancies() {
  return (
    <div className="relative w-full py-10 px-4 md:px-10 -z-0">
      {/* Background Image */}
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
        quality={100}
        priority
      />

      {/* Radiusli container */}
      <div className="relative z-10 bg-white backdrop-blur-md rounded-[20px] shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / Bo’sh ish o‘rinlari
          </div>
          <div className="text-gray-500 text-sm flex gap-1">
            <Image src={eye} alt="eye" height={20} width={20} />
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Bo’sh ish o‘rinlari</h1>
        </div>

        {/* Jadval */}
        <div className="overflow-x-auto px-4 pb-6">
          <table className="min-w-full text-sm text-gray-800 border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-4 border border-gray-300 font-bold text-center">№</th>
                <th className="px-4 py-4 border border-gray-300 font-bold text-center">Vakant lavozimlar</th>
                <th className="px-4 py-4 border border-gray-300 font-bold text-center">Talab qilinadigan ma’lumot</th>
                <th className="px-4 py-4 border border-gray-300 font-bold text-center">Bo’sh ish o‘rinlari soni</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-4 border border-gray-300 text-center">1</td>
                <td className="px-4 py-4 border border-gray-300">Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter</td>
                <td className="px-4 py-4 border border-gray-300 text-center">Oliy</td>
                <td className="px-4 py-4 border border-gray-300 text-center">2</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-gray-300 text-center">2</td>
                <td className="px-4 py-4 border border-gray-300">Buxgalteriya hisobi va hisobot bo‘limi - Mutaxasis</td>
                <td className="px-4 py-4 border border-gray-300 text-center">Oliy</td>
                <td className="px-4 py-4 border border-gray-300 text-center">5</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-gray-300 text-center">3</td>
                <td className="px-4 py-4 border border-gray-300">Kadrlar bo‘limi - Mutaxasis</td>
                <td className="px-4 py-4 border border-gray-300 text-center">Oliy</td>
                <td className="px-4 py-4 border border-gray-300 text-center">1</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-gray-300 text-center">4</td>
                <td className="px-4 py-4 border border-gray-300">Kadrlar bo‘limi - Mutaxasis</td>
                <td className="px-4 py-4 border border-gray-300 text-center">Oliy</td>
                <td className="px-4 py-4 border border-gray-300 text-center">1</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-gray-300 text-center">5</td>
                <td className="px-4 py-4 border border-gray-300">Kadrlar bo‘limi - Mutaxasis</td>
                <td className="px-4 py-4 border border-gray-300 text-center">Oliy</td>
                <td className="px-4 py-4 border border-gray-300 text-center">1</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-gray-300 text-center">6</td>
                <td className="px-4 py-4 border border-gray-300">Kadrlar bo‘limi - Mutaxasis</td>
                <td className="px-4 py-4 border border-gray-300 text-center">Oliy</td>
                <td className="px-4 py-4 border border-gray-300 text-center">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-gray-500 px-4 pb-4 text-[17px]">
          <div className="flex items-center gap-2">
            <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer" />
            <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer" />
            <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
