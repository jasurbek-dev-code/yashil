"use client";

const Statistics = () => {
  return (
    <div className="bg-green-900 py-10 px-4 lg:px-0 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-5xl">50</p>
          <p className="mt-2 text-sm">Yil boshidan shartnomalar</p>
        </div>
        <div>
          <p className="text-5xl">70</p>
          <p className="mt-2 text-sm">Tayyor loyihalar</p>
        </div>
        <div>
          <p className="text-5xl">70</p>
          <p className="mt-2 text-sm">Loyiha tayyorlash <br /> jarayonidagi ishlar</p>
        </div>
        <div>
          <p className="text-5xl">70</p>
          <p className="mt-2 text-sm">Ekspertiza xulosasi olingan tayyor <br /> smeta hujjatlari</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;