import AboutLeadership from "@/components/About/AboutLeadership";

export const generateMetadata = () => ({
  title: "Rahbariyat",
  description: "Yashil Loyiha institutining rahbariyati va yetakchi mutaxassislar haqida ma'lumot.",
  keywords: "leadership green project, direktor, boshqaruv jamoasi, Uzbekistan leaders in environment",
});


export default function LeadershipPage() {
  return (
    <div>
      <AboutLeadership />
    </div>
  );
}
