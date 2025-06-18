import Image from "next/image";
import SubNavigation from "@/components/SubNavigation";
import greenBanner from "../../../public/images/green_banner.svg";

export default function AboutLayout({ children }) {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-16 -z-0">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20 object-cover"
      />
      <main className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-1 mt-3 ml-3 lg:mt-0">
            {children}
          </div>

          <div className="w-full lg:w-[267px] pl-3 lg:pl-0 lg:pr-3">
            <SubNavigation />
          </div>
        </div>
      </main>
    </div>
  );
}
