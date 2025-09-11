"use client";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface FilterProps<T> {
  data: T[];
  filterKeys: (keyof T)[];
  onFilterChange: (filters: Partial<Record<keyof T, string>>) => void;
}

export function SelectFilter<T extends Record<string, any>>({
  data,
  filterKeys,
  onFilterChange,
}: FilterProps<T>) {
  const [filters, setFilters] = useState<Partial<Record<keyof T, string>>>({});

  const options = useMemo(() => {
    const res: Record<string, string[]> = {};
    filterKeys.forEach((key) => {
      res[key as string] = Array.from(
        new Set(data.map((item) => item[key] as string))
      );
    });
    return res;
  }, [data, filterKeys]);

  const handleChange = (key: keyof T, value: string) => {
    const newFilters = { ...filters, [key]: value || undefined };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
console.log(filterKeys)
const { t } = useTranslation();
  return (
    <div className="flex gap-4 flex-wrap">
      {filterKeys.map((key) => (
        <div>
          <h1 className="text-white text-[20px] mb-5">{t(key.toLocaleString())}: </h1>
          <select
            key={String(key)}
            value={filters[key] || ""}
            onChange={(e) => handleChange(key, e.target.value)}
            className="border rounded p-2 w-[300px]"
          >
            <option value="">Hammasi</option>
            {options[key as string]?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
