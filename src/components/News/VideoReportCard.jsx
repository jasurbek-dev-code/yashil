"use client";

// import Image from "next/image";
// import date from '../../../public/icons/calendar.svg';
// import eye from "../../../public/icons/eye-little.svg"

const VideoReportCard = ({ link, title }) => {
  // YouTube ID ni ajratish
  const getYouTubeId = (url) => {
    const match = url?.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(link);
  const isYouTube = !!videoId;
  const isVideoFile = link && /\.(mp4|webm|ogg)$/i.test(link);

  return (
    <div className="bg-white dark:bg-[#0f1a0f] overflow-hidden w-full cursor-pointer border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm">
      {/* Video preview */}
      <div className="w-full h-48 relative rounded-xl overflow-hidden">
        {isYouTube ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : isVideoFile ? (
          <video controls className="absolute top-0 left-0 w-full h-full rounded-xl object-cover">
            <source src={link} type="video/mp4" />
            Brauzeringiz video formatni qo‘llab-quvvatlamaydi.
          </video>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-600 text-sm">
            Noto‘g‘ri video havola
          </div>
        )}
      </div>

      {/* Title */}
      <div className="py-4">
        <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>

      {/* Date and Views */}
      {/* <div className="flex justify-between text-sm">
        <div className="flex gap-2 text-gray-600 dark:text-gray-400 opacity-50">
          <Image src={date} height={20} width={20} alt="date" className="dark:invert dark:brightness-0 dark:contrast-100"/>
          <p>12.12.23 - 13:00</p>
        </div>
        <div className="flex gap-2 text-gray-600 dark:text-gray-400">
          <Image src={eye} height={20} width={20} alt="eye" className="dark:invert dark:brightness-0 dark:contrast-100"/>
          <p>326</p>
        </div>
      </div> */}
    </div>
  );
};

export default VideoReportCard;
