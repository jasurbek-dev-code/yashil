"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";
import eye from "../../../public/icons/eye-little.svg";
import facebook from "../../../public/icons/c-facebook.svg";
import telegram from "../../../public/icons/c-telegram.svg";

export default function Contact() {
    const schema = yup.object().shape({
        name: yup.string().required("Ismingizni kiriting"),
        phone: yup
            .string()
            .required("Telefon raqamingizni kiriting")
            .matches(
                /^(\+998|998)?(9[0-9]|3[3]|7[1]|8[8]|6[1])\d{7}$/,
                "To'g'ri O‘zbekiston telefon raqamini kiriting"
            ),
        message: yup.string().required("Iltimos, izoh yozing"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Yuborilgan ma'lumot:", data);
        reset();
    };
    return (
        <div className="relative w-full py-10 px-4 md:px-10">
            {/* Container */}
            <div className="relative z-10 bg-white backdrop-blur-md rounded-2xl shadow-xl max-w-[1400px] mx-auto overflow-hidden">
                {/* Breadcrumb */}
                <div className="px-6 pt-6 text-sm text-gray-600 flex justify-between">
                    <div>
                        <Link href="/" className="hover:underline">Asosiy</Link> / Bog'lanish
                    </div>
                    <div className="text-gray-500 text-sm flex gap-1">
                        <Image src={eye} alt="eye" height={20} width={20} /> <p>326</p>
                    </div>
                </div>

                {/* Title */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
                    <h1 className="text-xl font-bold text-gray-800">Bog'lanish</h1>
                </div>

                {/* Map */}
                <div className="w-full h-[489px] rounded-xl overflow-hidden pl-5 pr-5 pt-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47951.75124390357!2d69.21533806699942!3d41.30810739188617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfe06fdcdd3%3A0x8ac9b509d7e78f15!2z0KfQtdGA0LrQtdC90YLRgNCw!5e0!3m2!1sru!2s!4v1718552443047!5m2!1sru!2s"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 w-full h-full rounded-xl"
                    ></iframe>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="Ismingiz"
                                    className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"
                                        } bg-[#F9F9F9] rounded-md p-3 focus:ring-green-500 focus:border-green-500`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register("phone")}
                                    type="tel"
                                    placeholder="Telefon raqamingiz"
                                    className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"
                                        } bg-[#F9F9F9] rounded-md p-3 focus:ring-green-500 focus:border-green-500`}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <textarea
                                    {...register("message")}
                                    placeholder="Izoh"
                                    className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"
                                        } bg-[#F9F9F9] rounded-md p-3 min-h-[120px] focus:ring-green-500 focus:border-green-500`}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300"
                                >
                                    Yuborish
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-4 px-2 bg-[#F9F9F9] rounded-xl shadow-sm">
                            <div className="p-1 rounded-full flex-shrink-0 flex justify-center">
                                <Image src={facebook} alt="Telefon" width={50} height={50} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Telefon:</p>
                                <p className="text-gray-600">+998 71 262-29-34</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-2 bg-[#F9F9F9] rounded-xl shadow-sm">
                            <div className="p-1 rounded-full flex-shrink-0 flex justify-center">
                                <Image src={facebook} alt="Tarmoq ma'muri" width={50} height={50} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Tarmoq ma&apos;muri:</p>
                                <p className="text-gray-600">+998 95 224-29-34</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-2 bg-[#F9F9F9] rounded-xl shadow-sm sm:col-span-2">
                            <div className="p-1 rounded-full flex-shrink-0 flex justify-center">
                                <Image src={telegram} alt="Email" width={50} height={50} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Email:</p>
                                <p className="text-gray-600">yashilloyoha@yashil.uz</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 px-2 bg-[#F9F9F9] rounded-xl shadow-sm sm:col-span-2">
                            <div className="p-1 rounded-full flex-shrink-0 flex justify-center">
                                <Image src={telegram} alt="Telegram" width={50} height={50} />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Telegram:</p>
                                <p className="text-gray-600">100097 Toshkent sh., Do&apos;rmon yo&apos;li k., 2-A uy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}