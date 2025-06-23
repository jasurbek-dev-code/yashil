import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const PartnersCarousel = () => {
  const partners = [
    {
      title: "O'zbekiston Respublikasi prezidentining rasmiy vebsayti",
      image: "/images/g.svg", 
    },
    {
      title: "O'zbekiston Respublikasi Bosh Prokuraturasi rasmiy vebsayti",
      image: "/images/p.svg",
    },
    {
      title: "Yagona Davlat Interaktiv xizmatlari",
      image: "/images/x.svg",
    },
    {
      title: "O'zbekiston Respublikasi Hukumat portali",
      image: "/images/g.svg",
    },
    {
      title: "O'zbekiston Respublikasi Adliya vazirligi",
      image: "/images/p.svg",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto px-4 lg:px-0 py-8 max-w-[1200px]">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Hamkorlarimiz</h2>

      <div className="relative">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="px-2 h-full">
              <div
                className="bg-white border rounded-lg h-full flex flex-col
                shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.1)]
                hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.1)]
                transition-shadow duration-300"
                style={{ height: '220px' }}
              >
                <div className="h-28 flex items-center justify-center">
                  {partner.image && (
                    <Image
                      src={partner.image}
                      alt={partner.title}
                      className="max-h-16 max-w-[80%] object-contain"
                      width={160}
                      height={80}
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}
                    />
                  )}
                </div>

                <div className="px-4 pb-4 flex-1 flex flex-col justify-start">
                  <h3 className="text-center font-semibold text-gray-800 text-sm md:text-base leading-tight">
                    {partner.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnersCarousel;
