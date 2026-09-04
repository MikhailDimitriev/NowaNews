import type { ArticleStructureDTO } from "~/lib/api/types";
import NewsCategoryList from "~/components/Homepage/NewsCategoryList";
import type {CategoriesUnions} from "~/config/categoriesList";
import NewsCategorySectionHeader from "~/components/Homepage/NewsCategorySectionHeader";

const NewsCategorySection = ({articles, category}: {category: CategoriesUnions, articles: ArticleStructureDTO[]} ) => {
  return (
    <section className="dark-mode-bg-alt bg-white inline-padding py-4 xl:py-6">
      <NewsCategorySectionHeader category={category} />

      <NewsCategoryList articles={articles} />
    </section>
  );
};

export default NewsCategorySection;