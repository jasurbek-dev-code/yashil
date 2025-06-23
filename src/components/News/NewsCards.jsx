"use client";

import news1 from '../../../public/images/news1.svg'
import news2 from '../../../public/images/news2.svg'
import news3 from '../../../public/images/news3.svg'
import news4 from '../../../public/images/news4.svg'
import news5 from '../../../public/images/news5.svg'
import news6 from '../../../public/images/news6.svg'
import eye from "../../../public/icons/eye-little.svg";
import telegram from "../../../public/icons/telegram-little.png";
import instagram from "../../../public/icons/instagram-little.png";
import facebook from "../../../public/icons/facebook-little.png";
import NewsCard from './NewsCard';
import Image from 'next/image';
import Link from 'next/link';

const NewsCards = () => {
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
  ]

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

      {/* Radiusli container */}
      <div className="relative z-10 bg-white backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / So‘nggi yangiliklar
          </div>

          <div className="text-gray-500 text-sm flex gap-1"><Image src={eye} alt="eye" height={20} width={20} /> <p>326</p></div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
          <h1 className="text-[28px] font-bold text-gray-800">So‘nggi yangiliklar</h1>
        </div>

        {/* Jadval */}
        <div className="relative bg-cover bg-center bg-no-repeat px-6 my-3">
          <div className={`px-4 lg:px-0 max-w-[1200px] mx-auto`}>
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
};

export default NewsCards;