import Docs from "@/components/Docs/Docs";

export const generateMetadata = () => ({
  title: "Hujjatlar",
  description: "Institutga oid normativ hujjatlar, farmonlar, litsenziyalar va sertifikatlar.",
  keywords: "documents Uzbekistan, green project documentation, institut hujjatlari",
});

export default function DocsPage() {
    return (
        <div>
            <Docs />
        </div>
    );
}