import type { Route } from "./+types";
import { Link } from "react-router";
import type { PostMeta } from "~/types";

export async function loader({ request }: Route.LoaderArgs):Promise<{posts:PostMeta[]}> { 
    const url = new URL('/posts-meta.json',request.url);
    const res = await fetch(url.href);
    if(!res.ok) throw new Response("Failed to fetch posts meta");
    const data = await res.json ();
    return{posts:data}
}

    const BlogPage = ({loaderData}:Route.ComponentProps) => {
        const {posts} =loaderData;
    return ( <>
        <h2 >
            Blog
        </h2>
    </> );
}
 
export default BlogPage;
