import type {Article, Categories} from "~/entities/article";
import { NewsCategoryList } from "~/entities/category-news-section";
import {
  NewsCategorySectionHeader
} from "~/features/category-news-section-header";

const NewsCategorySection = ({articles, category}: {category: Categories, articles: Article[]} ) => {
  return (
    <section className="dark-mode-bg-alt bg-white inline-padding py-4 xl:py-6">
      <NewsCategorySectionHeader category={category} />

      <NewsCategoryList articles={articles} />
    </section>
  );
};

export default NewsCategorySection;