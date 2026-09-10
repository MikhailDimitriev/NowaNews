import React from 'react';
import type {Article} from "~/entities/article";
import {NewsCategoryCard} from "~/entities/category-news-section";

const NewsCategoryList = ({ articles }: {articles: Article[]}) => {
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