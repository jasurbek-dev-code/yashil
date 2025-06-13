"use client";

import Image from "next/image";
import greenBanner from "../../../public/images/green_banner.svg";

const images = [
  "/images/g1.svg",
  "/images/g2.svg",
  "/images/g3.svg",
  "/images/g4.svg",
  "/images/g7.svg",
  "/images/g6.svg",
  "/images/g5.svg",
  "/images/g8.svg",
  "/images/g9.svg",
  "/images/g1.svg",
  "/images/g2.svg",
  "/images/g3.svg",
];

const Gallery = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />

      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-white">Galereya</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Barchasi
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
          {images.map((src, index) => (
            <div key={index} className="relative w-full aspect-[4/5]">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;