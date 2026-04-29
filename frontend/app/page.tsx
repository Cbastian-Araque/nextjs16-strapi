import { getHomePage } from "@/lib/strapi";
import { HeroSection } from "@/components/hero-section";

// export const metadata = {
//   title: "Home",
//   description: "Página de inicio"
// }
export async function generateMetadata(){
  const strapiData = await getHomePage();
  return {
    title: strapiData?.Title,
    description: strapiData?.Description
  }
}

export default async function Home() {
  const strapiData = await getHomePage();
  const {Title, Description} = strapiData || {};
  const [heroSection] = strapiData?.sections || [];

  return (
    <main className="container mx-auto py-6">
      <HeroSection data={{...heroSection}} />
    </main>
  );
}
