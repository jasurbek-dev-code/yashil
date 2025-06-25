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
import Image from 'next/image';
import Link from 'next/link';
import PhotoReportCard from './PhotoReportCard';

const PhotoReport = () => {
    const data = [
        { img: news1 },
        { img: news2 },
        { img: news3 },
        { img: news4 },
        { img: news5 },
        { img: news6 },
    ];

    return (
        <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

            {/* Radiusli container */}
            <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

                {/* Breadcrumb */}
                <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
                    <div>
                        <Link href="/" className="hover:underline">Asosiy</Link> / Fotoreportaj
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
                        <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0"/>
                        <p>326</p>
                    </div>
                </div>

                {/* Sarlavha */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                    <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">Fotoreportaj</h1>
                </div>

                {/* Jadval */}
                <div className="relative px-6 my-3">
                    <div className="px-4 lg:px-0 max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.map((item, index) => (
                                <PhotoReportCard key={index} imageSrc={item.img} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-600 my-3 px-4 py-4">
                    <div className="flex items-center gap-2">
            <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
            <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
            <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                    </div>
                    <p className="text-[15px]">
                        Oxirgi yangilanish: 2023-07-21 10:21:30
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotoReport;
