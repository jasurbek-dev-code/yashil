import NewsCards from '@/components/News/NewsCards';

export const generateMetadata = () => ({
  title: "Institut yangiliklari",
  description: "Yashil Loyiha instituti faoliyati bilan bog‘liq eng so‘nggi yangiliklar.",
  keywords: "green news Uzbekistan, institut yangiliklari, environmental updates",
});

export default function InstituteNewsPage() {
  return (
    <div>
      <NewsCards/>
    </div>
  );
}
