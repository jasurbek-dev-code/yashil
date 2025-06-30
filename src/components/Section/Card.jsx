"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ id, icon, title, body }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/${id}`); 
  };
  return (
    <div className="cursor-pointer bg-white dark:bg-[#1a1a1a] rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden" onClick={handleClick}>
      <div className="flex items-center gap-3 p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2a2a2a]">
        <span className="text-green-900 dark:text-green-400 text-3xl">
          {icon ?  <Image src={icon} alt={title} width={40} height={40} /> : null}
        </span>
        <h3 className="text-green-900 dark:text-green-400 text-xl font-semibold">{title}</h3>
      </div>
      <p className="p-5 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
        {body}
      </p>
    </div>
  );
};

export default Card;
