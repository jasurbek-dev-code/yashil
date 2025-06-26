"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import CardFooter from "../CardFooter";

export default function AboutSubOrganizations() {
    return (
        <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">
            {/* Radiusli container */}
            <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-[20px] shadow-xl max-w-[1200px] mx-auto overflow-hidden">

                {/* Breadcrumb */}
                <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
                    <div>
                        <Link href="/" className="hover:underline">Asosiy</Link> / Hududiy filiallar
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
                        <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0" />
                        <p>326</p>
                    </div>
                </div>

                {/* Sarlavha */}
                <div className="flex justify-between items-center px-6 py-4">
                    <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">Hududiy filiallar</h1>
                </div>

                <div className="overflow-x-auto px-4 pb-6">
                    {/* Xarita rasmi */}
                    <div className="flex-1 min-w-[300px] max-w-[700px]">
                        <Image
                            src="/images/karta.svg"
                            alt="Uzbekistan map"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg dark:invert dark:brightness-0"
                        />
                    </div>

                    {/* Ma'lumot bloki */}
                    <div className="flex-1 min-w-[300px] bg-transparent rounded-xl text-[18px] leading-relaxed text-gray-800 dark:text-gray-200">
                        <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                            Navoiy viloyati
                        </h2>
                        <p className="mt-2">
                            Boshqarma boshlig‘i:&nbsp;<span className="underline font-medium">Abdug‘aniyev Sardor Shuxratovich</span>
                        </p>
                        <p className="mt-2">
                            Qabul kunlari:&nbsp;<span className="font-medium">Dushanba 09:00–13:00</span>
                        </p>
                        <p className="mt-2">
                            Manzil:&nbsp;<span className="font-medium">Navoiy shahri, Navoiy ko‘chasi 30A-uy</span>
                        </p>
                        <p className="mt-2">
                            Telefon:&nbsp;<span className="font-medium">36–224–36–51</span>
                        </p>
                        <p className="mt-2">
                            Faks:&nbsp;<span className="font-medium">36–224–36–51</span>
                        </p>
                        <p className="mt-2">
                            Email:&nbsp;<span className="font-medium">mt.matbuot@inbox.uz</span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
               <CardFooter/>
            </div>
        </div>
    );
}
