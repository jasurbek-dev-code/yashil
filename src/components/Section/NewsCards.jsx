"use client";

import { usePathname } from 'next/navigation';
import news1 from '../../../public/images/news1.svg';
import news2 from '../../../public/images/news2.svg';
import news3 from '../../../public/images/news3.svg';
import news4 from '../../../public/images/news4.svg';
import news5 from '../../../public/images/news5.svg';
import news6 from '../../../public/images/news6.svg';
import greenBanner from "../../../public/images/green_banner.svg";
import NewsCard from './NewsCard';
import Image from 'next/image';

const NewsCards = () => {
  const pathname = usePathname();
  const isSpecial = pathname.startsWith("/news");

  const data = [
    {
      img: news1,
      desc: "25.05.2022 | Agentlik yangiliklari",
      title: "AOKA vakillari Ozarbajondagi Xalqaro media forumda qatnashdi"
    },
    {
      img: news2,
      desc: "25.05.2022 | Agentlik yangiliklari",
      title: "AOKA direktori: 'Kutubxonalar yoshlarni ziyo nuri bilan o'ziga rom etuvchi makon bo'lib qolishiga ishonaman'"
    },
    {
      img: news3,
      desc: "25.05.2022 | Agentlik yangiliklari",
      title: "AOKAda YeXHT DIIHB delegatsiyasi bilan uchrashuv o'tkazildi"
    },
    {
      img: news4,
      desc: "25.05.2022 | Agentlik yangiliklari",
      title: "AOKA vakillari Ozarbajondagi Xalqaro media forumda qatnashdi"
    },
    {
      img: news5,
      desc: "25.05.2022 | Agentlik yangiliklari",
      title: "AOKA direktori: 'Kutubxonalar yoshlarni ziyo nuri bilan o'ziga rom etuvchi makon bo'lib qolishiga ishonaman'"
    },
    {
      img: news6,
      desc: "25.05.2022 | Agentlik yangiliklari",
      title: "AOKAda YeXHT DIIHB delegatsiyasi bilan uchrashuv o'tkazildi"
    },
  ];

  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 dark:bg-[#121212]">
      {isSpecial && (
        <Image
          src={greenBanner}
          alt="background"
          fill
          className="-z-20 object-cover"
        />
      )}

      <div className={`${isSpecial ? "" : "py-14"} px-4 lg:px-0 max-w-[1200px] mx-auto`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-[30px] font-bold ${isSpecial ? "text-white" : "text-gray-800 dark:text-white"}`}>
            So'ngi yangiliklar
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition">
            Barchasi
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <NewsCard
              key={index}
              imageSrc={item.img}
              description={item.desc}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
