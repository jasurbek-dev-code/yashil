"use client";

import telegram from "../../public/icons/telegram-little.png";
import instagram from "../../public/icons/instagram-little.png";
import facebook from "../../public/icons/facebook-little.png";
import Image from "next/image";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "./Loading";
import ErrorAlert from "./ErrorAlert";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CardFooter() {
    const {i18n} = useTranslation()
    const { data, isLoading, error } = useFetchData(['contact', i18n.language], '/about/get-contact');
    if (isLoading) return <Loading />;
    if (error) return <ErrorAlert />;
    return (
        <div className="flex justify-between text-gray-500 dark:text-gray-400 border-t dark:border-gray-600 my-3 px-4 py-4">
            <div className="flex items-center gap-2">
                {
                    data.facebook ? <Link href={data.facebook} target="_blank">
                        <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                    </Link>
                        : null
                }
                {
                    data.instagram ? <Link href={data.instagram} target="_blank">
                        <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                    </Link>
                        : null
                }
                {
                    data.telegram ? <Link href={data.telegram} target="_blank">
                        <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                    </Link>
                        : null}
            </div>
            {/* <p className="text-[15px]">
                Oxirgi yangilanish: 2023-07-21 10:21:30
            </p> */}
        </div>
    );
}