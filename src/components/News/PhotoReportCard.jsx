"use client";

import Image from "next/image";

const PhotoReportCard = ({ imageSrc }) => {
  return (
    <div className={`bg-white overflow-hidden w-full cursor-pointer rounded-md`}>
      <div className="w-full h-48 relative">
        <Image
          src={imageSrc}
          alt={"Foto reportaj"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PhotoReportCard;