import Image from "next/image";

export default function SocialBtns() {
  return (
    <div className="absolute top-32 right-0 bg-white dark:bg-gray-800 rounded-tl-xl rounded-bl-xl shadow-md w-12 py-2">
      {/* Facebook */}
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Image src="/icons/facebook.svg" alt="facebook" width={32} height={32} />
      </div>

      {/* Instagram */}
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Image src="/icons/instagram.svg" alt="instagram" width={32} height={32} />
      </div>

      {/* Telegram */}
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Image src="/icons/telegram.svg" alt="telegram" width={32} height={32} />
      </div>

      {/* YouTube */}
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Image src="/icons/youtube.svg" alt="youtube" width={32} height={32} />
      </div>

      {/* Robot */}
      <div className="w-12 h-12 flex items-center justify-center p-1.5 last:border-0 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <Image src="/icons/robot.svg" alt="robot" width={32} height={32} />
      </div>
    </div>
  );
}
