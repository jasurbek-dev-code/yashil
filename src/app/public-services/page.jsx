import PublicServices from "@/components/PublicServices/PublicServices";

export const generateMetadata = () => ({
  title: "Davlat xizmatlari",
  description: "Yashil Loyiha instituti orqali taqdim etiladigan davlat xizmatlari haqida ma’lumot.",
  keywords: "public services Uzbekistan, davlat xizmatlari, green project service portal",
});

export default function PublicServicesPage() {
    return (
        <div>
            <PublicServices />
        </div>
    );
}