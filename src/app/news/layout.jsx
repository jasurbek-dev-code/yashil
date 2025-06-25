import Image from "next/image";
import SubNavigation from "@/components/News/NewsNavigation";
import greenBanner from "../../../public/images/green_banner.svg";

export default function NewsLayout({ children }) {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 -z-0 dark:bg-gray-900">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover opacity-90 dark:opacity-40"
      />
      <main className="max-w-[1200px] mx-auto relative z-10 text-gray-800 dark:text-gray-100">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-1 mt-3 lg:mt-0">
            {children}
          </div>
          <div className="w-full lg:w-[267px] pr-4 lg:pr-0 pl-4 lg:pl-0">
            <SubNavigation />
          </div>
        </div>
      </main>
    </div>
  );
}
