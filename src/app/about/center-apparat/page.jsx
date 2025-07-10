import AboutCenterApparat from "@/components/About/AboutCenterApparat";

export const generateMetadata = () => ({
  title: "Markaziy apparat",
  description: "Yashil Loyiha institutining markaziy apparati haqida batafsil ma'lumot.",
  keywords: "central office green project, markaziy boshqaruv, institut apparati",
});


export default function CenterPage() {
    return (
        <div>
            <AboutCenterApparat />
        </div>
    );
}
