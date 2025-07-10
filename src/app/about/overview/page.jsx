import AboutOverview from '../../../components/About/AboutOverview'

export const generateMetadata = () => ({
  title: "Institut haqida umumiy ma’lumot | Yashil Loyiha",
  description: "Yashil Loyiha instituti haqida umumiy ma'lumot va yo‘nalishlar.",
  keywords: "yashil loyiha, institut haqida, green project overview, Uzbekistan",
});

export default function OverviewPage() {
  return (
    <div>
      <AboutOverview/>
    </div>
  );
}
