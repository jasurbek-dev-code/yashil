import VideoReport from '@/components/News/VideoReport';

export const generateMetadata = () => ({
  title: "Videoreportaj",
  description: "Institut faoliyati, tadbirlar va yangiliklar haqidagi video lavhalar.",
  keywords: "video report, green project videos, Uzbekistan environment videos",
});

export default function VideoReportPage() {
  return (
    <div>
      <VideoReport/>
    </div>
  );
}
