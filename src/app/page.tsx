import CategoryBadges from "@/components/Home/CategoryBadges";
import FeaturedDestinations from "@/components/Home/FeaturedDestinations";
import Hero from "@/components/Home/Hero";


export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryBadges />
      <FeaturedDestinations />
    </div>
  );
}
