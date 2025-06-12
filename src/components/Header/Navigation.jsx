"use client";

export default function Navigation() {
  return (
    <div className="bg-[#0d3d0d] flex flex-wrap justify-center p-2 gap-12 font-sans">
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Biz haqimizda <span className="text-[22px] ml-1">&#x25BE;</span>
      </div>
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Xizmatlar 
      </div>
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Normativ hujjatlar 
      </div>
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Bo‘sh ish o‘rinlari 
      </div>
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Loyihalar 
      </div>
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Me’yoriy hujjatlar
      </div>
      <div className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1.5 whitespace-nowrap rounded-md px-3 py-2 hover:bg-white/10 transition">
        Bog‘lanish
      </div>
    </div>
  );
}