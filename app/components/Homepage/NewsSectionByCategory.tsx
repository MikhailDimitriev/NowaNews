import type { ArticleStructureDTO } from "~/lib/api/types";
import NewsListByCategory from "~/components/Homepage/NewsListByCategory";
import type {CategoriesUnions} from "~/config/categoriesList";
import NewsSectionByCategoryHeader from "~/components/Homepage/NewsSectionByCategoryHeader";

const NewsSectionByCategory = ({articles, category}: {category: CategoriesUnions, articles: ArticleStructureDTO[]} ) => {
  return (
    <section className="dark-mode-bg-alt bg-white inline-padding py-4 xl:py-6">
      <NewsSectionByCategoryHeader category={category} />

      <NewsListByCategory articles={articles} />
    </section>
  );
};

export default NewsSectionByCategory;