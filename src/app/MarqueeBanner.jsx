"use client";
import React from 'react';

const MarqueeBanner = () => {
  return (
    <div className="bg-green-700 text-white p-2 overflow-hidden">
      <style jsx>{`
        .marquee {
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      <div className="flex justify-center items-center">
        <p className="marquee text-lg font-semibold whitespace-nowrap">
          Hurmatli foydalanuvchilar! Sayt test rejimida ishlamoqda!!!
        </p>
      </div>
    </div>
  );
};

export default MarqueeBanner;