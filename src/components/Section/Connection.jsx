"use client";

import call from "../../../public/icons/call_c.svg";
import sms from "../../../public/icons/sms.svg";
import clock from "../../../public/icons/clock.svg";
import Image from "next/image";

const Connection = () => {
  return (
    <section className="max-w-[1520px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Bog’lanish</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ish vaqti */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-green-900 text-white rounded-full p-4">
            <Image src={clock} alt="clock" className="w-6 h-6"/>
          </div>
          <div>
            <p className="text-gray-400">Ish vaqti</p>
            <p className="text-black">Dushanba–Juma: 09.00–18.00</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-green-900 text-white rounded-full p-4">
            <Image src={sms} alt="sms" className="w-6 h-6"/>
          </div>
          <div>
            <p className="text-gray-400">Email</p>
            <p className="text-black">yashilloyoha@yashil.uz</p>
          </div>
        </div>

        {/* Telefon */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-green-900 text-white rounded-full p-4">
            <Image src={call} alt="call" className="w-6 h-6"/>
          </div>
          <div>
            <p className="text-gray-400">Telefon</p>
            <p className="text-black">71-262-2934</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;