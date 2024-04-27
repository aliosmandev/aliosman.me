import BlogsSection from "@/components/(blogs)/blog-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Osman Delişmen - Posts",
  description:
    "Ali Osman Delişmen has been working on software development in Istanbul since 2019. While developing his frontend skills with open source projects, he continues to increase his expertise in DevOps in his free time.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-y-16">
      <BlogsSection />
    </div>
  );
}
