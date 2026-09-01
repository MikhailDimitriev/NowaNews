import React from 'react';
import HomepageNewsCategoryCard
  from "~/components/Homepage/HomepageNewsCategoryCard";
import type {ArticleStructureDTO} from "~/lib/api/types";

const NewsListByCategory = ({ articles }: {articles: ArticleStructureDTO[]}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 2xl:gap-24">
      {articles.map((article) => (
        <HomepageNewsCategoryCard
          key={article.id}
          src={article.src}
          imageUrl={article.imageUrl}
          title={article.title}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  );
};

export default NewsListByCategory;