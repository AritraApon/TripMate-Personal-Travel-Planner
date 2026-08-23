import CategoryBadges from "@/components/Home/CategoryBadges";
import CategorySection from "@/components/Home/CategorySection";
import CtaBanner from "@/components/Home/CtaBanner";
import FeaturedDestinations from "@/components/Home/FeaturedDestinations";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryBadges />
      <FeaturedDestinations />
      <WhyChooseUs/>
      <CategorySection/>
      <Testimonials/>
      <CtaBanner/>
    </div>
  );
}
