"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import leader1 from "../../../public/images/leader1.svg";
import leader2 from "../../../public/images/leader2.svg";
import call from "../../../public/icons/call_l.svg";
import sms from "../../../public/icons/sms_l.svg";
import clock from "../../../public/icons/clock_l.svg";
import telegram from "../../../public/icons/telegram-little.png";
import instagram from "../../../public/icons/instagram-little.png";
import facebook from "../../../public/icons/facebook-little.png";

export default function AboutLeadership() {
    return (
        <div className="relative w-full pr-4 -z-0">

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
                    <h1 className="text-xl font-bold text-gray-800">Rahbariyat</h1>
                </div>
                {/* Card */}
                <div className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
                    {/* Image */}
                    <div className="w-52 h-64 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src={leader1}
                            alt="Kadirov Shuxrat Munavvarovich"
                            width={190}
                            height={230}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pr-10">
                        <h2 className="text-xl font-semibold text-black mb-1">
                            Kadirov Shuxrat Munavvarovich
                        </h2>
                        <p className="text-gray-600 mb-4 mt-6">
                            O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi huzuridagi
                            Kosmik tadqiqotlar va texnologiyalar agentligi direktori
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-1 text-[15px] text-gray-600 mb-4 mt-6">
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
                            <div className="flex items-center gap-2">
                                <Image src={clock} alt="clock" width={16} height={16} />
                                <span>Fuqarolarni qabul qilish: Seshanba 10:00 dan 12:00 gacha</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 border-t pt-4 mt-6">
                            <button className="bg-green-900 text-white px-5 py-1.5 rounded-full text-sm hover:bg-green-800">
                                Funksiya
                            </button>
                            <button className="bg-green-900 text-white px-5 py-1.5 rounded-full text-sm hover:bg-green-800">
                                Biografiya
                            </button>
                        </div>
                    </div>
                </div>
                  {/* Card */}
                <div className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
                    {/* Image */}
                    <div className="w-52 h-64 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                            src={leader2}
                            alt="Kadirov Shuxrat Munavvarovich"
                            width={190}
                            height={230}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pr-10">
                        <h2 className="text-xl font-semibold text-black mb-1">
                            Kadirov Shuxrat Munavvarovich
                        </h2>
                        <p className="text-gray-600 mb-4 mt-6">
                            O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi huzuridagi
                            Kosmik tadqiqotlar va texnologiyalar agentligi direktori
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-1 text-[15px] text-gray-600 mb-4 mt-6">
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
                            <div className="flex items-center gap-2">
                                <Image src={clock} alt="clock" width={16} height={16} />
                                <span>Fuqarolarni qabul qilish: Seshanba 10:00 dan 12:00 gacha</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 border-t pt-4 mt-6">
                            <button className="bg-green-900 text-white px-5 py-1.5 rounded-full text-sm hover:bg-green-800">
                                Funksiya
                            </button>
                            <button className="bg-green-900 text-white px-5 py-1.5 rounded-full text-sm hover:bg-green-800">
                                Biografiya
                            </button>
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