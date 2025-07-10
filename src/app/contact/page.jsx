import Contact from "@/components/Contact/Contact";

export const generateMetadata = () => ({
  title: "Aloqa",
  description: "Biz bilan bog‘lanish: Yashil Loyiha instituti manzil, telefon va aloqa shakli.",
  keywords: "contact green project, aloqa ma’lumotlari, institut manzili",
});

export default function ContactPage() {
  return (
    <div>
      <Contact/>
    </div>
  );
}
