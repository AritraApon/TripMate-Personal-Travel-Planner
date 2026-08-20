import CategoryBadges from "@/components/layout/Home/CategoryBadges";
import FeaturedDestinations from "@/components/layout/Home/FeaturedDestinations";
import Hero from "@/components/layout/Home/Hero";


export default function Home() {
  return (
    <div>
     <Hero/>
     <CategoryBadges/>
     <FeaturedDestinations/>
    </div>
  );
}
