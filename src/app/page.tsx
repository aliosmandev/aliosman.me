import HeroSection from "@/components/(home)/hero-section";
import SocialLinks from "@/components/(home)/social-links";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-16">
      <HeroSection />
      <SocialLinks />
    </div>
  );
}
