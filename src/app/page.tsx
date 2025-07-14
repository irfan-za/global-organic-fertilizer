import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import FeaturedProductSection from "@/components/FeaturedProductSection";
import DemoProductSection from "@/components/DemoProductSection";
import GallerySection from "@/components/GallerySection";
import ButtonWA from "@/components/ButtonWA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FeaturedProductSection />
      <DemoProductSection />
      <GallerySection />
      <ButtonWA />
    </main>
  );
}
