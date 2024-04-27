import ProjectsHeader from "@/components/(projects)/projects-header";
import ProjectsList from "@/components/(projects)/projects-list";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-y-16">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}
