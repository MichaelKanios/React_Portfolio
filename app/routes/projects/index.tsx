import ProjectCard from "~/components/ProjectCard";
import type {Route} from "./+types/index"
import type {Project} from "~/types"
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";


export async function loader ({request}:Route.LoaderArgs):Promise<{projects:Project[]}>{
    const res = await fetch ("http://localhost:3000/projects");
    const data = await res.json();
    return {projects:data}

}
const ProjectsPage = ({loaderData}:Route.ComponentProps) => {  

    //Pagination and filter starts
    const[selectedCategory,setSelectedCategory]=useState("All");

    const [currentPage,setCurrentPage]=useState(1);
    const projectsPerPage=4;

    const {projects }= loaderData as {projects :Project []};

    //Get unique categories
    const categories = ["All",...new Set(projects.map((project)=>project.category))];
    
    //filter projects based on a category
    const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

    //calculate the total pages
    const totalPages=Math.ceil(filteredProjects.length/projectsPerPage)

    //get current pages projects
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

   
   return ( <>
        <h2 className="text-3xl text-white font-bold">
            Projects
        </h2>
        {/* Category filter buttons moved to top, below title */}
        <div className="flex flex-wrap gap-2 mb-8">
            {categories.map ((category)=>(<button key={category} 
            className={`px-4 py-2 rounded 
            ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`} 
            onClick={() => setSelectedCategory(category)}>{category}</button>))}
        </div>
        <AnimatePresence mode='wait'>
            <motion.div layout className="grid gap-6 sm:grid-cols-2">
            {currentProjects.map((project)=>(
                <motion.div key={project.id} layout>
                    <ProjectCard project={project}/>
                </motion.div>
            ))}
        </motion.div>
        </AnimatePresence>
       <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
        </>
    );
}
 
export default ProjectsPage;