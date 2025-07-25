"use client";

import Link from "next/link";

const Card = ({ title, link }) => {
  return (
    <Link href={link} target="_blank">
      <div
        className="cursor-pointer bg-white dark:bg-[#2a2a2a] rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
      >
        <div className="flex items-center gap-3 p-5 dark:bg-[#2a2a2a]">
          <h3 className="text-green-900 dark:text-green-400 text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;