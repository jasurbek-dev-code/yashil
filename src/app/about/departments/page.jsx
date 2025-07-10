import AboutDepartments from "@/components/About/AboutDepartments";

export const generateMetadata = () => ({
  title: "Bo‘limlar va yo‘nalishlar",
  description: "Yashil Loyiha instituti bo‘limlari – ekologik loyihalar va boshqa yo‘nalishlar haqida.",
  keywords: "institut departments, ekologik bo‘limlar, yashil loyiha struktura",
});


export default function DepartmentsPage() {
  return (
    <div>
      <AboutDepartments/>
    </div>
  );
}
