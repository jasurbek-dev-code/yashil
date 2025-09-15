"use client";

import Image from "next/image";
import eye from "../../../public/icons/eye-little.svg";
import { useRouter } from "next/navigation";

const NewsCard = ({ imageSrc, description, title, views, id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/news/institute-news/${id}`);
  };
  return (
    <div
    onClick={handleClick} 
    className="bg-white dark:bg-[#0f1a0f] overflow-hidden w-full cursor-pointer rounded-xl shadow-sm transition flex flex-col">
      {/* Image */}
      <div className="w-full h-48 relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
      </div>

      {/* Description, Title va Views */}
      <div className="flex flex-col flex-1 justify-between p-3 gap-2">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            {description?.length > 100 ? description.slice(0, 100) + "..." : description}
          </p>
          <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        {/* Views - past o‘ngda flex bilan */}
        {
          views ?
            <div className="flex justify-end">
              <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1">
                <Image
                  src={eye}
                  alt="eye"
                  height={16}
                  width={16}
                  className="dark:invert dark:brightness-0"
                />
                <p>{views}</p>
              </div>
            </div>
            : null
        }
      </div>
    </div>
  );
};

export default NewsCard;
