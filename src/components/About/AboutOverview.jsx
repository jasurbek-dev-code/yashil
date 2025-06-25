// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import eye from "../../../public/icons/eye-little.svg";
// import overview from "../../../public/images/overview.svg";
// import telegram from "../../../public/icons/telegram-little.png";
// import instagram from "../../../public/icons/instagram-little.png";
// import facebook from "../../../public/icons/facebook-little.png";

// export default function AboutOverview() {
//     return (
//         <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

//             {/* Radiusli container */}
//             <div className="relative z-10 bg-white backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

//                 {/* Breadcrumb */}
//                 <div className="px-6 pt-6 text-sm text-gray-600 flex justify-between">
//                     <div>
//                         <Link href="/" className="hover:underline">Asosiy</Link> / Institut haqida
//                     </div>

//                     <div className="text-gray-500 text-sm flex gap-1"><Image src={eye} alt="eye" height={20} width={20} /> <p>326</p></div>
//                 </div>

//                 {/* Sarlavha */}
//                 <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
//                     <h1 className="text-[28px] font-bold text-gray-800">Institut haqida</h1>
//                 </div>

//                 {/* Jadval */}
//                 <div className="overflow-x-auto px-4 my-5 flex justify-center">
//                     <Image src={overview} alt="overview" width={"100%"} />
//                 </div>

//                 <p className="overflow-x-auto px-14 my-5 font-sans">
//                     Raqamli texnologiyalar vazirining yoshlar masalalari bo'yicha maslahatchisi Fazliddin Anvarov ta’kidlaganidek, bugungi kunga qadar Raqamli texnologiyalar Vazirligi hamda vazirlik tizimidagi tashkilotlarga 370 dan ortiq yoshlar ishga qabul qilindi.
//                     <br /><br />
//                     Yoshlarning IT ko‘nikmalarini shakllantirish, zamonaviy kasblarga o‘qitish va ta’limni raqamlashtirish bo‘yicha bir qator ishlar amalga oshirilmoqda:
//                     <br /><br />
//                     Bugungi kunda mamlakatimizda IT sohasidagi oliy ta’lim muassasalari soni 60 dan va ularda tahsil olayotgan talabalar soni 50 mingdan nafardan ortdi.
//                     <br /><br />
//                     Xususan, vazirlik tizimidagi IT oliy ta’lim muassasalarida xususan, Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari universiteti va uning 6 ta filiali, Toshkent shahridagi Inxa va Amiti universitetlari tomonidan 35 dan ortiq mutaxassisliklar bo‘yicha 29 ming nafardan ortiq oliy ma’lumotli kadrlar tayyorlanmoqda.
//                     <br /><br />
//                     Shuningdek, 2022 yilda “EPAM Systems” xalqaro IT kompaniya bilan hamkorlikda birinchi onlayn shakldagi “IT Park University” raqamli universiteti faoliyati yo‘lga qo‘yildi.
//                     <br /><br />
//                     Bundan tashqari, Qorako‘l IT klasterini tashkil yetish bo‘yicha Vazirlar Mahkamasining joriy yil 5 iyuldagi 273-qarori qabul qilindi. Ushbu klasterda 2023/2024 o‘quv yilidan IT yo‘nalish bo‘yicha Buxoro viloyatida Hindiston bilan hamkorlikda Acharya Universiteti tashkil etildi.
//                     <br /><br />
//                     Raqamli texnologiyalar vazirligi tomonidan “Bir million dasturchi” loyihasining navbatdagi bosqichini amalga oshirish maqsadida yoshlarga uzbekcoders.uz platformasi orqali AQSHning “Coursera” kompaniyasining onlayn ta’lim resurslaridan foydalanish imkoniyati yaratildi.
//                     <br /><br />
//                     Ushbu loyiha doirasida 2023–2025 yillarda 1,2 mln. nafar yoshlar 8 ta yo‘nalishdagi onlayn kurslardan bepul ta’lim olish imkoniyatiga ega bo‘lishadi.
//                     <br /><br />
//                     Bugungi kunda uzbekcoders.uz sayti orqali “Coursera” platformasidan ro‘yxatdan o‘tgan o‘quvchilar soni 316 325 nafar ulardan 314 ming nafari aktiv o‘qiyotgan o‘quvchilar hisoblanadi. O‘quvchilarning 162 901 nafarini erkaklar, 153 424 nafarini ayollar tashkil etdi.
//                     <br /><br />
//                     Ma’lumot uchun: IT sohadagi o‘quv kurslarda tahsil olayotgan yoki ushbu o‘quv kurslarini muvaffaqiyatli tamomlagan 15 ming nafardan ortiq yoshlar kompyuter xarid qilish uchun bazaviy hisoblash miqdorining 25 baravaridan ko‘p bo‘lmagan miqdorda iste’mol kreditlari ajratildi.
//                 </p>


