"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import leader1 from "../../../public/images/leader1.svg";
import leader2 from "../../../public/images/leader2.svg";
import leader3 from "../../../public/images/leader3.svg";
import call from "../../../public/icons/call_l.svg";
import sms from "../../../public/icons/sms_l.svg";
import telegram from "../../../public/icons/telegram-little.png";
import instagram from "../../../public/icons/instagram-little.png";
import facebook from "../../../public/icons/facebook-little.png";

export default function AboutLeadership() {
    return (
        <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

            {/* Radiusli container */}
            <div className="relative z-10 bg-white backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

                {/* Breadcrumb */}
                <div className="px-6 pt-6 text-sm text-gray-600 flex justify-between">
                    <div>
                        <Link href="/" className="hover:underline">Asosiy</Link> / Rahbariyat
                    </div>

                    <div className="text-gray-500 text-sm flex gap-1"><Image src={eye} alt="eye" height={20} width={20} /> <p>326</p></div>
                </div>

                {/* Sarlavha */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
                    <h1 className="text-[28px] font-bold text-gray-800">Rahbariyat</h1>
                </div>
                {/* Card */}
                <div className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
                    {/* Image */}
                    <div className="w-[132px] h-[160] flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src={leader1}
                            alt="Kadirov Shuxrat Munavvarovich"
                            width={132}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="pr-10 mt-5">
                        <h2 className="text-2xl font-semibold text-black mb-1">
                            XAMRAYEV IKROMJON FAYZULLOYEVICH
                        </h2>
                        <p className="text-gray-600 mt-3">
                            Buxgalteriya va moliya xisobi bo`limi boshlig’i
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-1 text-[15px] text-gray-600 mt-3">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <Image src={call} alt="phone" width={16} height={16} />
                                    <span>+998 99 870 99 00</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={sms} alt="email" width={16} height={16} />
                                    <span>UU.Karimov@yashil.uz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card */}
                <div className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
                    {/* Image */}
                    <div className="w-[132px] h-[160] flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src={leader2}
                            alt="Kadirov Shuxrat Munavvarovich"
                            width={132}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="pr-10 mt-5">
                        <h2 className="text-2xl font-semibold text-black mb-1">
                            ALLAYEV UCHQUN TURSUNOVICH
                        </h2>
                        <p className="text-gray-600 mt-3">
                            Yuridik bo‘lim boshlig’i
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-1 text-[15px] text-gray-600 mt-3">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <Image src={call} alt="phone" width={16} height={16} />
                                    <span>+998 55 502 50 22</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={sms} alt="email" width={16} height={16} />
                                    <span>info@uzspace.uz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card */}
                <div className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
                    {/* Image */}
                    <div className="w-[132px] h-[160] flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src={leader3}
                            alt="Kadirov Shuxrat Munavvarovich"
                            width={132}
                            height={160}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="pr-10 mt-5">
                        <h2 className="text-2xl font-semibold text-black mb-1">
                           JABBOROV ORIF ABDIMALIKOVICH
                        </h2>
                        <p className="text-gray-600 mt-3">
                            Buxgalteriya va moliya xisobi bo`limi boshlig’i
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-1 text-[15px] text-gray-600 mt-3">
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2">
                                    <Image src={call} alt="phone" width={16} height={16} />
                                    <span>+998 55 502 50 22</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={sms} alt="email" width={16} height={16} />
                                    <span>info@uzspace.uz</span>
                                </div>
                            </div>
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
}