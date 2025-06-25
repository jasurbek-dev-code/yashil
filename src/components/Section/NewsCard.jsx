"use client";

import Image from "next/image";

const NewsCard = ({ imageSrc, description, title }) => {
  return (
    <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-md overflow-hidden w-full cursor-pointer transition-colors">
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Description and Title */}
      <div className="p-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{description}</p>
        <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;