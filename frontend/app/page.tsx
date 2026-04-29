import { getHomePage } from "@/lib/strapi";
import { HeroSection } from "@/components/hero-section";

export default async function Home() {
  const strapiData = await getHomePage();
  console.log(strapiData);
  const {Title, Description} = strapiData || {};
  const [heroSection] = strapiData?.sections || [];

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={{...heroSection}} />
    </main>
  );
}
