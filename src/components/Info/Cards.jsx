"use client";

import Image from "next/image";
import Card from "./Card";
import greenBanner from "../../../public/images/green_banner.svg";
import { useFetchData } from "@/hooks/useFetchData";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useFetchData(['information-systems', i18n.language], '/useful-links/information-systems');
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[50vh] -z-0">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 relative z-10">
        <h2 className="text-left text-white text-3xl mb-8 font-semibold">
          {t("info_systems")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.length ? data?.map((item, index) => (
            <Card
              key={item?.id}
              title={item?.title}
              photo={item?.photo}
              link={item?.link}
            />
          )) : null}
        </div>
      </div>
    </div>
  );
};

export default Cards;
