import HeroSection from "@/components/(home)/hero-section";
import LatestWritings from "@/components/(home)/latest-posts";
import SocialLinks from "@/components/(home)/statistics";
import { retrieveContributionData } from "@/libs/github";

export default async function Home() {
  const githubActivities = await retrieveContributionData("aliosmandev");

  return (
    <div className="flex flex-col gap-y-16">
      <HeroSection />
      <SocialLinks githubActivities={githubActivities} />
      <LatestWritings />
    </div>
  );
}
