import React from "react";
import { useTranslation } from "react-i18next";
interface FilterProps {
  label: string;
  queryKey: string;
  placeholder: string;
  onChange: (queryKey: string, value: string) => void;
}
export default function InputFilter({
  queryKey,
  label,
  placeholder,
  onChange,
}: FilterProps) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-white text-[20px]">{t(label)} :</h1>
      <input
        type="number"
        placeholder={placeholder}
        className="w-[300px] h-[50px] rounded-sm indent-2 focus:outline-blue-500"
        onChange={(e) =>
          onChange(queryKey, e.target.value ? e.target.value : null)
        }
      />
    </div>
  );
}
