import AboutStructure from "@/components/About/AboutStructure";

export const generateMetadata = () => ({
  title: "Tashkiliy tuzilma",
  description: "Yashil Loyiha institutining tashkiliy tuzilmasi va boshqaruv sxemasi.",
  keywords: "organizational structure, institute structure, green project boshqaruv, yashil loyiha tuzilma",
});

export default function StructurePage() {
  return (
    <div>
      <AboutStructure />
    </div>
  );
}
