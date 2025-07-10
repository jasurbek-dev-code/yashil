import Vacancies from "@/components/About/AboutVacancies";

export const generateMetadata = () => ({
  title: "Bo‘sh ish o‘rinlari",
  description: "Yashil Loyiha institutida mavjud bo‘sh ish o‘rinlari. Ekologik sohada ishlash imkoniyatlari.",
  keywords: "green jobs Uzbekistan, environmental careers, yashil loyiha ish o‘rinlari",
});

export default function VacanciesPage() {
  return (
    <div>
      <Vacancies />
    </div>
  );
}