import HeroSection from "@/components/(home)/hero-section";
import SocialLinks from "@/components/(home)/social-links";
import { retrieveContributionData } from "@/libs/github";

export default async function Home() {
  const githubActivities = await retrieveContributionData("osmandlsmn");

  return (
    <div className="flex flex-col gap-y-16">
      <HeroSection />
      <SocialLinks githubActivities={githubActivities} />
    </div>
  );
}
