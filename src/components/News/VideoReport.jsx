"use client";

import eye from "../../../public/icons/eye-little.svg";
import Image from 'next/image';
import Link from 'next/link';
import VideoReportCard from './VideoReportCard';
import CardFooter from '../CardFooter';
import { useFetchData } from '@/hooks/useFetchData';
import Loading from '../Loading';
import ErrorAlert from '../ErrorAlert';

const VideoReport = () => {
  const { data, isLoading, error } = useFetchData('videos', '/gallery/videos');
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;

  return (
    <div className="relative w-full pl-4 xl:pl-0 pr-4 -z-0">

      {/* Radiusli container */}
      <div className="relative z-10 bg-white dark:bg-[#0f1a0f] backdrop-blur-md rounded-2xl shadow-xl max-w-[1000px] mx-auto overflow-hidden">

        {/* Breadcrumb */}
        <div className="px-6 pt-6 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
          <div>
            <Link href="/" className="hover:underline">Asosiy</Link> / Videoreportaj
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm flex gap-1">
            <Image src={eye} alt="eye" height={20} width={20} className="dark:invert dark:brightness-0"/>
            <p>326</p>
          </div>
        </div>

        {/* Sarlavha */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-600">
          <h1 className="text-[28px] font-bold text-gray-800 dark:text-white">Videoreportaj</h1>
        </div>

        {/* Jadval */}
        <div className="relative bg-cover bg-center bg-no-repeat px-6 my-3">
          <div className="px-4 lg:px-0 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {data.map((item, index) => (
                <VideoReportCard
                  key={index}
                  link={item.link}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
         <CardFooter/>
      </div>
    </div>
  );
};

export default VideoReport;