//                 {/* Footer */}
//                 <div className="flex justify-between text-gray-500 border-t my-3 px-4 py-4">
//                     <div className="flex items-center gap-2">
//                         <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer" />
//                         <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer" />
//                         <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer" />
//                     </div>
//                     <p className="text-[15px] text-gray-500">
//                         Oxirgi yangilanish: 2023-07-21 10:21:30
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import overview from "../../../public/images/overview.svg";
import telegram from "../../../public/icons/telegram-little.png";
import instagram from "../../../public/icons/instagram-little.png";
import facebook from "../../../public/icons/facebook-little.png";

export default function AboutOverview() {
    return (
        <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

            {/* Radiusli container */}
            <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

                {/* Breadcrumb */}
                <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
                    <div>
                        <Link href="/" className="hover:underline">Asosiy</Link> / Institut haqida
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
                        <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0" />
                        <p>326</p>
                    </div>
                </div>

                {/* Sarlavha */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
                    <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">Institut haqida</h1>
                </div>

                {/* Jadval */}
                <div className="overflow-x-auto px-4 my-5 flex justify-center">
                    <Image src={overview} alt="overview" className="w-full h-auto" />
                </div>

                {/* Matn */}
                <p className="overflow-x-auto px-4 my-5 font-sans text-gray-800 dark:text-gray-200 leading-7">
                    Raqamli texnologiyalar vazirining yoshlar masalalari bo'yicha maslahatchisi Fazliddin Anvarov ta’kidlaganidek, bugungi kunga qadar Raqamli texnologiyalar Vazirligi hamda vazirlik tizimidagi tashkilotlarga 370 dan ortiq yoshlar ishga qabul qilindi.
                    <br /><br />
                    Yoshlarning IT ko‘nikmalarini shakllantirish, zamonaviy kasblarga o‘qitish va ta’limni raqamlashtirish bo‘yicha bir qator ishlar amalga oshirilmoqda:
                    <br /><br />
                    Bugungi kunda mamlakatimizda IT sohasidagi oliy ta’lim muassasalari soni 60 dan va ularda tahsil olayotgan talabalar soni 50 mingdan nafardan ortdi.
                    <br /><br />
                    Xususan, vazirlik tizimidagi IT oliy ta’lim muassasalarida xususan, Muhammad al-Xorazmiy nomidagi Toshkent Axborot Texnologiyalari universiteti va uning 6 ta filiali, Toshkent shahridagi Inxa va Amiti universitetlari tomonidan 35 dan ortiq mutaxassisliklar bo‘yicha 29 ming nafardan ortiq oliy ma’lumotli kadrlar tayyorlanmoqda.
                    <br /><br />
                    Shuningdek, 2022 yilda “EPAM Systems” xalqaro IT kompaniya bilan hamkorlikda birinchi onlayn shakldagi “IT Park University” raqamli universiteti faoliyati yo‘lga qo‘yildi.
                    <br /><br />
                    Bundan tashqari, Qorako‘l IT klasterini tashkil yetish bo‘yicha Vazirlar Mahkamasining joriy yil 5 iyuldagi 273-qarori qabul qilindi. Ushbu klasterda 2023/2024 o‘quv yilidan IT yo‘nalish bo‘yicha Buxoro viloyatida Hindiston bilan hamkorlikda Acharya Universiteti tashkil etildi.
                    <br /><br />
                    Raqamli texnologiyalar vazirligi tomonidan “Bir million dasturchi” loyihasining navbatdagi bosqichini amalga oshirish maqsadida yoshlarga uzbekcoders.uz platformasi orqali AQSHning “Coursera” kompaniyasining onlayn ta’lim resurslaridan foydalanish imkoniyati yaratildi.
                    <br /><br />
                    Ushbu loyiha doirasida 2023–2025 yillarda 1,2 mln. nafar yoshlar 8 ta yo‘nalishdagi onlayn kurslardan bepul ta’lim olish imkoniyatiga ega bo‘lishadi.
                    <br /><br />
                    Bugungi kunda uzbekcoders.uz sayti orqali “Coursera” platformasidan ro‘yxatdan o‘tgan o‘quvchilar soni 316 325 nafar ulardan 314 ming nafari aktiv o‘qiyotgan o‘quvchilar hisoblanadi. O‘quvchilarning 162 901 nafarini erkaklar, 153 424 nafarini ayollar tashkil etdi.
                    <br /><br />
                    Ma’lumot uchun: IT sohadagi o‘quv kurslarda tahsil olayotgan yoki ushbu o‘quv kurslarini muvaffaqiyatli tamomlagan 15 ming nafardan ortiq yoshlar kompyuter xarid qilish uchun bazaviy hisoblash miqdorining 25 baravaridan ko‘p bo‘lmagan miqdorda iste’mol kreditlari ajratildi.
                </p>

                {/* Footer */}
                <div className="flex justify-between text-gray-500 dark:text-gray-400 border-t dark:border-gray-600 my-3 px-4 py-4">
                    <div className="flex items-center gap-2">
                        <Image src={facebook} alt="facebook" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                        <Image src={instagram} alt="instagram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                        <Image src={telegram} alt="telegram" height={18} width={18} className="cursor-pointer dark:invert dark:brightness-0" />
                    </div>
                    <p className="text-[15px]">
                        Oxirgi yangilanish: 2023-07-21 10:21:30
                    </p>
                </div>
            </div>
        </div>
    );
}
