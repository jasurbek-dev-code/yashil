import PhotoReport from '@/components/News/PhotoReport';

export const generateMetadata = () => ({
  title: "Fotoreportaj",
  description: "Yashil Loyiha tadbirlaridan fotolavhalar va voqealar aks etgan suratlar.",
  keywords: "green project photos, photo report, Uzbekistan eco events",
});

export default function PhotoReportPage() {
  return (
    <div>
      <PhotoReport/>
    </div>
  );
}
