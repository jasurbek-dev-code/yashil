"use client";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

interface Data {
  id: number;
  value: string;
  label: string;
}
interface FilterProps {
  data: Data[];
  label: string;
  queryKey: string;
  placeholder:string
  onChange: (queryKey: string, value: string) => void;
}

export function SelectFilter({
  data = [],
  queryKey,
  label,
  placeholder,
  onChange,
}: FilterProps) {
  const { t } = useTranslation();

  const options = data.map((item) => ({
    value: item.value,
    label: t(item.label),
  }));
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-white text-[20px]">{t(label)} :</h1>
      <Select
        options={options}
        placeholder={t(placeholder)}
        styles={{
          control: (base) => ({ ...base, width: "350px", height: "50px" }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "green" : "white",
            color: state.isFocused ? "white" : "black",
          }),
        }}
        onChange={(selected) => {
          onChange(queryKey, selected ? selected.value : "");
        }}
        isClearable
      />
    </div>
  );
}
