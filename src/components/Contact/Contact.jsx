"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
import facebook from "../../../public/icons/c-facebook.svg";
import telegram from "../../../public/icons/c-telegram.svg";
import greenBanner from "../../../public/images/green_banner.svg";
import { useTranslation } from "react-i18next";
import useIsClient from "@/hooks/useIsClient";
import { usePostData } from '@/hooks/usePostData';
import toast from 'react-hot-toast';

export default function Contact() {
  const postMutation = usePostData('/about/contact');
  const { t } = useTranslation();
  const schema = yup.object().shape({
    fullname: yup.string().required(t("contact_form.name_required")),
    phone: yup
      .string()
      .required(t("contact_form.phone_required"))
      .matches(
        /^(\+998|998)?(9[0-9]|3[3]|7[1]|8[8]|6[1])\d{7}$/,
        t("contact_form.phone_invalid")
      ),
    comment: yup.string().required(t("contact_form.message_required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await postMutation.mutateAsync(data);
      toast.success("Ma'lumot muvaffaqiyatli yuborildi!");
      reset();
    } catch (error) {
      toast.error("Xatolik yuz berdi!");
      console.error(error);
    }
  };

  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-0 -z-0">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover opacity-90 dark:opacity-40"
      />

      <div className="relative w-full py-10 px-4 md:px-10 -z-0">
        <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1200px] mx-auto overflow-hidden">
          <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-300 flex justify-between">
            <div>
              <Link href="/" className="hover:underline">{t("home")}</Link> / {t("contact")}
            </div>
          </div>

          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{t("contact")}</h1>
          </div>

          <div className="w-full h-[489px] rounded-xl overflow-hidden pl-5 pr-5 pt-5">
            <iframe
              src="https://www.google.com/maps?q=41.34601997212194,69.32722057799234&hl=es;z=14&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: facebook, title: t("contact_info.phone"), value: "+998 71 262-29-34" },
                  { icon: facebook, title: t("contact_info.admin"), value: "+998 95 224-29-34" },
                  { icon: telegram, title: t("contact_info.email"), value: "yashilloyoha@yashil.uz" },
                  { icon: telegram, title: t("contact_info.address"), value: "100097 Toshkent sh., Do'rmon yo'li k., 2-A uy" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 px-2 bg-[#F9F9F9] dark:bg-gray-800 rounded-xl shadow-sm ${index >= 2 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="p-1 rounded-full flex-shrink-0 flex justify-center">
                      <Image src={item.icon} alt={item.title} width={50} height={50} className="dark:invert" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-white">{item.title}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 h-full">
                <div>
                  <input
                    {...register("fullname")}
                    type="text"
                    placeholder={t("contact_form.name")}
                    className={`w-full border ${errors.fullname ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-[#F9F9F9] dark:bg-gray-800 text-black dark:text-white rounded-md p-3`}
                  />
                  {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
                </div>

                <div>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder={t("contact_form.phone")}
                    className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-[#F9F9F9] dark:bg-gray-800 text-black dark:text-white rounded-md p-3`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div className="flex-grow">
                  <textarea
                    {...register("comment")}
                    placeholder={t("contact_form.message")}
                    className={`w-full border ${errors.comment ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-[#F9F9F9] dark:bg-gray-800 text-black dark:text-white rounded-md p-3 min-h-[120px] h-full`}
                  ></textarea>
                  {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}
                </div>
              </div>
            </div>

            <div className="flex justify-end px-5 pb-6">
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300"
              >
                {t("contact_form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}