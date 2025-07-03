"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import useIsClient from "@/hooks/useIsClient";
import Loading from "../Loading";
import ErrorAlert from "../ErrorAlert";
import { useFetchData } from "@/hooks/useFetchData";

const Statistics = () => {
  const { data, isLoading, error } = useFetchData('statistics', '/about/statistics');
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
        <div>
          <p className="text-5xl">
            {hasAnimated ? <CountUp end={data.contracts} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm">{data.contracts_name}</p>
        </div>
        <div>
          <p className="text-5xl">
            {hasAnimated ? <CountUp end={data.ready_project} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm">{data.ready_project_name}</p>
        </div>
        <div>
          <p className="text-5xl">
            {hasAnimated ? <CountUp end={data.works_in_process} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm">{data.works_in_process_name}</p>
        </div>
        <div>
          <p className="text-5xl">
            {hasAnimated ? <CountUp end={data.ready_document} duration={2} /> : 0}
          </p>
          <p className="mt-2 text-sm">{data.ready_document_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
