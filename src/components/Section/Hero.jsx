"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative py-[60px] px-5 overflow-hidden">
      {/* Fon rasmi */}
      <Image
        src="/images/banner.svg"
        alt="Banner Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="max-w-[1100px] mx-auto flex flex-wrap gap-10 items-start relative z-10">
        <h2 className="w-full text-[30px] text-left text-gray-800 font-bold">
          Hududiy boshqarmalar
        </h2>

        {/* Xarita rasmi */}
        <div className="flex-1 min-w-[300px]">
          <Image
            src="/images/karta.svg"
            alt="Uzbekistan map"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Ma'lumot bloki */}
        <div className="flex-1 min-w-[300px] bg-transparent p-5 md:p-6 rounded-xl text-[18px] leading-relaxed text-gray-800">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Navoi viloyati
          </h2>
          <p className="mt-2">
            <strong>Boshqarma boshlig‘i:</strong> Abdug‘aniyev Sardor Shuxratovich
          </p>
          <p className="mt-2">
            <strong>Qabul kunlari:</strong> Dushanba 09:00–13:00
          </p>
          <p className="mt-2">
            <strong>Manzil:</strong> Navoi shahri, Navoi ko‘chasi 30A-uy
          </p>
          <p className="mt-2">
            <strong>Telefon:</strong> 36–224–36–51
          </p>
          <p className="mt-2">
            <strong>Faks:</strong> 36–224–36–51
          </p>
          <p className="mt-2">
            <strong>Email:</strong> mt.matbuot@inbox.uz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;