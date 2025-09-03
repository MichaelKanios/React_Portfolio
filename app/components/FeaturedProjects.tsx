type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

import ProjectCard from "./ProjectCard";

const FeaturedProjects = ({ projects, count }: FeaturedProjectsProps) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">✨ Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
