import HeroSection from "@/components/hero-section";
import TrendingSection from "@/components/trending-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="trending">
        <TrendingSection />
      </div>
    </main>
  );
}
