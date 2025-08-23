import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev" },
    { name: "description", content: "Custom Development" },
  ];
}

export default function Home() {
  return <section>
    <Hero/>
    </section>
}
