"use client";

import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import eye from "../../../public/icons/eye-little.svg";
import call from "../../../public/icons/call_l.svg";
import sms from "../../../public/icons/sms_l.svg";
import CardFooter from "../CardFooter";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";

export default function AboutCenterApparat() {
  const { data, isLoading, error } = useFetchData(
    'employees',
    '/about/employees?department=central_hardware'
  );
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

      {/* Radiusli container */}
      <div className="relative z-10 bg-white dark:bg-[#1a1a1a] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden transition-colors">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / Markaziy apparat
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
            <Image src={eye} alt="eye" height={20} width={20} />
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">
            Markaziy apparat
          </h1>
        </div>

        {/* Card 1 */}
        {data?.results?.map((person, i) => (
          <div key={i} className="flex flex-wrap md:flex-nowrap items-start gap-6 rounded-xl p-6">
            {/* Image */}
            <div className="w-[132px] h-[160] flex-shrink-0 rounded-lg overflow-hidden">
              <Zoom>
                <Image
                  src={person.photo.src}
                  alt={person.fullname}
                  width={person.photo.weight}
                  height={person.photo.height}
                  className="object-cover w-full h-full"
                />
              </Zoom>
            </div>

            {/* Text Content */}
            <div className="pr-10 mt-5">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-1">
                {person.fullname}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {person.position}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-1 text-[15px] text-gray-600 dark:text-gray-300 mt-3">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <Image src={call} alt="phone" width={16} height={16} />
                    <span>{person.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={sms} alt="email" width={16} height={16} />
                    <span>{person.email}</span>
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
