import React from 'react';
import {Link} from "react-router";
import {capitalizeFirstLetter} from "~/shared/lib/utils/capitalizeFirstLetter";
import type {Categories} from "~/entities/article";
import {
  imageDefinitionByCategory
} from "~/features/category-news-section-header/model/utils/imageDefinitionByCategory";

const NewsCategorySectionHeader = ({ category }: {category: Categories}) => {
  return (
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
  );
};

export default NewsCategorySectionHeader;