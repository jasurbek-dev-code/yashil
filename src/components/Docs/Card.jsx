"use client";

import { useRouter } from "next/navigation";

const Card = ({ id, title }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/docs/${id}`); 
  };

  return (
    <div
      className="cursor-pointer bg-white dark:bg-[#2a2a2a] rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
      onClick={handleClick}
    >
      <div className="flex items-center gap-3 p-5 dark:bg-[#2a2a2a]">
        <h3 className="text-green-900 dark:text-green-400 text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
