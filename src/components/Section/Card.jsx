"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Card.css";

const Card = ({ id, icon, photo, width, height ,title, body }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/${id}`);
  };

  return (
    <div className="card-container cursor-pointer" onClick={handleClick}>
      <div className="card-inner group">
        {/* Front Side */}
        <div className="card-front bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md overflow-hidden">
          <div className="flex items-center gap-3 p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2a2a2a]">
            {icon ? (
              <Image src={icon} alt={title} width={40} height={40} />
            ) : null}
            <h3 className="text-green-900 dark:text-green-400 text-xl font-semibold">
              {title}
            </h3>
          </div>
          <p className="p-5 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            {body}...
          </p>
        </div>

        {/* Back Side */}
        <div className="card-back bg-green-900 text-white rounded-xl shadow-md flex flex-col items-center justify-center text-center p-5">
          {/* <p className="text-lg font-medium">Ko‘proq ma’lumot olish uchun bosing</p> */}
          <Image src={photo} width={width} height={height} alt="photo"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
