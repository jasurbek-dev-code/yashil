import AboutSubOrganizations from "@/components/About/AboutSubOrganizations";

export const generateMetadata = () => ({
  title: "Hududiy filiallar",
  description: "Institut tarkibidagi korxonalar va subyektlar haqida batafsil ma’lumot.",
  keywords: "subsidiaries, sub organizations, green project tashkilotlari",
});

export default function SubOrganizationsPage() {
  return (
    <div>
      <AboutSubOrganizations />
    </div>
  );
}
