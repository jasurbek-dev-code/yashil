"use client";

import Image from "next/image";
import date from '../../../public/icons/calendar.svg'
import eye from "../../../public/icons/eye-little.svg";

const VideoReportCard = ({ imageSrc, title }) => {
  return (
    <div className={`bg-white overflow-hidden w-full cursor-pointer border border-gray-200 p-4 rounded-xl shadow-sm`}>
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Description and Title */}
      <div className="py-4">
        <h3 className={`text-[15px] font-semibold "text-gray-900"}`}>{title}</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 opacity-50">
            <Image src={date} height={20} width={20} alt="date"/>
            <p>12.12.23 - 13:00</p>
        </div>
        <div className="flex gap-2">
            <Image src={eye} height={20} width={20} alt="eye"/>
            <p className="opacity-50">234324</p>
        </div>
      </div>
    </div>
  );
};

export default VideoReportCard;