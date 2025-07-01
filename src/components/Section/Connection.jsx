"use client";

import call from "../../../public/icons/call_c.svg";
import sms from "../../../public/icons/sms.svg";
import clock from "../../../public/icons/clock.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import useIsClient from "@/hooks/useIsClient";

const Connection = () => {
  const { t } = useTranslation();
  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <section className="max-w-[1200px] mx-auto px-4 lg:px-0 py-12">
      <h2 className="text-3xl font-bold mb-8">{t("contact")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Working Hours */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-green-900 text-white rounded-full p-4">
            <Image src={clock} alt="clock" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-400">{t("working_hours")}</p>
            <p className="text-black">{t("working_time_value")}</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-green-900 text-white rounded-full p-4">
            <Image src={sms} alt="sms" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-400">{t("email")}</p>
            <p className="text-black">yashilloyoha@yashil.uz</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
          <div className="bg-green-900 text-white rounded-full p-4">
            <Image src={call} alt="call" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-400">{t("phone")}</p>
            <p className="text-black">71-262-2934</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;