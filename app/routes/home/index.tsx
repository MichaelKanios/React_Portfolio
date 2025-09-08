import type { Route } from "./+types/index";
import Hero from "~/components/Hero";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types";
import AboutPreview from "~/components/AboutPreview";
import type { PostMeta } from "~/types";
import LatestPosts from "~/components/LatestPosts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev" },
    { name: "description", content: "Custom Development" },
  ];
}

export async function loader({ request }: Route.LoaderArgs):Promise<{projects:Project[]; posts:PostMeta[]} > { 

  const url = new URL (request.url);
  const [projectRes , postRes]= await Promise.all([
    fetch("https://upgraded-space-succotash-gx46j6wvvw63wjgp-3000.app.github.dev/projects"),
    fetch(new URL ("/posts-meta.json",url))
  ]);

  if(!projectRes.ok || !postRes.ok){
    throw new Error ('Failed to fetch ');
  }
const [projects ,posts ] = await Promise.all([
   projectRes.json(),
   postRes.json()
]);

  return {projects ,posts};
}
const HomePage = ({loaderData}:Route.ComponentProps) => {
  const {projects,posts}=loaderData 
  return <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} />
    </>
}
 
export default HomePage;