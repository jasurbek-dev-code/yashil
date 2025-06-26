"use client";

import Select from "react-select";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { value: "uz", label: "O‘zbekcha" },
  { value: "ru", label: "Русский" },
  { value: "en", label: "English" },
];

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <div className="w-28">
      <Select
        options={languageOptions}
        onChange={handleChange}
        value={languageOptions.find((opt) => opt.value === i18n.language)}
        className="react-select-container"
        classNamePrefix="react-select"
        isSearchable={false}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "transparent",
            border: "2px solid white",
            borderRadius: "0.375rem",
            minHeight: "40px",
            height: "40px",
            boxShadow: "none",
            "&:hover": { borderColor: "#14532d" },
            cursor: "pointer",
          }),
          singleValue: (base) => ({
            ...base,
            color: "#fff",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: "#fff",
            padding: "0 8px",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#1f2937",
            color: "#fff",
            zIndex: 20,
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? "#065f46"
              : isFocused
              ? "#374151"
              : "transparent",
            color: "#fff",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
}
