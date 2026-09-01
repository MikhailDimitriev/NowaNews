import { capitalizeFirstLetter } from "~/lib/utils/capitalizeFirstLetter";
import {Link} from "react-router";
import {imageDefinitionByCategory} from "~/lib/utils/imageDefinitionByCategory";
import type { ArticleStructureDTO } from "~/lib/api/types";
import type {CategoriesUnions} from "~/components/Homepage/types";
import NewsListByCategory from "~/components/Homepage/NewsListByCategory";

const NewsSectionByCategory = ({articles, category}: {category: CategoriesUnions, articles: ArticleStructureDTO[]} ) => {
  return (
    <section className="dark-mode-bg-alt bg-white inline-padding py-4 xl:py-6">
      <div className="flex items-center justify-between mb-2 xl:mb-4 font-semibold">
        <div className="flex gap-2 items-center">
          <img
            className="text-center h-7 w-7 xl:h-9 xl:w-9"
            src={imageDefinitionByCategory(category)}
            width="36"
            alt=""
          />
          <h2 className="text-[clamp(24px,1.6vw,30px)]">
            {category === 'ai' ? category.toUpperCase() : capitalizeFirstLetter(category)}
          </h2>
        </div>
        <Link
          className="hover:opacity-70"
          to={`/category=${category}`}
        >
          View all {'>'}
        </Link>
      </div>

      <NewsListByCategory
        articles={articles}
      />
    </section>
  );
};

export default NewsSectionByCategory;