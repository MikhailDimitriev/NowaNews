import React from 'react';
import NewsCategoryCard
  from "~/components/Homepage/NewsCategoryCard";
import type {ArticleStructureDTO} from "~/lib/api/types";

const NewsCategoryList = ({ articles }: {articles: ArticleStructureDTO[]}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 2xl:gap-24">
      {articles.map((article) => (
        <NewsCategoryCard
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

export default NewsCategoryList;