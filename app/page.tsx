import Hero from "@/components/home/Hero";
import TopDestinations from "@/components/home/TopDestinations";
import LatestStories from "@/components/home/LatestStories";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />
      <TopDestinations />
      <LatestStories />
      <Newsletter />
    </main>
  );
}
