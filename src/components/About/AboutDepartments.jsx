"use client";

import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import call from "../../../public/icons/call_l.svg";
import sms from "../../../public/icons/sms_l.svg";
import CardFooter from "../CardFooter";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useTranslation } from "react-i18next";

export default function AboutDepartments() {
  const { t } = useTranslation();
  const { data, isLoading, error } = useFetchData(
    'employees',
    '/about/employees?department=department'
  );
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden transition-colors">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">{t("home")}</Link> / {t("departments")}
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">{t("departments")}</h1>
        </div>

        {/* Card 1 */}
        {data?.results?.map((person, i) => (
          <div key={i} className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
            {/* Image */}
            <div className="w-[132px] h-[160] flex-shrink-0 rounded-lg overflow-hidden">
              <Zoom>
                <Image
                  src={person?.photo?.src}
                  alt={person?.fullname}
                  width={person?.photo?.weight}
                  height={person?.photo?.height}
                  className="object-cover w-full h-full"
                />
              </Zoom>
            </div>

            {/* Text Content */}
            <div className="pr-10 mt-5">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-1">
                {person?.fullname}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {person?.position}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-1 text-[15px] text-gray-600 dark:text-gray-300 mt-3">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <Image src={call} alt="phone" width={16} height={16} />
                    <span>{person?.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={sms} alt="email" width={16} height={16} />
                    <span>{person?.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Footer */}
        <CardFooter />
      </div>
    </div>
  );
}
