"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const NewsCard = ({ imageSrc, description, title }) => {
  return (
    <div className="bg-white dark:bg-[#0f1a0f] overflow-hidden w-full cursor-pointer rounded-xl shadow-sm transition">
      {/* Image */}

      <div className="w-full h-48 relative">
        <Zoom>
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </Zoom>
      </div>

      {/* Description and Title */}
      <div className="py-4 px-3">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{description}</p>
        <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
