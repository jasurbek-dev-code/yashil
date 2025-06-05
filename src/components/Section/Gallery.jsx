"use client";

import Image from "next/image";
import greenBanner from "../../../public/images/green_banner.svg";

const images = [
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
    "/images/g1.png",
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

            <section className="max-w-[1200px] mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-white">Galereya</h2>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Barchasi
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-sm">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;