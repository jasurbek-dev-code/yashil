"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import g from '../../../public/images/g2.svg'

const PhotoReportCard = ({ imageSrc }) => {
  return (
    <div className="bg-white overflow-hidden w-full cursor-pointer rounded-md">
      <div className="w-full h-48 relative">
        <Zoom>
          <Image
            src={imageSrc ? imageSrc : g}
            alt="Foto reportaj"
            fill
            className="object-cover rounded-xl"
          />
        </Zoom>
      </div>
    </div>
  );
};

export default PhotoReportCard;
