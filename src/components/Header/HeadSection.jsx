// "use client";

// import Image from "next/image";
// import SocialBtns from "./SocialBtns";

// export default function HeadSection() {
//   return (
//     <div className="bg-transparent px-5 py-[60px] text-center text-white max-w-[1920px] mx-auto relative">
//             <SocialBtns/>
//       <h1 className="text-[46px] font-bold mt-2 mb-2 uppercase leading-snug">
//         YASHIL LOYIHA LOYIHALASH <br /> INSTITUTI
//       </h1>

//       <p className="mt-[50px] text-[16px] max-w-[700px] mx-auto mb-[30px] leading-relaxed">
//         2023-yil 31-may – O‘zbekiston Respublikasi Prezidentining 2023-yil <br />
//         31-may kungi “Ekologiya, atrof-muhitni muhofaza qilish va iqlim <br />
//         o‘zgarishi vazirligi faoliyati”
//       </p>

//       <button className="bg-[#0d3d0d] text-white border-none px-8 py-[12px] text-[16px] rounded-md cursor-pointer mt-[20px] mb-[10px] hover:bg-[#0d3d0d] transition">
//         Barchasi
//       </button>

//       <div className="mt-[50px] mb-[50px] flex justify-center flex-wrap gap-5">
//         <div className="cursor-pointer bg-white/10 rounded-2xl px-5 py-7 w-[260px] text-white text-[16px] font-medium backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
//           <Image src="/icons/gerb.svg" alt="Gerb" width={30} height={30} />
//           <span>O‘zbekiston - 2030</span>
//         </div>
//         <div className="cursor-pointer bg-white/10 rounded-2xl px-5 py-7 w-[260px] text-white text-[16px] font-medium backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
//           <Image src="/icons/nxol.svg" alt="Yashil makon" width={30} height={30} />
//           "Yashil makon - 2023" umumxalq loyihasi
//         </div>
//         <div className="cursor-pointer bg-white/10 rounded-2xl px-5 py-7 w-[260px] text-white text-[16px] font-medium backdrop-blur-md border border-white/20 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
//           <Image src="/icons/therd.svg" alt="Loyihalar" width={30} height={30} />
//           Loyihalar
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import SocialBtns from "./SocialBtns";
import Link from "next/link";

export default function HeadSection() {
  return (
    <div className="bg-transparent px-5 py-[60px] text-center text-white dark:text-gray-100 max-w-[1920px] mx-auto relative">
      <SocialBtns />

      <h1 className="text-[46px] font-bold mt-2 mb-2 uppercase leading-snug">
        YASHIL LOYIHA LOYIHALASH <br /> INSTITUTI
      </h1>

      <p className="mt-[50px] text-[16px] max-w-[700px] mx-auto mb-[30px] leading-relaxed">
        2023-yil 31-may – O‘zbekiston Respublikasi Prezidentining 2023-yil <br />
        31-may kungi “Ekologiya, atrof-muhitni muhofaza qilish va iqlim <br />
        o‘zgarishi vazirligi faoliyati”
      </p>

      <Link href="/about/overview" className="bg-[#0d3d0d] dark:bg-gray-900 text-white border-none px-8 py-[12px] text-[16px] rounded-md cursor-pointer mt-[20px] mb-[10px] hover:bg-[#0d3d0d] dark:hover:bg-green-800 transition">
        Batafsil
      </Link>

      <div className="mt-[50px] mb-[50px] flex justify-center flex-wrap gap-5">
        {/* Card 1 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image src="/icons/gerb.svg" alt="Gerb" width={30} height={30} />
          <span>O‘zbekiston - 2030</span>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image src="/icons/nxol.svg" alt="Yashil makon" width={30} height={30} />
          "Yashil makon - 2023" umumxalq loyihasi
        </div>

        {/* Card 3 */}
        <div className="cursor-pointer bg-white/10 dark:bg-white/5 rounded-2xl px-5 py-7 w-[260px] text-white dark:text-gray-100 text-[16px] font-medium backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg transition-transform hover:-translate-y-1 flex flex-col items-center gap-4">
          <Image src="/icons/therd.svg" alt="Loyihalar" width={30} height={30} />
          Loyihalar
        </div>
      </div>
    </div>
  );
}
