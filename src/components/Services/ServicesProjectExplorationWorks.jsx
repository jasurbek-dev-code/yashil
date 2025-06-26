"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import CardFooter from "../CardFooter";

export default function ServicesProjectExplorationWorks() {
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / Loyiha qidiruv ishlari
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
            <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0" />
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">
            Loyiha qidiruv ishlari
          </h1>
        </div>

        {/* Asosiy matn */}
        <div className="p-3 max-w-4xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed text-[15px] whitespace-pre-line">
          <p className="mb-4">
            “Kosmik monitoring va geoxavfsizlik texnologiyalari markazi” mas’uliyati cheklangan jamiyati
            O’zbekiston Respublikasi Vazirlar Mahkamasining 2022-yil 20-maydagi “Kosmik tadqiqotlar va
            texnologiyalar agentligi faoliyatini yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi 274-son
            qarori bilan “O‘zbekkosmos” agentligi tizimida “Kosmik monitoring va geoxavfsizlik texnologiyalari
            markazi” davlat unitar korxonasi tashkil etilgan.
          </p>
          <p className="mb-4">
            O’zbekiston Respublikasi Prezidentining 2023-yil 24-maydagi “Ma’muriy islohotlar doirasida raqamli
            texnologiyalar sohasida davlat boshqaruvini samarali tashkil etish chora-tadbirlari to‘g‘risida”gi
            PF-76-son Farmoni bilan “O‘zbekkosmos” agentligi muassisliligidagi “Kosmik monitoring va geoxavfsizlik
            texnologiyalari markazi” mas’uliyati cheklangan jamiyati etib qayta tashkil etilgan.
          </p>
          <p className="mb-4">
            “Kosmik monitoring va geoxavfsizlik texnologiyalari markazi” mas’uliyati cheklangan jamiyatining
            asosiy vazifalari etib quyidagilar belgilangan:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Kosmik monitoringni amalga oshirish;</li>
            <li>Sun’iy yo‘ldosh apparatlari orqali yerni masofadan zondlash, unga ma’lumotlarni qabul qilish, saqlash, qayta ishlash va uzatish;</li>
            <li>Kosmik sohaga oid xizmatlarni (kosmik faoliyat natijalarini qayta ishlash hamda uni jismoniy va yuridik shaxslarga taqdim etish, kosmik faoliyatga oid masalalar bo‘yicha konsalting xizmatlari va boshqalar) ko‘rsatish;</li>
            <li>Kosmik sohaga ilmiy va innovatsion texnologiyalarni keng joriy etish maqsadida mazkur sohadagi ilmiy va innovatsion ishlarni amalga oshirish;</li>
            <li>Kosmik va geoxavfsizlik texnologiyalarini, xususan, uchuvchisiz uchish apparatlari yordamida iqtisodiyot tarmoqlari, mudofaa va xavfsizlik sohalari hamda hududlarning ijtimoiy-iqtisodiy faoliyat samaradorligini oshirishga ko‘maklashish.</li>
          </ul>
          <p className="mb-4">
            Markaz tomonidan davlat organlari va tashkilotlari, xo‘jalik birlashmalari, mahalliy ijro etuvchi hokimiyat organlari, jismoniy va yuridik shaxslarga kosmik monitoring, sun’iy yo‘ldosh hamda uchuvchisiz uchish apparatlari orqali yerni masofadan zondlash ma’lumotlarini taqdim etish va kosmik sohaga oid boshqa xizmatlar ko‘rsatish shartnoma asosida amalga oshirilishi mumkin.
          </p>
        </div>

        {/* Footer */}
        <CardFooter/>
      </div>
    </div>
  );
}
