"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import telegram from "../../../public/icons/telegram-little.png";
import instagram from "../../../public/icons/instagram-little.png";
import facebook from "../../../public/icons/facebook-little.png";

export default function Decrees() {
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      {/* Radiusli container */}
      <div className="relative z-10 bg-white backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / O’zbekiston Respublikasi Prezidentining farmonlari
          </div>

          <div className="text-gray-500 text-sm flex gap-1"><Image src={eye} alt="eye" height={20} width={20} /> <p>326</p></div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
          <h1 className="text-xl font-bold text-gray-800">O’zbekiston Respublikasi Prezidentining farmonlari</h1>
        </div>

        {/* Jadval */}
        <div className="overflow-x-auto px-4 my-5">
          <table className="min-w-full text-sm text-black-700">
            <thead>
              <tr>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 border border-gray-300 rounded-tl-lg">
                  Shifr
                </th>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 border border-gray-300">
                  Nomi
                </th>
                <th className="text-center px-6 py-5 font-bold bg-gray-100 border border-gray-300 rounded-tr-lg">
                  Fayl
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center px-6 py-6 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-6 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-6 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-4 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-4 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-4 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-4 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-4 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-bl-lg shadow-sm">
                  SHNK 12341244
                </td>
                <td className="px-6 py-4 bg-white border border-gray-300 shadow-sm">
                  Buxgalteriya hisobi va hisobot bo‘limi - Bosh buxgalter
                </td>
                <td className="text-center px-6 py-4 bg-white border border-gray-300 rounded-br-lg shadow-sm">
                  <Link href="#" className="text-blue-600 hover:underline">
                    Ochish <span className="text-xs">(UZ/RU)</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-gray-500 border-t my-3 px-4 py-4">
          <div className="flex items-center gap-2">
            <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer" />
            <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer" />
            <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer" />
          </div>
          <p className="text-[15px] text-gray-500">
            Oxirgi yangilanish: 2023-07-21 10:21:30
          </p>
        </div>
      </div>
    </div>
  );
}