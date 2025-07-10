import Services from "@/components/Services/Services";

export const generateMetadata = () => ({
  title: "Xizmatlar",
  description: "Yashil Loyiha instituti tomonidan ko‘rsatiladigan xizmatlar: loyiha ishlab chiqish, ekologik baholash va boshqalar.",
  keywords: "services green project, ekologik xizmatlar, Uzbekistan environmental services",
});

export default function ServicesPage() {
    return (
        <div>
            <Services />
        </div>
    );
}