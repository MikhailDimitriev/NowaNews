import HomepageCategoryCard from "~/components/HomepageCategoryCard";
import { charCapitalize } from "~/utils/charCapitalize";
import type { ArticleStructure } from "../../types/global";
import {Link} from "react-router";
import {categoryChecker} from "~/utils/categoryChecker";

const CategoriesSection = ( {articles, category}: {category: 'ai' | 'business' | 'culture' | 'entertainment' | 'health', articles: ArticleStructure[]} ) => {
  return (
    <section className="bg-white inline-padding py-4 xl:py-6">
      <div className="flex items-center justify-between mb-2 xl:mb-4 font-semibold">
        <div className="flex gap-2 items-center">
          <img
            className="text-center h-7 w-7 xl:h-9 xl:w-9"
            src={categoryChecker(category)}
            width="36"
          />
          <h2 className="text-[clamp(24px,1.6vw,30px)]">
            {category === 'ai' ? category.toUpperCase() : charCapitalize(category)}
          </h2>
        </div>
        <Link
          className="hover:opacity-70"
          to={`/category=${category}`}
        >
          View all {'>'}
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 2xl:gap-24">
        {articles.map((article) => (
          <HomepageCategoryCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;