import Image from "next/image";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SocialBtns() {
  const { i18n } = useTranslation();
  const { data, isLoading, error } = useFetchData(
    ["contact", i18n.language],
    "/about/get-contact"
  );
  console.log(data);
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="fixed top-1/3 right-0 bg-white dark:bg-gray-800 rounded-tl-xl rounded-bl-xl shadow-md w-12 py-2 z-50">
      {/* Facebook */}
      {data.facebook ? (
        <Link href={data?.facebook} target="_blank">
          <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={32}
              height={32}
            />
          </div>
        </Link>
      ) : null}

      {/* Instagram */}
      {data?.instagram ? (
        <Link href={data?.instagram} target="_blank">
          <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </div>
        </Link>
      ) : null}

      {/* Telegram */}
      {data?.telegram ? (
        <Link href={data?.telegram} target="_blank">
          <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Image
              src="/icons/telegram.svg"
              alt="telegram"
              width={32}
              height={32}
            />
          </div>
        </Link>
      ) : null}

      {data?.youtube ? (
        <Link href={data?.youtube} target="_blank">
          <div className="w-12 h-12 flex items-center justify-center p-1.5 border-b border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Image
              src="/icons/youtube.svg"
              alt="youtube"
              width={32}
              height={32}
            />
          </div>
        </Link>
      ) : null}
    </div>
  );
}
