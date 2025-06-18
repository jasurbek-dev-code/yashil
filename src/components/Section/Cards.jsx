"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Card from "./Card";
import greenBanner from "../../../public/images/green_banner.svg";
import Icon1 from "../../../public/icons/card_icon1.svg";
import icon2 from "../../../public/icons/card_icon2.svg";
import icon3 from "../../../public/icons/card_icon3.svg";
import icon4 from "../../../public/icons/card_icon4.svg";
import icon5 from "../../../public/icons/card_icon5.svg";
import icon6 from "../../../public/icons/card_icon6.svg";
import icon7 from "../../../public/icons/card_icon7.svg";
import icon8 from "../../../public/icons/card_icon8.svg";
import icon9 from "../../../public/icons/card_icon9.svg";

const Cards = () => {
  const pathname = usePathname();
  const isSpecial = pathname.startsWith("/services");
  const data = [
    {
      icon: Icon1,
      title: "O'rmon fondi yerlarini xatlovdan o'tkazish",
      description:
        "Ekologiya, atrof-muhitni muhofaza qilish va iqlim o'zgarishi vazirligi 'Yashilloyiha' instituti.",
    },
    {
      icon: icon2,
      title: "Kartografik geoaxborot tizimini ishlab chiqish",
      description:
        "davlat o'rmon fondi va muhofaza etiladigan tabiiy hududlarni xatlov (inventarizatsiya)dan.",
    },
    {
      icon: icon3,
      title: "Muxandislik geodeziya qidiruvlar",
      description:
        "'Yashilloyiha' loyihalash institutining smeta bo'limi O'zbekiston Respunlikasi qurilishi va uy-joy.",
    },
    {
      icon: icon4,
      title: "Muxandislik marksheyderlik qidiruvlar",
      description:
        "Barcha o'lchovlar va geometrik konstruktsiyalarning, shuningdek foydali qazilmalarni qazib olish.",
    },
    {
      icon: icon5,
      title: "Loyiha qidiruv ishlari",
      description:
        "Geodeziya ishlari - bu uchastkani belgilash, koordinatalarni ko'rsatish va relyefni tahlil qilish.",
    },
    {
      icon: icon6,
      title: "Arxitektura va dizaynerlik xizmatlari",
      description:
        "Chiqindilarni aholi yashash joylarida, tabiatni muhofaza qilish, sog'lomlashtirish, rekreatsion va.",
    },
    {
      icon: icon7,
      title: "Ilmiy metodologik xizmatlar",
      description:
        "Barcha o'lchovlar va geometrik konstruktsiyalarning, shuningdek foydali qazilmalarni qazib olish.",
    },
    {
      icon: icon8,
      title: "Mualliflik nazorati",
      description:
        "Geodeziya ishlari - bu uchastkani belgilash, koordinatalarni ko'rsatish va relyefni tahlil qilish.",
    },
    {
      icon: icon9,
      title: "Loyiha smeta xujjatlarini ishlab chiqish",
      description:
        "Chiqindilarni aholi yashash joylarida, tabiatni muhofaza qilish, sog'lomlashtirish, rekreatsion va.",
    },
  ];

  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 -z-0">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <h2 className="text-left text-white text-3xl mb-8 font-semibold">
          {isSpecial ? "Xizmatlar" : "Institut xizmatlari"}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
