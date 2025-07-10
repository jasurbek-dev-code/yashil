import Info from "@/components/Info/Info";

export const generateMetadata = () => ({
  title: "Foydali ma’lumotlar",
  description: "Atrof-muhit, qonunchilik, ekologik masalalar bo‘yicha foydali ma’lumotlar.",
  keywords: "environment info, ecological knowledge, foydali ma’lumotlar",
});

export default function InfoPage() {
    return (
        <div>
            <Info />
        </div>
    );
}