"use client";

import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import carp from '../../../public/icons/carp.svg';
import facebook from '../../../public/icons/facebook_f.svg';
import instagram from '../../../public/icons/instagram_f.svg';
import youtube from '../../../public/icons/youtube_f.svg';
import telegram from '../../../public/icons/telegram_f.svg';
import { useTranslation } from "react-i18next";
import useIsClient from "@/hooks/useIsClient";
import Loading from "../Loading";
import { useFetchData } from "@/hooks/useFetchData";
import ErrorAlert from "../ErrorAlert";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useFetchData('contact', '/about/get-contact');
  const isClient = useIsClient();
  const currentYear = new Date().getFullYear();
  if (!isClient) return null;
  if (isLoading) return <Loading />;
  if (error) return <ErrorAlert />;
  return (
    <footer className="bg-green-900 dark:bg-[#0f1a0f] text-white py-10 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={logo} alt="Logo" width={50} height={50} />
            <p className="font-bold leading-5">
              {t("footer.institute_name")}
            </p>
          </div>
          <p className="text-sm">{t("footer.address")}</p>
          <p className="text-sm mt-2">{t("footer.phone")}</p>
          <p className="text-sm mt-1">{t("footer.fax")}</p>
          <a href="#" className="underline text-sm mt-1 inline-block hover:text-gray-300">
            {t("footer.bank_details")}
          </a>

          <div className="flex gap-4 mt-4 text-xl">
            {data?.facebook ? <Link href={data?.facebook} target="_blank">
              <Image src={facebook} alt="Facebook" />
            </Link> : null}
            {data?.instagram ? <Link href={data?.instagram} target="_blank">
              <Image src={instagram} alt="Instagram" />
            </Link> : null}
            {data?.telegram ? <Link href={data?.telegram} target="_blank">
              <Image src={telegram} alt="Telegram" />
            </Link> : null}
            <Image src={youtube} alt="YouTube" />
          </div>
        </div>

        {/* First Link Group */}
        <div className="text-sm flex flex-col gap-2">
          <Link href="/about/overview">{t("about")}</Link>
          <Link href="/about/departments">{t("departments")}</Link>
          <Link href="/about/structure">{t("structure")}</Link>
          <Link href="/about/leadership">{t("leadership")}</Link>
          <Link href="/about/suborganizations">{t("suborganizations")}</Link>
          <Link href="/about/vacancies">{t("vacancies")}</Link>
        </div>

        {/* Second Link Group */}
        <div className="text-sm flex flex-col gap-2">
          <Link href="/news/institute-news">{t("news")}</Link>
          <Link href="/news/photo-report">{t("photo_report")}</Link>
          <Link href="/news/video-report">{t("video_report")}</Link>
          <Link href="/services">{t("services")}</Link>
          <Link href="/contact">{t("contact")}</Link>
        </div>

        {/* Newsletter & Branding */}
        <div>
          <p className="text-lg font-medium mb-3">{t("footer.subscribe")}</p>
          <form className="flex border border-white rounded-md overflow-hidden dark:border-gray-600">
            <input
              type="email"
              placeholder={t("footer.email_placeholder")}
              className="w-full px-3 py-2 text-black dark:text-white dark:bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-white text-green-900 font-bold dark:bg-green-700 dark:text-white"
            >
              →
            </button>
          </form>
          <p className="text-sm mt-6">{t("footer.ctrl_enter_hint")}</p>
          <Image src={carp} alt="TechnoCorp" width={120} height={40} className="mt-4" />
          <p className="text-sm">{t("footer.developed_by")}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto mt-10 border-t border-white dark:border-gray-600 pt-4 px-4 lg:px-0 flex flex-col md:flex-row justify-between text-sm">
        <p>© {currentYear} {t("footer.institute_name")}</p>
        {/* <p>{t("footer.last_updated")}</p> */}
      </div>
    </footer>
  );
};

export default Footer;