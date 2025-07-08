"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import greenBanner from "../../../public/images/green_banner.svg";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { data, isLoading, error } = useFetchData('photos', '/gallery/photos');

  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />

      <section className="max-w-[1200px] mx-auto px-4 lg:px-0 py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-white">{t("gallery")}</h2>
          <button
            onClick={() => router.push('/news/photo-report')}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            {t("see_all")}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
          {data.map((src, index) => (
            <div key={index} className="relative w-full aspect-[4/5]">
              <Image
                src={src?.file?.src}
                alt={t("gallery_image_alt", { index: index + 1 })}
                fill
                className="object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
