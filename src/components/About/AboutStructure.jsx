"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import structure from "../../../public/images/structure.svg";
import CardFooter from "../CardFooter";

export default function AboutStructure() {
    return (
        <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

            {/* Radiusli container */}
            <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

                {/* Breadcrumb */}
                <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
                    <div>
                        <Link href="/" className="hover:underline">Asosiy</Link> / Tashkiliy tuzilma
                    </div>

                    <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
                        <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0" />
                        <p>326</p>
                    </div>
                </div>

                {/* Sarlavha */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                    <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">Tashkiliy tuzilma</h1>
                </div>

                {/* Jadval */}
                <div className="overflow-x-auto px-4 my-5 flex justify-center">
                    <Image src={structure} alt="structure" className="w-full h-auto" />
                </div>

                {/* Footer */}
                <CardFooter />
            </div>
        </div>
    );
}