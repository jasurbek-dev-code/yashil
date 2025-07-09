"use client";

import Image from "next/image";
import Link from "next/link";

const Card = ({ title, photo, link }) => {
  return (
    <Link href={link} target="_blank">
      <div
        className="cursor-pointer bg-white dark:bg-[#2a2a2a] rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
      >
        <div className="flex items-center gap-3 p-5 dark:bg-[#2a2a2a]">
        <Image src={photo} height={40} width={40} alt="Photo" />
          <h3 className="text-green-900 dark:text-green-400 text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;