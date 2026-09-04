import type { Route } from "./+types/home";
import HeroSection from "~/components/Homepage/HeroSection";
import CategoriesSections from "~/components/Homepage/CategoriesSections";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NowaNews" },
    { name: "description", content: "Here you can find all news around the world." },
  ];
}

export default function Home() {

  return (
    <>
      <main className="xl:mt-8 lg:mt-6 mt-4">
        <h1 className="visually-hidden">NowaNews</h1>
        <HeroSection />
        <CategoriesSections />
      </main>
    </>
  );
}