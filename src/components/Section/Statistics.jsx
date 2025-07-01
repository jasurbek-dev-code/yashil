"use client";

import useIsClient from "@/hooks/useIsClient";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();
  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <div className="bg-green-900 py-10 px-4 lg:px-0 text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-5xl">50</p>
          <p className="mt-2 text-sm">{t("stats_contracts")}</p>
        </div>
        <div>
          <p className="text-5xl">70</p>
          <p className="mt-2 text-sm">{t("stats_ready_projects")}</p>
        </div>
        <div>
          <p className="text-5xl">70</p>
          <p className="mt-2 text-sm">
            {t("stats_in_progress")}
          </p>
        </div>
        <div>
          <p className="text-5xl">70</p>
          <p className="mt-2 text-sm">
            {t("stats_expert_review")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;