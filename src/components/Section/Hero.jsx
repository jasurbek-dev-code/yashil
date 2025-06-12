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
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Navoiy viloyati
          </h2>
          <p className="mt-2">
            Boshqarma boshlig‘i:&nbsp;<span className="underline font-medium">Abdug‘aniyev Sardor Shuxratovich</span>
          </p>
          <p className="mt-2">
            Qabul kunlari:&nbsp;<span className="font-medium">Dushanba 09:00–13:00</span>
          </p>
                    <p className="mt-2">
            Manzil:&nbsp;<span className="font-medium">Navoiy shahri, Navoiy ko‘chasi 30A-uy</span>
          </p>
                    <p className="mt-2">
            Telefon::&nbsp;<span className="font-medium">36–224–36–51</span>
          </p>
                    <p className="mt-2">
            Faks:&nbsp;<span className="font-medium">36–224–36–51</span>
          </p>
                    <p className="mt-2">
            Email:&nbsp;<span className="font-medium">mt.matbuot@inbox.uz</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;