"use client";

import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import carp from '../../../public/icons/carp.svg'
import facebook from '../../../public/icons/facebook_f.svg'
import instagram from '../../../public/icons/instagram_f.svg'
import youtube from '../../../public/icons/youtube_f.svg'
import telegram from '../../../public/icons/telegram_f.svg'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <p className="font-bold leading-5">YASHIL LOYIHA <br /> LOYIHALASH INSTITUTI</p>
          </div>
          <p className="text-sm">Manzil: O‘zbekiston, 100060, Toshkent sh., T. Shevchenko ko‘chasi, 11</p>
          <p className="text-sm mt-2">Ma'lumot uchun telefon: +998 (71) 256-86-53</p>
          <p className="text-sm mt-1">Faks: +998 (71) 256-86-58</p>
          <a href="#" className="underline text-sm mt-1 inline-block">Bank rekvizitlari</a>

          <div className="flex gap-4 mt-4 text-xl">
            <Image src={instagram} alt="instgram"/>
            <Image src={facebook} alt="facebook"/>
            <Image src={youtube} alt="youtube"/>
            <Image src={telegram} alt="telegram"/>
          </div>
        </div>

        <div className="text-sm flex flex-col gap-2">
          <a href="#">Vazirlik haqida</a>
          <a href="#">Vazirlik faoliyati</a>
          <a href="#">Meyoriy baza</a>
          <a href="#">Matbuot xizmati</a>
          <a href="#">Davlat xizmatlari</a>
          <a href="#">Investorlarga</a>
          <a href="#">Aloqalar</a>
          <a href="#">Antikorrupsiya</a>
        </div>

        <div className="text-sm flex flex-col gap-2">
          <a href="#">Investorlarga</a>
          <a href="#">Aloqalar</a>
          <a href="#">Kengaytirilgan qidiruv</a>
          <a href="#">Qayta aloqa</a>
          <a href="#">Sayt xaritasi</a>
          <a href="#">RSS</a>
        </div>

        <div>
          <p className="text-lg font-medium mb-3">Yangiliklarga obuna</p>
          <form className="flex border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 text-black focus:outline-none"
            />
            <button type="submit" className="px-4 bg-white text-green-900 font-bold">
              →
            </button>
          </form>
          <p className="text-sm mt-6">Agar matnda hatolikni kursangiz, matni belgilab Ctrl+Enter ni bosing</p>
          <Image
            src={carp} 
            alt="TechnoCorp"
            width={120}
            height={40}
            className="mt-4"
          />
          <p className="text-sm">tomonidan ishlab chiqildi</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 border-t border-white pt-4 px-4 lg:px-0 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2025 YASHIL LOYIHA LOYIHALASH INSTITUTI</p>
        <p>So’nggi yangilanish 2023-04-13 (GMT+5)</p>
      </div>
    </footer>
  );
};

export default Footer;