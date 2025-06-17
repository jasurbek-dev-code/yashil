"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import greenBanner from "../../../public/images/green_banner.svg";

const ProjectsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: 1,
      description: '"Yoshlar bandligi dasturlari" Ijrosi yuzasidan amalga oshirilgan loyiha',
      bgImage: "/images/garden.svg",
    },
    {
      id: 2,
      description: '"Yoshlar bandligi dasturlari" Ijrosi yuzasidan amalga oshirilgan loyiha',
      bgImage: "/images/garden.svg",
    },
    {
      id: 3,
      description: '"Yoshlar bandligi dasturlari" Ijrosi yuzasidan amalga oshirilgan loyiha',
      bgImage: "/images/garden.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div className="relative py-16 overflow-hidden">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />

      <div className="max-w-[1520px] mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Loyihalar
        </h2>

        <Slider {...settings}>
          {projects.map((project, index) => {
            const isActive = index === activeSlide;
            return (
              <div key={project.id} className="px-2">
                <div
                  className={`relative h-[500px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform ${
                    isActive ? "scale-100" : "scale-90 opacity-60"
                  } flex flex-col`}
                >
                  <div className="relative flex-1 w-full">
                    <Image
                      src={project.bgImage}
                      alt={project.description}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-black bg-opacity-70 text-white text-center p-4">
                    <p className="text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
