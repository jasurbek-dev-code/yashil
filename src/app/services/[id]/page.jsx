import ServiceById from "@/components/Services/ServiceById";
import greenBanner from "../../../../public/images/green_banner.svg";
import Image from "next/image";

const ServiceByIdPage = async ({ params }) => {
  const { id } = params;
  return (
    <div className="relative w-full pl-4 pr-4 -z-0 py-16">
      <Image
        src={greenBanner}
        alt="background"
        fill
        className="-z-20"
      />
      <ServiceById id={id} />
    </div>
  )
};

export default ServiceByIdPage;