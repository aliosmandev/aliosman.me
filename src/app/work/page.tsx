import WorkHeader from "@/components/(work)/work-header";
import WorkList from "@/components/(work)/work-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Osman Delişmen - Work",
  description:
    "Discover the diverse range of professional experiences that have shaped my career.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-y-16">
      <WorkHeader />
      <WorkList />
    </div>
  );
}
