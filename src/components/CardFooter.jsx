"use client";

import telegram from "../../public/icons/telegram-little.png";
import instagram from "../../public/icons/instagram-little.png";
import facebook from "../../public/icons/facebook-little.png";
import Image from "next/image";

export default function CardFooter() {
    return (
        <div className="flex justify-between text-gray-500 dark:text-gray-400 border-t dark:border-gray-600 my-3 px-4 py-4">
            <div className="flex items-center gap-2">
                <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
            </div>
            <p className="text-[15px]">
                Oxirgi yangilanish: 2023-07-21 10:21:30
            </p>
        </div>
    );
}