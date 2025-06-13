"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 text-center">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        404
      </h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
        Sahifa topilmadi
      </h2>
      <p className="mt-2 text-gray-300 max-w-md">
        5 soniyadan so‘ng bosh sahifaga qaytishingiz mumkin. Yoki qo‘lda qayting:
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-lg text-white text-sm md:text-base font-medium"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}