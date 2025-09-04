import type { Route } from "./+types/index";
import Hero from "~/components/Hero";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev" },
    { name: "description", content: "Custom Development" },
  ];
}

export async function loader({ request }: Route.LoaderArgs):Promise<{projects:Project[]} > { 
  const res= await fetch("https://upgraded-space-succotash-gx46j6wvvw63wjgp-3000.app.github.dev/projects");
  const data= await res.json();
  return {projects:data};
}
const HomePage = ({loaderData}:Route.ComponentProps) => {
  const {projects}=loaderData 
  return <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
    </>
}
 
export default HomePage;