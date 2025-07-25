"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import useIsClient from "@/hooks/useIsClient";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";
import s1 from '../../../public/icons/s1.svg'
import s2 from '../../../public/icons/s2.svg'
import s3 from '../../../public/icons/s3.svg'
import s4 from '../../../public/icons/s4.svg'
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const {i18n} = useTranslation()
  const { data, isLoading, error } = useFetchData(['statistics', i18n.language], '/about/statistics');
  const isClient = useIsClient();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stats = document.getElementById("statistics");
      if (!stats) return;

      const rect = stats.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (inView && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // First load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  if (!isClient) return null;
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  return (
    <div id="statistics" className="bg-green-900 py-10 px-4 lg:px-0 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex justify-center items-center flex-col">
          <div className="h-24 w-24 flex justify-center bg-white/10 rounded-full mb-3" >
            <Image src={s1} width={50} height={50} alt="s1" />
          </div>
          <p className="text-5xl font-bold">
            {hasAnimated ? <CountUp end={data?.contracts} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm font-semibold">{data?.contracts_name}</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="h-24 w-24 flex justify-center bg-white/10 rounded-full mb-3" >
            <Image src={s2} width={50} height={50} alt="s2" />
          </div>
          <p className="text-5xl font-bold">
            {hasAnimated ? <CountUp end={data?.ready_project} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm font-semibold">{data?.ready_project_name}</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="h-24 w-24 flex justify-center bg-white/10 rounded-full mb-3" >
            <Image src={s3} width={50} height={50} alt="s3" />
          </div>
          <p className="text-5xl font-bold">
            {hasAnimated ? <CountUp end={data?.works_in_process} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm font-semibold">{data?.works_in_process_name}</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="h-24 w-24 flex justify-center bg-white/10 rounded-full mb-3" >
            <Image src={s4} width={50} height={50} alt="s4" />
          </div>
          <p className="text-5xl font-bold">
            {hasAnimated ? <CountUp end={data?.ready_document} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm font-semibold">{data?.ready_document_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;