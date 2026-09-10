
import { CategoriesSectionsList } from "~/widgets/categories-sections";
import HeroSection from "~/widgets/hero-section";
import type {Route} from "../../.react-router/types/src/app/+types/root";

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
        <CategoriesSectionsList />
      </main>
    </>
  );
}