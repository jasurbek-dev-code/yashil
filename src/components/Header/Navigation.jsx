"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div className="bg-[#0d3d0d] flex flex-wrap justify-center p-2 gap-12 font-sans">
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Biz haqimizda <span className="text-[22px] ml-1">&#x25BE;</span>
      </div>
      <Link
        href="/services"
        className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
          pathname.startsWith("/services") ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        Xizmatlar
      </Link>
       <Link
        href="/documents"
        className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
          pathname.startsWith("/documents") ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        Normativ hujjatlar
      </Link>

      <Link
        href="/vacancies"
        className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
          pathname.startsWith("/vacancies") ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        Bo‘sh ish o‘rinlari
      </Link>

      <Link
        href="/news"
        className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
          pathname.startsWith("/news") ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        Yangiliklar
      </Link>

      <Link
        href="/standards"
        className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
          pathname.startsWith("/standards") ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        E’lonlar
      </Link>

      <Link
        href="/contact"
        className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
          pathname.startsWith("/contact") ? "bg-white/10" : "hover:bg-white/10"
        }`}
      >
        Bog‘lanish
      </Link>
    </div>
  );
}
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navigation() {
//   const pathname = usePathname();

//   return (
//     <div className="bg-[#0d3d0d] flex flex-wrap justify-center p-2 gap-6 font-sans">
//       <Link
//         href="/about"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/about") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Biz haqimizda <span className="text-[22px] ml-1">&#x25BE;</span>
//       </Link>

//       <Link
//         href="/services"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/services") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Xizmatlar
//       </Link>

//       <Link
//         href="/documents"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/documents") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Normativ hujjatlar
//       </Link>

//       <Link
//         href="/vacancies"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/vacancies") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Bo‘sh ish o‘rinlari
//       </Link>

//       <Link
//         href="/projects"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/projects") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Loyihalar
//       </Link>

//       <Link
//         href="/standards"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/standards") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Me’yoriy hujjatlar
//       </Link>

//       <Link
//         href="/contact"
//         className={`text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 transition ${
//           pathname.startsWith("/contact") ? "bg-white/10" : "hover:bg-white/10"
//         }`}
//       >
//         Bog‘lanish
//       </Link>
//     </div>
//   );
// }