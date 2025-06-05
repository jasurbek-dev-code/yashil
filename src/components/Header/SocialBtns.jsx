import Image from "next/image";

export default function SocialBtns() {
  return (
    <div className="absolute top-32 right-0 bg-white rounded-tl-xl rounded-bl-xl shadow-md w-12 py-2">
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 cursor-pointer">
        <Image src="/icons/facebook.svg" alt="facebook" width={32} height={32} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 cursor-pointer">
        <Image src="/icons/instagram.svg" alt="facebook" width={32} height={32} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 cursor-pointer">
        <Image src="/icons/telegram.svg" alt="facebook" width={32} height={32} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 cursor-pointer">
        <Image src="/icons/youtube.svg" alt="facebook" width={32} height={32} />
      </div>
      <div className="w-12 h-12 flex items-center justify-center p-1.5 last:border-0 cursor-pointer">
         <Image src="/icons/robot.svg" alt="facebook" width={32} height={32} />
      </div>
    </div>
  );
}